import { projectTypes } from '@/data/site-data'

export function ProjectTypeShortcuts() {
  return (
    <section className="container-wide section-gap pt-0">
      <div className="portfolio-section__header">
        <div className="eyebrow">Project types</div>
        <h2 className="portfolio-section__title">Not sure what to ask for? Start with the type of location or event.</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projectTypes.map((type) => (
          <div key={type} className="glass rounded-[22px] p-5 text-sm font-semibold text-white/82">
            {type}
          </div>
        ))}
      </div>
    </section>
  )
}
