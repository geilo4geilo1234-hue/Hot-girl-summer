import { HeroSection } from "@/components/hero-section"
import { PowerStatementSection } from "@/components/power-statement-section"
import { LifestyleSection } from "@/components/lifestyle-section"
import { CTASection } from "@/components/cta-section"
import { FeaturedImageSection } from "@/components/featured-image-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedImageSection />
      <PowerStatementSection />
      <LifestyleSection />
      <CTASection />
      <Footer />
    </main>
  )
}
