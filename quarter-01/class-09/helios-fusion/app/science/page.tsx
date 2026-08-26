import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import ScienceSteps from "@/components/site/ScienceSteps";
import FuelCycle from "@/components/site/FuelCycle";
import NextChapter from "@/components/site/NextChapter";

export const metadata: Metadata = {
  title: "The Science — HELIOS",
  description:
    "Contain. Heat. Harvest. Three moves, one star — and why fusion can never melt down or run away.",
};

export default function SciencePage() {
  return (
    <main className="relative">
      <PageHero
        index="03"
        eyebrow="The Science"
        title={["Three moves.", "One star."]}
        sub="Contain. Heat. Harvest. The entire process in three acts — and why it can never run away."
      />
      <ScienceSteps />
      <FuelCycle />
      <NextChapter index="04" label="The Roadmap" href="/roadmap" />
    </main>
  );
}
