"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
  index: number;
}

export default function FeatureCard({ icon: Icon, title, text, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative rounded-2xl glass p-6 hover:border-brand-500/40 hover:-translate-y-1 transition"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 border border-white/10 grid place-items-center text-brand-400 group-hover:text-white">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="mt-5 font-semibold text-white text-lg">{title}</h3>
      <p className="text-sm text-white/60 mt-2 leading-relaxed">{text}</p>
    </motion.div>
  );
}
