import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/products";

export default function StickyCommunityCTA({ productName }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { y: 100, opacity: 0 }}
      animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92vw] max-w-xl"
    >
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Join the NOVAIR community on WhatsApp to secure this fragrance" className="group relative flex items-center justify-between overflow-hidden rounded-full border border-white/10 bg-novair-vapor/80 px-6 py-4 backdrop-blur-2xl transition-all duration-500 hover:border-white/30 min-h-[56px]">
        <div className="absolute inset-0 bg-glass-gradient opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="relative flex items-center gap-3">
          <span className="flex items-center gap-2 text-xs uppercase tracking-premium text-novair-bloom">Availability via</span>
          <span className="w-px h-4 bg-white/10" />
          <span className="text-sm font-medium text-novair-crystalline group-hover:tracking-widest transition-all duration-500">JOIN THE COMMUNITY</span>
        </div>
        <div className="relative flex items-center gap-2">
          {productName && <span className="hidden sm:block text-[10px] text-novair-bloom/40 max-w-[140px] truncate">{productName}</span>}
          <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse" />
          <MessageCircle className="w-4 h-4 text-green-400/80" />
        </div>
      </a>
    </motion.div>
  );
}
