import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import LegalBody from "@/components/site/LegalBody";
import NextChapter from "@/components/site/NextChapter";

export const metadata: Metadata = {
  title: "Privacy — HELIOS",
  description:
    "What HELIOS collects, why, and what happens to it. Written to be read by humans.",
};

const SECTIONS = [
  {
    h: "What we collect",
    p: "Only what you give us: an email address, a name, a message. If you apply for a role, your CV and the details in it. That is the list — no device fingerprinting, no location harvest, no 'growth' scraping.",
  },
  {
    h: "Why we collect it",
    p: "To reply to you, to evaluate an application, and to send things you asked for. Nothing else. We do not sell data, and we never have.",
  },
  {
    h: "Cookies",
    p: "A single, necessary session cookie so the forms work. We run no third-party analytics and no advertising cookies.",
  },
  {
    h: "Sharing",
    p: "We share only with the tools required to run the business — email and hiring software, under contract — and with authorities where the law compels it. Never for money.",
  },
  {
    h: "Retention",
    p: "Messages: two years. Applications: until the role closes, then one year. After that, deletion — real deletion, not a checkbox in a database.",
  },
  {
    h: "Your rights",
    p: "You can ask what we hold, correct it, or have it erased. Write to hello@helios.energy and it happens within 30 days.",
  },
  {
    h: "Contact",
    p: "Questions about this policy: hello@helios.energy. HELIOS Fusion Ltd, 1 Plasma Way, Oxford OX1 2JD, United Kingdom.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="relative">
      <PageHero
        index="07"
        eyebrow="Privacy"
        title={["Your data,", "contained."]}
        sub="Like a plasma: held in a field, never scattered, and released only when you ask."
      />
      <LegalBody
        intro="This is our entire privacy policy, in plain language. It is deliberately short. If a regulator needs the legalese we will gladly provide it — but you should not need a lawyer to understand what we do with your email address."
        sections={SECTIONS}
        updated="15 August 2026"
      />
      <NextChapter index="05" label="Contact" href="/contact" />
    </main>
  );
}
