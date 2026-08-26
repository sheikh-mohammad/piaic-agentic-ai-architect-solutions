import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import LegalBody from "@/components/site/LegalBody";
import NextChapter from "@/components/site/NextChapter";

export const metadata: Metadata = {
  title: "Terms — HELIOS",
  description:
    "The rules of the road for helios.energy — written to be read by humans.",
};

const SECTIONS = [
  {
    h: "These terms",
    p: "Cover your use of helios.energy and its subpages. By using the site you agree to them. They are written to be read by humans first and lawyers second.",
  },
  {
    h: "Content",
    p: "Everything on the site is for information. Figures describing our reactors are directional — the physics is real, the headline numbers are targets, and we say so when we can.",
  },
  {
    h: "No advice",
    p: "Nothing here is investment advice, engineering guidance, or an offer of securities. We are an energy company, not a crystal ball.",
  },
  {
    h: "Use of the site",
    p: "You may browse, share and link freely. You may not scrape, exploit, or use the site to harm anyone or anything.",
  },
  {
    h: "Intellectual property",
    p: "HELIOS, the mark and the design are ours. You may reference us in honest contexts; you may not clone the site or pass it off as your own.",
  },
  {
    h: "Liability",
    p: "The site is provided as-is. To the extent the law allows, we are not liable for losses arising from its use.",
  },
  {
    h: "Changes",
    p: "We may update these terms as we grow. The current version is always this page, dated below.",
  },
  {
    h: "Contact",
    p: "Questions: hello@helios.energy. HELIOS Fusion Ltd, 1 Plasma Way, Oxford OX1 2JD, United Kingdom.",
  },
];

export default function TermsPage() {
  return (
    <main className="relative">
      <PageHero
        index="08"
        eyebrow="Terms"
        title={["The fine print,", "unwrapped."]}
        sub="The rules of the road. Short, plain, and written by the same people who sign it."
      />
      <LegalBody
        intro="These are the terms that govern helios.energy. We kept them short because the interesting part of this company is the reactor, not the legalese."
        sections={SECTIONS}
        updated="15 August 2026"
      />
      <NextChapter index="05" label="Contact" href="/contact" />
    </main>
  );
}
