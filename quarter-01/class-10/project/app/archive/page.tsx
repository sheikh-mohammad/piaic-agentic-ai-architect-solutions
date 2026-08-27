import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Digital Archive — Aroma Antiquaria",
  description: "Explore 147 reconstructed historical fragrances from 23 ancient civilizations spanning 3,400+ years of olfactory history.",
};

const civilizations = [
  { name: "Ancient Egypt", period: "3100–30 BCE", count: 34, mark: "𓁜", tint: "text-[#B08D57]" },
  { name: "Mesopotamia", period: "3500–500 BCE", count: 18, mark: "☾", tint: "text-[#8B5A2B]" },
  { name: "Classical Greece", period: "800–146 BCE", count: 22, mark: "Δ", tint: "text-[#2E5E8A]" },
  { name: "Roman Empire", period: "27 BCE–476 CE", count: 28, mark: "ſ", tint: "text-[#8A2A2A]" },
  { name: "Ancient China", period: "1600 BCE–220 CE", count: 15, mark: "中", tint: "text-[#3E6B3E]" },
  { name: "Indus Valley", period: "3300–1300 BCE", count: 8, mark: "Փ", tint: "text-[#5B4A8A]" },
  { name: "Maya Civilization", period: "2000 BCE–900 CE", count: 11, mark: "◎", tint: "text-[#2E6B5E]" },
  { name: "Ancient Persia", period: "550–330 BCE", count: 11, mark: "✿", tint: "text-[#A4522A]" },
];

const fragrances = [
  { name: "Kyphi", civ: "Ancient Egypt", period: "16th c. BCE", desc: "The celebrated temple incense of Egypt, sixteen sacred ingredients burned at dusk to summon the divine.", notes: ["Honey", "Wine", "Myrrh", "Frankincense"], status: "Complete", year: 2023 },
  { name: "Royal Perfume of Pylos", civ: "Mycenaean Greece", period: "1300 BCE", desc: "Reconstructed from Linear B tablets; coriander, sage and citrus suspended in perfumed olive oil.", notes: ["Coriander", "Sage", "Citrus", "Honey"], status: "Complete", year: 2024 },
  { name: "Nardin", civ: "Ancient Greece", period: "4th c. BCE", desc: "Spikenard unguent, valued above gold and carried across the Silk Road in alabaster jars.", notes: ["Spikenard", "Cinnamon", "Calamus"], status: "Complete", year: 2022 },
  { name: "Han Court Fragrance", civ: "Ancient China", period: "2nd c. BCE", desc: "An imperial blend of agarwood, clove and musk from the 'Fan Ye' reckonings of court ritual.", notes: ["Agarwood", "Clove", "Musk"], status: "Complete", year: 2023 },
  { name: "Copal of Tikal", civ: "Maya Civilization", period: "600 CE", desc: "Sacred resin offering blend read from ceramic residue, married to cacao and tobacco.", notes: ["Copal", "Cacao", "Vanilla"], status: "In Progress", year: 2024 },
  { name: "Rosatum", civ: "Roman Empire", period: "50 CE", desc: "The rose-infused oil of Pliny, a luxury anointment of saffron, myrrh and sun-steeped petals.", notes: ["Rose", "Saffron", "Myrrh"], status: "Complete", year: 2023 },
];

function StatusBadge({ status }: { status: string }) {
  const s = status === "Complete"
    ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/20"
    : "bg-amber-500/10 text-amber-700 border-amber-500/20";
  return <span className={`inline-flex items-center rounded-full border font-medium ${s}`} style={{ padding: "0.25rem 0.75rem", fontSize: "0.7rem" }}>{status}</span>;
}

export default function ArchivePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-24" role="main">
        <section className="section border-b border-border/50" aria-labelledby="archive-heading">
          <div className="frame">
            <header style={{ maxWidth: "40rem", marginBottom: "3.5rem" }}>
              <span className="eyebrow">The Collection</span>
              <h1 id="archive-heading" className="font-serif text-foreground text-balance" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                The Digital Archive
              </h1>
              <p className="text-muted-foreground font-light" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "36rem" }}>
                Browse 147 reconstructed fragrances drawn from 23 civilizations. Each entry joins
                molecular analysis, ancient sources, and the perfumer&apos;s hand.
              </p>
            </header>

            {/* Civilizations */}
            <div style={{ marginBottom: "4rem" }}>
              <div className="flex items-baseline justify-between" style={{ marginBottom: "1.5rem" }}>
                <h2 className="font-serif text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 1.875rem)" }}>Civilizations</h2>
                <span className="text-muted-foreground" style={{ fontSize: "0.8125rem" }}>23 cultures represented</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "0.875rem" }}>
                {civilizations.map((civ) => (
                  <article key={civ.name} className="card group" style={{ padding: "1.25rem" }}>
                    <div className="flex items-start justify-between" style={{ marginBottom: "1rem" }}>
                      <span className={`font-serif ${civ.tint}`} style={{ fontSize: "1.75rem" }} aria-hidden="true">{civ.mark}</span>
                      <span className="font-serif text-foreground" style={{ fontSize: "1.375rem" }}>{civ.count}</span>
                    </div>
                    <h3 className="font-serif text-foreground" style={{ fontSize: "0.95rem" }}>{civ.name}</h3>
                    <p className="text-muted-foreground" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.25rem" }}>{civ.period}</p>
                    <span className="block text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontSize: "0.7rem", marginTop: "0.75rem" }}>
                      Explore collection →
                    </span>
                  </article>
                ))}
              </div>
            </div>

            {/* Fragrances */}
            <div style={{ marginBottom: "3rem" }}>
              <div className="flex items-baseline justify-between" style={{ marginBottom: "1.5rem" }}>
                <h2 className="font-serif text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 1.875rem)" }}>Featured Fragrances</h2>
                <span className="text-muted-foreground" style={{ fontSize: "0.8125rem" }}>Thoughtfully selected</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "1rem" }}>
                {fragrances.map((f) => (
                  <article key={f.name} className="card group flex flex-col" style={{ padding: "1.5rem" }}>
                    <div className="flex items-start justify-between gap-3" style={{ marginBottom: "1rem" }}>
                      <div>
                        <h3 className="font-serif text-foreground leading-snug" style={{ fontSize: "1.125rem" }}>{f.name}</h3>
                        <p className="text-muted-foreground" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.25rem" }}>{f.civ} · {f.period}</p>
                      </div>
                      <StatusBadge status={f.status} />
                    </div>
                    <p className="text-muted-foreground" style={{ fontSize: "0.8125rem", lineHeight: 1.65, marginBottom: "1rem" }}>{f.desc}</p>
                    <div className="flex flex-wrap" style={{ gap: "0.375rem", marginBottom: "1.25rem" }} role="list" aria-label="Notes">
                      {f.notes.map((n) => (
                        <span key={n} role="listitem" className="rounded-full bg-muted text-muted-foreground border border-border/60" style={{ padding: "0.25rem 0.625rem", fontSize: "0.7rem" }}>
                          {n}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between" style={{ paddingTop: "1rem", borderTop: "1px solid var(--color-border)" }}>
                      <span className="text-muted-foreground" style={{ fontSize: "0.7rem" }}>Reconstructed {f.year}</span>
                      <span className="font-medium text-accent group-hover:underline" style={{ fontSize: "0.8125rem" }}>View →</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button className="inline-flex items-center rounded-full border border-border text-foreground font-medium transition-all duration-300 hover:bg-card hover:border-accent/40 hover:shadow-[0_4px_20px_rgba(28,25,23,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" style={{ padding: "0.875rem 2rem" }}>
                View All 147 Fragrances
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
