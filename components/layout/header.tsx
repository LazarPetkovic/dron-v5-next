import Link from 'next/link'
import Image from 'next/image'
import { navItems } from '@/data/site-data'

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__bar">
        <div className="container site-header__inner">
          <Link href="/" className="site-header__brand">
            <Image
              src="/images/DronBrand-nav.png"
              alt="Dron V5"
              width={186}
              height={66}
              priority
              className="site-header__brand-mark"
            />
            <span className="site-header__brand-text">Dron V5</span>
          </Link>
          <nav className="site-header__nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="site-header__link">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="btn-secondary site-header__cta">
            Send Inquiry
          </Link>
          <Link href="/contact" className="site-header__menu">
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
