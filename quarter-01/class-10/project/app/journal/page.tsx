import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Research Journal — Aroma Antiquaria",
  description: "Peer-reviewed publications and research papers on the archaeology of scent and historical fragrance reconstruction.",
};

const papers = [
  { id: "PAPER·001", title: "Molecular Analysis of Kyphi Residues from the Tomb of Tutankhamun", journal: "Journal of Archaeological Science", authors: "Dr. Elena Vasquez · Prof. Thomas Whitfield · Dr. Nadia Al-Rashid", year: 2024, abstract: "We present the first complete molecular profile of kyphi residue from vessels in KV62. GC-MS reveals a sophisticated blend of sixteen botanical ingredients, validating our reconstruction methodology and offering a reference standard for future work.", tags: ["GC-MS", "Egypt", "Kyphi"], reads: 1842 },
  { id: "PAPER·002", title: "Linear B Perfume Production: Reanalysis of the Pylos Tablets", journal: "Journal of Classical Archaeology", authors: "Prof. Thomas Whitfield · Dr. Maria Papadopoulou", year: 2023, abstract: "A computational reanalysis of ninety Linear B tablets from the Palace of Nestor, revealing a sophisticated Mycenaean perfumery industry and new readings of previously ambiguous perfume ideograms.", tags: ["Linear B", "Greece", "Perfumery"], reads: 1231 },
  { id: "PAPER·003", title: "Copal Offering Bowls from Tikal: New Evidence for Maya Ritual Incense", journal: "Journal of Ethnopharmacology", authors: "Dr. Javier Morales · Dr. Elena Vasquez · Dr. Sofia Reyes", year: 2024, abstract: "Residue analysis of eleven offering bowls from Tikal confirms a consistent blend of copal resin with cacao and tobacco — the first direct chemical evidence for three sacred plants in Maya ritual incense.", tags: ["Maya", "Copal", "Residue"], reads: 987 },
  { id: "PAPER·004", title: "Olfaction in Ancient Egyptian Religious Practice", journal: "Journal of Religion & Society", authors: "Dr. Nadia Al-Rashid · Prof. Amal Hassan", year: 2023, abstract: "Examining the sensory and theological role of incense in Egyptian temple ritual, we propose that olfactory experience served as a form of divine communication connecting earth and the celestial realm.", tags: ["Egypt", "Religion", "Olfaction"], reads: 1456 },
  { id: "PAPER·005", title: "Fragrant Plants of the Indus Valley: A Multi-Proxy Approach", journal: "Archaeological & Anthropological Sciences", authors: "Dr. Priya Sharma · Dr. Javier Morales", year: 2024, abstract: "We explore methods to identify fragrant plants of the Indus civilization, proposing sandalwood and aromatic woods were used in burial rituals through a combination of pollen, residue, and ethnographic analysis.", tags: ["Indus Valley", "Sandalwood"], reads: 743 },
  { id: "PAPER·006", title: "Reconstructing the Royal Perfume: From Text to Scent", journal: "Perfumer & Flavorist", authors: "Dr. Maria Papadopoulou · Isabelle Laurent", year: 2023, abstract: "A cross-disciplinary account of reconstructing the Royal Perfume of Pylos from Linear B tablets to a wearable fragrance, validated by a sensory panel and published for reproducibility.", tags: ["Reconstruction", "Greece"], reads: 2210 },
];

export default function JournalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-24" role="main">
        <section className="section border-b border-border/50" aria-labelledby="journal-heading">
          <div className="frame">
            <header style={{ maxWidth: "40rem", marginBottom: "3.5rem" }}>
              <span className="eyebrow">Peer-Reviewed Research</span>
              <h1 id="journal-heading" className="font-serif text-foreground text-balance" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                The Research
                <span className="block italic text-primary">Journal</span>
              </h1>
              <p className="text-muted-foreground font-light" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "36rem" }}>
                Our peer-reviewed publications on the archaeology of scent, historical perfume
                reconstruction, and the material culture of fragrance in the ancient world.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "1rem" }}>
              {papers.map((p) => (
                <article key={p.id} className="card group flex flex-col" style={{ padding: "1.75rem" }}>
                  <div className="flex items-start justify-between gap-3" style={{ marginBottom: "1rem" }}>
                    <span className="font-mono text-accent" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>{p.id}</span>
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground" style={{ fontSize: "0.75rem" }}>
                      <svg style={{ width: "0.875rem", height: "0.875rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {p.reads.toLocaleString()}
                    </span>
                  </div>
                  <h2 className="font-serif text-foreground leading-snug" style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)", marginBottom: "0.5rem" }}>{p.title}</h2>
                  <p className="text-muted-foreground" style={{ fontSize: "0.75rem", marginBottom: "0.75rem" }}>{p.journal} · {p.year}</p>
                  <p className="text-foreground/60" style={{ fontSize: "0.8125rem", lineHeight: 1.65, marginBottom: "1rem" }}>{p.abstract}</p>
                  <div className="flex flex-wrap" style={{ gap: "0.375rem", marginBottom: "1.25rem" }} role="list" aria-label="Topics">
                    {p.tags.map((t) => (
                      <span key={t} role="listitem" className="rounded-full bg-muted text-muted-foreground border border-border/60" style={{ padding: "0.25rem 0.625rem", fontSize: "0.7rem" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between" style={{ paddingTop: "1rem", borderTop: "1px solid var(--color-border)" }}>
                    <span className="text-muted-foreground" style={{ fontSize: "0.7rem" }}>{p.authors}</span>
                    <span className="font-medium text-accent group-hover:underline" style={{ fontSize: "0.8125rem" }}>Read →</span>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ marginTop: "3rem" }} className="text-center">
              <span className="text-muted-foreground" style={{ fontSize: "0.8125rem" }}>
                Showing 6 of 89 publications · <span className="text-accent font-medium cursor-pointer hover:underline">View the full archive →</span>
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
