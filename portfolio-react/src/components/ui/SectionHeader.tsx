import type { ReactNode } from 'react'

interface Props {
  tag: string
  title: ReactNode
}

export default function SectionHeader({ tag, title }: Props) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-[18px] py-[6px] rounded-full bg-primary/10 text-primary-light text-[0.85rem] font-medium tracking-[1px] uppercase mb-4">
        {tag}
      </span>
      <h2 className="text-[2.5rem] font-extrabold mb-4 leading-tight max-md:text-[2rem]">
        {title}
      </h2>
      <div className="w-[60px] h-[4px] gradient-primary rounded-full mx-auto" />
    </div>
  )
}
