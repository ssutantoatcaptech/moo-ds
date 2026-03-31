import { type ReactNode } from 'react'
import MobileHeaderClose from './MobileHeaderClose'
import MobilePrimaryNav from './MobilePrimaryNav'
import MobileSecondaryNav from './MobileSecondaryNav'
import MobileHeaderNav from './MobileHeaderNav'
import MobileNavigationBack from './MobileNavigationBack'

type MobileNavigationVariant = 'default' | 'menu' | 'coverage' | 'leave' | 'dental'

interface NavItem {
  label: string
  hasChevron?: boolean
  onClick?: () => void
}

interface MobileNavigationProps {
  variant?: MobileNavigationVariant
  onClose?: () => void
  onBack?: () => void
  className?: string
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function RuleLine() {
  return <div className="w-full h-0 border-b border-[#e0e0e0]" />
}

function RuleLineLight() {
  return <div className="w-full h-0 border-b border-[rgba(255,255,255,0.2)]" />
}

function UtilityNavItem({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 w-full px-4 py-3">
      <span className="w-5 h-5 flex items-center justify-center text-white">{icon}</span>
      <span
        className="text-white font-semibold"
        style={{ fontSize: 16, lineHeight: '24px', fontFamily: 'var(--font-family-title, sans-serif)' }}
      >
        {label}
      </span>
    </div>
  )
}

function IdCardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="1" stroke="white" strokeWidth="1.5" />
      <circle cx="7.5" cy="9" r="2" stroke="white" strokeWidth="1.2" />
      <path d="M12 8h4M12 11h3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function EnvelopeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="1" stroke="white" strokeWidth="1.5" />
      <path d="M2 4l8 6 8-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2a5 5 0 00-5 5v3l-1 2h12l-1-2V7a5 5 0 00-5-5zM8.5 17a1.5 1.5 0 003 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function UserCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5" />
      <circle cx="10" cy="8" r="2.5" stroke="white" strokeWidth="1.2" />
      <path d="M5 16c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function UtilityNav() {
  return (
    <div className="w-full bg-[#003a70] flex flex-col items-start justify-center">
      <RuleLineLight />
      <UtilityNavItem icon={<IdCardIcon />} label="ID Card" />
      <RuleLineLight />
      <UtilityNavItem icon={<EnvelopeIcon />} label="Messages" />
      <RuleLineLight />
      <UtilityNavItem icon={<BellIcon />} label="Notifications" />
      <RuleLineLight />
      <UtilityNavItem icon={<UserCircleIcon />} label="Profile" />
    </div>
  )
}

function DefaultBar({ onMenuOpen }: { onMenuOpen?: () => void }) {
  return (
    <div className="flex items-center justify-between w-[375px] p-4 bg-white border-b border-[#f0f0f0] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
      <button onClick={onMenuOpen} aria-label="Open menu" className="w-5 h-5 flex items-center justify-center">
        <HamburgerIcon />
      </button>
      <div className="flex items-center gap-[15px]">
        <div className="flex items-center">
          <button className="flex items-center gap-2 px-3 py-2 border border-[#105fa8] rounded text-[#105fa8] text-sm font-semibold">
            ID Cards
          </button>
        </div>
        <div className="flex items-center gap-4">
          <BellIcon />
          <div className="w-10 h-10 rounded-full bg-[#002547] border-2 border-[#dcebf9] flex items-center justify-center">
            <span className="text-white text-xs font-semibold uppercase">AB</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const menuItems: NavItem[] = [
  { label: 'Dashboard', hasChevron: true },
  { label: 'Coverage' },
  { label: 'Claims', hasChevron: true },
  { label: 'Leave' },
  { label: 'Support', hasChevron: true },
]

const coverageSecondaryItems = ['All', 'Dental', 'Vision', 'Life', 'Accident', 'Hospital Indemnity']

const leaveItems: NavItem[] = [
  { label: 'My Leave', hasChevron: true },
  { label: 'Request Leave', hasChevron: true },
  { label: 'Leave Status', hasChevron: true },
  { label: 'Documents & Payments', hasChevron: true },
  { label: 'Resources', hasChevron: true },
]

const dentalItems = ['Dental Coverage', 'Claims & Estimates', 'Find a Dentist', 'Documents']

export default function MobileNavigation({
  variant = 'default',
  onClose,
  onBack,
  className = '',
}: MobileNavigationProps) {
  if (variant === 'default') {
    return <DefaultBar />
  }

  return (
    <div className={`relative w-[375px] ${className}`}>
      <MobileHeaderClose onClose={onClose} />

      {(variant === 'leave' || variant === 'dental') && (
        <MobileNavigationBack onBack={onBack} />
      )}

      <div className="flex flex-col items-start bg-white w-full">
        {variant === 'menu' && (
          <div className="flex flex-col w-full">
            {menuItems.map((item, i) => (
              <div key={item.label}>
                <MobilePrimaryNav label={item.label} showChevron={item.hasChevron} />
                {i < menuItems.length - 1 && <RuleLine />}
              </div>
            ))}
          </div>
        )}

        {variant === 'coverage' && (
          <div className="flex flex-col w-full">
            <MobilePrimaryNav label="Dashboard" showChevron />
            <RuleLine />
            <MobilePrimaryNav label="Coverage" variant="clicked" showChevron={false} />
            {coverageSecondaryItems.map((item, i) => (
              <div key={item}>
                <MobileSecondaryNav label={item} />
                {i < coverageSecondaryItems.length - 1 && <RuleLine />}
              </div>
            ))}
            <RuleLine />
            <MobilePrimaryNav label="Claims" showChevron />
            <RuleLine />
            <MobilePrimaryNav label="Leave" showChevron={false} />
            <RuleLine />
            <MobilePrimaryNav label="Support" showChevron />
          </div>
        )}

        {variant === 'leave' && (
          <div className="flex flex-col w-full">
            <MobileHeaderNav title="Leave" />
            {leaveItems.map((item, i) => (
              <div key={item.label}>
                <MobilePrimaryNav label={item.label} showChevron={item.hasChevron} />
                {i < leaveItems.length - 1 && <RuleLine />}
              </div>
            ))}
            <RuleLine />
            <MobilePrimaryNav label="Hospital Indemnity" showChevron />
          </div>
        )}

        {variant === 'dental' && (
          <div className="flex flex-col w-full">
            <MobileHeaderNav title="Dental" />
            {dentalItems.map((item, i) => (
              <div key={item}>
                <MobilePrimaryNav label={item} showChevron={false} />
                {i < dentalItems.length - 1 && <RuleLine />}
              </div>
            ))}
          </div>
        )}
      </div>

      {(variant === 'menu' || variant === 'coverage') && <UtilityNav />}
    </div>
  )
}
