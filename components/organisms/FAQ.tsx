"use client";
import { useState } from "react";
import Heading from "../atoms/Heading";
import FAQItem from "../molecules/FAQItem";

const faqs = [
  {
    q: "Who is Campus to Corporate for?",
    a: "Any college student — from 1st year to final year — who wants structured training, mentorship, and placement guidance.",
  },
  {
    q: "Do I need coding experience?",
    a: "No. Our Foundation track starts from zero. Advanced tracks build on top.",
  },
  {
    q: "Are the mentors industry experts?",
    a: "Yes. Our mentors work at top tech and business companies and have hired freshers themselves.",
  },
  {
    q: "Is placement guaranteed?",
    a: "Corporate Ready students get guaranteed interview opportunities with our 5+ University partners.",
  },
  {
    q: "How do I get started?",
    a: "Create a free student account, take the diagnostic, and pick the program that fits your year and goals.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-4">
        <Heading
          subtitle="FAQ"
          title="Questions, answered."
          align="center"
          className="max-w-2xl text-center"
        />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <FAQItem
                key={f.q}
                q={f.q}
                a={f.a}
                isOpen={isOpen}
                onToggle={() => setOpen(isOpen ? null : i)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
