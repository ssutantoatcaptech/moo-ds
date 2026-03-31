import { useState } from 'react'
import MainNavigation from './MainNavigation'
import SecondaryNavigation from './SecondaryNavigation'
import { type NavTabId } from './NavigationTabs'

export type { NavTabId as NavTab }

type PageVariant = 'default' | 'claims' | 'support' | 'coverages' | 'coveragesHover' | 'dental' | 'leave'

const secondaryLinks: Record<string, { label: string; id: string }[]> = {
  dental: [
    { id: 'dental-coverage', label: 'Dental Coverage' },
    { id: 'claims-estimates', label: 'Claims & Estimates' },
    { id: 'find-dentist', label: 'Find a Dentist' },
    { id: 'documents', label: 'Documents' },
  ],
  leave: [
    { id: 'overview', label: 'Overview' },
    { id: 'request', label: 'Request New Leave' },
    { id: 'my-leaves', label: 'My Leaves' },
    { id: 'docs-payments', label: 'Documents & Payments' },
    { id: 'resources', label: 'Resources' },
  ],
}

interface GlobalNavigationProps {
  variant?: PageVariant
  activeTab?: NavTabId
  onTabChange?: (tab: NavTabId) => void
  userName?: string
  userImage?: string
  showNotifications?: boolean
  className?: string
}

export default function GlobalNavigation({
  variant = 'default',
  activeTab,
  onTabChange,
  userName = 'Sarah Johnson',
  userImage,
  showNotifications = true,
  className,
}: GlobalNavigationProps) {
  const [currentTab, setCurrentTab] = useState<NavTabId>(
    activeTab ?? getDefaultTab(variant)
  )

  const handleTabChange = (tab: NavTabId) => {
    setCurrentTab(tab)
    onTabChange?.(tab)
  }

  const showSecondary = variant === 'dental' || variant === 'leave'

  return (
    <div className={className}>
      <MainNavigation
        activeTab={currentTab}
        onTabChange={handleTabChange}
        userName={userName}
        userImage={userImage}
        showNotifications={showNotifications}
      />
      {showSecondary && secondaryLinks[variant] && (
        <SecondaryNavigation links={secondaryLinks[variant]} />
      )}
    </div>
  )
}

function getDefaultTab(variant: PageVariant): NavTabId {
  switch (variant) {
    case 'claims': return 'claims'
    case 'support': return 'support'
    case 'coverages':
    case 'coveragesHover':
    case 'dental': return 'coverages'
    case 'leave': return 'leave'
    default: return 'dashboard'
  }
}
