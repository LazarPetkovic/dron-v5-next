import Link from 'next/link'

export function CtaBlock() {
  return (
    <section className="section-gap">
      <div className="container">
        <div className="glass mx-auto max-w-[820px] rounded-[32px] px-6 py-12 text-center md:px-10 md:py-16">
          <div className="eyebrow">Final CTA</div>
          <h2 className="mt-6 text-statement max-w-3xl mx-auto">
            Placeholder ready. <span className="accent">Real visuals</span> go here next.
          </h2>
          <p className="text-body mx-auto mt-5 max-w-2xl">
            This build is intentionally prepared for real project stills, teaser videos, and client copy without changing the overall V5 cinematic system.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-primary">
              Start the real version
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
