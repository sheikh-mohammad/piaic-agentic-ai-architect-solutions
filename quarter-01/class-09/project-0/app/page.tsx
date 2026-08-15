import type { Metadata } from "next";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import StatsBand from "@/components/site/StatsBand";
import ChapterIndex from "@/components/site/ChapterIndex";
import WhyFusion from "@/components/site/WhyFusion";
import ManifestoTeaser from "@/components/site/ManifestoTeaser";
import NewsList from "@/components/site/NewsList";
import CTAStrip from "@/components/site/CTAStrip";

export const metadata: Metadata = {
  title: "HELIOS — A star, contained.",
  description:
    "HELIOS builds commercial fusion power plants. Ten million degrees of clean, unlimited energy, held in a magnetic cage and turned into the electricity that powers everything.",
};

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Marquee />
      <StatsBand />
      <ChapterIndex />
      <WhyFusion />
      <ManifestoTeaser />
      <NewsList />
      <CTAStrip />
    </main>
  );
}
