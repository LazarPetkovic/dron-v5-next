import Link from 'next/link'
import { CtaBlock } from '@/components/ui/cta-block'
import { MediaPlaceholder } from '@/components/ui/media-placeholder'
import { projects, services } from '@/data/site-data'

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[96vh] items-end overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="media-placeholder h-full rounded-none border-x-0 border-t-0" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,12,0.46),rgba(4,8,12,0.28)_30%,rgba(4,8,12,0.82)_100%)]" />
        </div>

        <div className="container relative z-10 pb-20 md:pb-28">
          <div className="max-w-[760px]">
            <div className="eyebrow">Visual-first portfolio</div>
            <h1 className="text-hero mt-6 max-w-[760px] font-semibold text-white">
              Placeholder frames for a <span className="accent">cinematic</span> studio site.
            </h1>
            <p className="text-body mt-6 max-w-[640px]">
              Built to follow the V5 direction: layered composition, premium dark surfaces, restrained motion, and a visual flow that feels like a studio, not a template. 
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/works" className="btn-primary">
                View works
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide relative z-20 -mt-14 md:-mt-20">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`glass card-hover rounded-[26px] p-5 md:p-6 ${index === 1 ? 'md:-translate-y-6' : ''}`}
            >
              <div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/45">Service Preview</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-body mt-3">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <div className="container-wide grid items-center gap-12 md:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="eyebrow">Statement block</div>
            <h2 className="text-statement mt-6 max-w-3xl font-semibold">
              The flow is built around <span className="accent">atmosphere</span>, not stacked business sections.
            </h2>
            <p className="text-body mt-6 max-w-xl">
              This homepage uses overlap, uneven pacing, and oversized visual placeholders so real media can drive the experience once it is dropped in.
            </p>
          </div>
          <div className="grid-drift">
            <MediaPlaceholder label="Still" title="Floating visual one" height="250px" compact />
            <MediaPlaceholder label="Clip" title="Floating visual two" height="300px" compact />
            <MediaPlaceholder label="Frame" title="Floating visual three" height="230px" compact />
          </div>
        </div>
      </section>

      <section className="section-gap pt-0">
        <div className="container-wide">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow">Featured project</div>
              <h2 className="text-statement mt-6 max-w-3xl font-semibold">Main proof block with hero-level scale.</h2>
            </div>
            <Link href="/works" className="btn-secondary hidden md:inline-flex">
              Open portfolio
            </Link>
          </div>

          <div className="portfolio-cluster items-stretch">
            <MediaPlaceholder label={projects[0].tag} title={projects[0].title} height="640px" />
            <div className="glass flex flex-col justify-end rounded-[28px] p-7 md:p-9">
              <div className="text-[0.72rem] uppercase tracking-[0.24em] text-white/45">Featured project text plate</div>
              <h3 className="mt-5 text-3xl font-semibold text-white">{projects[0].title}</h3>
              <p className="text-body mt-4">{projects[0].text}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/works" className="btn-primary">
                  View case study
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Ask for similar work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap pt-0">
        <div className="container-wide">
          <div className="mb-8">
            <div className="eyebrow">Portfolio cluster</div>
            <h2 className="text-statement mt-6 max-w-3xl font-semibold">Controlled asymmetry, placeholder by placeholder.</h2>
          </div>

          <div className="portfolio-cluster">
            <MediaPlaceholder label={projects[1].tag} title={projects[1].title} height="520px" />
            <div className="portfolio-side">
              <MediaPlaceholder label={projects[2].tag} title={projects[2].title} height="250px" compact />
              <MediaPlaceholder label={projects[3].tag} title={projects[3].title} height="250px" compact />
              <div className="md:col-span-2">
                <MediaPlaceholder label={projects[4].tag} title={projects[4].title} height="300px" compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap pt-0">
        <div className="container-wide grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="glass rounded-[28px] p-7 md:p-10">
            <div className="eyebrow">Mini studio block</div>
            <h2 className="text-statement mt-6 font-semibold">About the system, not the final brand.</h2>
            <p className="text-body mt-5 max-w-xl">
              This version keeps the visual architecture, page rhythm, and placeholder media treatments ready for a full custom studio build. Real copy, client proof, and final project visuals can replace the placeholders without changing the core experience.
            </p>
          </div>
          <MediaPlaceholder label="Behind the scenes" title="Studio mood placeholder" height="420px" />
        </div>
      </section>

      <CtaBlock />
    </>
  )
}
