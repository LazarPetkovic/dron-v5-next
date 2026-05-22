import { MediaPlaceholder } from '@/components/ui/media-placeholder'
import { contactInfo, projectTypes, socialLinks } from '@/data/site-data'

export function ContactPanel() {
  return (
    <section className="container-wide pb-16">
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-[30px] p-7 md:p-10">
          <div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/45">Direct contact</div>
          <h2 className="mt-5 text-3xl font-semibold">Send the basics and we will shape the aerial plan.</h2>
          <div className="mt-6 space-y-4 text-white/72">
            <a href={`mailto:${contactInfo.email}`} className="block hover:text-white">
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="block hover:text-white">
              {contactInfo.phone}
            </a>
            <div>{contactInfo.serviceArea}</div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="btn-secondary" target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>

          <form className="mt-8 grid gap-4" action={`mailto:${contactInfo.email}`} method="post" encType="text/plain">
            <label>
              <span className="sr-only">Your name</span>
              <input className="glass w-full rounded-2xl px-4 py-3 outline-none" name="name" placeholder="Your name" />
            </label>
            <label>
              <span className="sr-only">Email or phone</span>
              <input className="glass w-full rounded-2xl px-4 py-3 outline-none" name="contact" placeholder="Email or phone" />
            </label>
            <label>
              <span className="sr-only">Project type</span>
              <select className="glass w-full rounded-2xl px-4 py-3 text-white/75 outline-none" name="projectType" defaultValue="">
                <option value="" disabled>
                  Project type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className="sr-only">Location</span>
              <input className="glass w-full rounded-2xl px-4 py-3 outline-none" name="location" placeholder="Location" />
            </label>
            <label>
              <span className="sr-only">Date or timeline</span>
              <input className="glass w-full rounded-2xl px-4 py-3 outline-none" name="timeline" placeholder="Date / timeline" />
            </label>
            <label>
              <span className="sr-only">Project details</span>
              <textarea className="glass min-h-36 w-full rounded-2xl px-4 py-3 outline-none" name="details" placeholder="Project details" />
            </label>
            <button type="submit" className="btn-primary w-fit">
              Send inquiry
            </button>
          </form>
        </div>

        <MediaPlaceholder label="Belgrade" title="Map or location visual placeholder" height="100%" />
      </div>
    </section>
  )
}
