interface FieldLabelProps {
  label: string
  bold?: boolean
  info?: boolean
  required?: boolean
}

export default function FieldLabel({
  label,
  bold = false,
  info = false,
  required = false,
}: FieldLabelProps) {
  return (
    <label
      className="inline-flex items-center gap-1"
      style={{
        fontSize: 'var(--font-size-2xs)',
        color: 'var(--text-default)',
        fontWeight: bold ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
        lineHeight: 'var(--line-height-xs)',
      }}
    >
      <span>{label}</span>
      {required && (
        <span aria-hidden="true" style={{ color: 'var(--semantics-error, #c12506)' }}>
          *
        </span>
      )}
      {info && (
        <span
          title="More information"
          className="inline-flex items-center justify-center cursor-help"
          style={{
            width: 14,
            height: 14,
            borderRadius: 'var(--radius-circle)',
            border: '1px solid var(--foundation-grays-gray)',
            fontSize: 10,
            color: 'var(--foundation-grays-gray)',
            lineHeight: 1,
          }}
        >
          i
        </span>
      )}
    </label>
  )
}
