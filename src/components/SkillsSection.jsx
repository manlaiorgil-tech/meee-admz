import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

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

export default function SkillsSection() {
  return (
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
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">What I Bring</h2>
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
  );
}
