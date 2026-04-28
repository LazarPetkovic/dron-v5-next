import Link from 'next/link'
import { MediaPlaceholder } from '@/components/ui/media-placeholder'
import { trustPoints } from '@/data/site-data'

export function StudioTrust() {
  return (
    <section className="mini-studio-section">
      <div className="container-wide mini-studio-grid">
        <div className="glass mini-studio-panel">
          <div className="eyebrow">Studio</div>
          <h2 className="mini-studio-title">Small, focused aerial production for clear visual results.</h2>
          <p className="mini-studio-text">
            Dron V5 keeps the process focused: plan the location, capture the strongest aerial angles, and deliver visuals that fit the project goal.
          </p>
          <div className="mt-8 grid gap-3">
            {trustPoints.map((point) => (
              <div key={point.title} className="glass rounded-[18px] p-4">
                <div className="text-sm font-semibold text-white">{point.title}</div>
                <p className="mt-2 text-sm leading-6 text-white/65">{point.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/studio" className="btn-secondary">
              About studio
            </Link>
          </div>
        </div>
        <MediaPlaceholder label="Behind the scenes" title="Planning, flight direction and delivery workflow" height="420px" />
      </div>
    </section>
  )
}
