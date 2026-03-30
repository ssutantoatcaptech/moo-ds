import { type ReactNode, useState } from 'react'

type Variant = 'Success' | 'Error' | 'Warning' | 'Information'

interface InlineMessageProps {
  variant?: Variant
  title: string
  children: ReactNode
  onDismiss?: () => void
  className?: string
}

const config: Record<Variant, { stripe: string; bg: string; border: string; icon: string }> = {
  Success:     { stripe: 'bg-[#1fa668]', bg: 'bg-[#edf8f3]', border: 'border-[#1fa668]', icon: '✓' },
  Error:       { stripe: 'bg-[#c12506]', bg: 'bg-[#fdf4f2]', border: 'border-[#c12506]', icon: '!' },
  Warning:     { stripe: 'bg-[#df6903]', bg: 'bg-[#fef8eb]', border: 'border-[#df6903]', icon: '⚠' },
  Information: { stripe: 'bg-[#067ac1]', bg: 'bg-[#f2f8fe]', border: 'border-[#067ac1]', icon: 'ℹ' },
}

export default function InlineMessage({ variant = 'Success', title, children, onDismiss, className }: InlineMessageProps) {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null
  const { stripe, bg, border, icon } = config[variant]

  function handleDismiss() {
    setDismissed(true)
    onDismiss?.()
  }

  return (
    <div className={`flex rounded-xl overflow-hidden max-w-[477px] ${className || ''}`}>
      <div className={`w-10 shrink-0 flex items-center justify-center ${stripe}`}>
        <span className="text-white text-lg font-bold">{icon}</span>
      </div>
      <div className={`flex-1 p-4 border border-l-0 rounded-r-xl ${bg} ${border}`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-[#444] leading-5">{title}</div>
            <div className="text-sm text-[#444] leading-5 mt-1">{children}</div>
          </div>
          {onDismiss !== undefined && (
            <button onClick={handleDismiss} className="text-[#444] opacity-60 hover:opacity-100 text-base shrink-0 leading-none">&times;</button>
          )}
        </div>
      </div>
    </div>
  )
}
