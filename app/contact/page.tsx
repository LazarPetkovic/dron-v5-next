import { MediaPlaceholder } from '@/components/ui/media-placeholder'

export default function ContactPage() {
  return (
    <>
      <section className="container section-gap pt-32 md:pt-40">
        <div className="eyebrow">Contact</div>
        <h1 className="text-statement mt-6 max-w-4xl font-semibold">
          Contact layout with premium spacing and a direct path to action.
        </h1>
      </section>

      <section className="container-wide pb-16">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-[30px] p-7 md:p-10">
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/45">Direct contact</div>
            <h2 className="mt-5 text-3xl font-semibold">Placeholder contact details</h2>
            <div className="mt-6 space-y-4 text-white/72">
              <div>hello@placeholder.studio</div>
              <div>+381 60 000 000</div>
              <div>Belgrade / Available for remote projects</div>
            </div>

            <form className="mt-8 grid gap-4">
              <input className="glass rounded-2xl px-4 py-3 outline-none" placeholder="Your name" />
              <input className="glass rounded-2xl px-4 py-3 outline-none" placeholder="Your email" />
              <textarea className="glass min-h-36 rounded-2xl px-4 py-3 outline-none" placeholder="Project details" />
              <button type="button" className="btn-primary w-fit">
                Send inquiry
              </button>
            </form>
          </div>

          <MediaPlaceholder label="Mood block" title="Map or visual placeholder" height="100%" />
        </div>
      </section>
    </>
  )
}
