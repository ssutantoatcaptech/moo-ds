import { useState, useEffect, useRef, useCallback } from 'react'

export interface Comment {
  id: number
  screen: string
  author: string
  text: string
  x_pct: number
  y_pct: number
  resolved: number
  created_at: string
}

interface Props {
  screen: string
  commentMode: boolean
  authorName: string
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}

function authorInitials(name: string) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

function authorColor(name: string) {
  const colors = ['#1a1a1a', '#374151', '#1e3a5f', '#374151', '#1a3a2a', '#3a1a1a']
  let hash = 0
  for (const c of name) hash = c.charCodeAt(0) + ((hash << 5) - hash)
  return colors[Math.abs(hash) % colors.length]
}

export default function CommentOverlay({ screen, commentMode, authorName }: Props) {
  const [comments, setComments] = useState<Comment[]>([])
  const [pending, setPending] = useState<{ x: number; y: number } | null>(null)
  const [draftText, setDraftText] = useState('')
  const [activeId, setActiveId] = useState<number | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const load = useCallback(() => {
    fetch(`http://localhost:3001/api/comments?screen=${screen}`)
      .then(r => r.json())
      .then(setComments)
      .catch(() => {})
  }, [screen])

  useEffect(() => { load() }, [load])

  // Poll for new comments every 10s so other stakeholders' comments appear live
  useEffect(() => {
    const t = setInterval(load, 10000)
    return () => clearInterval(t)
  }, [load])

  // Focus textarea when pending pin placed
  useEffect(() => {
    if (pending) setTimeout(() => textareaRef.current?.focus(), 50)
  }, [pending])

  // Close popover on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setPending(null); setDraftText(''); setActiveId(null) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!commentMode) return
    if (!containerRef.current) return
    // Ignore clicks on existing pins or popovers
    if ((e.target as HTMLElement).closest('[data-comment-pin]')) return
    if ((e.target as HTMLElement).closest('[data-comment-popover]')) return

    const rect = containerRef.current.getBoundingClientRect()
    const x_pct = ((e.clientX - rect.left) / rect.width) * 100
    const y_pct = ((e.clientY - rect.top) / rect.height) * 100
    setActiveId(null)
    setPending({ x: x_pct, y: y_pct })
    setDraftText('')
  }

  const submitComment = async () => {
    if (!draftText.trim() || !pending || !authorName.trim()) return
    setSubmitting(true)
    try {
      const res = await fetch('http://localhost:3001/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ screen, author: authorName, text: draftText, x_pct: pending.x, y_pct: pending.y }),
      })
      const newComment: Comment = await res.json()
      setComments(c => [...c, newComment])
      setPending(null)
      setDraftText('')
      setActiveId(newComment.id)
    } finally {
      setSubmitting(false)
    }
  }

  const toggleResolve = async (id: number) => {
    const res = await fetch(`http://localhost:3001/api/comments/${id}/resolve`, { method: 'PATCH' })
    const updated: Comment = await res.json()
    setComments(c => c.map(x => x.id === id ? updated : x))
  }

  const deleteComment = async (id: number) => {
    await fetch(`http://localhost:3001/api/comments/${id}`, { method: 'DELETE' })
    setComments(c => c.filter(x => x.id !== id))
    if (activeId === id) setActiveId(null)
  }

  const visibleComments = comments.filter(c => !c.resolved)
  const resolvedComments = comments.filter(c => c.resolved)

  // Number map: only count unresolved for the pin number
  const pinNumber = (comment: Comment) =>
    visibleComments.findIndex(c => c.id === comment.id) + 1

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{
        // When comment mode is off, let all clicks pass through to the prototype
        // Pins below use pointer-events: auto to stay individually clickable
        pointerEvents: commentMode ? 'auto' : 'none',
        cursor: commentMode ? 'crosshair' : 'default',
        zIndex: 10,
      }}
      onClick={handleContainerClick}
    >
      {/* Existing comment pins */}
      {comments.map(comment => {
        const num = comment.resolved ? '✓' : pinNumber(comment)
        const isActive = activeId === comment.id
        return (
          <div
            key={comment.id}
            data-comment-pin
            className="animate-pin-drop"
            style={{ position: 'absolute', left: `${comment.x_pct}%`, top: `${comment.y_pct}%`, zIndex: 20, pointerEvents: 'auto' }}
          >
            {/* Pin */}
            <button
              onClick={e => { e.stopPropagation(); setActiveId(isActive ? null : comment.id); setPending(null) }}
              className="flex items-center justify-center w-7 h-7 rounded-full text-white text-[11px] font-bold shadow-lg border-2 border-white transition-transform hover:scale-110 -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: comment.resolved ? '#6b7280' : authorColor(comment.author) }}
              title={`${comment.author}: ${comment.text}`}
            >
              {num}
            </button>

            {/* Thread popover */}
            {isActive && (
              <div
                data-comment-popover
                onClick={e => e.stopPropagation()}
                className="absolute z-30 bg-white border border-gray-200 rounded-lg shadow-xl w-64"
                style={{ left: comment.x_pct > 60 ? 'auto' : '28px', right: comment.x_pct > 60 ? '28px' : 'auto', top: comment.y_pct > 70 ? 'auto' : '0', bottom: comment.y_pct > 70 ? '28px' : 'auto' }}
              >
                <div className="p-3">
                  {/* Author row */}
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                      style={{ backgroundColor: authorColor(comment.author) }}
                    >
                      {authorInitials(comment.author)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-semibold text-gray-900 truncate">{comment.author}</p>
                      <p className="text-[11px] text-gray-400">{timeAgo(comment.created_at)}</p>
                    </div>
                    <button
                      onClick={() => setActiveId(null)}
                      className="text-gray-400 hover:text-gray-600 text-[16px] leading-none"
                    >×</button>
                  </div>

                  {/* Comment text */}
                  <p className="text-[13px] text-gray-800 leading-snug mb-3">{comment.text}</p>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2 border-t border-gray-100">
                    <button
                      onClick={() => toggleResolve(comment.id)}
                      className={`flex items-center gap-1 text-[11px] px-2 py-1 rounded border transition-colors ${comment.resolved ? 'border-gray-300 text-gray-500 hover:bg-gray-50' : 'border-green-500 text-green-700 hover:bg-green-50'}`}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      {comment.resolved ? 'Reopen' : 'Resolve'}
                    </button>
                    <button
                      onClick={() => deleteComment(comment.id)}
                      className="flex items-center gap-1 text-[11px] px-2 py-1 rounded border border-red-200 text-red-500 hover:bg-red-50 transition-colors ml-auto"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
                      Delete
                    </button>
                  </div>

                  {comment.resolved && (
                    <p className="text-[10px] text-gray-400 mt-2 text-center">This comment is resolved</p>
                  )}
                </div>
              </div>
            )}
          </div>
        )
      })}

      {/* Pending pin + input popover */}
      {pending && (
        <div
          data-comment-pin
          style={{ position: 'absolute', left: `${pending.x}%`, top: `${pending.y}%`, zIndex: 30 }}
        >
          <div
            className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white text-[11px] font-bold shadow-lg border-2 border-white -translate-x-1/2 -translate-y-1/2"
          >
            {visibleComments.length + 1}
          </div>

          <div
            data-comment-popover
            onClick={e => e.stopPropagation()}
            className="absolute z-30 bg-white border border-gray-200 rounded-lg shadow-xl w-64"
            style={{ left: pending.x > 60 ? 'auto' : '28px', right: pending.x > 60 ? '28px' : 'auto', top: pending.y > 70 ? 'auto' : '0', bottom: pending.y > 70 ? '28px' : 'auto' }}
          >
            <div className="p-3 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                  style={{ backgroundColor: authorColor(authorName || 'User') }}
                >
                  {authorInitials(authorName || 'U')}
                </div>
                <span className="text-[12px] font-semibold text-gray-800">{authorName || 'Anonymous'}</span>
              </div>
              <textarea
                ref={textareaRef}
                value={draftText}
                onChange={e => setDraftText(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) submitComment() }}
                placeholder="Leave a comment…"
                rows={3}
                className="w-full border border-gray-300 rounded px-2 py-1.5 text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-700 resize-none"
              />
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-400">⌘↵ to submit</span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => { setPending(null); setDraftText('') }}
                    className="px-2.5 py-1 text-[12px] border border-gray-300 rounded text-gray-600 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={submitComment}
                    disabled={!draftText.trim() || submitting}
                    className="px-2.5 py-1 text-[12px] bg-black text-white rounded hover:bg-gray-800 disabled:opacity-40 transition-colors"
                  >
                    {submitting ? '…' : 'Post'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resolved badge */}
      {resolvedComments.length > 0 && (
        <div className="absolute bottom-2 right-2 bg-gray-100 border border-gray-200 rounded-full px-2 py-0.5 text-[10px] text-gray-500 pointer-events-none">
          {resolvedComments.length} resolved
        </div>
      )}
    </div>
  )
}
