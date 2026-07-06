import { ArrowRight, Sparkles, GraduationCap, Briefcase, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/80">
          <Sparkles className="w-3.5 h-3.5 text-accent-500" />
          Building brighter futures for 10,000+ students
        </div>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
          From <span className="gradient-text">Campus</span>
          <br />
          to <span className="gradient-text">Corporate</span>
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-lg text-white/70">
          Placement readiness, interview preparation, and mentorship to guide
          students through every step of their journey — from the first
          classroom to the first offer letter.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#register" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3 font-semibold text-white shadow-glow hover:opacity-95">
            Create Student Account
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <a href="#login" className="rounded-xl glass px-6 py-3 font-semibold text-white hover:bg-white/10">
            Student Login
          </a>
        </div>

        {/* Floating cards */}
        <div className="relative mt-20 mx-auto max-w-4xl">
          <div className="glass rounded-3xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FloatCard icon={<GraduationCap />} title="Campus" text="Registration, guidance & training." />
              <FloatCard icon={<Users />} title="Mentorship" text="1:1 mentors & career mapping." />
              <FloatCard icon={<Briefcase />} title="Corporate" text="Interview prep & placements." />
            </div>
          </div>
          <div className="absolute -z-10 inset-0 blur-3xl opacity-40 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500" />
        </div>
      </div>
    </section>
  );
}

function FloatCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-left hover:-translate-y-1 hover:bg-white/10 transition duration-300">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center text-white">{icon}</div>
      <h3 className="mt-4 font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/70 mt-1">{text}</p>
    </div>
  );
}
