import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import ProductCard from "@/components/product/ProductCard";
import { useNovairStore } from "@/lib/store";
import { allProducts, WHATSAPP_URL } from "@/data/products";

export default function Wishlist() {
  const wishlist = useNovairStore((s) => s.wishlist);
  const wishlistedProducts = allProducts.filter((p) => wishlist.includes(p.id));

  return (
    <div className="relative min-h-screen bg-novair-obsidian novair-grain">
      <Navbar />

      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs tracking-ultra uppercase text-novair-bloom/50 mb-4">Saved for Later</p>
            <h1 className="font-display text-5xl md:text-7xl font-light tracking-cinematic text-novair-crystalline mb-4">
              Your <span className="italic text-novair-bloom/90">Wishlist</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-20">
              <Heart className="w-12 h-12 text-novair-bloom/20 mx-auto mb-6" />
              <p className="text-novair-bloom/50 mb-2">Your wishlist is empty.</p>
              <p className="text-sm text-novair-bloom/40 mb-8">Tap the heart on any fragrance to save it here.</p>
              <div className="flex items-center justify-center gap-4">
                <Link to="/stock-1" className="text-xs tracking-premium uppercase text-novair-crystalline border-b border-white/20 pb-1">Discover Stock 01</Link>
                <Link to="/stock-2" className="text-xs tracking-premium uppercase text-novair-bloom/60 border-b border-white/10 pb-1">Explore Stock 02</Link>
              </div>
            </div>
          ) : (
            <>
              <p className="text-xs text-novair-bloom/40 mb-6">{wishlistedProducts.length} saved {wishlistedProducts.length === 1 ? "fragrance" : "fragrances"}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
                {wishlistedProducts.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </div>
              <div className="novair-glass rounded-2xl p-8 text-center">
                <h3 className="font-display text-2xl text-novair-crystalline mb-3">Ready to secure your favorites?</h3>
                <p className="text-sm text-novair-bloom/60 mb-6 max-w-md mx-auto">Join the NOVAIR community to connect with us directly about your saved fragrances.</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-green-600/70 to-green-700/70">
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span className="text-xs tracking-premium uppercase text-white">Join the Community</span>
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
      <MobileNav />
    </div>
  );
}
