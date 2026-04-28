import { MediaPlaceholder } from '@/components/ui/media-placeholder'
import { processSteps } from '@/data/site-data'

const heights = ['250px', '300px', '230px', '270px']

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
        <div className="grid-drift">
          {processSteps.map((step, index) => (
            <MediaPlaceholder key={step.title} label={step.title} title={step.text} height={heights[index] ?? '250px'} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
