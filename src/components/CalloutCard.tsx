import { type ReactNode } from 'react'

type Variant = 'default' | 'quickActions'

interface CalloutCardProps {
  variant?: Variant
  title: string
  description?: string
  icon?: ReactNode
  actions?: ReactNode
  className?: string
}

/**
 * Callout card with gradient icon, title, optional body text, and CTA buttons.
 * Variants: "default" (centered with description) and "quickActions" (stacked buttons).
 * Figma source: Member-Experience-Design-System node 8089:1607
 */
export default function CalloutCard({
  variant = 'default',
  title,
  description,
  icon,
  actions,
  className = '',
}: CalloutCardProps) {
  return (
    <div
      className={[
        'relative rounded-[var(--radius-lg,12px)] border-2 border-[var(--foundation-grays-light,#bababa)]',
        'flex flex-col items-center gap-[var(--spacing-2xl,24px)]',
        'pb-[34px] pt-[42px] px-[22px] w-[343px]',
        className,
      ].join(' ')}
    >
      {/* Gradient Icon Circle */}
      <div
        className={[
          'absolute left-1/2 -translate-x-1/2 -top-[27px]',
          'size-[48px] rounded-full',
          'bg-gradient-to-r from-[var(--foundation-primary-blue-dark,#003a70)] to-[var(--foundation-primary-blue,#105fa8)]',
          'border-[6px] border-[var(--foundation-primary-white,#fff)]',
          'flex items-center justify-center',
        ].join(' ')}
      >
        {icon && <span className="text-white">{icon}</span>}
      </div>

      {/* Content */}
      <div className="w-full flex flex-col items-center gap-[var(--spacing-sm,8px)] text-center">
        <p
          className={[
            'font-[var(--font-family-title)] font-[var(--font-weight-semibold,600)]',
            'text-[var(--font-size-sm,16px)] leading-[var(--font-size-xl,24px)]',
            'text-[var(--text-default,#222)]',
          ].join(' ')}
        >
          {title}
        </p>
        {variant === 'default' && description && (
          <p
            className={[
              'font-[var(--font-family-body)] font-[var(--font-weight-regular,400)]',
              'text-[var(--font-size-xs,14px)] leading-[var(--line-height-xs,20px)]',
              'text-[var(--foundation-grays-darker,#444)]',
            ].join(' ')}
          >
            {description}
          </p>
        )}
      </div>

      {/* Actions */}
      {actions && (
        <div
          className={
            variant === 'quickActions'
              ? 'flex flex-col gap-[var(--spacing-lg,16px)] items-start'
              : ''
          }
        >
          {actions}
        </div>
      )}
    </div>
  )
}
