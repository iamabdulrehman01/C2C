import { Check } from "lucide-react";

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
    features: ["Full aptitude & coding", "Resume & LinkedIn", "10+ mock interviews", "1:1 mentor sessions", "Company-specific prep"],
    highlight: true,
  },
  {
    name: "Corporate Ready",
    price: "Elite",
    tag: "For final year students",
    features: ["Everything in Pro", "Guaranteed interviews", "Live project experience", "Salary negotiation coaching", "Priority placement drives"],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-400">Programs</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Pick your <span className="gradient-text">track</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 ${
                p.highlight
                  ? "bg-gradient-to-b from-brand-500/20 to-accent-500/10 border border-brand-500/40 shadow-glow"
                  : "glass"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-accent-500 text-white font-semibold">
                  Most chosen
                </div>
              )}
              <h3 className="text-2xl font-bold text-white">{p.name}</h3>
              <p className="text-sm text-white/60 mt-1">{p.tag}</p>
              <div className="mt-4 text-4xl font-extrabold gradient-text">{p.price}</div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                    <Check className="w-4 h-4 text-brand-400 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#register"
                className={`mt-8 block text-center rounded-xl py-3 font-semibold transition ${
                  p.highlight
                    ? "bg-white text-brand-950 hover:bg-brand-100"
                    : "glass text-white hover:bg-white/10"
                }`}
              >
                Enroll now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
