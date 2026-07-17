import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import StockPreviews from "@/components/home/StockPreviews";
import WhyNovair from "@/components/home/WhyNovair";
import Testimonials from "@/components/home/Testimonials";
import Statistics from "@/components/home/Statistics";
import CommunitySection from "@/components/home/CommunitySection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Gem, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-novair-obsidian novair-grain">
      <Navbar />
      <main className="pb-20 md:pb-0">
        <section className="relative min-h-screen w-full overflow-hidden novair-vapor-bg flex items-center justify-center">
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-xs md:text-sm tracking-ultra uppercase text-novair-bloom/60 mb-6 font-body">
              Luminous Refraction · A Discovery Platform
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }} className="font-display text-6xl md:text-8xl font-light tracking-cinematic text-novair-crystalline leading-[0.95] novair-text-glow">
              The Essence<br /><span className="italic font-extralight text-novair-bloom/90">of Rarity</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-8 text-base md:text-lg text-novair-bloom/60 max-w-2xl mx-auto font-body leading-relaxed">
              Two worlds of fragrance, permanently separate. Discover the rare and niche in Stock 01, or explore the iconic and modern in Stock 02.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/stock-1" aria-label="Discover the rare and signature collection" className="group relative overflow-hidden rounded-full border border-white/15 px-8 py-4 min-h-[48px] flex items-center gap-2 transition-all duration-500 hover:border-white/40">
                <Gem className="relative w-4 h-4 text-amber-300/80" />
                <span className="relative text-sm font-body tracking-premium uppercase text-novair-crystalline">Discover the Rarity</span>
              </Link>
              <Link to="/stock-2" aria-label="Explore the iconic and modern designer collection" className="group relative overflow-hidden rounded-full border border-white/15 px-8 py-4 min-h-[48px] flex items-center gap-2 transition-all duration-500 hover:border-white/40">
                <Sparkles className="relative w-4 h-4 text-novair-bloom" />
                <span className="relative text-sm font-body tracking-premium uppercase text-novair-crystalline">Explore the Icons</span>
              </Link>
            </motion.div>
          </div>
        </section>
        <FeaturedCollection />
        <StockPreviews />
        <WhyNovair />
        <Testimonials />
        <Statistics />
        <CommunitySection />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
