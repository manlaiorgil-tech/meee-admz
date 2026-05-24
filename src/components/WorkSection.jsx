import { motion } from 'framer-motion';

// TODO: Replace with your actual projects
const projects = [
  {
    num: '01',
    category: 'Marketing',
    title: 'Social Campaign Strategy',
    description:
      'Planned and executed a brand awareness campaign across Instagram and TikTok, growing reach organically through content and community building.',
    result: '+38% reach in 60 days',
    year: '2024',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1817-GyRoF2HVVrvkrZBGgA9nfbvwi9cCzz.jpeg',
  },
  {
    num: '02',
    category: 'Brand Design',
    title: 'Visual Identity System',
    description:
      'A complete visual identity — logo, color palette, typography, and brand guidelines for a Dublin-based startup.',
    result: 'Launched on schedule',
    year: '2024',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3A107F01-6988-4B63-AD3D-61815E994894-qct7pXTUGPNWJoHYzQFsYmplg1spf6.jpg',
  },
  {
    num: '03',
    category: 'Photography',
    title: 'Documentary Portrait Series',
    description:
      'A photo series exploring identity and culture across Mongolia and Ireland, combining photojournalism with portraiture.',
    result: '30 images, ongoing',
    year: '2023',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7274.JPG-Nme9dws3RXRTfBlT8vGqiKXSmQvrIu.jpeg',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-32 lg:px-10 lg:py-48">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-20 lg:mb-32">
          <div className="col-span-12 lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              (02) Work
            </p>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="text-4xl leading-[1.05] tracking-tightest md:text-6xl">
              Selected projects.
            </h2>
          </div>
        </div>

        <div className="space-y-32 lg:space-y-48">
          {projects.map((project, i) => (
            <motion.article
              key={project.num}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-12 gap-6 lg:gap-12 items-end"
            >
              <div
                className={`col-span-12 lg:col-span-7 ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-auto w-full object-cover transition-transform duration-1000 hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div
                className={`col-span-12 lg:col-span-5 ${
                  i % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <p className="text-xs text-muted">
                  {project.num} — {project.year}
                </p>
                <h3 className="mt-4 text-3xl leading-tight tracking-tightest md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">
                  {project.category}
                </p>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  {project.description}
                </p>
                <p className="mt-8 text-sm">— {project.result}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
