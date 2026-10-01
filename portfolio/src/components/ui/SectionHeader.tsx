import type { ReactNode } from 'react'

interface Props {
  tag: string
  title: ReactNode
  subtitle?: string
  icon?: string
}

export default function SectionHeader({ tag, title, subtitle }: Props) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{tag}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}
