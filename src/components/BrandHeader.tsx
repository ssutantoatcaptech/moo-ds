type Variant = 'default' | 'coBranded'

interface BrandHeaderProps {
  variant?: Variant
  logoSrc?: string
  partnerLogoSrc?: string
  partnerBgColor?: string
}

export default function BrandHeader({
  variant = 'default',
  logoSrc,
  partnerLogoSrc,
  partnerBgColor = '#ffffff',
}: BrandHeaderProps) {
  if (variant === 'coBranded') {
    return (
      <header
        className="w-full flex items-center justify-between px-6 py-3"
        style={{ backgroundColor: partnerBgColor }}
      >
        {/* Partner logo */}
        <div className="flex items-center">
          {partnerLogoSrc ? (
            <img src={partnerLogoSrc} alt="Partner logo" className="h-8 object-contain" />
          ) : (
            <span className="font-semibold" style={{ fontSize: 'var(--font-size-sm)' }}>
              Partner
            </span>
          )}
        </div>

        {/* Powered by MoO */}
        <div className="flex items-center gap-2">
          <span
            style={{
              fontSize: 'var(--font-size-2xs)',
              color: 'var(--foundation-grays-gray)',
            }}
          >
            powered by
          </span>
          {logoSrc ? (
            <img src={logoSrc} alt="Mutual of Omaha" className="h-5 object-contain" />
          ) : (
            <span
              className="font-semibold"
              style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--foundation-primary-blue)',
              }}
            >
              Mutual of Omaha
            </span>
          )}
        </div>
      </header>
    )
  }

  // Default variant
  return (
    <header
      className="w-full flex items-center px-6 py-3"
      style={{ backgroundColor: '#105fa8' }}
    >
      {logoSrc ? (
        <img src={logoSrc} alt="Mutual of Omaha" className="h-8 object-contain" />
      ) : (
        <span
          className="font-semibold"
          style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--text-white)',
          }}
        >
          Mutual of Omaha
        </span>
      )}
    </header>
  )
}
