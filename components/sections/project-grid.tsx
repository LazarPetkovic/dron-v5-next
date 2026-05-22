import { MediaPlaceholder } from '@/components/ui/media-placeholder'
import { projects } from '@/data/site-data'

export function ProjectGrid() {
  return (
    <section className="section-gap pt-8">
      <div className="container-wide grid gap-5 md:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title} className={index === 0 ? 'md:col-span-2' : ''}>
            <MediaPlaceholder
              label={project.tag}
              title={project.title}
              height={index === 0 ? '430px' : index === 3 ? '360px' : '300px'}
              compact={index !== 0}
              imageSrc={project.imageSrc}
            />
            <div className="mt-4">
              <div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/45">{project.category}</div>
              <p className="text-body mt-2 max-w-2xl">{project.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
