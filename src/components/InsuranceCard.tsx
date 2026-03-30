interface InsuranceCardProps {
  variant: 'front' | 'back'
  memberName?: string
  memberNumber?: string
  groupNumber?: string
  planType?: string
  groupName?: string
  className?: string
}

/**
 * Insurance ID card with Front and Back variants.
 * Front: gradient header with company name, member info fields.
 * Back: customer service, claims address, website, disclaimer.
 * Figma source: Member-Experience-Design-System insurance card
 */
export default function InsuranceCard({
  variant,
  memberName = 'John Doe',
  memberNumber = '123456789',
  groupNumber = 'G-00001',
  planType = 'PPO',
  groupName = 'Acme Corporation',
  className = '',
}: InsuranceCardProps) {
  return (
    <div
      className={[
        'w-[389px] h-[245px] rounded-[var(--radius-lg,12px)] overflow-hidden',
        'border border-[var(--foundation-grays-light,#bababa)]',
        'bg-[var(--foundation-primary-white,#ffffff)]',
        'font-[var(--font-family-body,sans-serif)]',
        className,
      ].join(' ')}
    >
      {variant === 'front' ? <FrontSide {...{ memberName, memberNumber, groupNumber, planType, groupName }} /> : <BackSide />}
    </div>
  )
}

/* ── Front variant ────────────────────────────────────────────── */
function FrontSide({
  memberName,
  memberNumber,
  groupNumber,
  planType,
  groupName,
}: Pick<InsuranceCardProps, 'memberName' | 'memberNumber' | 'groupNumber' | 'planType' | 'groupName'>) {
  return (
    <>
      {/* Gradient header */}
      <div
        className="h-[56px] flex items-center px-[var(--spacing-lg,16px)]"
        style={{
          background:
            'linear-gradient(90deg, var(--foundation-primary-blue-dark, #003a70) 0%, var(--foundation-primary-blue, #105fa8) 100%)',
        }}
      >
        <span
          className={[
            'text-[var(--foundation-primary-white,#fff)]',
            'font-[var(--font-weight-bold,700)]',
            'text-[var(--font-size-sm,16px)]',
          ].join(' ')}
        >
          Mutual of Omaha
        </span>
      </div>

      {/* Content area */}
      <div className="px-[var(--spacing-lg,16px)] py-[var(--spacing-md,12px)] flex gap-[var(--spacing-lg,16px)]">
        {/* Member fields */}
        <div className="flex-1 flex flex-col gap-[var(--spacing-xs,6px)]">
          <InfoField label="Name" value={memberName} />
          <InfoField label="Member Number" value={memberNumber} />
          <InfoField label="Group Number" value={groupNumber} />
          <InfoField label="Plan Type" value={planType} />
          <InfoField label="Group Name" value={groupName} />
        </div>

        {/* Stacked logo placeholder */}
        <div className="flex items-start pt-[var(--spacing-xs,6px)]">
          <svg viewBox="0 0 60 72" className="w-[60px] h-[72px]" aria-hidden="true">
            <circle cx="30" cy="24" r="18" fill="var(--foundation-primary-blue, #105fa8)" />
            <text
              x="30"
              y="28"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="#fff"
            >
              MoO
            </text>
            <text
              x="30"
              y="58"
              textAnchor="middle"
              fontSize="6"
              fontWeight="600"
              fill="var(--foundation-primary-blue-dark, #003a70)"
            >
              Mutual of Omaha
            </text>
          </svg>
        </div>
      </div>
    </>
  )
}

/* ── Back variant ─────────────────────────────────────────────── */
function BackSide() {
  return (
    <div className="px-[var(--spacing-lg,16px)] py-[var(--spacing-md,12px)] flex flex-col gap-[var(--spacing-sm,8px)] text-[var(--font-size-xs,14px)]">
      <div className="flex flex-col gap-[var(--spacing-2xs,4px)]">
        <span className="font-[var(--font-weight-semibold,600)] text-[var(--foundation-primary-blue-dark,#003a70)]">
          Customer Service
        </span>
        <span className="text-[var(--foundation-grays-darker,#444)]">1-800-775-6000</span>
      </div>

      <div className="flex flex-col gap-[var(--spacing-2xs,4px)]">
        <span className="font-[var(--font-weight-semibold,600)] text-[var(--foundation-primary-blue-dark,#003a70)]">
          Payor Information
        </span>
        <span className="text-[var(--foundation-grays-darker,#444)]">Payor ID: 71412</span>
      </div>

      <div className="flex flex-col gap-[var(--spacing-2xs,4px)]">
        <span className="font-[var(--font-weight-semibold,600)] text-[var(--foundation-primary-blue-dark,#003a70)]">
          Claims Mailing Address
        </span>
        <span className="text-[var(--foundation-grays-darker,#444)]">
          Mutual of Omaha, P.O. Box 2147, Omaha, NE 68103-2147
        </span>
      </div>

      <a
        href="https://www.mutualofomaha.com"
        className="text-[var(--foundation-primary-blue,#105fa8)] underline text-[var(--font-size-xs,14px)]"
      >
        www.mutualofomaha.com
      </a>

      <p className="text-[10px] leading-[14px] text-[var(--foundation-grays-dark,#666)] mt-auto">
        This card does not guarantee coverage. Benefits are subject to the terms, conditions,
        limitations, and exclusions of the group policy.
      </p>
    </div>
  )
}

/* ── Shared sub-component ─────────────────────────────────────── */
function InfoField({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] leading-[14px] text-[var(--foundation-grays-dark,#666)] uppercase tracking-wide">
        {label}
      </span>
      <span className="text-[var(--font-size-xs,14px)] font-[var(--font-weight-semibold,600)] text-[var(--foundation-primary-blue-dark,#003a70)]">
        {value}
      </span>
    </div>
  )
}
