"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "../atoms/Button";

interface ProgramCardProps {
  name: string;
  price: string;
  tag: string;
  features: string[];
  highlight?: boolean;
  index: number;
}

export default function ProgramCard({
  name,
  price,
  tag,
  features,
  highlight,
  index,
}: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-3xl p-8 flex flex-col justify-between h-full ${
        highlight
          ? "bg-gradient-to-b from-brand-500/20 to-accent-500/10 border border-brand-500/40 shadow-glow"
          : "glass"
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-accent-500 text-white font-semibold">
          Most chosen
        </div>
      )}
      <div>
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-sm text-white/60 mt-1">{tag}</p>
        <div className="mt-4 text-4xl font-extrabold gradient-text">{price}</div>
        <ul className="mt-6 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-white/80">
              <Check className="w-4 h-4 text-brand-400 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
      </div>
      <Button
        href="#register"
        variant={highlight ? "white" : "glass"}
        className="mt-8 w-full py-3"
      >
        Enroll now
      </Button>
    </motion.div>
  );
}
