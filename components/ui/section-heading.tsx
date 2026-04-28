import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  text?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, text, align = 'left', className = '' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`${alignment} ${className}`.trim()}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2 className="text-statement mt-6 max-w-4xl font-semibold">{title}</h2>
      {text ? <p className="text-body mt-6 max-w-2xl">{text}</p> : null}
    </div>
  )
}
