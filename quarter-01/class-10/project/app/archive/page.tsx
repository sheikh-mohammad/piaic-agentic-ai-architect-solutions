import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Digital Archive — Aroma Antiquaria",
  description: "Explore 147 reconstructed historical fragrances from 23 ancient civilizations spanning 3,400+ years of olfactory history.",
};

const civilizations = [
  { name: "Ancient Egypt", period: "3100–30 BCE", count: 34, color: "#D4A843", bg: "#FEF9E7" },
  { name: "Mesopotamia", period: "3500–500 BCE", count: 18, color: "#8B4513", bg: "#FDF2E9" },
  { name: "Classical Greece", period: "800–146 BCE", count: 22, color: "#1B4F72", bg: "#EBF5FB" },
  { name: "Roman Empire", period: "27 BCE–476 CE", count: 28, color: "#8B0000", bg: "#FADBD8" },
  { name: "Ancient China", period: "1600 BCE–220 CE", count: 15, color: "#1B5E20", bg: "#E8F5E9" },
  { name: "Indus Valley", period: "3300–1300 BCE", count: 8, color: "#4A148C", bg: "#F3E5F5" },
  { name: "Maya Civilization", period: "2000 BCE–900 CE", count: 11, color: "#00695C", bg: "#E0F2F1" },
  { name: "Ancient Persia", period: "550–330 BCE", count: 11, color: "#BF360C", bg: "#FBE9E7" },
];

const featuredFragrances = [
  {
    id: "kyphi",
    name: "Kyphi",
    civilization: "Ancient Egypt",
    period: "16th Century BCE",
    description: "The most famous Egyptian temple incense, used in religious ceremonies and as medicine. Sixteen ingredients including honey, wine, raisins, and myrrh.",
    notes: ["Honey", "Wine", "Myrrh", "Frankincense", "Cypress", "Juniper"],
    status: "complete",
    year: 2023,
  },
  {
    id: "nardin",
    name: "Nardin (Spikenard)",
    civilization: "Ancient Greece",
    period: "4th Century BCE",
    description: "Precious ointment mentioned in classical texts and the Bible. Extracted from Himalayan spikenard root, valued above gold.",
    notes: ["Spikenard", "Myrrh", "Cinnamon", "Calamus", "Cassia"],
    status: "complete",
    year: 2022,
  },
  {
    id: "royal-perfume",
    name: "Royal Perfume of Pylos",
    civilization: "Mycenaean Greece",
    period: "1300 BCE",
    description: "Reconstructed from Linear B tablets found at the Palace of Nestor. Olive oil base with coriander, sage, and citrus.",
    notes: ["Olive Oil", "Coriander", "Sage", "Citrus", "Honey"],
    status: "complete",
    year: 2024,
  },
  {
    id: "temple-incense",
    name: "Temple Incense of Ur",
    civilization: "Mesopotamia",
    period: "2100 BCE",
    description: "Sumerian temple formula from cuneiform tablets. Cedar, cypress, and juniper burned for the moon god Nanna.",
    notes: ["Cedar", "Cypress", "Juniper", "Myrrh", "Frankincense"],
    status: "in-progress",
    year: 2024,
  },
  {
    id: "han-dynasty",
    name: "Han Dynasty Court Fragrance",
    civilization: "Ancient China",
    period: "2nd Century BCE",
    description: "Imperial blend recorded in the 'Fan Ye' chronicles. Clove, agarwood, and musk for the Emperor's chambers.",
    notes: ["Agarwood", "Clove", "Musk", "Sandalwood", "Borneol"],
    status: "complete",
    year: 2023,
  },
  {
    id: "mayan-copal",
    name: "Copal Ceremonial Blend",
    civilization: "Maya Civilization",
    period: "600 CE",
    description: "Sacred copal resin blend from ceramic residue analysis at Tikal. Mixed with tobacco and cacao for royal rituals.",
    notes: ["Copal Resin", "Tobacco", "Cacao", "Vanilla", "Chili"],
    status: "in-progress",
    year: 2024,
  },
];

function StatusBadge({ status }: { status: string }) {
  const config = {
    complete: { label: "Complete", className: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20" },
    "in-progress": { label: "In Progress", className: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20" },
    planned: { label: "Planned", className: "bg-muted-foreground/10 text-muted-foreground border-border" },
  };
  const cfg = config[status as keyof typeof config] || config.planned;
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${cfg.className}`}>
      {cfg.label}
    </span>
  );
}

function CivilizationCard({ civ }: { civ: typeof civilizations[0] }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-serif text-xl font-medium text-foreground">{civ.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{civ.period}</p>
        </div>
        <div
          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: civ.bg }}
        >
          <span className="font-serif text-2xl font-medium" style={{ color: civ.color }}>
            {civ.count}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{civ.count} fragrances</span>
        <span className="text-sm font-medium text-primary group-hover:underline">Explore →</span>
      </div>
    </article>
  );
}

function FragranceCard({ fragrance }: { fragrance: typeof featuredFragrances[0] }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-xl font-medium text-foreground truncate">{fragrance.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{fragrance.civilization} · {fragrance.period}</p>
        </div>
        <StatusBadge status={fragrance.status} />
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{fragrance.description}</p>
      <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Fragrance notes">
        {fragrance.notes.map((note) => (
          <span
            key={note}
            className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground border border-border"
            role="listitem"
          >
            {note}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground">Reconstructed {fragrance.year}</span>
        <span className="text-sm font-medium text-primary group-hover:underline">View Details →</span>
      </div>
    </article>
  );
}

export default function ArchivePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16" role="main">
        <section className="py-16 md:py-24 border-b border-border" aria-labelledby="archive-heading">
          <div className="container">
            <header className="max-w-3xl mx-auto text-center mb-16">
              <h1 id="archive-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
                Digital Archive
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Browse our collection of 147 reconstructed fragrances from 23 ancient civilizations.
                Each entry includes molecular analysis, textual sources, and reconstruction notes.
              </p>
            </header>

            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-2xl font-medium text-foreground">Civilizations</h2>
                <span className="text-sm text-muted-foreground">23 cultures represented</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {civilizations.map((civ) => (
                  <CivilizationCard key={civ.name} civ={civ} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-2xl font-medium text-foreground">Featured Reconstructions</h2>
                <span className="text-sm text-muted-foreground">6 of 147 fragrances</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredFragrances.map((fragrance) => (
                  <FragranceCard key={fragrance.id} fragrance={fragrance} />
                ))}
              </div>
              <div className="mt-10 text-center">
                <a
                  href="/archive/all"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-border bg-transparent font-medium text-base hover:bg-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  View All 147 Entries
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="filters-heading">
          <div className="container">
            <header className="max-w-3xl mx-auto text-center mb-12">
              <h2 id="filters-heading" className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
                Filter the Archive
              </h2>
              <p className="text-muted-foreground">Refine your search by civilization, period, ingredient, or reconstruction status.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="space-y-4 p-6 rounded-xl border border-border bg-card">
                <h3 className="font-medium text-foreground">Civilization</h3>
                <ul className="space-y-2" role="list">
                  {civilizations.map((civ) => (
                    <li key={civ.name}>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                        <span className="text-sm text-muted-foreground">{civ.name} <span className="text-primary font-medium">({civ.count})</span></span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 p-6 rounded-xl border border-border bg-card md:col-span-3">
                <h3 className="font-medium text-foreground">Time Period</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "All Periods",
                    "Bronze Age (3300–1200 BCE)",
                    "Iron Age (1200–500 BCE)",
                    "Classical Antiquity (800 BCE–500 CE)",
                    "Late Antiquity (300–700 CE)",
                    "Early Medieval (500–1000 CE)",
                  ].map((period) => (
                    <button
                      key={period}
                      className="px-4 py-2 text-sm rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {period}
                    </button>
                  ))}
                </div>
                <h3 className="font-medium text-foreground mt-6">Key Ingredients</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    "Frankincense",
                    "Myrrh",
                    "Cedar",
                    "Cypress",
                    "Juniper",
                    "Spikenard",
                    "Agarwood",
                    "Sandalwood",
                    "Copal",
                    "Cinnamon",
                    "Clove",
                    "Musk",
                    "Ambergris",
                    "Civet",
                    "Rose",
                    "Jasmine",
                  ].map((ingredient) => (
                    <button
                      key={ingredient}
                      className="px-3 py-1.5 text-xs rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {ingredient}
                    </button>
                  ))}
                </div>
                <h3 className="font-medium text-foreground mt-6">Reconstruction Status</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Complete", "In Progress", "Planned", "Hypothetical"].map((status) => (
                    <button
                      key={status}
                      className="px-4 py-2 text-sm rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}