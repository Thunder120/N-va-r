import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ArrowUpRight } from "lucide-react";
import { useNovairStore } from "@/lib/store";

export default function ProductCard({ product, index = 0 }) {
  const toggleWishlist = useNovairStore((s) => s.toggleWishlist);
  const isWishlisted = useNovairStore((s) => s.wishlist.includes(product.id));
  const isStock1 = product.stock === "stock-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} aria-label={`Discover ${product.brand} ${product.name}`}>
        <div className="relative overflow-hidden rounded-2xl novair-glass aspect-[3/4]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-novair-obsidian/40 z-10 pointer-events-none" />
          <div className="absolute top-4 left-4 z-20">
            <span className={`text-[9px] tracking-ultra uppercase font-body ${isStock1 ? "text-amber-300/80" : "text-novair-bloom/60"}`}>
              {isStock1 ? "Stock 01 // Rare" : "Stock 02 // Iconic"}
            </span>
          </div>
          <button onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }} aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"} className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full novair-glass flex items-center justify-center transition-all duration-300 hover:scale-110">
            <Heart className={`w-4 h-4 transition-all ${isWishlisted ? "fill-novair-crystalline text-novair-crystalline" : "text-novair-bloom"}`} />
          </button>
          <motion.img src={product.image} alt={`${product.brand} ${product.name}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:brightness-110" />
          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-glass-gradient pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-premium uppercase text-novair-bloom/60 mb-1">{product.brand}</p>
                <h3 className="font-display text-xl text-novair-crystalline leading-tight">{product.name}</h3>
                <p className="text-xs text-novair-bloom/50 mt-0.5">{product.subtitle}</p>
              </div>
              <div className="flex items-center gap-1 text-novair-bloom/40 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span>Discover</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
