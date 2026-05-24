import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

const ArrowIcon = () => (
  <svg
    className="h-5 w-5 text-muted transition-transform group-hover:translate-x-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function ContactSection() {
  return (
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
              Looking for a creative marketer or designer for your next project? I&apos;d love to
              hear from you.
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
              <ArrowIcon />
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
              <ArrowIcon />
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
              <ArrowIcon />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
