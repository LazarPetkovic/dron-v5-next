import Link from 'next/link'
import { navItems } from '@/data/site-data'

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__bar">
        <div className="container site-header__inner">
          <Link href="/" className="site-header__brand">
            Dron V5
          </Link>
          <nav className="site-header__nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="site-header__link">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="btn-secondary site-header__cta">
            Start a Project
          </Link>
          <Link href="/contact" className="site-header__menu">
            Menu
          </Link>
        </div>
      </div>
    </header>
  )
}
