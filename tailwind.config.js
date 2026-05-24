/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Pure monochrome — Mono X7 inspired
        cream: '#FFFFFF',
        charcoal: '#0A0A0A',
        muted: '#737373',
        border: '#E5E5E5',
      },
      fontFamily: {
        sans: ['Inter Tight', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Inter Tight', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
