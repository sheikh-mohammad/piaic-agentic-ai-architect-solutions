import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import ContactSection from "@/components/site/ContactSection";
import NextChapter from "@/components/site/NextChapter";

export const metadata: Metadata = {
  title: "Contact — HELIOS",
  description:
    "Deals, press, careers or a simple question about the physics. HELIOS answers everything within a day.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      <PageHero
        index="05"
        eyebrow="Contact"
        title={["Say hello.", "Light a star."]}
        sub="Deals, press, careers or a simple question about the physics — we answer everything, usually within a day."
      />
      <ContactSection />
      <NextChapter index="00" label="Home" href="/" />
    </main>
  );
}
