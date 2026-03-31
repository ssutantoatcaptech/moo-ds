interface MobileNavigationBackProps {
  label?: string
  onBack?: () => void
  className?: string
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12 5l-5 5 5 5" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function MobileNavigationBack({ label = 'Back', onBack, className = '' }: MobileNavigationBackProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onBack}
      onKeyDown={(e) => {
        if (onBack && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onBack()
        }
      }}
      className={`flex items-center gap-2 w-[375px] p-4 bg-[#fbfbfb] border-b border-[#f0f0f0] cursor-pointer ${className}`}
    >
      <ChevronLeft />
      <span
        className="text-[#222222] font-semibold"
        style={{ fontSize: 20, lineHeight: '24px', fontFamily: 'var(--font-family-title, sans-serif)' }}
      >
        {label}
      </span>
    </div>
  )
}
