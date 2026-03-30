interface FieldLabelErrorProps {
  message: string
}

export default function FieldLabelError({ message }: FieldLabelErrorProps) {
  return (
    <span
      role="alert"
      style={{
        fontSize: 'var(--font-size-2xs)',
        color: 'var(--semantics-error, #c12506)',
        lineHeight: 'var(--line-height-xs)',
      }}
    >
      {message}
    </span>
  )
}
