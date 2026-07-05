import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import Journey from "@/components/Journey";
import Programs from "@/components/Programs";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Journey />
      <Programs />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
