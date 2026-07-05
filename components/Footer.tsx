import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 font-bold text-white">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center text-white">C2</div>
            Campus<span className="text-brand-400">2</span>Corporate
          </div>
          <p className="mt-4 text-sm text-white/60 max-w-sm">
            Guiding students from classroom to career with training, mentorship, and placement support.
          </p>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#programs" className="hover:text-white">Programs</a></li>
            <li><a href="#testimonials" className="hover:text-white">Stories</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@c2csoftware.com</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 00000 00000</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> India</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Campus to Corporate. All rights reserved.
      </div>
    </footer>
  );
}
