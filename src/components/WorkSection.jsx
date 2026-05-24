import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../utils/animations';

// TODO: Replace these with your actual projects
const projects = [
  {
    category: 'Marketing',
    title: 'Social Campaign Strategy',
    description:
      'Planned and executed a brand awareness campaign across Instagram and TikTok, growing reach organically through content and community building.',
    result: '+38% reach in 60 days',
    year: '2024',
  },
  {
    category: 'Brand Design',
    title: 'Visual Identity System',
    description:
      'Designed a complete visual identity — logo, color palette, typography, and brand guidelines for a Dublin-based startup.',
    result: 'Launched on schedule',
    year: '2024',
  },
  {
    category: 'Photography',
    title: 'Documentary Portrait Series',
    description:
      'Shot and edited a photo series exploring identity and culture across Mongolia and Ireland, combining photojournalism with portraiture.',
    result: '30 images, ongoing',
    year: '2023',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted">Work</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">Selected Projects</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              custom={i * 0.1}
              className="group flex flex-col border border-border p-8 transition-all hover:border-charcoal"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {project.category} · {project.year}
              </p>
              <h3 className="mt-4 font-serif text-2xl leading-tight">{project.title}</h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted">{project.description}</p>
              <p className="mt-6 text-sm font-medium">{project.result}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
