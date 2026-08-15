import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import ManifestoBody from "@/components/site/ManifestoBody";
import NextChapter from "@/components/site/NextChapter";

export const metadata: Metadata = {
  title: "Manifesto — HELIOS",
  description:
    "Every civilisation is defined by the energy it masters. Why HELIOS builds the engine that powers every star.",
};

export default function ManifestoPage() {
  return (
    <main className="relative">
      <PageHero
        index="01"
        eyebrow="Manifesto"
        title={["Why we must stop", "burning the past."]}
        sub="For a century we burned stored sunlight. HELIOS builds the engine that powers every star — the operating manual for clean energy, built and running."
      />
      <ManifestoBody />
      <NextChapter index="02" label="The Reactor" href="/reactor" />
    </main>
  );
}
