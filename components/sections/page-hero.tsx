import type { ReactNode } from 'react'
import { SectionHeading } from '@/components/ui/section-heading'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  text?: ReactNode
}

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="container section-gap pt-32 md:pt-40">
      <SectionHeading eyebrow={eyebrow} title={title} text={text} />
    </section>
  )
}
