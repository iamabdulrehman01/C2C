"use client";
import Heading from "../atoms/Heading";
import ProgramCard from "../molecules/ProgramCard";

const programs = [
  {
    name: "Foundation",
    price: "Free",
    tag: "For 1st & 2nd year students",
    features: ["Aptitude basics", "Career discovery", "Community access", "Monthly webinars"],
  },
  {
    name: "Placement Pro",
    price: "Popular",
    tag: "For pre-final year students",
    features: [
      "Full aptitude & coding",
      "Resume & LinkedIn",
      "10+ mock interviews",
      "1:1 mentor sessions",
      "Company-specific prep",
    ],
    highlight: true,
  },
  {
    name: "Corporate Ready",
    price: "Elite",
    tag: "For final year students",
    features: [
      "Everything in Pro",
      "Guaranteed interviews",
      "Live project experience",
      "Salary negotiation coaching",
      "Priority placement drives",
    ],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading
          subtitle="Programs"
          title={
            <>
              Pick your <span className="gradient-text">track</span>.
            </>
          }
          align="center"
          className="max-w-2xl text-center"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <ProgramCard
              key={p.name}
              name={p.name}
              price={p.price}
              tag={p.tag}
              features={p.features}
              highlight={p.highlight}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
