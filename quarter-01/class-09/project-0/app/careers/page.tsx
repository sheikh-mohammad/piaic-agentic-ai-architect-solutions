import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import CareersBody from "@/components/site/CareersBody";
import NextChapter from "@/components/site/NextChapter";

export const metadata: Metadata = {
  title: "Careers — HELIOS",
  description:
    "Physicists, engineers and believers. Build the machine that ends the energy problem — we have room for one more.",
};

export default function CareersPage() {
  return (
    <main className="relative">
      <PageHero
        index="06"
        eyebrow="Careers"
        title={["Build the", "machine."]}
        sub="Two hundred physicists, engineers and believers — and room for one more."
      />
      <CareersBody />
      <NextChapter index="05" label="Contact" href="/contact" />
    </main>
  );
}
