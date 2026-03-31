import { type ReactNode, useState } from 'react'

type SidebarRowVariant = 'default' | 'last' | 'dropdown'

interface SidebarRowProps {
  label: string
  variant?: SidebarRowVariant
  icon?: ReactNode
  onClick?: () => void
  children?: ReactNode
  className?: string
}

function CircleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#e8f0fe" />
      <circle cx="16" cy="16" r="6" fill="#105fa8" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M8 5l5 5-5 5" stroke="#5d5d5d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronDown({ expanded }: { expanded: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={`transition-transform ${expanded ? 'rotate-180' : ''}`}>
      <path d="M5 8l5 5 5-5" stroke="#5d5d5d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function SidebarRow({ label, variant = 'default', icon, onClick, children, className = '' }: SidebarRowProps) {
  const [expanded, setExpanded] = useState(false)
  const isLast = variant === 'last'
  const isDropdown = variant === 'dropdown'

  const roundedBottom = isLast ? 'rounded-b-lg' : ''
  const borderBottom = isLast ? '' : 'border-b border-b-[#e0e0e0]'

  if (isDropdown) {
    return (
      <div className={`${borderBottom} ${className}`}>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center gap-3 px-5 py-3 hover:bg-[#f5f5f5] transition-colors ${isLast ? roundedBottom : ''}`}
        >
          {icon || <CircleIcon />}
          <span className="flex-1 text-left text-sm text-[#333333]">{label}</span>
          <ChevronDown expanded={expanded} />
        </button>
        {expanded && children && (
          <div className="px-5 pb-3">
            {children}
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
      className={`flex items-center gap-3 px-5 py-3 ${borderBottom} ${roundedBottom} ${onClick ? 'cursor-pointer hover:bg-[#f5f5f5]' : ''} transition-colors ${className}`}
    >
      {icon || <CircleIcon />}
      <span className="flex-1 text-sm text-[#333333]">{label}</span>
      <ChevronRight />
    </div>
  )
}
