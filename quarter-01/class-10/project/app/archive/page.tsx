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
  { name: "Indus Valley", period: "3300–1300 BCE", count: 8, mark: "Ⲫ", tint: "text-[#5B4A8A]" },
  { name: "Maya Civilization", period: "2000 BCE–900 CE", count: 11, mark: "◎", tint: "text-[#2E6B5E]" },
  { name: "Ancient Persia", period: "550–330 BCE", count: 11, mark: "✿", tint: "text-[#A4522A]" },
];

const fragrances = [
  {
    name: "Kyphi",
    civ: "Ancient Egypt",
    period: "16th c. BCE",
    desc: "The celebrated temple incense of Egypt, sixteen sacred ingredients burned at dusk to summon the divine.",
    notes: ["Honey", "Wine", "Myrrh", "Frankincense"],
    status: "Complete",
    year: 2023,
  },
  {
    name: "Royal Perfume of Pylos",
    civ: "Mycenaean Greece",
    period: "1300 BCE",
    desc: "Reconstructed from Linear B tablets; coriander, sage and citrus suspended in perfumed olive oil.",
    notes: ["Coriander", "Sage", "Citrus", "Honey"],
    status: "Complete",
    year: 2024,
  },
  {
    name: "Nardin",
    civ: "Ancient Greece",
    period: "4th c. BCE",
    desc: "Spikenard unguent, valued above gold and carried across the Silk Road in alabaster jars.",
    notes: ["Spikenard", "Cinnamon", "Calamus"],
    status: "Complete",
    year: 2022,
  },
  {
    name: "Han Court Fragrance",
    civ: "Ancient China",
    period: "2nd c. BCE",
    desc: "An imperial blend of agarwood, clove and musk from the 'Fan Ye' reckonings of court ritual.",
    notes: ["Agarwood", "Clove", "Musk"],
    status: "Complete",
    year: 2023,
  },
  {
    name: "Copal of Tikal",
    civ: "Maya Civilization",
    period: "600 CE",
    desc: "Sacred resin offering blend read from ceramic residue, married to cacao and tobacco.",
    notes: ["Copal", "Cacao", "Vanilla"],
    status: "In Progress",
    year: 2024,
  },
  {
    name: "Rosatum",
    civ: "Roman Empire",
    period: "50 CE",
    desc: "The rose-infused oil of Pliny, a luxury anointment of saffron, myrrh and sun-steeped petals.",
    notes: ["Rose", "Saffron", "Myrrh"],
    status: "Complete",
    year: 2023,
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles =
    status === "Complete"
      ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/30"
      : "bg-amber-500/10 text-amber-700 border-amber-500/30";
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${styles}`}>
      {status}
    </span>
  );
}

export default function ArchivePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-24" role="main">
        <section className="py-16 md:py-24 border-b border-border" aria-labelledby="archive-heading">
          <div className="container">
            <header className="max-w-3xl mb-16">
              <span className="eyebrow text-accent block mb-5">The Collection</span>
              <h1 id="archive-heading" className="font-serif text-4xl md:text-6xl tracking-tight text-foreground leading-[1.08] text-balance">
                The Digital Archive
              </h1>
              <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
                Browse 147 reconstructed fragrances drawn from 23 civilizations. Each entry joins
                molecular analysis, ancient sources, and the perfumer&rsquo;s hand.
              </p>
            </header>

            <div className="mb-20">
              <div className="flex items-baseline justify-between mb-9">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground">Civilizations</h2>
                <span className="text-sm text-muted-foreground">23 cultures represented</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {civilizations.map((civ) => (
                  <article
                    key={civ.name}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <span className={`font-serif text-3xl ${civ.tint}`} aria-hidden="true">{civ.mark}</span>
                      <span className="font-serif text-2xl text-foreground">{civ.count}</span>
                    </div>
                    <h3 className="font-serif text-lg text-foreground">{civ.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{civ.period}</p>
                    <span className="mt-4 block text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore collection →
                    </span>
                  </article>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <div className="flex items-baseline justify-between mb-9">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground">Featured Fragrances</h2>
                <span className="text-sm text-muted-foreground">Thoughtfully selected</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fragrances.map((f) => (
                  <article
                    key={f.name}
                    className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        <h3 className="font-serif text-xl text-foreground leading-snug">{f.name}</h3>
                        <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{f.civ} · {f.period}</p>
                      </div>
                      <StatusBadge status={f.status} />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{f.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Notes">
                      {f.notes.map((n) => (
                        <span key={n} role="listitem" className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border">
                          {n}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-5 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Reconstructed {f.year}</span>
                      <span className="text-sm font-medium text-accent group-hover:underline">View →</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button className="inline-flex items-center gap-2 px-9 py-4 rounded-full border border-accent/60 text-foreground font-medium hover:bg-accent hover:text-on-accent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
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