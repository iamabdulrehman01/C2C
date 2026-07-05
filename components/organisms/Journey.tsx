"use client";
import Heading from "../atoms/Heading";
import JourneyStepCard from "../molecules/JourneyStepCard";

const steps = [
  { n: "01", t: "Register", d: "Create your student account and share your goals." },
  { n: "02", t: "Assess", d: "Take diagnostic tests to identify strengths & gaps." },
  { n: "03", t: "Train", d: "Follow a personalized roadmap with expert mentors." },
  { n: "04", t: "Practice", d: "Mock interviews, live projects." },
  { n: "05", t: "Get Placement Mentorship", d: "get help students tofind their carrear path " },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-4">
        <Heading
          subtitle="The journey"
          title={
            <>
              A clear path from <span className="gradient-text">first class</span> to{" "}
              <span className="gradient-text">first offer</span>
            </>
          }
          align="center"
          className="max-w-2xl text-center"
        />

        <div className="mt-16 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-500/50 to-transparent hidden md:block" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <JourneyStepCard key={s.n} n={s.n} t={s.t} d={s.d} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
