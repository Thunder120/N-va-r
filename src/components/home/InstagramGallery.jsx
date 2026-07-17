import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { INSTAGRAM_URL, stock1Products, stock2Products } from "@/data/products";

export default function InstagramGallery() {
  const images = [
    stock1Products[1], stock2Products[3], stock1Products[2],
    stock2Products[17], stock1Products[9], stock2Products[7],
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mb-4 group">
            <Instagram className="w-5 h-5 text-novair-bloom" />
            <span className="text-sm tracking-premium uppercase text-novair-bloom/60">@novairrxx</span>
          </a>
          <h2 className="font-display text-4xl md:text-6xl font-light tracking-cinematic text-novair-crystalline">
            Follow the <span className="italic text-novair-bloom/90">journey</span>
          </h2>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((p, i) => (
            <motion.a
              key={p.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative block break-inside-avoid overflow-hidden rounded-2xl novair-glass"
              style={{ marginBottom: "1rem" }}
            >
              <img src={p.image} alt={`${p.brand} ${p.name}`} loading="lazy" className="w-full object-cover" />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full novair-glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-3 h-3 text-novair-bloom" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
