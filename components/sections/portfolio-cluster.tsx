import { MediaPlaceholder } from '@/components/ui/media-placeholder'
import { projects } from '@/data/site-data'

export function PortfolioCluster() {
  const previewProjects = projects.slice(1, 5)

  return (
    <section className="portfolio-section">
      <div className="container-wide">
        <div className="portfolio-section__header">
          <div className="eyebrow">Works</div>
          <h2 className="portfolio-section__title">A visual range built for Belgrade properties, events and locations.</h2>
        </div>

        <div className="portfolio-cluster">
          <MediaPlaceholder label={previewProjects[0].tag} title={previewProjects[0].title} height="520px" imageSrc={previewProjects[0].imageSrc} />
          <div className="portfolio-side">
            {previewProjects.slice(1, 3).map((project) => (
              <MediaPlaceholder key={project.title} label={project.tag} title={project.title} height="250px" compact imageSrc={project.imageSrc} />
            ))}
            <div className="portfolio-side__wide">
              <MediaPlaceholder label={previewProjects[3].tag} title={previewProjects[3].title} height="300px" compact imageSrc={previewProjects[3].imageSrc} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
