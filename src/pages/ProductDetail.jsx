import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ArrowLeft, MessageCircle, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import StickyCommunityCTA from "@/components/product/StickyCommunityCTA";
import ProductCard from "@/components/product/ProductCard";
import { getProductById, getProductsByStock, WHATSAPP_URL } from "@/data/products";
import { useNovairStore } from "@/lib/store";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const toggleWishlist = useNovairStore((s) => s.toggleWishlist);
  const isWishlisted = useNovairStore((s) => s.wishlist.includes(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-novair-obsidian flex flex-col items-center justify-center gap-4">
        <p className="font-display text-3xl text-novair-crystalline">Fragrance not found</p>
        <Link to="/" className="text-sm tracking-premium uppercase text-novair-bloom hover:text-novair-crystalline border-b border-white/20 pb-1">Return Home</Link>
      </div>
    );
  }

  const isStock1 = product.stock === "stock-1";
  const stockPath = isStock1 ? "/stock-1" : "/stock-2";
  const related = getProductsByStock(product.stock).filter((p) => p.id !== product.id).slice(0, 4);

  const noteTiers = [
    { label: "Top Notes", notes: product.topNotes },
    { label: "Heart Notes", notes: product.heartNotes },
    { label: "Base Notes", notes: product.baseNotes },
  ];

  return (
    <div className="relative min-h-screen bg-novair-obsidian novair-grain">
      <Navbar />
      <div className="pt-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-novair-bloom/40">
          <Link to={stockPath} className="hover:text-novair-crystalline transition-colors">{isStock1 ? "Stock 01" : "Stock 02"}</Link>
          <span>/</span>
          <span className="text-novair-crystalline">{product.name}</span>
        </div>
      </div>

      <section className="px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="relative overflow-hidden rounded-3xl novair-glass aspect-[3/4]">
              <img src={product.image} alt={`${product.brand} ${product.name}`} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <p className="text-xs tracking-premium uppercase text-novair-bloom/50 mb-2">{product.brand}</p>
            <h1 className="font-display text-4xl md:text-5xl font-light tracking-cinematic text-novair-crystalline mb-2">{product.name}</h1>
            <p className="text-sm text-novair-bloom/60 mb-6">{product.subtitle}</p>

            <div className="flex items-center gap-4 mb-8 text-xs text-novair-bloom/50">
              <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" />{product.rating} / 5</span>
              <span>{product.fragranceFamily}</span>
            </div>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-display text-3xl text-novair-crystalline">₹{product.price.toLocaleString('en-IN')}</span>
            </div>

            <p className="text-base text-novair-bloom/70 leading-relaxed mb-8">{product.description}</p>

            <div className="space-y-6 mb-8">
              {noteTiers.map((tier) => (
                <div key={tier.label}>
                  <p className="text-[10px] tracking-ultra uppercase text-novair-bloom/40 mb-2">{tier.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {tier.notes.map((note) => <span key={note} className="px-3 py-1.5 rounded-full novair-glass text-xs text-novair-bloom/80">{note}</span>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-green-600/70 to-green-700/70">
                <MessageCircle className="w-4 h-4 text-white" />
                <span className="text-xs tracking-premium uppercase text-white">Secure Yours</span>
              </a>
              <button onClick={() => toggleWishlist(product.id)} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/15">
                <Heart className={`w-4 h-4 ${isWishlisted ? "fill-novair-crystalline text-novair-crystalline" : "text-novair-bloom"}`} />
                <span className="text-xs tracking-premium uppercase text-novair-crystalline">{isWishlisted ? "Wishlisted" : "Add to Wishlist"}</span>
              </button>
            </div>

            <Link to={stockPath} className="inline-flex items-center gap-2 text-xs tracking-premium uppercase text-novair-bloom/50 hover:text-novair-crystalline">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to {isStock1 ? "Stock 01" : "Stock 02"}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 pb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-light text-novair-crystalline mb-8">More from {isStock1 ? "Stock 01" : "Stock 02"}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>

      <Footer />
      <StickyCommunityCTA productName={`${product.brand} ${product.name}`} />
      <MobileNav />
    </div>
  );
}
