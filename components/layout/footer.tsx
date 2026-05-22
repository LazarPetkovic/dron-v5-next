import Link from 'next/link'
import { contactInfo, navItems, socialLinks } from '@/data/site-data'

export function Footer() {
  return (
    <footer className="fine-line mt-20">
      <div className="container py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/90">Dron V5</div>
            <p className="mt-4 max-w-md text-body">
              Cinematic drone video and aerial photography for Belgrade properties, events, weddings, land and location stories.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/45">Quick links</div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/72">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/45">Contact</div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/72">
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
              <span>{contactInfo.serviceArea}</span>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/45">Social</div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/72">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
