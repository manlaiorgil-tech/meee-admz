import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

function ParallaxImage({ src, alt, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        className="h-[110%] w-full object-cover"
      />
    </div>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-32 lg:px-10 lg:py-48">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-20 lg:mb-32">
          <div className="col-span-12 lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              (03) Gallery
            </p>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="text-4xl leading-[1.05] tracking-tightest md:text-6xl">
              Moments & places.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <ParallaxImage
            src={images.street}
            alt="Edinburgh street style"
            className="col-span-12 md:col-span-7 aspect-[3/4]"
          />
          <ParallaxImage
            src={images.eagleHunter}
            alt="Mongolian eagle hunter"
            className="col-span-12 md:col-span-5 aspect-[3/4] md:mt-32"
          />
          <ParallaxImage
            src={images.clockTower}
            alt="Edinburgh clock tower"
            className="col-span-12 md:col-span-5 aspect-[4/5]"
          />
          <ParallaxImage
            src={images.oldTown}
            alt="Old Town"
            className="col-span-12 md:col-span-7 aspect-[4/3] md:mt-24"
          />
          <ParallaxImage
            src={images.childhood}
            alt="Childhood in Mongolia"
            className="col-span-12 aspect-[16/9]"
          />
        </div>
      </div>
    </section>
  );
}
