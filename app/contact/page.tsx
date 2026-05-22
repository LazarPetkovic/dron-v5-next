import type { Metadata } from 'next'
import { ContactPanel } from '@/components/sections/contact-panel'
import { PageHero } from '@/components/sections/page-hero'
import { ProjectTypeShortcuts } from '@/components/sections/project-type-shortcuts'

export const metadata: Metadata = {
  title: 'Contact | Dron V5',
  description: 'Contact Dron V5 for drone video, aerial photography, property visuals, wedding coverage and event filming in Belgrade.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need filmed from above."
        text="Share the location, date and project type. Dron V5 will suggest the best aerial visual approach."
      />
      <ContactPanel />
      <ProjectTypeShortcuts />
      <section className="container-wide pb-16">
        <div className="glass rounded-[26px] p-6 text-body">
          Include the location, date and goal. If you are not sure what package you need, send the basics and Dron V5 will suggest the right direction.
        </div>
      </section>
    </>
  )
}
