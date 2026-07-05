"use client";
import { motion } from "framer-motion";
import React from "react";

interface FloatCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay?: number;
}

export default function FloatCard({ icon, title, text, delay = 0.4 }: FloatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-2xl bg-white/5 border border-white/10 p-6 text-left hover:-translate-y-1 hover:bg-white/10 transition"
    >
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center text-white">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/70 mt-1">{text}</p>
    </motion.div>
  );
}
