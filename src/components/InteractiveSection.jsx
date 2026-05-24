import { motion } from 'framer-motion';
import SnakeGame from '../SnakeGame';
import SpotifyPlayer from '../SpotifyPlayer';

export default function InteractiveSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-32 lg:px-10 lg:py-48">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-20 lg:mb-32">
          <div className="col-span-12 lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              (05) Play
            </p>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="text-4xl leading-[1.05] tracking-tightest md:text-6xl">
              A game & a track.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              A small retro game and a current favorite — built right into the site.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-12 gap-6 lg:gap-12 items-start"
        >
          <div className="col-span-12 lg:col-span-6">
            <SpotifyPlayer />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <SnakeGame />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
