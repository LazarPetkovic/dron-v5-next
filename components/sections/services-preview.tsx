import Link from 'next/link'
import { services } from '@/data/site-data'

export function ServicesPreview() {
  return (
    <section className="container-wide services-preview">
      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className={`glass card-hover service-card ${service.featured ? 'service-card--featured' : ''}`}>
            <div className="service-card__label">{service.featured ? 'Featured service' : 'Service'}</div>
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
  )
}
