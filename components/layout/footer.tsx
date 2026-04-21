import Link from 'next/link'

export function Footer() {
  return (
    <footer className="fine-line mt-20">
      <div className="container py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/90">Dron V5</div>
            <p className="mt-4 max-w-md text-body">
              Cinematic placeholder studio built from the V5 system: visual-first, layered, dark, and portfolio-driven.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/45">Quick links</div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/72">
              <Link href="/works">Works</Link>
              <Link href="/studio">Studio</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/45">Contact</div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/72">
              <span>hello@placeholder.studio</span>
              <span>+381 60 000 000</span>
              <span>Belgrade / Remote</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
