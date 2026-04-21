import { CtaBlock } from '@/components/ui/cta-block'
import { MediaPlaceholder } from '@/components/ui/media-placeholder'

export default function StudioPage() {
  return (
    <>
      <section className="container section-gap pt-32 md:pt-40">
        <div className="eyebrow">About / Studio</div>
        <h1 className="text-statement mt-6 max-w-4xl font-semibold">
          A minimal studio page built to support trust without slowing the flow.
        </h1>
      </section>

      <section className="container-wide grid gap-8 md:grid-cols-[1fr_1.05fr]">
        <div className="glass rounded-[30px] p-7 md:p-10">
          <div className="text-[0.72rem] uppercase tracking-[0.24em] text-white/45">Studio statement</div>
          <h2 className="text-statement mt-5 font-semibold">Short, confident, and visual-first.</h2>
          <p className="text-body mt-5 max-w-xl">
            This area is intentionally concise. In the final version it can hold a compact studio story, shooting philosophy, and production approach without turning into a generic corporate “about us” page.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="glass rounded-[22px] p-4">
              <div className="text-2xl font-semibold">01</div>
              <div className="mt-2 text-sm text-white/70">Capture</div>
            </div>
            <div className="glass rounded-[22px] p-4">
              <div className="text-2xl font-semibold">02</div>
              <div className="mt-2 text-sm text-white/70">Edit</div>
            </div>
            <div className="glass rounded-[22px] p-4">
              <div className="text-2xl font-semibold">03</div>
              <div className="mt-2 text-sm text-white/70">Deliver</div>
            </div>
          </div>
        </div>
        <MediaPlaceholder label="Behind the scenes" title="Studio visual placeholder" height="500px" />
      </section>

      <section className="container-wide section-gap">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="glass rounded-[26px] p-6">
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/45">Trust</div>
            <div className="mt-4 text-4xl font-semibold text-white">12+</div>
            <div className="mt-2 text-sm text-white/65">Placeholder premium projects</div>
          </div>
          <div className="glass rounded-[26px] p-6">
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/45">Reach</div>
            <div className="mt-4 text-4xl font-semibold text-white">3</div>
            <div className="mt-2 text-sm text-white/65">Placeholder service directions</div>
          </div>
          <div className="glass rounded-[26px] p-6">
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/45">Style</div>
            <div className="mt-4 text-4xl font-semibold text-white">V5</div>
            <div className="mt-2 text-sm text-white/65">Dark, cinematic, controlled</div>
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  )
}
