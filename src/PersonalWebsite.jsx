import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import SkillsSection from './components/SkillsSection';
import WorkSection from './components/WorkSection';
import InteractiveSection from './components/InteractiveSection';
import ContactSection from './components/ContactSection';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-charcoal">
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
          <a href="#" className="font-serif text-xl tracking-tight">
            Manlai Orgil
          </a>
          <nav className="hidden items-center gap-10 text-sm md:flex">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="text-muted transition-colors hover:text-charcoal">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden border border-charcoal px-5 py-2.5 text-sm font-medium transition-all hover:bg-charcoal hover:text-cream md:block"
          >
            Get in Touch
          </a>
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />

        <section className="border-t border-border bg-charcoal text-cream">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-12 lg:py-32">
            <blockquote className="font-serif text-3xl leading-relaxed md:text-4xl lg:text-5xl">
              {'"Design isn\'t just visual — it\'s about creating experiences that resonate and stories that inspire."'}
            </blockquote>
          </div>
        </section>

        <SkillsSection />
        <WorkSection />
        <InteractiveSection />
        <ContactSection />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-serif text-lg">Manlai Orgil</p>
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} · Dublin, Ireland — Marketer & Designer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
