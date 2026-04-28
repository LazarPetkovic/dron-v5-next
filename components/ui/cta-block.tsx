import Link from 'next/link'

type CtaBlockProps = {
  eyebrow?: string
  title?: string
  text?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CtaBlock({
  eyebrow = 'Start a project',
  title = 'Tell us what you need filmed from above.',
  text = 'Share the location, date, and project type. Dron V5 will suggest the best aerial visual approach.',
  primaryLabel = 'Send inquiry',
  primaryHref = '/contact',
  secondaryLabel = 'View works',
  secondaryHref = '/works',
}: CtaBlockProps) {
  return (
    <section className="section-gap">
      <div className="container">
        <div className="glass mx-auto max-w-[820px] rounded-[32px] px-6 py-12 text-center md:px-10 md:py-16">
          {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
          <h2 className="mt-6 text-statement max-w-3xl mx-auto">{title}</h2>
          {text ? <p className="text-body mx-auto mt-5 max-w-2xl">{text}</p> : null}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link href={secondaryHref} className="btn-secondary">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
