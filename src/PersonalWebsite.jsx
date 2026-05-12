import { motion } from 'framer-motion';
import SnakeGame from './SnakeGame';
import SpotifyPlayer from './SpotifyPlayer';

const skills = [
  'Business Developing',
  'Marketing',
  'Modeling',
  'Photographing',
  'Web Developing',
  'Designing',
  'Selling',
  'DJing',
];



const images = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image00057-Of3Vt3speVN8d1RkojgWh27V1vrDFx.jpeg',
  street: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1817-GyRoF2HVVrvkrZBGgA9nfbvwi9cCzz.jpeg',
  childhood: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7274.JPG-Nme9dws3RXRTfBlT8vGqiKXSmQvrIu.jpeg',
  eagleHunter: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6966.JPG-xTGxKHzqx2YIOrdfduKm5fTQXXw5My.jpeg',
  clockTower: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3A107F01-6988-4B63-AD3D-61815E994894-qct7pXTUGPNWJoHYzQFsYmplg1spf6.jpg',
  oldTown: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1710-zKKf1B38eBlhZbTtjLgWJmywfjrBSj.jpeg',
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-charcoal">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
          <a href="#" className="font-serif text-xl tracking-tight">
            Manlai Orgil
          </a>
          <nav className="hidden items-center gap-10 text-sm md:flex">
            <a href="#about" className="text-muted transition-colors hover:text-charcoal">About</a>
            <a href="#gallery" className="text-muted transition-colors hover:text-charcoal">Gallery</a>
            <a href="#contact" className="text-muted transition-colors hover:text-charcoal">Contact</a>
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
        {/* Hero Section - Full Screen */}
        <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.06),transparent_35%)]">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:min-h-screen">
              {/* Text Content */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp} 
                custom={0}
                className="lg:col-span-5 lg:py-32"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-muted">
                  Based in Dublin, Ireland
                </p>
                <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                  Marketer & Designer with a Creative Eye
                </h1>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
                  From the steppes of Mongolia to the streets of Dublin — capturing moments through photography and crafting visual stories through design.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 bg-charcoal px-7 py-4 font-medium text-cream transition-transform hover:scale-[1.02]"
                  >
                    Work With Me
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-charcoal"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0.2}
                className="lg:col-span-7 lg:h-screen lg:py-24"
              >
                <div className="relative h-[500px] lg:h-full overflow-hidden">
                  <img
                    src={images.hero}
                    alt="Manlai Orgil"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-8">
                    <p className="text-sm text-cream/80"></p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-0">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <p className="text-sm uppercase tracking-[0.25em] text-muted">About</p>
                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
                  Mongolian roots, global perspective.
                </h2>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={0.1}
                className="flex flex-col justify-center"
              >
                <p className="text-lg leading-relaxed text-muted">
                  {"I'm a creative professional passionate about design and photography. My journey has taken me from Mongolia to Ireland, where I blend my cultural heritage with modern visual storytelling through marketing and design work."}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  {"I specialize in creating compelling visual content that connects with audiences. Whether it's capturing the perfect shot or designing brand experiences, I bring creativity and attention to detail to every project."}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Gallery - Bento Grid */}
        <section id="gallery" className="border-t border-border bg-white">
          <div className="mx-auto max-w-7xl px-6 py-0 lg:px-12 lg:py-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="mb-16"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-muted"></p>
              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid gap-4 md:grid-cols-3 md:grid-rows-2"
            >
              {/* Large Portrait - Street Style */}
              <motion.div 
                variants={fadeUp}
                className="md:row-span-2 overflow-hidden"
              >
                <img
                  src={images.street}
                  alt="Edinburgh street style"
                  className="h-full w-full object-cover object-right transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Eagle Hunter - B&W */}
              <motion.div 
                variants={fadeUp}
                className="overflow-hidden"
              >
                <img
                  src={images.eagleHunter}
                  alt="Mongolian eagle hunter"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Clock Tower */}
              <motion.div 
                variants={fadeUp}
                className="overflow-hidden"
              >
                <img
                  src={images.clockTower}
                  alt="Balmoral Hotel clock tower"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Childhood Photo */}
              <motion.div 
                variants={fadeUp}
                className="overflow-hidden"
              >
                <img
                  src={images.childhood}
                  alt="Childhood in Mongolia"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Old Town */}
              <motion.div 
                variants={fadeUp}
                className="overflow-hidden"
              >
                <img
                  src={images.oldTown}
                  alt="Edinburgh Old Town"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-8 text-center text-sm text-muted"
            >
            </motion.p>
          </div>
        </section>

        {/* Quote / Statement Section */}
        <section className="border-t border-border bg-charcoal text-cream">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-12 lg:py-32">
            <motion.blockquote
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="font-serif text-3xl leading-relaxed md:text-4xl lg:text-5xl"
            >
              {"\"Design isn't just visual — it's about creating experiences that resonate and stories that inspire.\""}
            </motion.blockquote>
          </div>
        </section>

        

        {/* Skills Section */}
        <section id="skills" className="border-t border-border bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="grid gap-12 lg:grid-cols-2 lg:gap-24"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-muted">Skills</p>
                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                  What I Bring
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-charcoal px-5 py-3 text-sm transition-all hover:bg-charcoal hover:text-cream"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>



        <section className="border-t border-border bg-gradient-to-b from-charcoal to-black text-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">Interactive</p>
                <h2 className="font-serif text-5xl">Play & Listen</h2>
                <p className="max-w-lg text-neutral-300">A little retro snake game and my current favorite track built directly into the website.</p>
                <SpotifyPlayer />
              </div>
              <SnakeGame />
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <p className="text-sm uppercase tracking-[0.25em] text-muted">Contact</p>
                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
                  {"Let's work together."}
                </h2>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
                  Looking for a creative marketer or designer for your next project? I&apos;d love to hear from you.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={0.1}
                className="flex flex-col gap-4"
              >
                <a
                  href="mailto:manlaiorgil@gmail.com"
                  className="group flex items-center justify-between border border-border p-6 transition-all hover:border-charcoal"
                >
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <p className="mt-1 font-serif text-xl">manlaiorgil@gmail.com</p>
                  </div>
                  <svg className="h-5 w-5 text-muted transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/manlaiorgil"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-border p-6 transition-all hover:border-charcoal"
                >
                  <div>
                    <p className="text-sm text-muted">LinkedIn</p>
                    <p className="mt-1 font-serif text-xl">linkedin.com/in/manlaiorgil</p>
                  </div>
                  <svg className="h-5 w-5 text-muted transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:0874785692"
                  className="group flex items-center justify-between border border-border p-6 transition-all hover:border-charcoal"
                >
                  <div>
                    <p className="text-sm text-muted">Phone</p>
                    <p className="mt-1 font-serif text-xl">087 478 5692</p>
                  </div>
                  <svg className="h-5 w-5 text-muted transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/gorehiv"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-border p-6 transition-all hover:border-charcoal"
                >
                  <div>
                    <p className="text-sm text-muted">Instagram</p>
                    <p className="mt-1 font-serif text-xl">@gorehiv</p>
                  </div>
                  <svg className="h-5 w-5 text-muted transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="font-serif text-lg">Manlai Orgil</p>
              <p className="text-sm text-muted">
                Dublin, Ireland — Marketer & Designer
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
