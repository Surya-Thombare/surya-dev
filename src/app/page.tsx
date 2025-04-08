// import HeroSection from '@/components/sections/hero-section'
import AboutSection from '@/components/sections/about-section'
import SkillsSection from '@/components/sections/skills-section'
import ExperienceSection from '@/components/sections/experience-section'
import ProjectsSection from '@/components/sections/projects-section'
import ContactSection from '@/components/sections/contact-section'
import { BackgroundBoxesDemo } from '@/components/BackgroundBoxesDemo'

export default function HomePage() {
  return (
    <div>
      {/* <HeroSection /> */}
      <BackgroundBoxesDemo />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}