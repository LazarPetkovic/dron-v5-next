import { FAQSection } from '@/components/sections/faq-section'
import { FeaturedWork } from '@/components/sections/featured-work'
import { HomeHero } from '@/components/sections/home-hero'
import { PortfolioCluster } from '@/components/sections/portfolio-cluster'
import { ProcessSection } from '@/components/sections/process-section'
import { ServicesPreview } from '@/components/sections/services-preview'
import { StudioTrust } from '@/components/sections/studio-trust'
import { CtaBlock } from '@/components/ui/cta-block'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesPreview />
      <ProcessSection />
      <FeaturedWork />
      <PortfolioCluster />
      <StudioTrust />
      <FAQSection />
      <CtaBlock />
    </>
  )
}
