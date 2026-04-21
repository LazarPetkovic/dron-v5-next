import { CtaBlock } from '@/components/ui/cta-block'
import { MediaPlaceholder } from '@/components/ui/media-placeholder'
import { projects } from '@/data/site-data'

export default function WorksPage() {
  return (
    <>
      <section className="container section-gap pt-32 md:pt-40">
        <div className="eyebrow">Works / Portfolio</div>
        <h1 className="text-statement mt-6 max-w-4xl font-semibold">
          A clustered portfolio page with room for stills, reels, and case-study proof.
        </h1>
        <p className="text-body mt-6 max-w-2xl">
          This page keeps the V5 idea intact: one dominant visual, supporting media tiles, and no flat catalog feeling.
        </p>
      </section>

      <section className="container-wide pb-10">
        <MediaPlaceholder label="Featured visual" title="Portfolio hero placeholder" height="620px" />
      </section>

      <section className="section-gap pt-8">
        <div className="container-wide grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.title} className={index === 0 ? 'md:col-span-2' : ''}>
              <MediaPlaceholder
                label={project.tag}
                title={project.title}
                height={index === 0 ? '430px' : index === 3 ? '360px' : '300px'}
                compact={index !== 0}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="container-wide section-gap pt-0">
        <div className="glass grid gap-6 rounded-[30px] p-7 md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <div className="eyebrow">Case-study block</div>
            <h2 className="text-statement mt-6 font-semibold">A place for the story behind the strongest project.</h2>
          </div>
          <p className="text-body max-w-2xl">
            When real content is added, this block can explain the brief, the capture style, the result, and the visual treatment without turning into a heavy text section.
          </p>
        </div>
      </section>

      <CtaBlock />
    </>
  )
}
