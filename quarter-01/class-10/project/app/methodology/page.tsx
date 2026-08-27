import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Methodology — Aroma Antiquaria",
  description: "How we reconstruct historical perfumes through textual analysis, molecular archaeology, and experimental perfumery.",
};

const pillars = [
  {
    id: "textual",
    title: "Textual Analysis",
    tagline: "Reading the ancient recipes",
    description: "Every reconstruction begins with the written record. From cuneiform tablets to hieroglyphic scrolls, we translate and interpret ancient perfume recipes.",
    icon: "📜",
    details: [
      "Deciphering hieroglyphs, cuneiform, Linear B, and old Chinese script",
      "Cross-referencing multiple textual sources for each recipe",
      "Working with linguists and epigraphers to establish consensus readings",
      "Cataloging ingredients, quantities, and production methods",
    ],
    image: "§",
    bgClass: "bg-parchment/50",
  },
  {
    id: "molecular",
    title: "Molecular Archaeology",
    tagline: "Turning residue into data",
    description: "Gas chromatography–mass spectrometry (GC-MS) of archaeological residue reveals which aromatic substances were actually used.",
    icon: "⚗️",
    details: [
      "GC-MS analysis of residues in ancient vessels, tombs, and temples",
      "DNA sequencing of organic materials when preservation permits",
      "Isotope analysis to trace the geographic origin of ingredients",
      "Pollen and phytolith analysis for plant-based components",
    ],
    image: "Ø",
    bgClass: "bg-science/50",
  },
  {
    id: "perfumery",
    title: "Experimental Perfumery",
    tagline: "Where science meets art",
    description: "Our perfumers translate analytical and historical data into a wearable, olfactory experience using traditional and modern techniques.",
    icon: "🧴",
    details: [
      "Sourcing authentic, sustainably harvested raw materials",
      "Blending using period-correct quantities and techniques",
      "Modern extraction methods for difficult ingredients",
      "Iterative smelling sessions with our sensory panel",
    ],
    image: "✿",
    bgClass: "bg-craft/50",
  },
  {
    id: "verification",
    title: "Verification & Publication",
    tagline: "Proving historical authenticity",
    description: "Each reconstruction is rigorously verified by experts and published for the academic and public community.",
    icon: "🔬",
    details: [
      "Peer review by historians, archaeologists, and perfumers",
      "Sensory panel evaluation for olfactory accuracy",
      "Detailed documentation of methodology and materials",
      "Open access publication of all research findings",
    ],
    image: "Φ",
    bgClass: "bg-verify/50",
  },
];

const techniques = [
  { name: "GC-MS", full: "Gas Chromatography–Mass Spectrometry", description: "Separates and identifies compounds in residue samples." },
  { name: "HPLC", full: "High-Performance Liquid Chromatography", description: "Analyzes non-volatile compounds including resins and balsams." },
  { name: "DNA Analysis", full: "Metagenomic Sequencing", description: "Identifies plant species from ancient DNA fragments." },
  { name: "Pollen Analysis", full: "Palynology", description: "Reconstructs plant communities from preserved pollen grains." },
  { name: "Isotope Analysis", full: "Stable Isotope Analysis", description: "Traces geographic origins of raw materials." },
  { name: "Residual Analysis", full: "Organic Residue Analysis", description: "Detects lipid and other organic compounds in vessel walls." },
];

const sources = [
  { type: "Texual", name: "Cuneiform Tablets", civilization: "Mesopotamia", era: "2100 BCE" },
  { type: "Textual", name: "Papyrus of Ebers", civilization: "Egypt", era: "1550 BCE" },
  { type: "Textual", name: "Linear B Tablets", civilization: "Mycenaean", era: "1300 BCE" },
  { type: "Textual", name: "Dioscorides De Materia Medica", civilization: "Greece", era: "50 CE" },
  { type: "Textual", name: "Pliny the Elder Natural History", civilization: "Rome", era: "77 CE" },
  { type: "Textual", name: "Fan Ye Hou Hanshu", civilization: "China", era: "450 CE" },
  { type: "Material", name: "Kyphi residue in tomb", civilization: "Egypt", era: "1500 BCE" },
  { type: "Material", name: "Amphora residue", civilization: "Greece", era: "400 BCE" },
  { type: "Material", name: "Copal residue at Tikal", civilization: "Maya", era: "600 CE" },
];

export default function MethodologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16" role="main">
        <section className="py-16 md:py-24 border-b border-border" aria-labelledby="methodology-heading">
          <div className="container">
            <header className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-mono uppercase tracking-widest text-primary mb-4 block max-sm:text-xs">
                The Science & Art of Recovery
              </span>
              <h1 id="methodology-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6 text-balance">
                How We Reconstruct Lost Fragrances
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Reconstructing a historical perfume is a multidisciplinary endeavor that unites archaeology,
                linguistics, chemistry, and perfumery. Our methodology rests on four pillars.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => (
                <article
                  key={pillar.id}
                  className={`rounded-2xl border border-border p-8 md:p-10 transition-all duration-300 hover:border-primary/50 hover:shadow-lg ${pillar.bgClass}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-card border border-border shadow-sm text-primary" aria-hidden="true">
                        <span className="font-serif text-2xl">{pillar.image}</span>
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">
                          Pillar {index + 1} of 4
                        </p>
                        <h2 className="font-serif text-2xl font-medium text-foreground">{pillar.title}</h2>
                      </div>
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground font-light mb-6 leading-relaxed">{pillar.description}</p>
                  <ul className="space-y-3" role="list">
                    {pillar.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm text-foreground/80">
                        <svg className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30 border-b border-border" aria-labelledby="techniques-heading">
          <div className="container">
            <header className="max-w-3xl mx-auto text-center mb-16">
              <h2 id="techniques-heading" className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
                Analytical Techniques
              </h2>
              <p className="text-muted-foreground text-lg">
                The tools we use to turn archaeological material into scientifically grounded reconstructions.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {techniques.map((tech) => (
                <div key={tech.name} className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">{tech.name}</h3>
                  <p className="text-xs text-primary uppercase tracking-wider font-medium mb-2">{tech.full}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border" aria-labelledby="sources-heading">
          <div className="container">
            <header className="max-w-3xl mx-auto text-center mb-16">
              <h2 id="sources-heading" className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
                Primary Sources
              </h2>
              <p className="text-muted-foreground text-lg">
                Our reconstructions draw on both textual and material evidence from the ancient world.
              </p>
            </header>

            <div className="overflow-hidden rounded-xl border border-border">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left">
                  <caption className="sr-only">List of primary textual and material sources used in reconstructions</caption>
                  <thead>
                    <tr className="bg-muted/50 border-b border-border">
                      <th scope="col" className="px-6 py-4 text-xs font-mono uppercase tracking-widest text-primary w-32">Type</th>
                      <th scope="col" className="px-6 py-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">Source</th>
                      <th scope="col" className="px-6 py-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">Civilization</th>
                      <th scope="col" className="px-6 py-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">Era</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sources.map((source) => (
                      <tr key={`${source.name}-${source.era}`} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-3.5">
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                            source.type === "Textual"
                              ? "bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20"
                              : "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20"
                          }`}>
                            {source.type}
                          </span>
                        </td>
                        <td className="px-6 py-3.5 font-medium text-foreground">{source.name}</td>
                        <td className="px-6 py-3.5 text-sm text-muted-foreground">{source.civilization}</td>
                        <td className="px-6 py-3.5 text-sm text-muted-foreground font-mono">{source.era}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-center mt-6">
              <a href="/research/publications" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                View All Publications
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}