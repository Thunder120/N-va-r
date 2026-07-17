import { motion } from "framer-motion";
import { MessageCircle, Bell, Crown, Gift, Users, Star } from "lucide-react";
import { WHATSAPP_URL } from "@/data/products";

const benefits = [
  { icon: Crown, title: "Early Access", desc: "Be first to discover new additions before they reach the public platform." },
  { icon: Gift, title: "Exclusive Drops", desc: "Limited and rare fragrances released only to the community." },
  { icon: Bell, title: "Restock Alerts", desc: "Instant notifications when coveted bottles return." },
  { icon: MessageCircle, title: "Direct Support", desc: "Talk fragrance with the NOVAIR team and fellow connoisseurs, anytime." },
  { icon: Star, title: "Rare Fragrances", desc: "Access to pieces that never appear on the public site." },
  { icon: Users, title: "Community Events", desc: "Shared discussions, wear-reviews, and scent journeys together." },
];

export default function CommunitySection() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-xs tracking-ultra uppercase text-green-400/60 mb-4">The Inner Circle</p>
          <h2 className="font-display text-4xl md:text-6xl font-light tracking-cinematic text-novair-crystalline mb-4">
            Join the <span className="italic text-novair-bloom/90">NOVAIR Community</span>
          </h2>
          <p className="text-sm text-novair-bloom/60 max-w-xl mx-auto">
            This is how you secure your discovery. No checkout — just connection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (i % 3) * 0.1 }} className="group relative novair-glass rounded-2xl p-6 overflow-hidden">
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full novair-glass-strong flex items-center justify-center shrink-0">
                    <Icon className="text-novair-bloom" style={{ width: 18, height: 18 }} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-novair-crystalline mb-1.5">{b.title}</h3>
                    <p className="text-xs text-novair-bloom/60 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-green-600/80 to-green-700/80">
            <MessageCircle className="relative w-5 h-5 text-white" />
            <span className="relative text-sm font-body tracking-premium uppercase text-white">Join the Community · Secure Yours</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
