import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/sections/contact-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { FooterSection } from "@/components/sections/footer-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectSection } from "@/components/sections/project-section"
import { SkillsSection } from "@/components/sections/skills-section"

export function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-svh bg-background">
      <a
        href="#main-content"
        className="sr-only fixed top-3 left-3 z-50 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:not-sr-only"
      >
        Skip to content
      </a>

      <Navbar isScrolled={isScrolled} />

      <main id="main-content" className="pb-20">
        <HeroSection />

        <ExperienceSection />

        <div className="mx-auto max-w-7xl px-6">
          <SkillsSection />

          <ProjectSection />

          <ContactSection />
        </div>
      </main>

      <FooterSection />
    </div>
  )
}

export default App
