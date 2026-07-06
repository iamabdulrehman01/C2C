import { Target, BookOpen, MessageSquare, Award, Rocket, ShieldCheck } from "lucide-react";

const items = [
  { icon: Target, title: "Placement Readiness", text: "Structured tracks that prepare you for aptitude, coding, and HR rounds." },
  { icon: BookOpen, title: "Skill Training", text: "Industry-aligned curriculum across tech, business, and soft skills." },
  { icon: MessageSquare, title: "Mock Interviews", text: "Real-time interview simulations with detailed personalized feedback." },
  { icon: Award, title: "Certification", text: "Get recognized credentials your recruiters actually value." },
  { icon: Rocket, title: "Career Launchpad", text: "Resume, LinkedIn, and portfolio reviews from hiring experts." },
  { icon: ShieldCheck, title: "Secure Student Portal", text: "Track progress, sessions, and offers in one dashboard." },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-400">What we offer</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Everything a student needs to <span className="gradient-text">get hired</span>.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative rounded-2xl glass p-6 hover:border-brand-500/40 hover:-translate-y-1 transition duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 border border-white/10 grid place-items-center text-brand-400 group-hover:text-white">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 font-semibold text-white text-lg">{it.title}</h3>
              <p className="text-sm text-white/60 mt-2 leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
