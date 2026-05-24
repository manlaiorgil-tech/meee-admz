import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';
import SnakeGame from '../SnakeGame';
import SpotifyPlayer from '../SpotifyPlayer';

export default function InteractiveSection() {
  return (
    <section className="border-t border-border bg-gradient-to-b from-charcoal to-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">Interactive</p>
            <h2 className="font-serif text-5xl">Play & Listen</h2>
            <p className="max-w-lg text-neutral-300">
              A little retro game and a current favorite track — built right into the site.
            </p>
            <SpotifyPlayer />
          </div>
          <SnakeGame />
        </motion.div>
      </div>
    </section>
  );
}
