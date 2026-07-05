"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";

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
          <Logo />
          <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button href="#login" variant="link">
              Login
            </Button>
            <Button href="#register" variant="white" className="text-sm px-4 py-2">
              Get Started
            </Button>
          </div>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden glass rounded-2xl mt-2 p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/80"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button href="#register" variant="white" className="w-full py-2">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </motion.header>
  );
}
