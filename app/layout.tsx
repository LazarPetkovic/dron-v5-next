import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Dron V5 — Cinematic Portfolio',
  description: 'Cinematic portfolio placeholder site built in Next.js from the V5 design specification.',
  icons: {
    icon: [{ url: '/icon.png?v=2', type: 'image/png' }],
    shortcut: ['/icon.png?v=2'],
    apple: [{ url: '/icon.png?v=2', type: 'image/png' }],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-mood="night" suppressHydrationWarning>
      <body>
        <Script id="mood-init" strategy="beforeInteractive">
          {"try{var mood=localStorage.getItem('mood');document.documentElement.dataset.mood=mood==='day'?'day':'night'}catch(e){}"}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
