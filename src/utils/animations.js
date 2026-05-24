export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};
