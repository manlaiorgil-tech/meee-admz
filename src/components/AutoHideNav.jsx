import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function AutoHideNav() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 100);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="text-sm tracking-tight">
          Manlai Orgil
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-muted transition-colors hover:text-charcoal"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-sm transition-colors hover:text-muted"
        >
          Get in touch →
        </a>
      </div>
    </motion.header>
  );
}
