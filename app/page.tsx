import Link from 'next/link'
import { CtaBlock } from '@/components/ui/cta-block'
import { MediaPlaceholder } from '@/components/ui/media-placeholder'
import { MoodToggle } from '@/components/ui/mood-toggle'
import { projects, services } from '@/data/site-data'

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-backdrop">
          <div className="hero-media hero-media--full" />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow">Aerial visual production</div>
            <h1 className="hero-title">
              Cinematic drone visuals for places worth <span className="accent">remembering</span>.
            </h1>
            <p className="hero-description">
              Premium aerial films for luxury real estate, destination events, and brand stories that need atmosphere, scale, and a polished point of view.
            </p>
            <MoodToggle />
            {/* <div className="hero-proof" aria-label="Core services">
              <span>Real estate</span>
              <span>Events</span>
              <span>Tourism</span>
              <span>Brand films</span>
            </div> */}
            <div className="hero-actions">
              <Link href="/works" className="btn-primary">
                View works
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide services-preview">
        <div className="services-grid">
          {services.map((service, index) => (
            <article key={service.title} className={`glass card-hover service-card ${index === 1 ? 'service-card--featured' : ''}`}>
              <div className="service-card__label">{index === 1 ? 'Featured service' : 'Service'}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__text">{service.text}</p>
              <Link href="/works" className="service-card__link" aria-label={`View works for ${service.title}`}>
                <span>View works</span>
                <span className="service-card__arrow" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="statement-section">
        <div className="container-wide statement-grid">
          <div className="statement-copy">
            <div className="eyebrow">Creative approach</div>
            <h2 className="statement-title">
              Built around <span className="accent">movement</span>, light, and atmosphere.
            </h2>
            <p className="statement-text">
              Every project starts with the mood of the place: the strongest angles, the right timing, and a clean edit rhythm that makes the final film feel intentional.
            </p>
          </div>
          <div className="grid-drift">
            <MediaPlaceholder label="Plan" title="Angles, light, timing" height="250px" compact />
            <MediaPlaceholder label="Capture" title="Motion with clean coverage" height="300px" compact />
            <MediaPlaceholder label="Edit" title="Hero films and social cuts" height="230px" compact />
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container-wide">
          <div className="featured-header">
            <div className="featured-header__copy">
              <div className="eyebrow">Featured project</div>
              <h2 className="featured-title">Featured work with cinematic scale and commercial purpose.</h2>
            </div>
            <Link href="/works" className="btn-secondary featured-link">
              Open portfolio
            </Link>
          </div>

          <div className="portfolio-cluster featured-cluster">
            <MediaPlaceholder label={projects[0].tag} title={projects[0].title} height="640px" />
            <div className="glass featured-panel featured-panel--sunset">
              <div className="featured-panel__label">Case 01 / Property film</div>
              <h3 className="featured-panel__title">{projects[0].title}</h3>
              <div className="featured-panel__meta" aria-label="Project details">
                <span>Drone + edit</span>
                <span>Hero film</span>
                <span>Social cuts</span>
              </div>
              <p className="featured-panel__text">{projects[0].text}</p>
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

      <section className="portfolio-section">
        <div className="container-wide">
          <div className="portfolio-section__header">
            <div className="eyebrow">Portfolio cluster</div>
            <h2 className="portfolio-section__title">Controlled asymmetry, placeholder by placeholder.</h2>
          </div>

          <div className="portfolio-cluster">
            <MediaPlaceholder label={projects[1].tag} title={projects[1].title} height="520px" />
            <div className="portfolio-side">
              <MediaPlaceholder label={projects[2].tag} title={projects[2].title} height="250px" compact />
              <MediaPlaceholder label={projects[3].tag} title={projects[3].title} height="250px" compact />
              <div className="portfolio-side__wide">
                <MediaPlaceholder label={projects[4].tag} title={projects[4].title} height="300px" compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mini-studio-section">
        <div className="container-wide mini-studio-grid">
          <div className="glass mini-studio-panel">
            <div className="eyebrow">Mini studio block</div>
            <h2 className="mini-studio-title">About the system, not the final brand.</h2>
            <p className="mini-studio-text">
              This version keeps the visual architecture, page rhythm, and placeholder media treatments ready for a full custom studio build. Real copy, client proof, and final project visuals can replace the placeholders without changing the core experience.
            </p>
          </div>
          <MediaPlaceholder label="Behind the scenes" title="Studio mood placeholder" height="420px" />
        </div>
      </section>

      <CtaBlock />
    </>
  )
}
