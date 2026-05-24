import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const aboutImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6966.JPG-xTGxKHzqx2YIOrdfduKm5fTQXXw5My.jpeg';

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section id="about" ref={ref} className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-32 lg:px-10 lg:py-48">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-3">
            <p className="sticky top-32 text-xs uppercase tracking-[0.3em] text-muted">
              (01) About
            </p>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl leading-[1.05] tracking-tightest md:text-6xl lg:text-7xl"
            >
              From the steppes of Mongolia to the streets of Dublin — capturing
              moments and crafting visual stories that connect.
            </motion.h2>

            <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="overflow-hidden">
                <motion.img
                  src={aboutImage}
                  alt="Eagle hunter"
                  loading="lazy"
                  style={{ y: imageY }}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-end gap-6">
                <p className="text-base leading-relaxed text-muted">
                  I&apos;m a creative professional working at the intersection of
                  marketing, design, and photography. My work blends Mongolian
                  heritage with a modern visual language.
                </p>
                <p className="text-base leading-relaxed text-muted">
                  Whether it&apos;s capturing the perfect shot or designing brand
                  experiences, I bring creativity, attention to detail, and a
                  global perspective to every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
