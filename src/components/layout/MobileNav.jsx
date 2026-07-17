import { Link, useLocation } from "react-router-dom";
import { Home, Sparkles, Gem, MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/data/products";

const items = [
  { icon: Home, label: "Home", to: "/", ariaLabel: "Go to home" },
  { icon: Gem, label: "Stock 1", to: "/stock-1", ariaLabel: "View our rare and signature collection" },
  { icon: Sparkles, label: "Stock 2", to: "/stock-2", ariaLabel: "View our iconic and modern designer collection" },
  { icon: MessageCircle, label: "Community", href: WHATSAPP_URL, ariaLabel: "Join the NOVAIR WhatsApp community" },
  { icon: Instagram, label: "Instagram", href: INSTAGRAM_URL, ariaLabel: "Follow NOVAIR on Instagram" },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <motion.nav initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="md:hidden fixed bottom-3 left-3 right-3 z-50">
      <div className="novair-glass-strong rounded-full flex items-center justify-around py-2 px-2">
        {items.map((item) => {
          const active = item.to && location.pathname === item.to;
          const Icon = item.icon;
          const content = (
            <span className="flex flex-col items-center gap-0.5 px-2 py-1.5 min-h-[48px] justify-center">
              <Icon className={`w-5 h-5 transition-colors ${active ? "text-novair-crystalline" : "text-novair-bloom/60"}`} />
              <span className={`text-[9px] tracking-wide transition-colors ${active ? "text-novair-crystalline" : "text-novair-bloom/50"}`}>{item.label}</span>
            </span>
          );
          return item.to ? (
            <Link key={item.label} to={item.to} aria-label={item.ariaLabel}>{content}</Link>
          ) : (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel}>{content}</a>
          );
        })}
      </div>
    </motion.nav>
  );
}
