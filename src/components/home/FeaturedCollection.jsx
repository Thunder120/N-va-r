import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Gem, Sparkles } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function FeaturedCollection() {
  const stock1Featured = getFeaturedProducts("stock-1", 4);
  const stock2Featured = getFeaturedProducts("stock-2", 4);

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-xs tracking-ultra uppercase text-novair-bloom/50 mb-4">Curated Selections</p>
          <h2 className="font-display text-4xl md:text-6xl font-light tracking-cinematic text-novair-crystalline">
            Featured from <span className="italic text-novair-bloom/90">both worlds</span>
          </h2>
        </motion.div>

        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Gem className="w-5 h-5 text-amber-300/70" />
              <h3 className="font-display text-2xl md:text-3xl text-novair-crystalline">Stock 01 — Rare & Niche</h3>
            </div>
            <Link to="/stock-1" className="group flex items-center gap-2 text-xs tracking-premium uppercase text-novair-bloom/60 hover:text-novair-crystalline transition-colors">
              View All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stock1Featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-novair-bloom/70" />
              <h3 className="font-display text-2xl md:text-3xl text-novair-crystalline">Stock 02 — Icons & Modern</h3>
            </div>
            <Link to="/stock-2" className="group flex items-center gap-2 text-xs tracking-premium uppercase text-novair-bloom/60 hover:text-novair-crystalline transition-colors">
              View All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stock2Featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
