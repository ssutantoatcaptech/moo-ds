import { useState, useRef, useEffect } from 'react'

interface DropdownHoverProps {
  label?: string
  placeholder?: string
  items: string[]
  className?: string
}

/**
 * Dropdown with hover/focus open state and a picklist overlay.
 * Blue focus ring (shadow 0 0 4px #105fa8), white picklist with border-bottom dividers.
 * Figma source: Member-Experience-Design-System dropdown component
 */
export default function DropdownHover({
  label,
  placeholder = 'Select an option',
  items,
  className = '',
}: DropdownHoverProps) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  /* Close on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div
      ref={containerRef}
      className={['relative inline-flex flex-col gap-[var(--spacing-xs,6px)]', className].join(' ')}
    >
      {/* Label */}
      {label && (
        <label
          className={[
            'text-[var(--font-size-xs,14px)] font-[var(--font-weight-semibold,600)]',
            'text-[var(--text-default,#222)]',
          ].join(' ')}
        >
          {label}
        </label>
      )}

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setOpen(true)}
        className={[
          'flex items-center justify-between w-full min-w-[280px]',
          'bg-[var(--foundation-primary-white,#fff)]',
          'border border-[var(--foundation-grays-medium,#8a8886)] rounded-[var(--radius-sm,4px)]',
          'px-[var(--spacing-md,12px)] py-[var(--spacing-sm,8px)]',
          'text-[var(--font-size-xs,14px)] text-[var(--text-default,#222)]',
          'transition-shadow',
          open ? 'shadow-[0_0_4px_var(--foundation-primary-blue,#105fa8)]' : '',
        ].join(' ')}
      >
        <span className={selected ? '' : 'text-[var(--foundation-grays-dark,#666)]'}>
          {selected ?? placeholder}
        </span>
        {/* Chevron */}
        <svg
          className={['w-4 h-4 text-[var(--foundation-grays-dark,#666)] transition-transform', open ? 'rotate-180' : ''].join(' ')}
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>

      {/* Picklist */}
      {open && (
        <ul
          role="listbox"
          className={[
            'absolute top-full left-0 right-0 z-10 mt-[var(--spacing-2xs,4px)]',
            'bg-[var(--foundation-primary-white,#fff)]',
            'rounded-[var(--radius-sm,4px)]',
            'shadow-[0_2px_8px_rgba(0,0,0,0.12)]',
            'border border-[var(--foundation-grays-light,#bababa)]',
            'max-h-[280px] overflow-y-auto',
          ].join(' ')}
          onMouseLeave={() => setOpen(false)}
        >
          {items.map((item, i) => (
            <li
              key={i}
              role="option"
              aria-selected={selected === item}
              onClick={() => {
                setSelected(item)
                setOpen(false)
              }}
              className={[
                'px-[var(--spacing-md,12px)] py-[var(--spacing-sm,8px)]',
                'text-[var(--font-size-xs,14px)] text-[var(--text-default,#222)]',
                'cursor-pointer hover:bg-[var(--foundation-grays-lightest,#f5f5f5)]',
                i < items.length - 1 ? 'border-b border-b-[#f0f0f0]' : '',
                selected === item ? 'bg-[var(--foundation-grays-lightest,#f5f5f5)] font-[var(--font-weight-semibold,600)]' : '',
              ].join(' ')}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
