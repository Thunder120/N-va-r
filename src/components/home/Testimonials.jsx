import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { text: "NOVAIR changed how I discover fragrance. The separation between rare and iconic makes exploring feel intentional. I found my signature scent through the community.", author: "Adrien M.", role: "Fragrance Enthusiast" },
  { text: "Not a store — a gallery. The way each bottle is presented, with full note pyramids and that cinematic photography, made me appreciate perfumery as art.", author: "Sofia R.", role: "Collector" },
  { text: "The WhatsApp community is unlike anything else. Direct support, restock alerts, and conversations with people who truly understand scent. Worth every moment.", author: "Marcus L.", role: "Community Member" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <p className="text-xs tracking-ultra uppercase text-novair-bloom/50 mb-4">Voices from the Community</p>
          <h2 className="font-display text-4xl md:text-6xl font-light tracking-cinematic text-novair-crystalline">
            What they <span className="italic text-novair-bloom/90">say</span>
          </h2>
        </motion.div>

        <div className="relative novair-glass rounded-3xl p-10 md:p-16 min-h-[320px] flex flex-col items-center justify-center">
          <Quote className="w-10 h-10 text-novair-bloom/20 mb-6" />
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
              <p className="font-display text-xl md:text-2xl font-light text-novair-crystalline leading-relaxed mb-8">{testimonials[active].text}</p>
              <p className="text-sm tracking-premium uppercase text-novair-bloom/70">{testimonials[active].author}</p>
              <p className="text-xs text-novair-bloom/40 mt-1">{testimonials[active].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 mt-8">
            <button onClick={prev} aria-label="Previous testimonial" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors">
              <ChevronLeft className="w-4 h-4 text-novair-bloom" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Go to testimonial ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-novair-crystalline" : "w-1.5 bg-novair-bloom/30"}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next testimonial" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors">
              <ChevronRight className="w-4 h-4 text-novair-bloom" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
