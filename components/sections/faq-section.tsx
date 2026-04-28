import { faqs } from '@/data/site-data'

export function FAQSection() {
  return (
    <section className="section-gap pt-0">
      <div className="container-wide">
        <div className="portfolio-section__header">
          <div className="eyebrow">FAQ</div>
          <h2 className="portfolio-section__title">Good details before the first flight.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <details key={item.question} className="glass rounded-[22px] p-5">
              <summary className="cursor-pointer text-base font-semibold text-white">{item.question}</summary>
              <p className="text-body mt-4">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
