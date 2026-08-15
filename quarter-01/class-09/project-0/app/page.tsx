import type { Metadata } from "next";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import ChapterIndex from "@/components/site/ChapterIndex";
import ManifestoTeaser from "@/components/site/ManifestoTeaser";
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
      <ChapterIndex />
      <ManifestoTeaser />
      <CTAStrip />
    </main>
  );
}
