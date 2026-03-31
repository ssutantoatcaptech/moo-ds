interface TabItem {
  id: string
  label: string
}

interface TabsHeaderProps {
  tabs: TabItem[]
  activeTab?: string
  onTabChange?: (tabId: string) => void
  className?: string
}

export default function TabsHeader({ tabs, activeTab, onTabChange, className = '' }: TabsHeaderProps) {
  return (
    <div className={`flex items-center gap-5 h-11 border-b border-[#e0e0e0] ${className}`}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange?.(tab.id)}
            className={`h-full px-6 text-sm font-medium transition-colors border-b-[3px] -mb-px ${
              isActive
                ? 'text-[#105fa8] border-[#105fa8]'
                : 'text-[#5d5d5d] border-transparent hover:text-[#333333] hover:border-[#bababa]'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
