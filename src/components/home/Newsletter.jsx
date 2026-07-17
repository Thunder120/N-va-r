import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/data/products";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-xs tracking-ultra uppercase text-novair-bloom/50 mb-4">Stay in the Light</p>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-cinematic text-novair-crystalline mb-4">
            The NOVAIR <span className="italic text-novair-bloom/90">dispatch</span>
          </h2>
          <p className="text-sm text-novair-bloom/60 max-w-md mx-auto mb-8">
            New arrivals, restock alerts, and olfactory stories — delivered with intention.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="flex-1 w-full px-5 py-3.5 rounded-full novair-glass-strong text-sm text-novair-crystalline placeholder:text-novair-bloom/40 focus:outline-none" />
                <button type="submit" className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/15 flex items-center justify-center gap-2">
                  <span className="text-xs tracking-premium uppercase text-novair-crystalline">Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5 text-novair-bloom" />
                </button>
              </motion.form>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-8 py-4 rounded-full novair-glass-strong">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-sm text-novair-crystalline">Welcome to the inner circle.</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-novair-bloom/40 tracking-premium uppercase">
              Or join the WhatsApp community →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
