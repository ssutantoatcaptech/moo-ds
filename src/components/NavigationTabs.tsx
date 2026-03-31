export type NavTabId = 'dashboard' | 'coverages' | 'claims' | 'leave' | 'support'

interface NavigationTabsProps {
  label: string
  isActive?: boolean
  showChevron?: boolean
  onClick?: () => void
  className?: string
}

export default function NavigationTabs({
  label,
  isActive = false,
  showChevron = false,
  onClick,
  className,
}: NavigationTabsProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2.5 rounded text-sm font-semibold whitespace-nowrap transition-colors
        ${isActive ? 'bg-[#e9f3fb] text-[#222]' : 'text-[#222] hover:bg-[#e9f3fb]'}
        ${className || ''}`}
    >
      {label}
      {showChevron && (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="#105fa8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}
