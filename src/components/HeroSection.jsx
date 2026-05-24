import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

const heroImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image00057-Of3Vt3speVN8d1RkojgWh27V1vrDFx.jpeg';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.06),transparent_35%)]">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:min-h-screen">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="lg:col-span-5 lg:py-32"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-muted">Based in Dublin, Ireland</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Marketer & Designer with a Creative Eye
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
              From the steppes of Mongolia to the streets of Dublin — capturing moments through
              photography and crafting visual stories through design.
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

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
            className="lg:col-span-7 lg:h-screen lg:py-24"
          >
            <div className="relative h-[500px] lg:h-full overflow-hidden">
              <img
                src={heroImage}
                alt="Manlai Orgil"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
