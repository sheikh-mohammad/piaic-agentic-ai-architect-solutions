import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Methodology — Aroma Antiquaria",
  description: "How we reconstruct historical perfumes through textual analysis, molecular archaeology, and experimental perfumery.",
};

const pillars = [
  { n: "I", title: "Textual Analysis", desc: "From hieroglyphs and cuneiform to Linear B, we decipher and interpret ancient perfume recipes.", points: ["Deciphering multiple dead languages", "Cross-referencing sources for consensus", "Cataloging ingredients and methods"], mark: "ﬁ" },
  { n: "II", title: "Molecular Archaeology", desc: "GC-MS of residue in ancient vessels, tombs, and temples reveals the substances actually used.", points: ["GC-MS of archaeological residue", "DNA and isotope sourcing", "Pollen and phytolith analysis"], mark: "Ø" },
  { n: "III", title: "Experimental Perfumery", desc: "Master perfumers translate analytical data into a living, wearable fragrance.", points: ["Sourcing authentic raw materials", "Period-correct blending methods", "Iterative sensory evaluation"], mark: "✿" },
  { n: "IV", title: "Verification & Publication", desc: "Every reconstruction is peer-reviewed and published for the academic community.", points: ["Peer review by historians & perfumers", "Sensory-panel validation", "Open-access publication"], mark: "Φ" },
];

const techniques = [
  { name: "GC-MS", full: "Gas Chromatography–Mass Spectrometry", desc: "Separates and identifies compounds in residue samples." },
  { name: "HPLC", full: "High-Performance Liquid Chromatography", desc: "Analyzes non-volatile resins and balsams." },
  { name: "DNA", full: "Metagenomic Sequencing", desc: "Identifies plant species from ancient DNA fragments." },
  { name: "Pollen", full: "Palynology", desc: "Rebuilds plant communities from preserved grains." },
  { name: "Isotope", full: "Stable Isotope Analysis", desc: "Traces the geographic origin of raw materials." },
  { name: "Residual", full: "Organic Residue Analysis", desc: "Detects compounds within ancient vessel walls." },
];

export default function MethodologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-24" role="main">
        <section className="section border-b border-border/50" aria-labelledby="methodology-heading">
          <div className="frame">
            <header style={{ maxWidth: "40rem", marginBottom: "3.5rem" }}>
              <span className="eyebrow">The Science & Art of Recovery</span>
              <h1 id="methodology-heading" className="font-serif text-foreground text-balance" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                How We Reconstruct
                <span className="block italic text-primary">Lost Fragrances</span>
              </h1>
              <p className="text-muted-foreground font-light" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "36rem" }}>
                Reconstructing a historical perfume joins archaeology, linguistics, chemistry, and perfumery
                in a single discipline. Our method rests on four pillars.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "1rem" }}>
              {pillars.map((p) => (
                <article key={p.n} className="card group" style={{ padding: "1.75rem" }}>
                  <div className="flex items-center" style={{ gap: "1rem", marginBottom: "1.25rem" }}>
                    <span
                      className="flex items-center justify-center rounded-full bg-primary/[0.05] text-primary font-serif text-2xl transition-all duration-300 group-hover:bg-accent group-hover:text-on-accent"
                      style={{ width: "3.25rem", height: "3.25rem" }}
                      aria-hidden="true"
                    >
                      {p.mark}
                    </span>
                    <div>
                      <span className="text-accent" style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.2em" }}>Pillar {p.n}</span>
                      <h2 className="font-serif text-foreground" style={{ fontSize: "1.25rem", lineHeight: 1.2 }}>{p.title}</h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-light" style={{ fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{p.desc}</p>
                  <ul className="flex flex-col" style={{ gap: "0.625rem" }} role="list">
                    {p.points.map((point) => (
                      <li key={point} className="flex items-start" style={{ gap: "0.625rem" }}>
                        <svg className="mt-0.5 text-accent flex-shrink-0" style={{ width: "0.875rem", height: "0.875rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-foreground/75" style={{ fontSize: "0.8125rem" }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden section bg-secondary text-on-secondary" aria-labelledby="techniques-heading">
          <div className="frame">
            <header style={{ maxWidth: "28rem", marginBottom: "3rem" }}>
              <span className="eyebrow">The Instrumentation</span>
              <h2 id="techniques-heading" className="font-serif text-on-secondary" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.15 }}>
                Analytical Techniques
              </h2>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "0.875rem" }}>
              {techniques.map((t) => (
                <div key={t.name} className="rounded-xl border border-on-secondary/10 bg-on-secondary/[0.04] transition-all duration-300 hover:bg-on-secondary/[0.08] hover:border-on-secondary/20" style={{ padding: "1.5rem" }}>
                  <h3 className="font-serif text-accent" style={{ fontSize: "1.375rem", marginBottom: "0.25rem" }}>{t.name}</h3>
                  <p className="text-on-secondary/50" style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>{t.full}</p>
                  <p className="text-on-secondary/70" style={{ fontSize: "0.8125rem", lineHeight: 1.65 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
