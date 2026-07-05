import Navbar from "@/components/organisms/Navbar";
import Hero from "@/components/organisms/Hero";
import Marquee from "@/components/organisms/Marquee";
import Features from "@/components/organisms/Features";
import Journey from "@/components/organisms/Journey";
import Programs from "@/components/organisms/Programs";
import Stats from "@/components/organisms/Stats";
import Testimonials from "@/components/organisms/Testimonials";
import FAQ from "@/components/organisms/FAQ";
import CTA from "@/components/organisms/CTA";
import Footer from "@/components/organisms/Footer";

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
