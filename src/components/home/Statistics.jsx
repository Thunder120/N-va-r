import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 35, suffix: "", label: "Curated Fragrances" },
  { value: 2, suffix: "", label: "Distinct Collections" },
  { value: 100, suffix: "%", label: "Hand-Selected" },
  { value: 48, suffix: "hr", label: "Community Response" },
];

function Counter({ value, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const steps = 1800 / 16;
    const inc = value / steps;
    const timer = setInterval(() => {
      start += inc;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, value]);
  return <span>{count}{suffix}</span>;
}

export default function Statistics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-extralight text-novair-crystalline novair-text-glow">
                <Counter value={s.value} suffix={s.suffix} active={inView} />
              </div>
              <p className="mt-3 text-[10px] md:text-xs tracking-premium uppercase text-novair-bloom/50">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
