import { type ReactNode } from 'react'

type MobilePrimaryNavVariant = 'default' | 'hover' | 'clicked'

interface MobilePrimaryNavProps {
  label: string
  variant?: MobilePrimaryNavVariant
  showChevron?: boolean
  expanded?: boolean
  onClick?: () => void
  icon?: ReactNode
  className?: string
}

function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 8l5 5 5-5" stroke="#003a70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronUp() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 12l5-5 5 5" stroke="#003a70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function MobilePrimaryNav({
  label,
  variant = 'default',
  showChevron = true,
  expanded = false,
  onClick,
  className = '',
}: MobilePrimaryNavProps) {
  const bgClass =
    variant === 'hover'
      ? 'bg-[#e9f3fb]'
      : variant === 'clicked'
        ? 'bg-white border-b-4 border-[#105fa6]'
        : ''

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
      className={`flex items-center gap-[10px] justify-center w-[375px] px-4 py-[18px] ${bgClass} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <span
        className="flex-1 text-[#003a70] font-semibold"
        style={{ fontSize: 20, lineHeight: '24px', fontFamily: 'var(--font-family-title, sans-serif)' }}
      >
        {label}
      </span>
      {showChevron && (expanded ? <ChevronUp /> : <ChevronDown />)}
    </div>
  )
}
