import { type InputHTMLAttributes } from 'react'

type InputFieldVariant = 'default' | 'selected' | 'disabled' | 'noLineDefault' | 'noLineSelected' | 'noLineDisabled'

interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label: string
  variant?: InputFieldVariant
  id?: string
  onClear?: () => void
}

function EditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M11.5 1.5l3 3L5 14H2v-3L11.5 1.5z" stroke="#5d5d5d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ClearIcon({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center justify-center" type="button">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 4l8 8M12 4l-8 8" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  )
}

const isDisabled = (v: InputFieldVariant) => v === 'disabled' || v === 'noLineDisabled'
const isSelected = (v: InputFieldVariant) => v === 'selected' || v === 'noLineSelected'
const hasLine = (v: InputFieldVariant) => v === 'default' || v === 'selected' || v === 'disabled'

export default function InputField({
  label,
  variant = 'default',
  id,
  onClear,
  className,
  ...inputProps
}: InputFieldProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
  const disabled = isDisabled(variant)
  const selected = isSelected(variant)
  const showLine = hasLine(variant)

  const borderStyle = showLine
    ? selected
      ? 'border-b-2 border-b-[#105fa8]'
      : 'border-b border-b-[#5d5d5d]'
    : ''

  return (
    <div className={`flex flex-col gap-1 ${className || ''}`}>
      <label
        htmlFor={inputId}
        className="text-xs font-semibold uppercase tracking-[3px] text-[#333333]"
        style={{ fontFamily: 'var(--font-family-title, sans-serif)' }}
      >
        {label}
      </label>
      <div className={`flex items-center gap-2 pb-2 ${borderStyle}`}>
        <input
          id={inputId}
          disabled={disabled}
          className={`flex-1 text-base bg-transparent outline-none ${
            disabled
              ? 'text-[#bababa] placeholder-[#bababa] cursor-not-allowed'
              : 'text-[#333333] placeholder-[#888888]'
          }`}
          style={{ fontFamily: 'var(--font-family-body, sans-serif)' }}
          {...inputProps}
        />
        {selected && onClear ? (
          <ClearIcon onClick={onClear} />
        ) : (
          <span className={disabled ? 'opacity-40' : ''}>
            <EditIcon />
          </span>
        )}
      </div>
    </div>
  )
}
