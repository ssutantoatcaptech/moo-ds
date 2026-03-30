interface SidebarCardItem {
  label: string
  href: string
  active?: boolean
}

interface SidebarCardProps {
  title: string
  items: SidebarCardItem[]
  className?: string
}

/**
 * Sidebar navigation card with a title and list of nav items.
 * Active items are highlighted with the primary blue.
 * Figma source: Member-Experience-Design-System sidebar card
 */
export default function SidebarCard({ title, items, className = '' }: SidebarCardProps) {
  return (
    <div
      className={[
        'w-full rounded-[var(--radius-lg,12px)]',
        'border border-[var(--foundation-grays-light,#bababa)]',
        'bg-[var(--foundation-primary-white,#fff)]',
        'overflow-hidden',
        'font-[var(--font-family-body,sans-serif)]',
        className,
      ].join(' ')}
    >
      {/* Title */}
      <div
        className={[
          'px-[var(--spacing-lg,16px)] py-[var(--spacing-md,12px)]',
          'border-b border-b-[var(--foundation-grays-light,#bababa)]',
        ].join(' ')}
      >
        <h3
          className={[
            'font-[var(--font-weight-semibold,600)]',
            'text-[var(--font-size-sm,16px)] leading-[var(--line-height-sm,24px)]',
            'text-[var(--text-default,#222)]',
          ].join(' ')}
        >
          {title}
        </h3>
      </div>

      {/* Nav items */}
      <nav>
        <ul className="flex flex-col">
          {items.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className={[
                  'block px-[var(--spacing-lg,16px)] py-[var(--spacing-md,12px)]',
                  'text-[var(--font-size-xs,14px)]',
                  'transition-colors',
                  i < items.length - 1 ? 'border-b border-b-[var(--foundation-grays-lightest,#f0f0f0)]' : '',
                  item.active
                    ? [
                        'text-[var(--foundation-primary-blue,#105fa8)]',
                        'font-[var(--font-weight-semibold,600)]',
                        'bg-[var(--foundation-primary-blue-lightest,#e8f0fe)]',
                        'border-l-[3px] border-l-[var(--foundation-primary-blue,#105fa8)]',
                      ].join(' ')
                    : [
                        'text-[var(--text-default,#222)]',
                        'hover:bg-[var(--foundation-grays-lightest,#f5f5f5)]',
                        'border-l-[3px] border-l-transparent',
                      ].join(' '),
                ].join(' ')}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
