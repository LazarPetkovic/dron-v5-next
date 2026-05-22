import Link from 'next/link'

export function HomeHero() {
  return (
    <section className="hero-section">
      <div className="hero-backdrop">
        <div className="hero-media hero-media--full" />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-copy">
          <div className="eyebrow">Belgrade aerial visual production</div>
          <h1 className="hero-title">
            Cinematic drone visuals for properties, events and locations in <span className="accent">Belgrade</span>.
          </h1>
          <p className="hero-description">
            Drone films and aerial photography for houses, buildings, land, weddings, events, construction progress and brand stories.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Send inquiry
            </Link>
            <Link href="/works" className="btn-secondary">
              View works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
