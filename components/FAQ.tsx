"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Who is Campus to Corporate for?", a: "Any college student — from 1st year to final year — who wants structured training, mentorship, and placement guidance." },
  { q: "Do I need coding experience?", a: "No. Our Foundation track starts from zero. Advanced tracks build on top." },
  { q: "Are the mentors industry experts?", a: "Yes. Our mentors work at top tech and business companies and have hired freshers themselves." },
  { q: "Is placement guaranteed?", a: "Corporate Ready students get guaranteed interview opportunities with our 5+ University partners." },
  { q: "How do I get started?", a: "Create a free student account, take the diagnostic, and pick the program that fits your year and goals." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-400">FAQ</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">Questions, answered.</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-medium">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-white/70 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5 text-white/70 text-sm"
                    >
                      {f.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
