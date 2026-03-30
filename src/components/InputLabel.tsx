interface InputLabelProps {
  label: string
  required?: boolean
  info?: boolean
}

export default function InputLabel({
  label,
  required = false,
  info = false,
}: InputLabelProps) {
  return (
    <label
      className="inline-flex items-center gap-1"
      style={{
        fontSize: 'var(--font-size-2xs)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--foundation-grays-gray)',
        textTransform: 'uppercase',
        letterSpacing: '0.36px',
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
            textTransform: 'none',
          }}
        >
          i
        </span>
      )}
    </label>
  )
}
