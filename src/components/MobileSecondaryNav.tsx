interface MobileSecondaryNavProps {
  label: string
  variant?: 'default' | 'hover' | 'selected'
  onClick?: () => void
  className?: string
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M8 5l5 5-5 5" stroke="#003a70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function MobileSecondaryNav({
  label,
  variant = 'default',
  onClick,
  className = '',
}: MobileSecondaryNavProps) {
  const bgClass =
    variant === 'hover'
      ? 'bg-[#e9f3fb]'
      : variant === 'selected'
        ? 'bg-[#fbfbfb] border-b-4 border-[#105fa6]'
        : 'bg-[#fbfbfb]'

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
      className={`flex items-center gap-[10px] justify-center w-[375px] p-4 ${bgClass} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <span
        className="flex-1 text-[#444444] font-semibold"
        style={{ fontSize: 18, lineHeight: '24px', fontFamily: 'var(--font-family-body, sans-serif)' }}
      >
        {label}
      </span>
      <ChevronRight />
    </div>
  )
}
