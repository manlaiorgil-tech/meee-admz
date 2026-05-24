import { motion } from 'framer-motion';

const links = [
  { label: 'Email', value: 'manlaiorgil@gmail.com', href: 'mailto:manlaiorgil@gmail.com' },
  { label: 'LinkedIn', value: 'in/manlaiorgil', href: 'https://www.linkedin.com/in/manlaiorgil' },
  { label: 'Instagram', value: '@gorehiv', href: 'https://www.instagram.com/gorehiv' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-32 lg:px-10 lg:py-48">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              (06) Contact
            </p>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl leading-[1.05] tracking-tightest md:text-7xl lg:text-8xl"
            >
              Let&apos;s work
              <br />
              together.
            </motion.h2>

            <p className="mt-12 max-w-md text-base leading-relaxed text-muted">
              Looking for a creative marketer or designer for your next project?
              I&apos;d love to hear from you.
            </p>

            <ul className="mt-20 border-t border-border">
              {links.map((link) => (
                <li key={link.label} className="border-b border-border">
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center justify-between py-8 transition-colors"
                  >
                    <span className="text-xs uppercase tracking-[0.3em] text-muted">
                      {link.label}
                    </span>
                    <span className="flex items-center gap-4 text-xl tracking-tightest transition-transform group-hover:-translate-x-2 md:text-2xl">
                      {link.value}
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
