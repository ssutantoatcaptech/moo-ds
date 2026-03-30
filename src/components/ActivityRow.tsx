import { type HTMLAttributes } from 'react'

type Variant = 'information' | 'pending' | 'success' | 'needsAttention'

interface ActivityRowProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  variant: Variant
  title: string
  description: string
  date: string
  onClick?: () => void
}

const statusColors: Record<Variant, string> = {
  information: '#067ac1',
  pending: '#fcbc0b',
  success: '#1fa668',
  needsAttention: '#c12506',
}

const statusIcons: Record<Variant, string> = {
  information: 'ℹ',
  pending: '⏳',
  success: '✓',
  needsAttention: '!',
}

export default function ActivityRow({
  variant,
  title,
  description,
  date,
  onClick,
  className = '',
  ...props
}: ActivityRowProps) {
  const color = statusColors[variant]

  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
      className={[
        'flex items-center gap-4 px-4 py-3',
        onClick ? 'cursor-pointer hover:bg-[var(--foundation-grays-lighter)]' : '',
        className,
      ].join(' ')}
      style={{ borderBottom: '1px solid var(--foundation-grays-lighter)' }}
      {...props}
    >
      {/* Status icon circle */}
      <div
        className="shrink-0 flex items-center justify-center rounded-full"
        style={{
          width: 48,
          height: 48,
          backgroundColor: color,
          color: variant === 'pending' ? 'var(--foundation-grays-darkest)' : '#ffffff',
          fontSize: 20,
          fontWeight: 'var(--font-weight-semibold)' as string,
        }}
      >
        {statusIcons[variant]}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div
          className="font-semibold truncate"
          style={{
            color: 'var(--text-default)',
            fontSize: 'var(--font-size-sm)',
          }}
        >
          {title}
        </div>
        <div
          className="truncate"
          style={{
            color: 'var(--foundation-grays-dark)',
            fontSize: 'var(--font-size-xs)',
          }}
        >
          {description}
        </div>
        <div
          style={{
            color: 'var(--foundation-grays-gray)',
            fontSize: 'var(--font-size-2xs)',
          }}
        >
          {date}
        </div>
      </div>

      {/* Chevron */}
      <div
        className="shrink-0"
        style={{ color: 'var(--foundation-grays-gray)', fontSize: 20 }}
      >
        ›
      </div>
    </div>
  )
}
