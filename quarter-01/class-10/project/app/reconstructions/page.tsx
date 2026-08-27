import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Reconstructions — Aroma Antiquaria",
  description: "Discover our experimental reconstructions of historical fragrances, from Kyphi to the Royal Perfume of Pylos.",
};

const reconstructions = [
  {
    id: "kyphi",
    name: "Kyphi",
    civ: "Ancient Egypt",
    period: "1550 BCE",
    desc: "The quintessential Egyptian temple incense — six weeks of blending sixteen authentic ingredients, from honey and wine to frankincense and myrrh.",
    notes: ["Honey", "Wine", "Myrrh", "Frankincense"],
    mark: "☥",
    difficulty: "Advanced",
    story: "Burned at sunset across Egyptian temples and used as both medicine and perfume, Kyphi was the scent that carried the sacred into the mundane.",
  },
  {
    id: "pylos",
    name: "Royal Perfume of Pylos",
    civ: "Mycenaean Greece",
    period: "1300 BCE",
    desc: "Reconstructed directly from Linear B tablets found at the Palace of Nestor, blending coriander, sage and citrus into a perfumed olive oil base.",
    notes: ["Coriander", "Sage", "Citrus", "Olive"],
    mark: "Δ",
    difficulty: "Intermediate",
    story: "The scribes of Pylos kept meticulous records of royal perfumery, letting us recreate a fragrance last worn in the palaces of the Bronze Age.",
  },
  {
    id: "copal",
    name: "Copal of Tikal",
    civ: "Maya Civilization",
    period: "600 CE",
    desc: "A sacred ritual incense read from residue analysis of offering bowls at Tikal, married to cacao and tobacco.",
    notes: ["Copal", "Cacao", "Vanilla", "Tobacco"],
    mark: "◎",
    difficulty: "Advanced",
    story: "Chemical traces in burnt ceramic bowls reveal the ceremonial incense that accompanied Maya offerings to their gods.",
  },
  {
    id: "han",
    name: "Han Court Fragrance",
    civ: "Ancient China",
    period: "100 BCE",
    desc: "An imperial blend of agarwood, clove and musk from the 'Fan Ye' chronicles of court life.",
    notes: ["Agarwood", "Clove", "Musk", "Sandalwood"],
    mark: "中",
    difficulty: "Expert",
    story: "Exotic aromatics flowed along the Silk Road to the Chinese court, where perfumers created signature scents for imperial chambers.",
  },
  {
    id: "rosatum",
    name: "Rose Perfume (Rosatum)",
    civ: "Roman Empire",
    period: "50 CE",
    desc: "The celebrated Roman rose oil described by Pliny the Elder — rose petals steeped in oil with saffron and myrrh.",
    notes: ["Rose", "Saffron", "Myrrh"],
    mark: "✿",
    difficulty: "Intermediate",
    story: "Pliny and Dioscorides both recorded the making of rosatum, used for cosmetics and for anointing the statues of the gods.",
  },
  {
    id: "cedar",
    name: "Cedar Temple Incense",
    civ: "Mesopotamia",
    period: "2000 BCE",
    desc: "A Sumerian temple formula from cuneiform tablets, blending cedar, cypress and juniper for the moon god Nanna.",
    notes: ["Cedar", "Cypress", "Juniper"],
    mark: "☾",
    difficulty: "Beginner",
    story: "Cuneiform tablets from Ur record the oldest written perfume recipes known, honoring the lunar deity with fragrant smoke.",
  },
];

function Difficulty({ level }: { level: string }) {
  const palette: Record<string, string> = {
    Beginner: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
    Intermediate: "bg-blue-500/10 text-blue-700 border-blue-500/30",
    Advanced: "bg-amber-500/10 text-amber-700 border-amber-500/30",
    Expert: "bg-rose-500/10 text-rose-700 border-rose-500/30",
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${palette[level]}`}>
      {level}
    </span>
  );
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
        <section className="py-16 md:py-24 border-b border-border" aria-labelledby="recon-heading">
          <div className="frame">
            <header className="max-w-3xl mb-16">
              <span className="eyebrow text-accent block mb-5">The Olfactory Lab</span>
              <h1 id="recon-heading" className="font-serif text-4xl md:text-6xl tracking-tight text-foreground leading-[1.08] text-balance">
                Experimental
                <span className="block italic text-primary">Reconstructions</span>
              </h1>
              <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
                Our laboratory rebuilds historical fragrances using molecular science, recovered recipes,
                and the craft of fine perfumery — each one documented and available for study.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reconstructions.map((r) => (
                <article
                  key={r.id}
                  className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl flex flex-col"
                >
                  <div className="relative h-44 bg-gradient-to-br from-muted to-muted/40 flex items-center justify-center overflow-hidden">
                    <span className="font-serif text-7xl text-primary/15 group-hover:scale-110 transition-transform duration-500" aria-hidden="true">
                      {r.mark}
                    </span>
                    <div className="absolute top-4 right-4"><Difficulty level={r.difficulty} /></div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h2 className="font-serif text-xl text-foreground leading-snug">{r.name}</h2>
                    <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{r.civ} · {r.period}</p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4 mb-5" role="list" aria-label="Notes">
                      {r.notes.map((n) => (
                        <span key={n} role="listitem" className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border">
                          {n}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-5 border-t border-border flex items-center justify-between">
                      <button className="text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">Full Story</button>
                      <button className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">Request Sample</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 md:py-28 bg-secondary text-on-secondary" aria-labelledby="process-heading">
          <div className="frame">
            <header className="max-w-2xl mb-14">
              <span className="eyebrow text-accent block mb-5">From Text to Scent</span>
              <h2 id="process-heading" className="font-serif text-3xl md:text-5xl tracking-tight leading-tight">
                Five Stages of Reconstruction
              </h2>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {steps.map((s, i) => (
                <div key={s.n} className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full border-t border-dashed border-on-secondary/20" aria-hidden="true" />
                  )}
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-on-accent font-serif text-lg mb-5 relative">{s.n}</div>
                  <h3 className="font-serif text-base text-on-secondary mb-2">{s.title}</h3>
                  <p className="text-xs text-on-secondary/70 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28" aria-labelledby="collab-heading">
          <div className="mx-auto w-full max-w-3xl px-6 text-center">
            <span className="eyebrow text-accent block mb-5">Partnerships</span>
            <h2 id="collab-heading" className="font-serif text-3xl md:text-5xl tracking-tight text-foreground text-balance">
              Collaborate with the Lab
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-xl mx-auto">
              Museums, archaeologists, perfumers, and universities partner with us to bring
              forgotten scents to life.
            </p>
            <div className="mt-9">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-primary text-on-primary font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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