import SidebarHeader from './SidebarHeader'
import SidebarRow from './SidebarRow'

interface QuickActionItem {
  id: string
  label: string
  onClick?: () => void
}

interface QuickActionsProps {
  title?: string
  description?: string
  items: QuickActionItem[]
  className?: string
}

export default function QuickActions({ title = 'Quick Actions', description, items, className = '' }: QuickActionsProps) {
  return (
    <div className={`w-[394px] bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <SidebarHeader title={title} description={description} />
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
