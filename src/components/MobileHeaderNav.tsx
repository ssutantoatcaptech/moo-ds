interface MobileHeaderNavProps {
  title: string
  className?: string
}

export default function MobileHeaderNav({ title, className = '' }: MobileHeaderNavProps) {
  return (
    <div className={`flex items-center w-[375px] p-4 ${className}`}>
      <h2
        className="flex-1 text-[#838383] font-semibold"
        style={{ fontSize: 32, lineHeight: '40px', fontFamily: 'var(--font-family-title, sans-serif)' }}
      >
        {title}
      </h2>
    </div>
  )
}
