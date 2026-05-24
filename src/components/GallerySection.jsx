import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../utils/animations';

const images = {
  street:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1817-GyRoF2HVVrvkrZBGgA9nfbvwi9cCzz.jpeg',
  childhood:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7274.JPG-Nme9dws3RXRTfBlT8vGqiKXSmQvrIu.jpeg',
  eagleHunter:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6966.JPG-xTGxKHzqx2YIOrdfduKm5fTQXXw5My.jpeg',
  clockTower:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3A107F01-6988-4B63-AD3D-61815E994894-qct7pXTUGPNWJoHYzQFsYmplg1spf6.jpg',
  oldTown:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1710-zKKf1B38eBlhZbTtjLgWJmywfjrBSj.jpeg',
};

export default function GallerySection() {
  return (
    <section id="gallery" className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted">Gallery</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">Moments & Places</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid gap-4 md:grid-cols-3 md:grid-rows-2"
        >
          <motion.div variants={fadeUp} className="md:row-span-2 overflow-hidden">
            <img
              src={images.street}
              alt="Edinburgh street style"
              loading="lazy"
              width={600}
              height={900}
              className="h-full w-full object-cover object-right transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          <motion.div variants={fadeUp} className="overflow-hidden">
            <img
              src={images.eagleHunter}
              alt="Mongolian eagle hunter"
              loading="lazy"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          <motion.div variants={fadeUp} className="overflow-hidden">
            <img
              src={images.clockTower}
              alt="Balmoral Hotel clock tower"
              loading="lazy"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          <motion.div variants={fadeUp} className="overflow-hidden">
            <img
              src={images.childhood}
              alt="Childhood in Mongolia"
              loading="lazy"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          <motion.div variants={fadeUp} className="overflow-hidden">
            <img
              src={images.oldTown}
              alt="Edinburgh Old Town"
              loading="lazy"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
