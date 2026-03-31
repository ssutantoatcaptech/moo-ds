import { type InputHTMLAttributes } from 'react'

type FormFieldState = 'default' | 'hover' | 'disabled' | 'error'

interface FormFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label: string
  fieldState?: FormFieldState
  error?: string
  id?: string
  showSearchIcon?: boolean
  showClearIcon?: boolean
  onClear?: () => void
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="#5d5d5d" strokeWidth="1.5" />
      <path d="M11 11l3.5 3.5" stroke="#5d5d5d" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ClearIcon({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center justify-center hover:bg-[#f0f0f0] rounded-full p-0.5 transition-colors" type="button">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 4l8 8M12 4l-8 8" stroke="#5d5d5d" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  )
}

const stateStyles: Record<FormFieldState, string> = {
  default: 'border-[#bababa] bg-white',
  hover: 'border-[#105fa8] bg-white shadow-[0_0_0_2px_rgba(16,95,168,0.2)]',
  disabled: 'border-[#e0e0e0] bg-[#f5f5f5] cursor-not-allowed',
  error: 'border-[#c12506] bg-white',
}

export default function FormField({
  label,
  fieldState = 'default',
  error,
  id,
  showSearchIcon = true,
  showClearIcon = true,
  onClear,
  className,
  ...inputProps
}: FormFieldProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
  const isDisabled = fieldState === 'disabled'
  const isError = fieldState === 'error'

  return (
    <div className={`flex flex-col gap-1 ${className || ''}`}>
      <label htmlFor={inputId} className="text-sm font-semibold text-[#333333]">
        {label}
      </label>
      <div className={`flex items-center gap-2 px-3 py-2 rounded border transition-all ${stateStyles[fieldState]}`}>
        {showSearchIcon && (
          <span className="shrink-0">
            <SearchIcon />
          </span>
        )}
        <input
          id={inputId}
          disabled={isDisabled}
          className="flex-1 text-sm text-[#333333] bg-transparent outline-none placeholder-[#888888] disabled:cursor-not-allowed disabled:text-[#888888]"
          {...inputProps}
        />
        {showClearIcon && !isDisabled && (
          <span className="shrink-0">
            <ClearIcon onClick={onClear} />
          </span>
        )}
      </div>
      {isError && error && (
        <span className="text-xs text-[#c12506]">{error}</span>
      )}
    </div>
  )
}
