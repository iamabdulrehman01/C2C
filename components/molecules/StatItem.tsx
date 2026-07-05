"use client";
import { motion } from "framer-motion";
import Counter from "../atoms/Counter";

interface StatItemProps {
  v: number;
  s: string;
  l: string;
  decimals?: number;
  index: number;
}

export default function StatItem({ v, s, l, decimals = 0, index }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-extrabold gradient-text">
        <Counter to={v} suffix={s} decimals={decimals} />
      </div>
      <p className="mt-2 text-sm text-white/60">{l}</p>
    </motion.div>
  );
}
