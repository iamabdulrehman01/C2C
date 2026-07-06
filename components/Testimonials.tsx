import { Quote } from "lucide-react";

const items = [
  { n: "Ananya S.", r: "Placed at Infosys", q: "The mock interviews were exactly like the real thing. I walked into my final round with total confidence." },
  { n: "Rahul M.", r: "SDE at TCS Digital", q: "From confused fresher to a coding-round-ready candidate in 3 months. The mentors are gold." },
  { n: "Priya K.", r: "Analyst at Accenture", q: "Loved the personalized roadmap. Every session had a purpose and moved me closer to my offer." },
  { n: "Karan V.", r: "Placed at Wipro", q: "The resume and LinkedIn overhaul alone was worth it. Recruiters started reaching out within a week." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-400">Student stories</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Real students. <span className="gradient-text">Real offers.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((t) => (
            <div
              key={t.n}
              className="glass rounded-3xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-500/30" />
              <p className="text-white/85 leading-relaxed">"{t.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center text-white font-bold">
                  {t.n[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.n}</p>
                  <p className="text-white/50 text-xs">{t.r}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
