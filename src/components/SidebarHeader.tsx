interface SidebarHeaderProps {
  title: string
  description?: string
  className?: string
}

export default function SidebarHeader({ title, description, className = '' }: SidebarHeaderProps) {
  return (
    <div className={`border-t-[12px] border-t-[#105fa8] bg-white px-5 py-4 ${className}`}>
      <h3 className="text-xl font-semibold text-[#003a70]">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-[#5d5d5d]">{description}</p>
      )}
    </div>
  )
}
