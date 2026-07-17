import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Heart } from "lucide-react";
import { INSTAGRAM_URL } from "@/data/products";
import { useNovairStore } from "@/lib/store";

const navLinks = [
  { label: "Stock 1 — Rare", to: "/stock-1", ariaLabel: "View our rare and signature collection" },
  { label: "Stock 2 — Icons", to: "/stock-2", ariaLabel: "View our iconic and modern designer collection" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const location = useLocation();
  const wishlist = useNovairStore((s) => s.wishlist);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
        <div className={`mx-3 md:mx-6 px-4 md:px-6 transition-all duration-500 rounded-full ${scrolled ? "novair-glass-strong py-2" : "bg-transparent py-2"}`}>
          <nav className="flex items-center justify-between">
            <Link to="/" className="group relative z-10" aria-label="NOVAIR home">
              <span className="font-display text-xl md:text-2xl font-medium tracking-cinematic text-novair-crystalline">NOVAIR</span>
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-novair-bloom transition-all duration-500 group-hover:w-full" />
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} aria-label={link.ariaLabel} onMouseEnter={() => setHovered(link.to)} onMouseLeave={() => setHovered(null)} className="relative text-sm font-body text-novair-bloom/80 hover:text-novair-crystalline transition-colors duration-300">
                  {link.label}
                  <AnimatePresence>
                    {hovered === link.to && (
                      <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-0 right-0 h-px bg-novair-bloom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                    )}
                  </AnimatePresence>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 md:gap-4 relative z-10">
              {wishlist.length > 0 && (
                <Link to="/wishlist" className="relative" aria-label="View your wishlist">
                  <Heart className="w-5 h-5 text-novair-bloom hover:text-novair-crystalline transition-colors" />
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-novair-crystalline text-novair-obsidian text-[9px] font-bold flex items-center justify-center">{wishlist.length}</span>
                </Link>
              )}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Follow NOVAIR on Instagram" className="hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 group">
                <Instagram className="w-4 h-4 text-novair-bloom group-hover:text-novair-crystalline transition-colors" />
              </a>
              <button onClick={() => setOpen(!open)} className="md:hidden text-novair-crystalline" aria-label="Toggle menu">
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-novair-obsidian/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div key={link.to} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.1 }}>
                <Link to={link.to} aria-label={link.ariaLabel} className="font-display text-3xl text-novair-crystalline hover:text-novair-bloom transition-colors">{link.label}</Link>
              </motion.div>
            ))}
            <motion.a initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-novair-bloom hover:text-novair-crystalline transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="font-body text-sm tracking-premium uppercase">Follow NOVAIR</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
