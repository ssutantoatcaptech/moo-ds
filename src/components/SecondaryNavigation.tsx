import SecondaryNavTabs from './SecondaryNavTabs'

interface SecondaryNavigationProps {
  links: { label: string; id: string }[]
  activeId?: string
  onLinkChange?: (id: string) => void
  className?: string
}

export default function SecondaryNavigation({
  links,
  activeId,
  onLinkChange,
  className,
}: SecondaryNavigationProps) {
  return (
    <div className={`flex items-center gap-0 px-6 bg-white border-b border-[#f0f0f0] w-full ${className || ''}`}>
      {links.map((link) => (
        <SecondaryNavTabs
          key={link.id}
          label={link.label}
          isActive={activeId === link.id}
          onClick={() => onLinkChange?.(link.id)}
        />
      ))}
    </div>
  )
}
