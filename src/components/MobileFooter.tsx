/**
 * Mobile footer for the MyMutual portal (375px layout).
 * Static layout: logo, assistance section, phone grid, legal links, copyright.
 * Figma source: Member-Experience-Design-System mobile footer
 */
export default function MobileFooter() {
  return (
    <footer
      className={[
        'w-[375px] bg-[var(--foundation-primary-white,#ffffff)]',
        'border-t-[4px] border-t-[var(--foundation-primary-blue,#105fa6)]',
        'font-[var(--font-family-body,sans-serif)]',
      ].join(' ')}
    >
      {/* Logo */}
      <div className="px-[var(--spacing-lg,16px)] py-[var(--spacing-xl,20px)]">
        <svg viewBox="0 0 552 130" className="w-[140px] h-auto" role="img" aria-label="MyMutual">
          <text
            x="20"
            y="80"
            fontFamily="var(--font-family-title, sans-serif)"
            fontWeight="700"
            fontSize="48"
            fill="var(--foundation-primary-blue-dark, #003a70)"
          >
            My
          </text>
          <text
            x="120"
            y="80"
            fontFamily="var(--font-family-title, sans-serif)"
            fontWeight="700"
            fontSize="48"
            fill="var(--foundation-primary-blue, #105fa8)"
          >
            Mutual
          </text>
        </svg>
      </div>

      {/* Get Assistance */}
      <div className="px-[var(--spacing-lg,16px)] pb-[var(--spacing-lg,16px)]">
        <h3
          className={[
            'font-[var(--font-weight-semibold,600)]',
            'text-[var(--font-size-sm,16px)] leading-[var(--line-height-sm,24px)]',
            'text-[var(--text-default,#222)]',
            'mb-[var(--spacing-sm,8px)]',
          ].join(' ')}
        >
          Get Assistance
        </h3>
        <a
          href="#chat-support"
          className="text-[var(--foundation-primary-blue,#105fa6)] underline text-[var(--font-size-xs,14px)]"
        >
          Chat with support
        </a>
      </div>

      {/* Phone numbers grid */}
      <div className="px-[var(--spacing-lg,16px)] pb-[var(--spacing-lg,16px)] grid grid-cols-2 gap-[var(--spacing-md,12px)]">
        <PhoneItem label="General Support" number="1-800-775-6000" />
        <PhoneItem label="Dental Support" number="1-800-775-6000" />
        <PhoneItem label="Vision Support" number="1-800-775-6000" />
        <PhoneItem label="Absence Support" number="1-800-775-6000" />
      </div>

      {/* Legal links – 2 rows */}
      <div className="px-[var(--spacing-lg,16px)] pb-[var(--spacing-md,12px)] flex flex-col gap-[var(--spacing-sm,8px)]">
        <div className="flex gap-[var(--spacing-lg,16px)]">
          <LegalLink href="#terms">Terms of Use</LegalLink>
          <LegalLink href="#privacy">Privacy Policy</LegalLink>
          <LegalLink href="#accessibility">Accessibility</LegalLink>
        </div>
        <div className="flex gap-[var(--spacing-lg,16px)]">
          <LegalLink href="#fraud">Report Fraud</LegalLink>
          <LegalLink href="#disclosures">Disclosures</LegalLink>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-[var(--spacing-lg,16px)] pb-[var(--spacing-xl,20px)]">
        <p className="text-[10px] leading-[14px] text-[var(--foundation-grays-dark,#666)]">
          &copy; {new Date().getFullYear()} Mutual of Omaha Insurance Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

/* ── Sub-components ───────────────────────────────────────────── */

function PhoneItem({ label, number }: { label: string; number: string }) {
  return (
    <div className="flex flex-col gap-[var(--spacing-2xs,4px)]">
      <span className="text-[10px] leading-[14px] text-[var(--foundation-grays-dark,#666)] uppercase tracking-wide">
        {label}
      </span>
      <a
        href={`tel:${number.replace(/-/g, '')}`}
        className="text-[var(--font-size-xs,14px)] font-[var(--font-weight-semibold,600)] text-[var(--foundation-primary-blue-dark,#003a70)]"
      >
        {number}
      </a>
    </div>
  )
}

function LegalLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="text-[var(--font-size-xs,14px)] text-[var(--foundation-grays-darker,#444)] hover:underline"
    >
      {children}
    </a>
  )
}
