"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  n: string;
  r: string;
  q: string;
  index: number;
}

export default function TestimonialCard({ n, r, q, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass rounded-3xl p-8 relative"
    >
      <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-500/30" />
      <p className="text-white/85 leading-relaxed">"{q}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center text-white font-bold">
          {n[0]}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{n}</p>
          <p className="text-white/50 text-xs">{r}</p>
        </div>
      </div>
    </motion.div>
  );
}
