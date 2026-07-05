"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../atoms/Button";

export default function CTA() {
  return (
    <section id="register" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center bg-gradient-to-br from-brand-600 via-brand-700 to-brand-950 shadow-glow"
        >
          <div className="absolute inset-0 opacity-30 grid-bg pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Your first offer letter <br /> starts today.
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Join thousands of students who transformed their careers with Campus to Corporate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="#" variant="white" className="group px-6 py-3">
              Create student account
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Button>
            <Button href="#login" variant="outline" className="px-6 py-3">
              Student login
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
