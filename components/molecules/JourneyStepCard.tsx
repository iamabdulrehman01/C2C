"use client";
import { motion } from "framer-motion";

interface JourneyStepCardProps {
  n: string;
  t: string;
  d: string;
  index: number;
}

export default function JourneyStepCard({ n, t, d, index }: JourneyStepCardProps) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`md:w-1/2 ${isEven ? "md:pr-10" : "md:ml-auto md:pl-10"}`}
    >
      <div className="glass rounded-2xl p-6 relative">
        <div className="text-5xl font-black gradient-text">{n}</div>
        <h3 className="mt-2 text-xl font-semibold text-white">{t}</h3>
        <p className="text-white/60 mt-1 text-sm">{d}</p>
      </div>
    </motion.div>
  );
}
