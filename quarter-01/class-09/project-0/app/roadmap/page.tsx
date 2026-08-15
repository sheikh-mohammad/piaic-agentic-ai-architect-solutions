import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import RoadmapTimeline from "@/components/site/RoadmapTimeline";
import NextChapter from "@/components/site/NextChapter";

export const metadata: Metadata = {
  title: "The Roadmap — HELIOS",
  description:
    "From first plasma to a gigawatt in the ground. The years between a laboratory success and abundant energy.",
};

export default function RoadmapPage() {
  return (
    <main className="relative">
      <PageHero
        index="04"
        eyebrow="The Roadmap"
        title={["From first plasma", "to grid."]}
        sub="The years between a laboratory success and a gigawatt in the ground."
      />
      <RoadmapTimeline />
      <NextChapter index="05" label="Contact" href="/contact" />
    </main>
  );
}
