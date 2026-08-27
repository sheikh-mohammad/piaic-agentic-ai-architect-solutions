import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Reconstructions — Aroma Antiquaria",
  description: "Discover our latest experimental reconstructions of historical fragrances, from Kyphi to Royal Perfume of Pylos.",
};

const reconstructions = [
  {
    id: "kyphi",
    name: "Kyphi",
    civilization: "Ancient Egypt",
    period: "1550 BCE",
    description: "The quintessential Egyptian temple incense, mentioned in the Papyrus of Detached Texts. Our reconstruction blends sixteen authentic ingredients.",
    notes: ["Honey", "Wine", "Myrrh", "Frankincense", "Cypress", "Juniper", "Saffron", "Cassia", "Gum of Styrax"],
    difficulty: "Advanced",
    time: "6 weeks",
    ingredients: 16,
    status: "Available",
    image: "§",
    story: "Kyphi was burned at sunset in temples across Egypt and used as medicine, perfume, and incense. The Greek physician Dioscorides describes it as a remedy for many ailments.",
  },
  {
    id: "royal-pylos",
    name: "Royal Perfume of Pylos",
    civilization: "Mycenaean Greece",
    period: "1300 BCE",
    description: "Reconstructed from Linear B tablets, this Mycenaean royal perfume blends coriander, sage, and citrus in an olive oil base.",
    notes: ["Olive Oil", "Coriander", "Sage", "Citrus", "Honey"],
    difficulty: "Intermediate",
    time: "4 weeks",
    ingredients: 8,
    status: "Available",
    image: "Δ",
    story: "Unearthed from the Palace of Nestor, the Linear B tablets describe the production of perfumed oil by scribes who kept meticulous records of the process.",
  },
  {
    id: "mayan-copal",
    name: "Copal Ceremonial Blend",
    civilization: "Maya Civilization",
    period: "600 CE",
    description: "A sacred blend reconstructed from ceramic residue analysis at Tikal, combining copal resin with tobacco and cacao.",
    notes: ["Copal Resin", "Tobacco", "Cacao", "Vanilla", "Chili"],
    difficulty: "Advanced",
    time: "8 weeks",
    ingredients: 12,
    status: "In Development",
    image: "◎",
    story: "Grounded in chemical analysis of burnt ceramic offering bowls, this blend recreates the ritual incense that accompanied Maya ceremonies and offerings.",
  },
  {
    id: "han-court",
    name: "Han Dynasty Court Fragrance",
    civilization: "Ancient China",
    period: "100 BCE",
    description: "Imperial blend from the 'Fan Ye' chronicles. Clove, agarwood, and musk transformed the Emperor's chambers.",
    notes: ["Agarwood", "Clove", "Musk", "Sandalwood", "Borneol"],
    difficulty: "Expert",
    time: "10 weeks",
    ingredients: 14,
    status: "Available",
    image: "中",
    story: "During the Han Dynasty, exotic aromatics traveled the Silk Road to the imperial court, where perfumers created signature fragrances for royal chambers.",
  },
  {
    id: "roman-rosatum",
    name: "Rose Perfume (Rosatum)",
    civilization: "Roman Empire",
    period: "50 CE",
    description: "The famous Roman rosatum, a luxurious rose-infused oil described by Pliny the Elder. Saffron and myrrh rose blend.",
    notes: ["Rose", "Saffron", "Myrrh", "Olive Oil", "Cedar"],
    difficulty: "Intermediate",
    time: "3 weeks",
    ingredients: 6,
    status: "Available",
    image: "❀",
    story: "Pliny and Dioscorides both describe the process of making rosatum. It was used for both cosmetic purposes and ceremonial anointing of statues.",
  },
  {
    id: "mesopotamian-cedar",
    name: "Cedar Temple Incense",
    civilization: "Mesopotamia",
    period: "2000 BCE",
    description: "Sumerian temple formula from cuneiform tablets. Cedar, cypress, and juniper burned for the moon god Nanna.",
    notes: ["Cedar", "Cypress", "Juniper", "Myrrh"],
    difficulty: "Beginner",
    time: "2 weeks",
    ingredients: 4,
    status: "In Development",
    image: "☾",
    story: "Cuneiform tablets from Ur describe the burning of cedar incense for lunar rituals. Our reconstruction honors the oldest written perfume recipes known.",
  },
  {
    id: "indus-sandalwood",
    name: "Indus Valley Sandalwood",
    civilization: "Indus Valley",
    period: "2500 BCE",
    description: "An experimental reconstruction based on archaeological finds of sandalwood and other aromatic residues in Mohenjo-Daro.",
    notes: ["Sandalwood", "Patchouli", "Cardamom", "Nutmeg", "Clove"],
    difficulty: "Expert",
    time: "12 weeks",
    ingredients: 10,
    status: "Hypothetical",
    image: "Ⲫ",
    story: "While no written records survive from the Indus civilization, archaeological residue analysis points to the use of sandalwood in burial rituals.",
  },
  {
    id: "persian-gul",
    name: "Persian Rose & Oud",
    civilization: "Ancient Persia",
    period: "300 BCE",
    description: "A luxury blend combining Persian roses with oud (agarwood), reflecting the opulence of the Achaemenid court.",
    notes: ["Rose", "Agarwood", "Saffron", "Amber", "Musk"],
    difficulty: "Expert",
    time: "16 weeks",
    ingredients: 9,
    status: "Planned",
    image: "✿",
    story: "The Achaemenid court was famous for its fragrance use. Greek historians describe how the King's chambers were perfumed with rose and agarwood.",
  },
];

function DifficultyBadge({ level }: { level: string }) {
  const config: Record<string, string> = {
    Beginner: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    Intermediate: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    Advanced: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    Expert: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${config[level] || config.Beginner}`}>
      {level}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, string> = {
    Available: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    "In Development": "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    Plann: "bg-muted-foreground/10 text-muted-foreground border-border",
    Hypothetical: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    Planned: "bg-muted-foreground/10 text-muted-foreground border-border",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${config[status] || config.Planned}`}>
      {status}
    </span>
  );
}

function ReconstructionCard({ item }: { item: typeof reconstructions[0] }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
      <div className="relative h-48 overflow-hidden bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-7xl text-primary/20 transition-transform duration-500 group-hover:scale-110" aria-hidden="true">
            {item.image}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute top-4 left-4">
          <StatusBadge status={item.status} />
        </div>
        <div className="absolute top-4 right-4">
          <DifficultyBadge level={item.difficulty} />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <h3 className="font-serif text-xl font-medium text-foreground">{item.name}</h3>
            <p className="text-sm text-muted-foreground mt-0.5">{item.civilization} · {item.period}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <span>{item.time}</span>
          <span>{item.ingredients} ingredients</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Fragrance notes">
          {item.notes.slice(0, 4).map((note) => (
            <span key={note} className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground border border-border" role="listitem">
              {note}
            </span>
          ))}
          {item.notes.length > 4 && (
            <span className="px-2 py-1 text-xs rounded bg-primary/5 text-primary border border-primary/20" role="listitem">
              +{item.notes.length - 4} more
            </span>
          )}
        </div>
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <button className="text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
            View Full Story
          </button>
          <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
            Request Sample
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ReconstructionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16" role="main">
        <section className="py-16 md:py-24 border-b border-border" aria-labelledby="reconstructions-heading">
          <div className="container">
            <header className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-mono uppercase tracking-widest text-primary mb-4 block">Olfactory Reconstruction Lab</span>
              <h1 id="reconstructions-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
                Experimental Reconstructions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our laboratory reconstructs historical fragrances using molecular analysis, ancient recipes,
                and experimental perfumery. Each reconstruction is documented and available for olfactory study.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reconstructions.map((item) => (
                <ReconstructionCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="process-heading">
          <div className="container">
            <header className="max-w-3xl mx-auto text-center mb-16">
              <h2 id="process-heading" className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
                The Reconstruction Process
              </h2>
              <p className="text-muted-foreground">From ancient text to tangible scent—five stages of olfactory archaeology.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Textual Analysis", description: "Decrypt ancient recipes in hieroglyphs, cuneiform, or Linear B." },
                { step: "02", title: "Molecular Study", description: "Analyze residue from ancient vessels using GC-MS and DNA sequencing." },
                { step: "03", title: "Ingredient Sourcing", description: "Procure authentic, sustainably harvested raw materials." },
                { step: "04", title: "Composition", description: "Reconstruct the scent using traditional and modern techniques." },
                { step: "05", title: "Documentation", description: "Publish methodology, analysis, and olfactory profile." },
              ].map((process, index) => (
                <div key={process.step} className="relative text-center p-4">
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full border-t border-dashed border-border" aria-hidden="true" />
                  )}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-on-primary font-serif text-2xl font-medium mb-4 shadow-lg">
                    {process.step}
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border" aria-labelledby="collaborate-heading">
          <div className="container max-w-4xl text-center">
            <h2 id="collaborate-heading" className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
              Collaborate With Our Lab
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Museums, archaeologists, perfumers, and universities partner with us to bring lost scents to life.
            </p>
            <a
              href="/collaborate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary text-on-primary font-medium text-base hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"
            >
              Start a Collaboration
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}