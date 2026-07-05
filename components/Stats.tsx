"use client";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { v: 10000, s: "+", l: "Students trained" },
  { v: 92, s: "%", l: "Placement success" },
  { v: 250, s: "+", l: "Hiring partners" },
  { v: 4.9, s: "/5", l: "Student rating", decimals: 1 },
];

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 1.6,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, decimals, mv]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-extrabold gradient-text">
              <Counter to={s.v} suffix={s.s} decimals={s.decimals ?? 0} />
            </div>
            <p className="mt-2 text-sm text-white/60">{s.l}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
