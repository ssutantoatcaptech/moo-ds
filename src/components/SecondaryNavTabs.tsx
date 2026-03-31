interface SecondaryNavTabsProps {
  label: string
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export default function SecondaryNavTabs({
  label,
  isActive = false,
  onClick,
  className,
}: SecondaryNavTabsProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-3 py-3 text-sm font-semibold transition-colors
        ${isActive
          ? 'text-[#5d5d5d] border-b-[3px] border-[#105fa8] pb-[15px] pt-3'
          : 'text-[#5d5d5d] hover:bg-[#e9f3fb]'}
        ${className || ''}`}
    >
      {label}
    </button>
  )
}
