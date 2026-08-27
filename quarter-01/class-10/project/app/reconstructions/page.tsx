import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Reconstructions — Aroma Antiquaria",
  description: "Discover our experimental reconstructions of historical fragrances, from Kyphi to the Royal Perfume of Pylos.",
};

const reconstructions = [
  { id: "kyphi", name: "Kyphi", civ: "Ancient Egypt", period: "1550 BCE", desc: "The quintessential Egyptian temple incense — six weeks of blending sixteen authentic ingredients, from honey and wine to frankincense and myrrh.", notes: ["Honey", "Wine", "Myrrh", "Frankincense"], mark: "☥", difficulty: "Advanced" },
  { id: "pylos", name: "Royal Perfume of Pylos", civ: "Mycenaean Greece", period: "1300 BCE", desc: "Reconstructed directly from Linear B tablets found at the Palace of Nestor, blending coriander, sage and citrus into a perfumed olive oil base.", notes: ["Coriander", "Sage", "Citrus", "Olive"], mark: "Δ", difficulty: "Intermediate" },
  { id: "copal", name: "Copal of Tikal", civ: "Maya Civilization", period: "600 CE", desc: "A sacred ritual incense read from residue analysis of offering bowls at Tikal, married to cacao and tobacco.", notes: ["Copal", "Cacao", "Vanilla", "Tobacco"], mark: "◎", difficulty: "Advanced" },
  { id: "han", name: "Han Court Fragrance", civ: "Ancient China", period: "100 BCE", desc: "An imperial blend of agarwood, clove and musk from the 'Fan Ye' chronicles of court life.", notes: ["Agarwood", "Clove", "Musk", "Sandalwood"], mark: "中", difficulty: "Expert" },
  { id: "rosatum", name: "Rose Perfume (Rosatum)", civ: "Roman Empire", period: "50 CE", desc: "The celebrated Roman rose oil described by Pliny the Elder — rose petals steeped in oil with saffron and myrrh.", notes: ["Rose", "Saffron", "Myrrh"], mark: "✿", difficulty: "Intermediate" },
  { id: "cedar", name: "Cedar Temple Incense", civ: "Mesopotamia", period: "2000 BCE", desc: "A Sumerian temple formula from cuneiform tablets, blending cedar, cypress and juniper for the moon god Nanna.", notes: ["Cedar", "Cypress", "Juniper"], mark: "☾", difficulty: "Beginner" },
];

function Difficulty({ level }: { level: string }) {
  const p: Record<string, string> = {
    Beginner: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    Intermediate: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    Advanced: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    Expert: "bg-rose-500/10 text-rose-700 border-rose-500/20",
  };
  return <span className={`inline-flex items-center rounded-full border font-medium ${p[level]}`} style={{ padding: "0.25rem 0.75rem", fontSize: "0.7rem" }}>{level}</span>;
}

const steps = [
  { n: "01", title: "Textual Analysis", desc: "Decrypt ancient recipes in hieroglyphs, cuneiform, or Linear B." },
  { n: "02", title: "Molecular Study", desc: "Analyze residue from ancient vessels with GC-MS and DNA sequencing." },
  { n: "03", title: "Ingredient Sourcing", desc: "Procure authentic, sustainably harvested raw materials." },
  { n: "04", title: "Composition", desc: "Reconstruct the scent with traditional and modern techniques." },
  { n: "05", title: "Documentation", desc: "Publish methodology, analysis, and the olfactory profile." },
];

export default function ReconstructionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-24" role="main">
        <section className="section border-b border-border/50" aria-labelledby="recon-heading">
          <div className="frame">
            <header style={{ maxWidth: "40rem", marginBottom: "3.5rem" }}>
              <span className="eyebrow">The Olfactory Lab</span>
              <h1 id="recon-heading" className="font-serif text-foreground text-balance" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Experimental
                <span className="block italic text-primary">Reconstructions</span>
              </h1>
              <p className="text-muted-foreground font-light" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "36rem" }}>
                Our laboratory rebuilds historical fragrances using molecular science, recovered recipes,
                and the craft of fine perfumery — each one documented and available for study.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "1rem" }}>
              {reconstructions.map((r) => (
                <article key={r.id} className="card group overflow-hidden flex flex-col" style={{ padding: 0 }}>
                  <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "10rem", background: "linear-gradient(135deg, var(--color-muted), rgba(239,231,218,0.4))" }}>
                    <span className="font-serif text-primary/15 transition-transform duration-500 group-hover:scale-110" style={{ fontSize: "4rem" }} aria-hidden="true">
                      {r.mark}
                    </span>
                    <div className="absolute" style={{ top: "0.75rem", right: "0.75rem" }}><Difficulty level={r.difficulty} /></div>
                  </div>
                  <div className="flex flex-col flex-1" style={{ padding: "1.5rem" }}>
                    <h2 className="font-serif text-foreground leading-snug" style={{ fontSize: "1.125rem" }}>{r.name}</h2>
                    <p className="text-muted-foreground" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.25rem" }}>{r.civ} · {r.period}</p>
                    <p className="text-muted-foreground" style={{ fontSize: "0.8125rem", lineHeight: 1.65, marginTop: "0.75rem" }}>{r.desc}</p>
                    <div className="flex flex-wrap" style={{ gap: "0.375rem", marginTop: "0.75rem", marginBottom: "1.25rem" }} role="list" aria-label="Notes">
                      {r.notes.map((n) => (
                        <span key={n} role="listitem" className="rounded-full bg-muted text-muted-foreground border border-border/60" style={{ padding: "0.25rem 0.625rem", fontSize: "0.7rem" }}>
                          {n}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between" style={{ paddingTop: "1rem", borderTop: "1px solid var(--color-border)" }}>
                      <button className="font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded" style={{ fontSize: "0.8125rem" }}>Full Story</button>
                      <button className="text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded" style={{ fontSize: "0.8125rem" }}>Request Sample</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden section bg-secondary text-on-secondary" aria-labelledby="process-heading">
          <div className="frame">
            <header style={{ maxWidth: "28rem", marginBottom: "3rem" }}>
              <span className="eyebrow">From Text to Scent</span>
              <h2 id="process-heading" className="font-serif text-on-secondary" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.15 }}>
                Five Stages of Reconstruction
              </h2>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: "1.5rem" }}>
              {steps.map((s, i) => (
                <div key={s.n} className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute border-t border-dashed border-on-secondary/15" style={{ top: "1.25rem", left: "50%", width: "100%" }} aria-hidden="true" />
                  )}
                  <div className="flex items-center justify-center rounded-full bg-accent text-on-accent font-serif relative" style={{ width: "2.5rem", height: "2.5rem", marginBottom: "1rem", fontSize: "0.875rem" }}>{s.n}</div>
                  <h3 className="font-serif text-on-secondary" style={{ fontSize: "0.875rem", marginBottom: "0.375rem" }}>{s.title}</h3>
                  <p className="text-on-secondary/60" style={{ fontSize: "0.75rem", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="collab-heading">
          <div className="text-center" style={{ maxWidth: "40rem", margin: "0 auto", padding: "0 1.5rem" }}>
            <span className="eyebrow">Partnerships</span>
            <h2 id="collab-heading" className="font-serif text-foreground text-balance" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: 1.15 }}>
              Collaborate with the Lab
            </h2>
            <p className="text-muted-foreground font-light" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.75, marginTop: "1.25rem", maxWidth: "28rem", marginLeft: "auto", marginRight: "auto" }}>
              Museums, archaeologists, perfumers, and universities partner with us to bring
              forgotten scents to life.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary text-on-primary font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_8px_30px_rgba(110,27,27,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                style={{ padding: "0.875rem 2rem" }}
              >
                Start a Collaboration
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
