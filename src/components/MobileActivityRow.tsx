type Variant = 'information' | 'pending' | 'success' | 'needsAttention'

interface MobileActivityRowProps {
  variant?: Variant
  title: string
  description: string
  date: string
  onClick?: () => void
  className?: string
}

const statusColors: Record<Variant, string> = {
  information: '#067ac1',
  pending: '#fcbc0b',
  success: '#1fa668',
  needsAttention: '#c12506',
}

const statusIcons: Record<Variant, string> = {
  information: '\u2139',
  pending: '\ud83d\udccb',
  success: '\u2713',
  needsAttention: '\u0021',
}

export default function MobileActivityRow({
  variant = 'information',
  title,
  description,
  date,
  onClick,
  className = '',
}: MobileActivityRowProps) {
  const color = statusColors[variant]

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
      className={`flex items-center gap-3 w-[343px] px-4 py-[17px] bg-white border-y border-[#f0f0f0] ${onClick ? 'cursor-pointer hover:bg-[#f5f5f5]' : ''} ${className}`}
    >
      {/* Status icon */}
      <div
        className="shrink-0 flex items-center justify-center rounded-full w-9 h-9"
        style={{ backgroundColor: color }}
      >
        <span className="text-white text-sm font-semibold">{statusIcons[variant]}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div
          className="font-semibold text-[#222222]"
          style={{ fontSize: 16, lineHeight: '24px', fontFamily: 'var(--font-family-title, sans-serif)' }}
        >
          {title}
        </div>
        <div
          className="text-[#222222]"
          style={{ fontSize: 14, lineHeight: '20px', fontFamily: 'var(--font-family-body, sans-serif)' }}
        >
          {description}
        </div>
        <div
          className="text-[#838383]"
          style={{ fontSize: 14, lineHeight: '20px', fontFamily: 'var(--font-family-body, sans-serif)' }}
        >
          {date}
        </div>
      </div>

      {/* Chevron */}
      <div className="shrink-0 text-[#5d5d5d]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7.5 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}
