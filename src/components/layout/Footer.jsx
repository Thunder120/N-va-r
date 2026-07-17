import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/data/products";

export default function Footer() {
  return (
    <footer className="relative bg-novair-obsidian border-t border-white/5 pt-20 pb-10 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 novair-vapor-bg pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-cinematic text-novair-crystalline mb-4">NOVAIR</h2>
            <p className="text-novair-bloom/70 font-body text-sm leading-relaxed max-w-md mb-8">
              A digital sanctuary where fragrance is not merely sold, but experienced as an ethereal intersection of light, glass, and scent. Discover the rare. Explore the iconic.
            </p>
            <div className="flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Follow NOVAIR on Instagram" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 group">
                <Instagram className="w-4 h-4 text-novair-bloom group-hover:text-novair-crystalline transition-colors" />
                <span className="text-xs font-body tracking-premium uppercase text-novair-bloom group-hover:text-novair-crystalline transition-colors">Instagram</span>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Join the NOVAIR WhatsApp community" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 group">
                <MessageCircle className="w-4 h-4 text-novair-bloom group-hover:text-novair-crystalline transition-colors" />
                <span className="text-xs font-body tracking-premium uppercase text-novair-bloom group-hover:text-novair-crystalline transition-colors">Community</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-premium uppercase text-novair-bloom/50 mb-5">Collections</h4>
            <ul className="space-y-3">
              <li><Link to="/stock-1" className="text-sm text-novair-bloom/80 hover:text-novair-crystalline transition-colors" aria-label="View our rare and signature collection">Stock 1 — Rare</Link></li>
              <li><Link to="/stock-2" className="text-sm text-novair-bloom/80 hover:text-novair-crystalline transition-colors" aria-label="View our iconic and modern designer collection">Stock 2 — Icons</Link></li>
              <li><Link to="/wishlist" className="text-sm text-novair-bloom/80 hover:text-novair-crystalline transition-colors">Your Wishlist</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-premium uppercase text-novair-bloom/50 mb-5">The House</h4>
            <ul className="space-y-3">
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-novair-bloom/80 hover:text-novair-crystalline transition-colors">@novairrxx</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-novair-bloom/80 hover:text-novair-crystalline transition-colors">WhatsApp Community</a></li>
              <li><Link to="/" className="text-sm text-novair-bloom/80 hover:text-novair-crystalline transition-colors">Discover NOVAIR</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-novair-bloom/40 font-body tracking-wide">© {new Date().getFullYear()} NOVAIR. A discovery platform. Not an e-commerce store.</p>
          <p className="text-xs text-novair-bloom/40 font-body tracking-premium uppercase">Luminous Refraction · Crafted in Glass</p>
        </div>
      </div>
    </footer>
  );
}
