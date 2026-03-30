interface MutualOfOmahaLogoProps {
  variant?: 'black' | 'blue' | 'white'
  imgSrc?: string
  className?: string
}

const variantColors: Record<NonNullable<MutualOfOmahaLogoProps['variant']>, string> = {
  black: 'var(--foundation-primary-black, #000000)',
  blue: 'var(--foundation-primary-blue, #105fa8)',
  white: 'var(--foundation-primary-white, #ffffff)',
}

/**
 * Mutual of Omaha horizontal logo.
 * Renders an image if imgSrc is provided, otherwise a styled placeholder SVG.
 * Figma source: Member-Experience-Design-System logo component
 */
export default function MutualOfOmahaLogo({
  variant = 'blue',
  imgSrc,
  className = '',
}: MutualOfOmahaLogoProps) {
  const color = variantColors[variant]

  if (imgSrc) {
    return (
      <img
        src={imgSrc}
        alt="Mutual of Omaha"
        className={['w-[222px] h-[48px] object-contain', className].join(' ')}
      />
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 222 48"
      className={['w-[222px] h-[48px]', className].join(' ')}
      role="img"
      aria-label="Mutual of Omaha"
    >
      <text
        x="111"
        y="30"
        textAnchor="middle"
        fontFamily="var(--font-family-title, sans-serif)"
        fontWeight="var(--font-weight-bold, 700)"
        fontSize="16"
        fill={color}
      >
        Mutual of Omaha
      </text>
    </svg>
  )
}
