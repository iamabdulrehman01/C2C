"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { v: 10000, s: "+", l: "Students trained" },
  { v: 92, s: "%", l: "Placement success" },
  { v: 250, s: "+", l: "Hiring partners" },
  { v: 4.9, s: "/5", l: "Student rating", decimals: 1 },
];

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let animationFrameId: number;

    const el = ref.current;
    if (el) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const startTime = performance.now();
            const duration = 1600; // 1.6s

            const animateCount = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              // easeOutQuad easing
              const easeProgress = progress * (2 - progress);
              const currentVal = easeProgress * to;

              setCount(currentVal);

              if (progress < 1) {
                animationFrameId = requestAnimationFrame(animateCount);
              }
            };

            animationFrameId = requestAnimationFrame(animateCount);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [to]);

  return <span ref={ref}>{count.toFixed(decimals) + suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold gradient-text">
              <Counter to={s.v} suffix={s.s} decimals={s.decimals ?? 0} />
            </div>
            <p className="mt-2 text-sm text-white/60">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
