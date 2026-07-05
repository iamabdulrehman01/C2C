"use client";
import { Target, BookOpen, MessageSquare, Award, Rocket, ShieldCheck } from "lucide-react";
import Heading from "../atoms/Heading";
import FeatureCard from "../molecules/FeatureCard";

const items = [
  {
    icon: Target,
    title: "Placement Readiness",
    text: "Structured tracks that prepare you for aptitude, coding, and HR rounds.",
  },
  {
    icon: BookOpen,
    title: "Skill Training",
    text: "Industry-aligned curriculum across tech, business, and soft skills.",
  },
  {
    icon: MessageSquare,
    title: "Mock Interviews",
    text: "Real-time interview simulations with detailed personalized feedback.",
  },
  {
    icon: Award,
    title: "Certification",
    text: "Get recognized credentials your recruiters actually value.",
  },
  {
    icon: Rocket,
    title: "Career Launchpad",
    text: "Resume, LinkedIn, and portfolio reviews from hiring experts.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Student Portal",
    text: "Track progress, sessions, and offers in one dashboard.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading
          subtitle="What we offer"
          title={
            <>
              Everything a student needs to <span className="gradient-text">get hired</span>.
            </>
          }
          className="max-w-2xl"
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <FeatureCard
              key={it.title}
              icon={it.icon}
              title={it.title}
              text={it.text}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
