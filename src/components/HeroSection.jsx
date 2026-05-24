import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const heroImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image00057-Of3Vt3speVN8d1RkojgWh27V1vrDFx.jpeg';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="Manlai Orgil"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col justify-between px-6 py-24 lg:px-10 lg:py-28"
      >
        <div />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="max-w-[1600px] mx-auto w-full text-cream"
        >
          <p className="text-xs uppercase tracking-[0.3em] opacity-80">
            Dublin · Mongolia
          </p>
          <h1 className="mt-6 text-[14vw] leading-[0.9] tracking-tightest lg:text-[10vw]">
            Manlai
            <br />
            Orgil
          </h1>
        </motion.div>

        <div className="max-w-[1600px] mx-auto w-full flex items-end justify-between text-cream">
          <p className="text-sm max-w-xs leading-snug">
            Marketer & designer crafting visual stories — from Mongolia to Dublin.
          </p>
          <p className="hidden text-xs uppercase tracking-[0.3em] opacity-80 md:block">
            (Scroll)
          </p>
        </div>
      </motion.div>
    </section>
  );
}
