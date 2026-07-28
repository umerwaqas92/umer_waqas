import type { ReactNode } from 'react'

interface Props {
  tag: string
  title: ReactNode
  subtitle?: string
  icon?: string
}

export default function SectionHeader({ tag, title, subtitle, icon }: Props) {
  return (
    <div className="text-center mb-16 relative z-10">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-[0.8rem] tracking-wider uppercase mb-4 border border-primary/20">
        {icon && <i className={`fas ${icon} text-[0.75rem]`} />}
        {tag}
      </span>
      <h2 className="text-[2.6rem] font-extrabold mb-4 leading-tight text-text tracking-tight max-md:text-[2rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-[1.05rem] max-w-2xl mx-auto mb-5 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-[80px] h-[4px] gradient-primary rounded-full mx-auto" />
    </div>
  )
}
