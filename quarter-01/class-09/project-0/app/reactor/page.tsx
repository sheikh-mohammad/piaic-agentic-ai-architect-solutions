import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import ReactorFacts from "@/components/site/ReactorFacts";
import NextChapter from "@/components/site/NextChapter";

export const metadata: Metadata = {
  title: "The Reactor — HELIOS",
  description:
    "Tokamak 01 — a star in a magnetic cage. 150 million degrees, held by superconducting coils, turning seawater into electricity.",
};

export default function ReactorPage() {
  return (
    <main className="relative">
      <PageHero
        index="02"
        eyebrow="The Reactor"
        title={["Inside the", "machine."]}
        sub="Tokamak 01 — a star in a magnetic cage. This is what containment looks like."
      />
      <ReactorFacts />
      <NextChapter index="03" label="The Science" href="/science" />
    </main>
  );
}
