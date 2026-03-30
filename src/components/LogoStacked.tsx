interface LogoStackedProps {
  imgSrc?: string
  className?: string
}

/**
 * Stacked (vertical) Mutual of Omaha logo.
 * Renders an image if imgSrc is provided, otherwise a styled placeholder SVG.
 * Figma source: Member-Experience-Design-System stacked logo
 */
export default function LogoStacked({ imgSrc, className = '' }: LogoStackedProps) {
  if (imgSrc) {
    return (
      <img
        src={imgSrc}
        alt="Mutual of Omaha"
        className={['w-[177.5px] h-[133.2px] object-contain', className].join(' ')}
      />
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 178 134"
      className={['w-[177.5px] h-[133.2px]', className].join(' ')}
      role="img"
      aria-label="Mutual of Omaha"
    >
      {/* Placeholder icon circle */}
      <circle
        cx="89"
        cy="45"
        r="35"
        fill="var(--foundation-primary-blue, #105fa8)"
      />
      <text
        x="89"
        y="50"
        textAnchor="middle"
        fontFamily="var(--font-family-title, sans-serif)"
        fontWeight="var(--font-weight-bold, 700)"
        fontSize="18"
        fill="var(--foundation-primary-white, #ffffff)"
      >
        MoO
      </text>
      {/* Company name */}
      <text
        x="89"
        y="105"
        textAnchor="middle"
        fontFamily="var(--font-family-title, sans-serif)"
        fontWeight="var(--font-weight-bold, 700)"
        fontSize="13"
        fill="var(--foundation-primary-blue-dark, #003a70)"
      >
        Mutual of Omaha
      </text>
    </svg>
  )
}
