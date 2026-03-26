import { useState } from 'react'
import Avatar from './Avatar'

// Icons as inline SVG components for the utility links
function IdCardIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.75" y="0.75" width="18.5" height="14.5" rx="1.25" stroke="#444" strokeWidth="1.5" />
      <circle cx="7" cy="6.5" r="2" stroke="#444" strokeWidth="1.25" />
      <path d="M3.5 13C3.5 11.067 5.067 9.5 7 9.5C8.933 9.5 10.5 11.067 10.5 13" stroke="#444" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="12.5" y1="5.5" x2="16.5" y2="5.5" stroke="#444" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="12.5" y1="8.5" x2="16.5" y2="8.5" stroke="#444" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

function EnvelopeIcon() {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.75" y="0.75" width="18.5" height="13.5" rx="1.25" stroke="#444" strokeWidth="1.5" />
      <path d="M1 1L10 8L19 1" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17C7 18.1046 7.89543 19 9 19C10.1046 19 11 18.1046 11 17" stroke="#444" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 1C9 1 9 1 9 1C5.68629 1 3 3.68629 3 7V11L1 14H17L15 11V7C15 3.68629 12.3137 1 9 1Z" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export type NavTab = 'dashboard' | 'coverages' | 'claims' | 'leave' | 'support'

interface GlobalNavigationProps {
  activeTab?: NavTab
  onTabChange?: (tab: NavTab) => void
  onBack?: () => void
  userName?: string
  userImage?: string
}

const navTabs: { id: NavTab; label: string }[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'coverages', label: 'My Coverages' },
  { id: 'claims', label: 'Claims' },
  { id: 'leave', label: 'Leave' },
  { id: 'support', label: 'Support' },
]

export default function GlobalNavigation({
  activeTab = 'dashboard',
  onTabChange,
  onBack,
  userName = 'Sarah Johnson',
  userImage,
}: GlobalNavigationProps) {
  const [currentTab, setCurrentTab] = useState<NavTab>(activeTab)

  const handleTabClick = (tab: NavTab) => {
    setCurrentTab(tab)
    onTabChange?.(tab)
  }

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-neutral-200 w-full">
      {/* Left: Back + Logo + Nav Tabs */}
      <div className="flex items-center gap-8">
        {onBack && (
          <button
            onClick={onBack}
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1"
          >
            <span>←</span>
            <span>Back</span>
          </button>
        )}
        <span className="text-lg text-[#105fa8] font-normal whitespace-nowrap">
          MyBenefits Hub
        </span>

        <div className="flex items-center gap-1">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`
                px-3 py-2 rounded text-sm whitespace-nowrap transition-colors
                ${currentTab === tab.id
                  ? 'bg-[#eceff2] text-neutral-900 font-normal'
                  : 'text-neutral-900 hover:bg-neutral-100 font-normal'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right: Utility Links */}
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
          <IdCardIcon />
          <span>Find ID Card</span>
        </button>

        <button className="flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
          <EnvelopeIcon />
          <span>Messages</span>
        </button>

        <button className="p-0.5 text-neutral-700 hover:text-neutral-900 transition-colors">
          <BellIcon />
        </button>

        <div className="flex items-center gap-3">
          <Avatar name={userName} image={userImage} size={32} />
          <span className="text-sm text-[#105fa8]">{userName}</span>
        </div>
      </div>
    </nav>
  )
}
