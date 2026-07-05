"use client";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  to: number;
  suffix?: string;
  decimals?: number;
}

export default function Counter({ to, suffix = "", decimals = 0 }: CounterProps) {
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
