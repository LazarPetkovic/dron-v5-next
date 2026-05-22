import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CtaBlock } from '@/components/ui/cta-block'
import { MediaPlaceholder } from '@/components/ui/media-placeholder'
import { processSteps, trustPoints } from '@/data/site-data'

export const metadata: Metadata = {
  title: 'Studio | About Dron V5',
  description: 'Learn about Dron V5, a Belgrade-based drone visual production studio for property films, aerial photography, weddings, events and location stories.',
}

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="About / Studio"
        title="Focused aerial production for clean, cinematic visual results."
        text="Dron V5 plans, captures and edits drone visuals for properties, events and locations in Belgrade."
      />

      <section className="container-wide grid gap-8 md:grid-cols-[1fr_1.05fr]">
        <div className="glass rounded-[30px] p-7 md:p-10">
          <div className="text-[0.72rem] uppercase tracking-[0.24em] text-white/45">Studio statement</div>
          <h2 className="text-statement mt-5 font-semibold">Built around planning, movement and light.</h2>
          <p className="text-body mt-5 max-w-xl">
            Every flight starts with a clear purpose: what the location needs to show, when the light works best, and how the final video or photo set will be used.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step.title} className="glass rounded-[22px] p-4">
                <div className="text-2xl font-semibold">{String(index + 1).padStart(2, '0')}</div>
                <div className="mt-2 text-sm font-semibold text-white/82">{step.title}</div>
                <p className="mt-2 text-sm leading-6 text-white/65">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
        <MediaPlaceholder label="Behind the scenes" title="Planning, capture and delivery workflow" height="500px" />
      </section>

      <section className="container-wide section-gap">
        <div className="portfolio-section__header">
          <div className="eyebrow">Trust points</div>
          <h2 className="portfolio-section__title">A focused workflow without fake numbers.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point.title} className="glass rounded-[26px] p-6">
              <div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/45">Dron V5</div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{point.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBlock title="Let us plan the right aerial approach for your project." secondaryLabel={undefined} />
    </>
  )
}
