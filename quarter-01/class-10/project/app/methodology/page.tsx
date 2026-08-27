import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Methodology — Aroma Antiquaria",
  description: "How we reconstruct historical perfumes through textual analysis, molecular archaeology, and experimental perfumery.",
};

const pillars = [
  {
    n: "I",
    title: "Textual Analysis",
    desc: "From hieroglyphs and cuneiform to Linear B, we decipher and interpret ancient perfume recipes.",
    points: ["Deciphering multiple dead languages", "Cross-referencing sources for consensus", "Cataloging ingredients and methods"],
    mark: "ﬁ",
  },
  {
    n: "II",
    title: "Molecular Archaeology",
    desc: "GC-MS of residue in ancient vessels, tombs, and temples reveals the substances actually used.",
    points: ["GC-MS of archaeological residue", "DNA and isotope sourcing", "Pollen and phytolith analysis"],
    mark: "Ø",
  },
  {
    n: "III",
    title: "Experimental Perfumery",
    desc: "Master perfumers translate analytical data into a living, wearable fragrance.",
    points: ["Sourcing authentic raw materials", "Period-correct blending methods", "Iterative sensory evaluation"],
    mark: "✿",
  },
  {
    n: "IV",
    title: "Verification & Publication",
    desc: "Every reconstruction is peer-reviewed and published for the academic community.",
    points: ["Peer review by historians & perfumers", "Sensory-panel validation", "Open-access publication"],
    mark: "Φ",
  },
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
        <section className="py-16 md:py-24 border-b border-border" aria-labelledby="methodology-heading">
          <div className="frame">
            <header className="max-w-3xl mb-16">
              <span className="eyebrow text-accent block mb-5">The Science & Art of Recovery</span>
              <h1 id="methodology-heading" className="font-serif text-4xl md:text-6xl tracking-tight text-foreground leading-[1.08] text-balance">
                How We Reconstruct
                <span className="block italic text-primary">Lost Fragrances</span>
              </h1>
              <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
                Reconstructing a historical perfume joins archaeology, linguistics, chemistry, and perfumery
                in a single discipline. Our method rests on four pillars.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pillars.map((p) => (
                <article
                  key={p.n}
                  className="group rounded-2xl border border-border bg-card p-9 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <span className="flex items-center justify-center h-14 w-14 rounded-full bg-primary/[0.06] text-primary font-serif text-2xl group-hover:bg-accent group-hover:text-on-accent transition-colors duration-300" aria-hidden="true">
                      {p.mark}
                    </span>
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-accent">Pillar {p.n}</span>
                      <h2 className="font-serif text-2xl text-foreground leading-tight">{p.title}</h2>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light mb-6">{p.desc}</p>
                  <ul className="space-y-2.5" role="list">
                    {p.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-foreground/80">
                        <svg className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 md:py-28 bg-secondary text-on-secondary" aria-labelledby="techniques-heading">
          <div className="frame">
            <header className="max-w-2xl mb-14">
              <span className="eyebrow text-accent block mb-5">The Instrumentation</span>
              <h2 id="techniques-heading" className="font-serif text-3xl md:text-5xl tracking-tight leading-tight">
                Analytical Techniques
              </h2>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {techniques.map((t) => (
                <div key={t.name} className="rounded-2xl border border-on-secondary/15 bg-on-secondary/5 p-7 transition-colors duration-300 hover:bg-on-secondary/10">
                  <h3 className="font-serif text-2xl text-accent mb-1">{t.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-on-secondary/60 mb-3">{t.full}</p>
                  <p className="text-sm text-on-secondary/80 leading-relaxed">{t.desc}</p>
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