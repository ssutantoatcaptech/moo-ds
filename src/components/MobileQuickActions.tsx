import SidebarRow from './SidebarRow'

interface QuickActionItem {
  id: string
  label: string
  onClick?: () => void
}

interface MobileQuickActionsProps {
  title?: string
  items: QuickActionItem[]
  className?: string
}

export default function MobileQuickActions({ title = 'Quick Actions', items, className = '' }: MobileQuickActionsProps) {
  return (
    <div className={`w-[343px] bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="border-t-[12px] border-t-[#105fa8] px-4 py-3">
        <h3 className="text-lg font-semibold text-[#003a70]">{title}</h3>
      </div>
      <div>
        {items.map((item, i) => (
          <SidebarRow
            key={item.id}
            label={item.label}
            variant={i === items.length - 1 ? 'last' : 'default'}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  )
}
