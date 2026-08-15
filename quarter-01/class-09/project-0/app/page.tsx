import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Manifesto from "@/components/site/Manifesto";
import CoreFacts from "@/components/site/CoreFacts";
import Science from "@/components/site/Science";
import Roadmap from "@/components/site/Roadmap";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import SiteFX from "@/components/site/SiteFX";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <CoreFacts />
      <Science />
      <Roadmap />
      <CTA />
      <Footer />
      <SiteFX />
    </main>
  );
}
