import Link from 'next/link'
import { navItems } from '@/data/site-data'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container pt-5">
        <div className="glass flex items-center justify-between rounded-full px-4 py-3 md:px-6">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em] text-white/90">
            Dron V5
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.78rem] uppercase tracking-[0.22em] text-white/68 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="btn-secondary hidden md:inline-flex">
            Start a Project
          </Link>
          <Link href="/contact" className="text-[0.78rem] uppercase tracking-[0.22em] text-white/80 md:hidden">
            Menu
          </Link>
        </div>
      </div>
    </header>
  )
}
