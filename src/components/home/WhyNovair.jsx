import { motion } from "framer-motion";
import { Gem, Sparkles, Eye, FlaskConical } from "lucide-react";

const values = [
  { icon: Gem, title: "Curated Rarity", desc: "Every fragrance is hand-selected for its distinct character and craftsmanship — no filler, only the extraordinary." },
  { icon: Eye, title: "Visual Immersion", desc: "Macro photography, volumetric light, and crystalline design treat every bottle as the work of art it is." },
  { icon: FlaskConical, title: "Olfactory Depth", desc: "Full fragrance pyramids — top, heart, and base notes — so you understand what you're discovering before you wear it." },
  { icon: Sparkles, title: "Community First", desc: "No carts or checkouts. Join our WhatsApp community to secure your discovery, share notes, and connect with connoisseurs." },
];

export default function WhyNovair() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-xs tracking-ultra uppercase text-novair-bloom/50 mb-4">The Philosophy</p>
          <h2 className="font-display text-4xl md:text-6xl font-light tracking-cinematic text-novair-crystalline">
            Why <span className="italic text-novair-bloom/90">NOVAIR</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative novair-glass rounded-2xl p-8 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full novair-glass-strong flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-novair-bloom" />
                  </div>
                  <h3 className="font-display text-xl text-novair-crystalline mb-3">{v.title}</h3>
                  <p className="text-sm text-novair-bloom/60 leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
