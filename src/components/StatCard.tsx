interface Props {
  title: string
  value: string | number
  subtitle?: string
  accent?: 'blue' | 'green' | 'purple' | 'orange'
}

const accents = {
  blue: 'text-brand-600',
  green: 'text-status-success',
  purple: 'text-purple-600',
  orange: 'text-orange-600',
}

export default function StatCard({ title, value, subtitle, accent = 'blue' }: Props) {
  return (
    <div className="card">
      <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{title}</div>
      <div className={`text-2xl font-bold ${accents[accent]}`}>{value}</div>
      {subtitle && <div className="text-xs text-neutral-400 mt-1">{subtitle}</div>}
    </div>
  )
}
