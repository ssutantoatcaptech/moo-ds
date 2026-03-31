import Avatar from './Avatar'

function IdCardIcon({ color = '#222' }: { color?: string }) {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.75" y="0.75" width="18.5" height="14.5" rx="1.25" stroke={color} strokeWidth="1.5" />
      <circle cx="7" cy="6.5" r="2" stroke={color} strokeWidth="1.25" />
      <path d="M3.5 13C3.5 11.067 5.067 9.5 7 9.5C8.933 9.5 10.5 11.067 10.5 13" stroke={color} strokeWidth="1.25" strokeLinecap="round" />
      <line x1="12.5" y1="5.5" x2="16.5" y2="5.5" stroke={color} strokeWidth="1.25" strokeLinecap="round" />
      <line x1="12.5" y1="8.5" x2="16.5" y2="8.5" stroke={color} strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

function EnvelopeIcon({ color = '#222' }: { color?: string }) {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.75" y="0.75" width="18.5" height="13.5" rx="1.25" stroke={color} strokeWidth="1.5" />
      <path d="M1 1L10 8L19 1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BellIcon({ color = '#222' }: { color?: string }) {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17C7 18.1046 7.89543 19 9 19C10.1046 19 11 18.1046 11 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 1C9 1 9 1 9 1C5.68629 1 3 3.68629 3 7V11L1 14H17L15 11V7C15 3.68629 12.3137 1 9 1Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function UserCircleIcon({ color = '#105fa8' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.5" />
      <circle cx="10" cy="8" r="2.5" stroke={color} strokeWidth="1.25" />
      <path d="M5 16.5C5.5 14 7.5 12.5 10 12.5C12.5 12.5 14.5 14 15 16.5" stroke={color} strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

export type UtilityLinkVariant = 'findIdCard' | 'messages' | 'notification' | 'profile' | 'signIn'

interface UtilityLinksProps {
  variant: UtilityLinkVariant
  showNotificationDot?: boolean
  userName?: string
  userImage?: string
  onClick?: () => void
  className?: string
}

export default function UtilityLinks({
  variant,
  showNotificationDot = true,
  userName = 'Name Here',
  userImage,
  onClick,
  className,
}: UtilityLinksProps) {
  const base = 'flex items-center gap-2 px-3 py-2 rounded text-sm font-semibold transition-colors cursor-pointer'

  if (variant === 'findIdCard') {
    return (
      <button onClick={onClick} className={`${base} text-[#222] hover:bg-[#ebf3fa] ${className || ''}`}>
        <IdCardIcon /> Find ID Card
      </button>
    )
  }

  if (variant === 'messages') {
    return (
      <button onClick={onClick} className={`${base} text-[#222] hover:bg-[#ebf3fa] ${className || ''}`}>
        <EnvelopeIcon /> Messages
      </button>
    )
  }

  if (variant === 'notification') {
    return (
      <button onClick={onClick} className={`relative flex items-center p-2 transition-colors ${className || ''}`}>
        <BellIcon />
        {showNotificationDot && (
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#c12506]" />
        )}
      </button>
    )
  }

  if (variant === 'signIn') {
    return (
      <button onClick={onClick} className={`${base} text-[#105fa8] hover:bg-[#ebf3fa] gap-3 ${className || ''}`}>
        <UserCircleIcon /> Sign In
      </button>
    )
  }

  // profile
  return (
    <button onClick={onClick} className={`${base} text-[#105fa8] gap-3 ${className || ''}`}>
      <Avatar name={userName} image={userImage} size={40} />
      {userName}
    </button>
  )
}
