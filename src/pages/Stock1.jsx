import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import ProductCard from "@/components/product/ProductCard";
import { getProductsByStock } from "@/data/products";

export default function Stock1() {
  const products = getProductsByStock("stock-1");

  return (
    <div className="relative min-h-screen bg-novair-obsidian novair-grain">
      <Navbar />
      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-light tracking-cinematic text-novair-crystalline mb-4">
            The Rare <span className="italic text-novair-bloom/90">& Niche</span>
          </h1>
          <p className="text-sm text-novair-bloom/60 max-w-2xl mb-10">
            Fifteen signature and niche-leaning masterpieces.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>
      <Footer />
      <MobileNav />
    </div>
  );
}
