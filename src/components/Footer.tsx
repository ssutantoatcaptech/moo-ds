const linkColumns = [
  {
    heading: 'Coverage',
    links: ['My Coverage', 'Find a Provider', 'ID Cards', 'Benefits Overview'],
  },
  {
    heading: 'Claims',
    links: ['My Claims', 'Submit a Claim', 'Claim Status', 'Explanation of Benefits'],
  },
  {
    heading: 'Leave',
    links: ['My Leave', 'Report a Leave', 'Leave Status', 'Leave Documents'],
  },
]

const legalLinks = ['Privacy Policy', 'Cookie Preferences', 'Terms of Use', 'Accessibility']

export default function Footer() {
  return (
    <footer
      style={{
        maxWidth: 1440,
        margin: '0 auto',
        backgroundColor: 'var(--foundation-primary-white)',
        borderTop: '4px solid #105fa6',
        fontFamily: 'var(--font-family-body)',
      }}
    >
      <div className="px-8 py-10 flex flex-wrap gap-10">
        {/* Logo area */}
        <div className="shrink-0" style={{ minWidth: 200 }}>
          <div
            className="font-semibold"
            style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--foundation-primary-blue)',
              marginBottom: 'var(--spacing-sm)',
            }}
          >
            MyMutual
          </div>
          <div
            style={{
              fontSize: 'var(--font-size-2xs)',
              color: 'var(--foundation-grays-gray)',
            }}
          >
            Mutual of Omaha
          </div>
        </div>

        {/* Link columns */}
        {linkColumns.map((col) => (
          <div key={col.heading} className="flex flex-col gap-2" style={{ minWidth: 160 }}>
            <div
              className="uppercase font-semibold"
              style={{
                fontSize: 'var(--font-size-2xs)',
                color: 'var(--foundation-grays-gray)',
                letterSpacing: '0.36px',
                marginBottom: 'var(--spacing-xs)',
              }}
            >
              {col.heading}
            </div>
            {col.links.map((link) => (
              <a
                key={link}
                href="#"
                className="no-underline hover:underline"
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--text-link)',
                  textDecoration: 'underline',
                }}
              >
                {link}
              </a>
            ))}
          </div>
        ))}

        {/* Get Assistance */}
        <div className="flex flex-col gap-2" style={{ minWidth: 200 }}>
          <div
            className="uppercase font-semibold"
            style={{
              fontSize: 'var(--font-size-2xs)',
              color: 'var(--foundation-grays-gray)',
              letterSpacing: '0.36px',
              marginBottom: 'var(--spacing-xs)',
            }}
          >
            Get Assistance
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-default)' }}>
            <div>
              <span style={{ color: 'var(--foundation-grays-dark)' }}>Customer Service: </span>
              <a href="tel:1-800-775-6000" style={{ color: 'var(--text-link)', textDecoration: 'underline' }}>
                1-800-775-6000
              </a>
            </div>
            <div style={{ marginTop: 'var(--spacing-xs)' }}>
              <span style={{ color: 'var(--foundation-grays-dark)' }}>TTY/TDD: </span>
              <a href="tel:1-800-233-1479" style={{ color: 'var(--text-link)', textDecoration: 'underline' }}>
                1-800-233-1479
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal links row */}
      <div
        className="px-8 py-4 flex flex-wrap items-center gap-4"
        style={{ borderTop: '1px solid var(--foundation-grays-lighter)' }}
      >
        {legalLinks.map((link) => (
          <a
            key={link}
            href="#"
            style={{
              fontSize: 'var(--font-size-2xs)',
              color: 'var(--text-link)',
              textDecoration: 'underline',
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div
        className="px-8 pb-6"
        style={{
          fontSize: 'var(--font-size-2xs)',
          color: 'var(--foundation-grays-gray)',
        }}
      >
        &copy; {new Date().getFullYear()} Mutual of Omaha Insurance Company. All rights reserved.
      </div>
    </footer>
  )
}
