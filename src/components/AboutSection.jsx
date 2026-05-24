import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
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
  );
}
