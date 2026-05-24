import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import AutoHideNav from './components/AutoHideNav';
import HeroSection from './components/HeroSection';
import Marquee from './components/Marquee';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import GallerySection from './components/GallerySection';
import SkillsSection from './components/SkillsSection';
import InteractiveSection from './components/InteractiveSection';
import ContactSection from './components/ContactSection';

export default function PersonalWebsite() {
  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-hidden bg-cream text-charcoal">
        <ScrollProgress />
        <AutoHideNav />

        <main>
          <HeroSection />
          <Marquee />
          <AboutSection />
          <WorkSection />
          <GallerySection />
          <SkillsSection />
          <InteractiveSection />
          <ContactSection />
        </main>

        <footer className="border-t border-border">
          <div className="mx-auto max-w-[1600px] px-6 py-10 lg:px-10">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <p className="text-sm">Manlai Orgil</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                © {new Date().getFullYear()} · Dublin, IE
              </p>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
