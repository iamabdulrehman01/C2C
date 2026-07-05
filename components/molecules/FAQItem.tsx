"use client";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ q, a, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-white font-medium">{q}</span>
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
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
