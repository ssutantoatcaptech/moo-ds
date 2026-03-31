import { type ReactNode } from 'react'

interface ActivityItem {
  id: string
  title: string
  description: string
  date: string
  onClick?: () => void
}

interface RecentActivityMobileProps {
  activities?: ActivityItem[]
  onViewAll?: () => void
  onViewBenefits?: () => void
  className?: string
}

function BlueCircleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#067ac1" />
      <path d="M14 20h12M20 14v12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M8 5l5 5-5 5" stroke="#5d5d5d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function EmptyState({ onViewBenefits }: { onViewBenefits?: () => void }) {
  return (
    <div className="flex flex-col items-center py-8 px-4 gap-4">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#067ac1] to-[#003a70] flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 16h16M16 8v16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <p className="text-sm text-[#5d5d5d] text-center">No Recent Activity</p>
      {onViewBenefits && (
        <button
          onClick={onViewBenefits}
          className="px-6 py-2 bg-[#105fa8] text-white text-sm font-semibold rounded hover:bg-[#003a70] transition-colors"
        >
          View Your Benefits
        </button>
      )}
    </div>
  )
}

export default function RecentActivityMobile({ activities = [], onViewAll, onViewBenefits, className = '' }: RecentActivityMobileProps) {
  const hasActivities = activities.length > 0

  return (
    <div className={`bg-white rounded-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e0e0e0]">
        <h3 className="text-base font-semibold text-[#003a70]">Recent activity</h3>
        {hasActivities && onViewAll && (
          <button onClick={onViewAll} className="text-sm text-[#105fa8] font-semibold hover:underline">
            View all
          </button>
        )}
      </div>

      {/* Content */}
      {hasActivities ? (
        <div>
          {activities.map((item) => (
            <div
              key={item.id}
              role={item.onClick ? 'button' : undefined}
              tabIndex={item.onClick ? 0 : undefined}
              onClick={item.onClick}
              onKeyDown={(e) => {
                if (item.onClick && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault()
                  item.onClick()
                }
              }}
              className={`flex items-center gap-3 px-4 py-3 border-b border-[#f0f0f0] last:border-b-0 ${item.onClick ? 'cursor-pointer hover:bg-[#f5f5f5]' : ''}`}
            >
              <BlueCircleIcon />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-[#333333] truncate">{item.title}</div>
                <div className="text-xs text-[#5d5d5d] truncate">{item.description}</div>
                <div className="text-xs text-[#888888]">{item.date}</div>
              </div>
              <ChevronRight />
            </div>
          ))}
        </div>
      ) : (
        <EmptyState onViewBenefits={onViewBenefits} />
      )}
    </div>
  )
}
