import { type ReactNode } from 'react'

interface MobileCalloutCardProps {
  title: string
  description: string
  buttonLabel?: string
  onButtonClick?: () => void
  icon?: ReactNode
  className?: string
}

function DefaultIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.5" stroke="white" strokeWidth="1.5" />
      <path d="M10 5v5l3.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function MobileCalloutCard({
  title,
  description,
  buttonLabel,
  onButtonClick,
  icon,
  className = '',
}: MobileCalloutCardProps) {
  return (
    <div className={`relative w-[303px] rounded-xl border-2 border-[#bababa] bg-white pt-[42px] pb-[18px] px-[18px] ${className}`}>
      {/* Gradient icon badge */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-[24px] w-12 h-12 rounded-full flex items-center justify-center border-[6px] border-white"
        style={{ background: 'linear-gradient(to right, #003a70, #105fa8)' }}
      >
        {icon || <DefaultIcon />}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h3
          className="font-semibold text-[#222222] w-full"
          style={{ fontSize: 16, lineHeight: '24px', fontFamily: 'var(--font-family-title, sans-serif)' }}
        >
          {title}
        </h3>
        <p
          className="text-[#444444] w-full"
          style={{ fontSize: 14, lineHeight: '20px', fontFamily: 'var(--font-family-body, sans-serif)' }}
        >
          {description}
        </p>
      </div>

      {/* CTA Button */}
      {buttonLabel && (
        <button
          onClick={onButtonClick}
          className="mt-6 w-full h-8 rounded bg-[#105fa8] text-white text-sm font-semibold hover:bg-[#003a70] transition-colors"
          style={{ fontFamily: 'var(--font-family-title, sans-serif)' }}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  )
}
