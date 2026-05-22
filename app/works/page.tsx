import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/page-hero'
import { ProjectGrid } from '@/components/sections/project-grid'
import { CtaBlock } from '@/components/ui/cta-block'

export const metadata: Metadata = {
  title: 'Works | Dron V5 Drone Portfolio',
  description: 'Explore Dron V5 drone video and aerial photography work for Belgrade properties, land, weddings, events, construction and locations.',
}

export default function WorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Works / Portfolio"
        title="Drone visuals for properties, weddings, events and locations."
        text="A selection structure for aerial films, stills and project stories from Belgrade."
      />

      <section className="container-wide pb-10">
        <div className="relative min-h-[440px] overflow-hidden rounded-[24px] border border-white/10 bg-[#070b11] shadow-[0_18px_50px_rgba(0,0,0,0.35)] md:min-h-[620px]">
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
            <source src="/videos/NightCity.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,17,0.08),rgba(7,11,17,0.68))]" />
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/25 px-3 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-white/70 backdrop-blur-md">
            Featured visual
          </div>
        </div>
      </section>

      <ProjectGrid />

      <section className="container-wide section-gap pt-0">
        <div className="glass grid gap-6 rounded-[30px] p-7 md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <div className="eyebrow">Case study preview</div>
            <h2 className="text-statement mt-6 font-semibold">From location brief to polished aerial story.</h2>
          </div>  
          <div>
            <p className="text-body max-w-2xl">
              A complete project can explain the location, capture plan, strongest angles, edit direction and final delivery without turning the page into a heavy text document.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Start similar project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock title="Have a location or event to film?" text="Send the basics and Dron V5 will suggest the best aerial approach for the project." secondaryLabel={undefined} />
    </>
  )
}
