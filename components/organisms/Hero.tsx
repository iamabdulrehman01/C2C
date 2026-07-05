"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  GraduationCap,
  Briefcase,
  Users,
} from "lucide-react";
import Button from "../atoms/Button";
import Badge from "../atoms/Badge";
import FloatCard from "../molecules/FloatCard";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex justify-center"
        >
          <Badge variant="glass">
            <Sparkles className="w-3.5 h-3.5 text-accent-500" />
            Building brighter futures for 300+ students
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
        >
          From <span className="gradient-text">Campus</span>
          <br />
          to <span className="gradient-text">Corporate</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 mx-auto max-w-2xl text-lg text-white/70"
        >
          Placement readiness, interview preparation, and mentorship to guide
          students through every step of their journey — from the first
          classroom to the first offer letter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Button
            href="#register"
            variant="gradient"
            className="group px-6 py-3 shadow-glow hover:opacity-95"
          >
            Create Student Account
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Button>
          <Button href="#login" variant="glass" className="px-6 py-3">
            Student Login
          </Button>
        </motion.div>

        {/* Floating cards */}
        <div className="relative mt-20 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-3xl p-6 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FloatCard
                icon={<GraduationCap />}
                title="Campus"
                text="Registration, guidance & training."
              />
              <FloatCard
                icon={<Users />}
                title="Mentorship"
                text="1:1 mentors & career mapping."
                delay={0.6}
              />
              <FloatCard
                icon={<Briefcase />}
                title="Corporate"
                text="Interview prep & placements."
                delay={0.8}
              />
            </div>
          </motion.div>
          <div className="absolute -z-10 inset-0 blur-3xl opacity-40 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500" />
        </div>
      </div>
    </section>
  );
}
