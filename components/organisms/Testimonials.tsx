"use client";
import Heading from "../atoms/Heading";
import TestimonialCard from "../molecules/TestimonialCard";

const items = [
  {
    n: "Ananya S.",
    r: "Placed at Infosys",
    q: "The mock interviews were exactly like the real thing. I walked into my final round with total confidence.",
  },
  {
    n: "Rahul M.",
    r: "SDE at TCS Digital",
    q: "From confused fresher to a coding-round-ready candidate in 3 months. The mentors are gold.",
  },
  {
    n: "Priya K.",
    r: "Analyst at Accenture",
    q: "Loved the personalized roadmap. Every session had a purpose and moved me closer to my offer.",
  },
  {
    n: "Karan V.",
    r: "Placed at Wipro",
    q: "The resume and LinkedIn overhaul alone was worth it. Recruiters started reaching out within a week.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading
          subtitle="Student stories"
          title={
            <>
              Real students. <span className="gradient-text">Real offers.</span>
            </>
          }
          align="center"
          className="max-w-2xl text-center"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <TestimonialCard key={t.n} n={t.n} r={t.r} q={t.q} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
