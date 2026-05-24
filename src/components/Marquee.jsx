const items = [
  'Marketing',
  'Brand Design',
  'Photography',
  'Web Design',
  'Creative Direction',
  'DJing',
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <section className="border-y border-border py-10 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center text-5xl tracking-tightest md:text-7xl lg:text-8xl"
          >
            <span className="px-8">{item}</span>
            <span className="text-muted">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
