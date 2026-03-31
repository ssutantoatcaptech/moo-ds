interface MobileHeaderCloseProps {
  onClose?: () => void
  className?: string
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 5l10 10M15 5L5 15" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function MobileHeaderClose({ onClose, className = '' }: MobileHeaderCloseProps) {
  return (
    <div
      className={`flex items-center w-[375px] p-4 bg-white border-b border-[#f0f0f0] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] ${className}`}
    >
      <button
        onClick={onClose}
        aria-label="Close navigation"
        className="flex items-center justify-center w-5 h-5"
      >
        <CloseIcon />
      </button>
    </div>
  )
}
