import Link from 'next/link'
import { MediaPlaceholder } from '@/components/ui/media-placeholder'
import { projects } from '@/data/site-data'

export function FeaturedWork() {
  const featuredProject = projects[0]

  return (
    <section className="featured-section">
      <div className="container-wide">
        <div className="featured-header">
          <div className="featured-header__copy">
            <div className="eyebrow">Featured work</div>
            <h2 className="featured-title">Aerial stories with cinematic scale and commercial purpose.</h2>
          </div>
          <Link href="/works" className="btn-secondary featured-link">
            Open portfolio
          </Link>
        </div>

        <div className="portfolio-cluster featured-cluster">
          <MediaPlaceholder label={featuredProject.tag} title={featuredProject.title} height="640px" imageSrc={featuredProject.imageSrc} />
          <div className="glass featured-panel featured-panel--sunset">
            <div className="featured-panel__label">Case 01 / {featuredProject.category} film</div>
            <h3 className="featured-panel__title">{featuredProject.title}</h3>
            <div className="featured-panel__meta" aria-label="Project details">
              <span>Drone + edit</span>
              <span>Hero film</span>
              <span>Social cuts</span>
            </div>
            <p className="featured-panel__text">{featuredProject.text}</p>
            <div className="featured-panel__actions">
              <Link href="/works" className="btn-primary">
                View case study
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start similar project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
