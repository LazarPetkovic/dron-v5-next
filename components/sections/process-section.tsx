import { processSteps } from '@/data/site-data'

export function ProcessSection() {
  return (
    <section className="statement-section">
      <div className="container-wide statement-grid">
        <div className="statement-copy">
          <div className="eyebrow">Creative approach</div>
          <h2 className="statement-title">
            Planned for <span className="accent">movement</span>, light, and the right angle.
          </h2>
          <p className="statement-text">
            Every project starts with the location and the final use of the visuals: the strongest angles, the right timing, and a clean edit rhythm that makes the result feel intentional.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article key={step.title} className="process-card">
              <div className="process-card__number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="process-card__title">{step.title}</h3>
              <p className="process-card__text">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
