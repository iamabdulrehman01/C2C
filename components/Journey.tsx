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
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-400">The journey</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            A clear path from <span className="gradient-text">first class</span> to <span className="gradient-text">first offer</span>
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-500/50 to-transparent hidden md:block" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"}`}
              >
                <div className="glass rounded-2xl p-6 relative">
                  <div className="text-5xl font-black gradient-text">{s.n}</div>
                  <h3 className="mt-2 text-xl font-semibold text-white">{s.t}</h3>
                  <p className="text-white/60 mt-1 text-sm">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
