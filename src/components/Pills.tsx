type PillStatus = 'alert' | 'error' | 'information' | 'pending' | 'success' | 'tab'
type PillStyle = 'solid' | 'outline'

interface PillsProps {
  label: string
  status?: PillStatus
  pillStyle?: PillStyle
  className?: string
}

const solidColors: Record<PillStatus, string> = {
  alert: 'bg-[#fcbc0b] text-white',
  error: 'bg-[#c12506] text-white',
  information: 'bg-[#067ac1] text-white',
  pending: 'bg-[#5d5d5d] text-white',
  success: 'bg-[#1fa668] text-white',
  tab: 'bg-[#003a70] text-white',
}

const outlineColors: Record<PillStatus, string> = {
  alert: 'border-[#fcbc0b] text-[#333333]',
  error: 'border-[#c12506] text-[#333333]',
  information: 'border-[#067ac1] text-[#333333]',
  pending: 'border-[#5d5d5d] text-[#333333]',
  success: 'border-[#1fa668] text-[#333333]',
  tab: 'border-[#003a70] text-[#333333]',
}

export default function Pills({ label, status = 'information', pillStyle = 'solid', className = '' }: PillsProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide'
  const colors = pillStyle === 'solid'
    ? solidColors[status]
    : `bg-white border ${outlineColors[status]}`

  return (
    <span className={`${base} ${colors} ${className}`}>
      {label}
    </span>
  )
}
