"use client";
import StatItem from "../molecules/StatItem";

const stats = [
  { v: 10000, s: "+", l: "Students trained" },
  { v: 92, s: "%", l: "Placement success" },
  { v: 250, s: "+", l: "Hiring partners" },
  { v: 4.9, s: "/5", l: "Student rating", decimals: 1 },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <StatItem
            key={s.l}
            v={s.v}
            s={s.s}
            l={s.l}
            decimals={s.decimals}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
