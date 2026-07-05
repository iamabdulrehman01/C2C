"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#journey", label: "Journey" },
  { href: "#programs", label: "Programs" },
  { href: "#testimonials", label: "Stories" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center text-white">C2</div>
            <span className="text-white">Campus<span className="text-brand-400">2</span>Corporate</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition">{l.label}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="text-sm text-white/80 hover:text-white">Login</a>
            <a href="#register" className="text-sm rounded-xl px-4 py-2 bg-white text-brand-950 font-semibold hover:bg-brand-100 transition">
              Get Started
            </a>
          </div>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden glass rounded-2xl mt-2 p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/80" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="#register" className="rounded-xl px-4 py-2 bg-white text-brand-950 font-semibold text-center">Get Started</a>
          </div>
        )}
      </div>
    </motion.header>
  );
}
