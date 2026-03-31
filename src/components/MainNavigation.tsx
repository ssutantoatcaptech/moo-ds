import NavigationTabs, { type NavTabId } from './NavigationTabs'
import UtilityLinks from './UtilityLinks'

const navItems: { id: NavTabId; label: string; hasChevron?: boolean }[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'coverages', label: 'My Coverages', hasChevron: true },
  { id: 'claims', label: 'Claims' },
  { id: 'leave', label: 'Leave' },
  { id: 'support', label: 'Support' },
]

interface MainNavigationProps {
  activeTab?: NavTabId
  onTabChange?: (tab: NavTabId) => void
  userName?: string
  userImage?: string
  showNotifications?: boolean
  isSignedIn?: boolean
  className?: string
}

export default function MainNavigation({
  activeTab,
  onTabChange,
  userName = 'Name Here',
  userImage,
  showNotifications = true,
  isSignedIn = true,
  className,
}: MainNavigationProps) {
  return (
    <nav className={`flex items-center justify-between px-6 py-4 bg-white border-b border-[#f0f0f0] w-full ${className || ''}`}>
      <div className="flex items-center gap-8">
        <span className="text-xl text-[#222] tracking-tight whitespace-nowrap">
          my<em className="italic text-[#105fa8] font-bold not-italic" style={{ fontStyle: 'italic' }}>Mutual</em>
        </span>
        <div className="flex items-center">
          {navItems.map((item) => (
            <NavigationTabs
              key={item.id}
              label={item.label}
              isActive={activeTab === item.id}
              showChevron={item.hasChevron}
              onClick={() => onTabChange?.(item.id)}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1">
        <UtilityLinks variant="findIdCard" />
        <UtilityLinks variant="messages" />
        <UtilityLinks variant="notification" showNotificationDot={showNotifications} />
        {isSignedIn
          ? <UtilityLinks variant="profile" userName={userName} userImage={userImage} />
          : <UtilityLinks variant="signIn" />
        }
      </div>
    </nav>
  )
}
