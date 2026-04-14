import HeroSection from './sections/HeroSection'
import StatsSection from './sections/StatsSection'
import ServicesSection from './sections/ServicesSection'
import AboutSection from './sections/AboutSection'
import GallerySection from './sections/GallerySection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
    </main>
  )
}