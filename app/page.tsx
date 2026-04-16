import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { TechStackMarquee } from "@/components/tech-stack-marquee"
import { EducationSection } from "@/components/education-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TechStackMarquee />
      <EducationSection />
      <ExperienceSection />
      <Footer />
    </main>
  )
}
