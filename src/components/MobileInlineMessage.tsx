import { type ReactNode, useState } from 'react'

type Variant = 'Success' | 'Error' | 'Warning' | 'Information'

interface MobileInlineMessageProps {
  variant?: Variant
  title: string
  children: ReactNode
  showLink?: boolean
  linkLabel?: string
  linkHref?: string
  onLinkClick?: () => void
  showX?: boolean
  onDismiss?: () => void
  className?: string
}

const config: Record<Variant, { stripe: string; bg: string; border: string; icon: string }> = {
  Success:     { stripe: '#1fa668', bg: '#edf8f3', border: '#1fa668', icon: '✓' },
  Error:       { stripe: '#c12506', bg: '#fdf4f2', border: '#c12506', icon: '!' },
  Warning:     { stripe: '#df6903', bg: '#fef8eb', border: '#df6903', icon: '⚠' },
  Information: { stripe: '#067ac1', bg: '#f2f8fe', border: '#067ac1', icon: 'ℹ' },
}

export default function MobileInlineMessage({
  variant = 'Success',
  title,
  children,
  showLink = true,
  linkLabel = 'Link here',
  linkHref,
  onLinkClick,
  showX = true,
  onDismiss,
  className = '',
}: MobileInlineMessageProps) {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null
  const { stripe, bg, border, icon } = config[variant]

  function handleDismiss() {
    setDismissed(true)
    onDismiss?.()
  }

  return (
    <div className={`flex items-start w-[343px] ${className}`}>
      {/* Colored stripe with icon */}
      <div
        className="shrink-0 self-stretch flex items-center justify-center rounded-l-xl px-[6px] py-1"
        style={{ backgroundColor: stripe }}
      >
        <span className="text-white text-lg font-bold">{icon}</span>
      </div>

      {/* Content area */}
      <div
        className="flex-1 p-4 border border-l-0 rounded-r-xl"
        style={{ backgroundColor: bg, borderColor: border }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <div
              className="font-semibold text-[#444]"
              style={{ fontSize: 14, lineHeight: '20px', fontFamily: 'var(--font-family-title, sans-serif)' }}
            >
              {title}
            </div>
            <div
              className="text-[#444]"
              style={{ fontSize: 14, lineHeight: '20px', fontFamily: 'var(--font-family-body, sans-serif)' }}
            >
              {children}
            </div>
            {showLink && (
              <a
                href={linkHref || '#'}
                onClick={onLinkClick ? (e) => { e.preventDefault(); onLinkClick() } : undefined}
                className="flex items-center gap-1 text-[#105fa8] underline"
                style={{ fontSize: 14, lineHeight: '20px', fontFamily: 'var(--font-family-body, sans-serif)' }}
              >
                {linkLabel}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#105fa8" strokeWidth="1.2" />
                  <path d="M6.5 5l3 3-3 3" stroke="#105fa8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>
          {showX && (
            <button
              onClick={handleDismiss}
              className="text-[#444] opacity-60 hover:opacity-100 text-lg shrink-0 leading-none"
              aria-label="Dismiss"
            >
              &times;
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
