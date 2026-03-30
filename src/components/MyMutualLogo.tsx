interface MyMutualLogoProps {
  variant?: 'black' | 'white' | 'twoColor'
  imgSrc?: string
  className?: string
}

const variantConfig: Record<
  NonNullable<MyMutualLogoProps['variant']>,
  { primary: string; accent: string }
> = {
  black: {
    primary: 'var(--foundation-primary-black, #000000)',
    accent: 'var(--foundation-primary-black, #000000)',
  },
  white: {
    primary: 'var(--foundation-primary-white, #ffffff)',
    accent: 'var(--foundation-primary-white, #ffffff)',
  },
  twoColor: {
    primary: 'var(--foundation-primary-blue-dark, #003a70)',
    accent: 'var(--foundation-primary-blue, #105fa8)',
  },
}

/**
 * MyMutual portal logo with three color variants.
 * Renders an image if imgSrc is provided, otherwise a styled placeholder SVG.
 * Figma source: Member-Experience-Design-System MyMutual logo
 */
export default function MyMutualLogo({
  variant = 'twoColor',
  imgSrc,
  className = '',
}: MyMutualLogoProps) {
  const { primary, accent } = variantConfig[variant]

  if (imgSrc) {
    return (
      <img
        src={imgSrc}
        alt="MyMutual"
        className={['w-[551.72px] h-[129.28px] object-contain', className].join(' ')}
      />
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 552 130"
      className={['w-[551.72px] h-[129.28px]', className].join(' ')}
      role="img"
      aria-label="MyMutual"
    >
      <text
        x="20"
        y="80"
        fontFamily="var(--font-family-title, sans-serif)"
        fontWeight="var(--font-weight-bold, 700)"
        fontSize="48"
        fill={primary}
      >
        My
      </text>
      <text
        x="120"
        y="80"
        fontFamily="var(--font-family-title, sans-serif)"
        fontWeight="var(--font-weight-bold, 700)"
        fontSize="48"
        fill={accent}
      >
        Mutual
      </text>
    </svg>
  )
}
