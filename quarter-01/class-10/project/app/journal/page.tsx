import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Research Journal — Aroma Antiquaria",
  description: "Peer-reviewed publications and research papers on the archaeology of scent and historical perfume reconstruction.",
};

const papers = [
  {
    id: "PAPER-001",
    title: "Molecular Analysis of Kyphi Residues from the Tomb of Tutankhamun",
    journal: "Journal of Archaeological Science",
    authors: ["Dr. Elena Vasquez", "Prof. Thomas Whitfield", "Dr. Nadia Al-Rashid"],
    year: 2024,
    doi: "10.1000/j.archsci.2024.001",
    abstract: "We present the first complete molecular profile of kyphi residue recovered from vessels in the tomb of Tutankhamun (KV62). GC-MS analysis reveals a complex blend of sixteen botanical ingredients, including myrrh, frankincense, and cypress, suggesting that the ancient Egyptian recipe was more sophisticated than previously documented. Our findings validate the reconstruction methodology and provide a reference standard for future work.",
    tags: ["GC-MS", "Egypt", "Kyphi"],
    reads: 1842,
    citations: 23,
  },
  {
    id: "PAPER-002",
    title: "Linear B Perfume Production: A Computational Reanalysis of the Pylos Tablets",
    journal: "Journal of Classical Archaeology",
    authors: ["Prof. Thomas Whitfield", "Dr. Maria Papadopoulou"],
    year: 2023,
    doi: "10.1000/j.clarch.2023.002",
    abstract: "A computational reanalysis of ninety Linear B tablets from the Palace of Nestor at Pylos, focusing on perfume production. We reconstruct the full supply chain from ingredient acquisition to finished perfumed oil, revealing a sophisticated Mycenaean perfumery industry. New readings of previously ambiguous ideograms suggest additional ingredients including sage, coriander, and citrus.",
    tags: ["Linear B", "Greece", "Perfumery"],
    reads: 1231,
    citations: 17,
  },
  {
    id: "PAPER-003",
    title: "Residue Analysis of Copal Offering Bowls from Tikal: New Evidence for Maya Ritual Incense",
    journal: "Journal of Ethnopharmacology",
    authors: ["Dr. Javier Morales", "Dr. Elena Vasquez", "Dr. Sofia Reyes"],
    year: 2024,
    doi: "10.1000/j.ethnopharm.2024.003",
    abstract: "Organic residue analysis of eleven ceramic offering bowls from Tikal reveals a consistent blend of copal resin (Protium copal) with low concentrations of cacao (Theobroma cacao) and tobacco (Nicotiana tabacum). This is the first direct chemical evidence for the combination of these three sacred plants in Maya ritual incense, confirming a practice previously inferred only from iconography.",
    tags: ["Maya", "Copal", "Residue Analysis"],
    reads: 987,
    citations: 11,
  },
  {
    id: "PAPER-004",
    title: "The Role of Olfaction in Ancient Egyptian Religious Practice",
    journal: "Journal of Religion & Society",
    authors: ["Dr. Nadia Al-Rashid", "Prof. Amal Hassan"],
    year: 2023,
    doi: "10.1000/j.relsoc.2023.004",
    abstract: "This paper examines the sensory and theological role of incense and perfume in ancient Egyptian temple ritual. Drawing on textual, iconographic, and archaeological evidence, we propose that olfactory experience functioned as a form of divine communication, connecting the earthly realm with the celestial. The paper includes analysis of the Egyptian term 'snṯr' and its significance.",
    tags: ["Egypt", "Religion", "Olfaction"],
    reads: 1456,
    citations: 31,
  },
  {
    id: "PAPER-005",
    title: "Identifying Fragrant Plants from the Indus Valley Civilization: A Multi-Proxy Approach",
    journal: "Archaeological and Anthropological Sciences",
    authors: ["Dr. Priya Sharma", "Dr. Javier Morales", "Prof. Rajiv Kapoor"],
    year: 2024,
    doi: "10.1000/j.aas.2024.005",
    abstract: "We explore methods for identifying fragrant plants used in the Indus Valley Civilization (c. 3300–1300 BCE). Combining pollen analysis, residue analysis, and ethnographic analogy, we propose that sandalwood (Santalum album) and other aromatic woods were used in burial rituals. While no written records survive, our multi-proxy approach provides strong circumstantial evidence.",
    tags: ["Indus Valley", "Sandalwood", "Multi-proxy"],
    reads: 743,
    citations: 5,
  },
  {
    id: "PAPER-006",
    title: "Reconstructing the Region Royal Perfume: From Text to Scent",
    journal: "Perfumer & Flavorist",
    authors: ["Dr. Maria Papadopoulou", "Isabelle Laurent", "Dr. Elena Vasquez"],
    year: 2023,
    doi: "10.1000/pf.2023.006",
    abstract: "A cross-disciplinary account of reconstructing the Royal Perfume of Pylos from Linear B tablets to a wearable fragrance. We document the iterative process, the challenges of sourcing authentic ingredients, and the final olfactory profile validated by a sensory panel of twelve expert noses. The paper includes the full reconstruction formula for reproducibility.",
    tags: ["Reconstruction", "Greece", "Perfumery"],
    reads: 2210,
    citations: 27,
  },
];

function PaperCard({ paper }: { paper: typeof papers[0] }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">{paper.id}</span>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          {paper.reads.toLocaleString()}
        </div>
      </div>

      <h2 className="font-serif text-xl md:text-2xl font-medium leading-snug text-foreground mb-3">
        {paper.title}
      </h2>

      <p className="text-sm text-muted-foreground mb-4">
        <span className="font-medium">{paper.journal}</span> · {paper.year}
      </p>

      <p className="text-sm leading-relaxed text-foreground/70 mb-5 line-clamp-4">{paper.abstract}</p>

      <div className="flex flex-wrap gap-1.5 mb-5" role="list" aria-label="Topics">
        {paper.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground border border-border" role="listitem">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground mb-3">
          {paper.authors.join(", ")} · {paper.citations} citations
        </p>
        <div className="flex items-center justify-between">
          <a
            href={`https://doi.org/${paper.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            Read Paper
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <span className="font-mono text-xs text-muted-foreground">{paper.doi}</span>
        </div>
      </div>
    </article>
  );
}

export default function JournalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16" role="main">
        <section className="py-16 md:py-24 border-b border-border" aria-labelledby="journal-heading">
          <div className="container">
            <header className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-mono uppercase tracking-widest text-primary mb-4 block max-sm:text-xs">
                Peer-Reviewed Research
              </span>
              <h1 id="journal-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6 text-balance">
                Research Journal
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our peer-reviewed publications on the archaeology of scent, historical perfume
                reconstruction, and the material culture of fragrance in the ancient world.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {papers.map((paper) => (
                <PaperCard key={paper.id} paper={paper} />
              ))}
            </div>

            <nav className="mt-16 flex items-center justify-center gap-2" aria-label="Paper pagination">
              <button className="px-4 py-2 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" disabled aria-disabled="true">
                Previous
              </button>
              <span className="px-4 py-2 rounded-md bg-primary text-on-primary text-sm font-medium">1</span>
              <button className="px-4 py-2 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">2</button>
              <button className="px-4 py-2 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">3</button>
              <span className="px-2 text-muted-foreground">…</span>
              <button className="px-4 py-2 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">14</button>
              <button className="px-4 py-2 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Next
              </button>
            </nav>

            <p className="text-center mt-8 text-sm text-muted-foreground">
              Showing 6 of 89 publications · <a href="/research/publications" className="text-primary hover:underline">View the full archive →</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}