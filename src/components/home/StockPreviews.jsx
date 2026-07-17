import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { stock1Products, stock2Products } from "@/data/products";

function StockPreview({ stock, products, label, sublabel, accent, index }) {
  const featured = products.slice(0, 3);
  const isStock1 = stock === "stock-1";
  const to = isStock1 ? "/stock-1" : "/stock-2";

  return (
    <motion.div
      initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className={`relative overflow-hidden rounded-3xl ${accent} p-8 md:p-12 min-h-[480px] flex flex-col justify-between group`}
    >
      <div className="relative z-10">
        <p className="text-[10px] tracking-ultra uppercase text-novair-bloom/50 mb-2">{sublabel}</p>
        <h3 className="font-display text-4xl md:text-5xl font-light tracking-cinematic text-novair-crystalline mb-4">{label}</h3>
        <p className="text-sm text-novair-bloom/60 leading-relaxed max-w-sm mb-8">
          {isStock1 ? "Fifteen signature and niche-leaning masterpieces." : "Twenty icons and modern designer bestsellers."}
        </p>
      </div>

      <div className="relative z-10 flex gap-3 mb-6">
        {featured.map((p) => (
          <div key={p.id} className="relative w-24 h-32 md:w-28 md:h-36 rounded-xl overflow-hidden novair-glass">
            <img src={p.image} alt={`${p.brand} ${p.name}`} loading="lazy" className="w-full h-full object-cover opacity-80" />
          </div>
        ))}
      </div>

      <Link to={to} className="relative z-10 group/btn inline-flex items-center gap-3 text-sm tracking-premium uppercase text-novair-crystalline w-fit">
        <span className="border-b border-white/20 pb-1">{isStock1 ? "Discover the Rarity" : "Explore the Icons"}</span>
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

export default function StockPreviews() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <h2 className="font-display text-4xl md:text-6xl font-light tracking-cinematic text-novair-crystalline text-center">
            Choose your <span className="italic text-novair-bloom/90">journey</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StockPreview stock="stock-1" products={stock1Products} label="Stock 01" sublabel="Rare & Niche · 15 Pieces" accent="bg-gradient-to-br from-novair-amber/40 to-novair-vapor/60" index={0} />
          <StockPreview stock="stock-2" products={stock2Products} label="Stock 02" sublabel="Icons & Modern · 20 Pieces" accent="bg-gradient-to-br from-novair-vapor/60 to-novair-obsidian/40" index={1} />
        </div>
      </div>
    </section>
  );
}
