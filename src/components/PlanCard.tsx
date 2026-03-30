interface InfoRow {
  label: string
  value: string
}

interface PlanCardProps {
  planName: string
  planSubtitle: string
  description?: string
  progressLabel?: string
  progressValue?: number
  progressMax?: number
  infoRows?: InfoRow[]
}

export default function PlanCard({
  planName,
  planSubtitle,
  description,
  progressLabel,
  progressValue,
  progressMax = 100,
  infoRows,
}: PlanCardProps) {
  const progressPct =
    progressValue !== undefined && progressMax > 0
      ? Math.min(100, Math.max(0, (progressValue / progressMax) * 100))
      : 0

  return (
    <div
      className="overflow-hidden"
      style={{
        border: '2px solid var(--foundation-primary-blue)',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--foundation-primary-white)',
      }}
    >
      <div className="p-4 flex flex-col gap-3">
        {/* Icon circle + plan info */}
        <div className="flex items-center gap-3">
          <div
            className="shrink-0 flex items-center justify-center rounded-full"
            style={{
              width: 48,
              height: 48,
              backgroundColor: '#dcebf9',
              color: 'var(--foundation-primary-blue)',
              fontSize: 20,
            }}
          >
            🛡
          </div>
          <div>
            <div
              className="font-semibold"
              style={{
                color: 'var(--foundation-primary-blue-dark)',
                fontSize: 'var(--font-size-sm)',
              }}
            >
              {planName}
            </div>
            <div
              style={{
                color: 'var(--foundation-grays-dark)',
                fontSize: 'var(--font-size-xs)',
              }}
            >
              {planSubtitle}
            </div>
          </div>
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              color: 'var(--text-default)',
              fontSize: 'var(--font-size-xs)',
              lineHeight: 'var(--line-height-xs)',
            }}
          >
            {description}
          </div>
        )}

        {/* Progress bar */}
        {progressValue !== undefined && (
          <div className="flex flex-col gap-1">
            {progressLabel && (
              <div
                className="flex justify-between items-center"
                style={{ fontSize: 'var(--font-size-2xs)' }}
              >
                <span style={{ color: 'var(--text-default)' }}>{progressLabel}</span>
                <span style={{ color: 'var(--foundation-grays-gray)' }}>
                  {progressValue} / {progressMax}
                </span>
              </div>
            )}
            <div
              className="w-full overflow-hidden"
              style={{
                height: 8,
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--foundation-grays-lighter)',
              }}
            >
              <div
                className="h-full transition-all duration-300"
                style={{
                  width: `${progressPct}%`,
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--gradient-dk-blue-and-blue)',
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Info rows */}
      {infoRows && infoRows.length > 0 && (
        <div style={{ borderTop: '1px solid var(--foundation-grays-lighter)' }}>
          {infoRows.map((row, i) => (
            <div
              key={i}
              className="flex justify-between items-center px-4 py-2"
              style={{
                borderBottom:
                  i < infoRows.length - 1
                    ? '1px solid var(--foundation-grays-lighter)'
                    : undefined,
                fontSize: 'var(--font-size-xs)',
              }}
            >
              <span style={{ color: 'var(--foundation-grays-dark)' }}>{row.label}</span>
              <span
                className="font-semibold"
                style={{ color: 'var(--text-default)' }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
