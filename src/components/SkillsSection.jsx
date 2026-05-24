import { motion } from 'framer-motion';

const skills = [
  { num: '01', label: 'Marketing', detail: 'Strategy & campaigns' },
  { num: '02', label: 'Brand Design', detail: 'Visual identity & systems' },
  { num: '03', label: 'Photography', detail: 'Portrait & documentary' },
  { num: '04', label: 'Web Design', detail: 'Sites & landing pages' },
  { num: '05', label: 'Business Dev', detail: 'Partnerships & growth' },
  { num: '06', label: 'DJing', detail: 'Events & sets' },
  { num: '07', label: 'Modeling', detail: 'Editorial & commercial' },
  { num: '08', label: 'Selling', detail: 'Direct & digital' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border bg-charcoal text-cream">
      <div className="mx-auto max-w-[1600px] px-6 py-32 lg:px-10 lg:py-48">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-20 lg:mb-32">
          <div className="col-span-12 lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/50">
              (04) Skills
            </p>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="text-4xl leading-[1.05] tracking-tightest md:text-6xl">
              What I bring
              <br />
              to the table.
            </h2>
          </div>
        </div>

        <ul className="border-t border-cream/15">
          {skills.map((skill, i) => (
            <motion.li
              key={skill.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }}
              className="grid grid-cols-12 items-baseline gap-6 border-b border-cream/15 py-8 lg:gap-12 lg:py-10"
            >
              <p className="col-span-2 text-xs text-cream/50 md:col-span-1">
                {skill.num}
              </p>
              <p className="col-span-10 text-2xl tracking-tightest md:col-span-5 md:text-4xl">
                {skill.label}
              </p>
              <p className="col-span-12 text-sm text-cream/60 md:col-span-6">
                {skill.detail}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
