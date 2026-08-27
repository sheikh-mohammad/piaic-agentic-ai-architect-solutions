"use client";

import { useEffect, useState, useRef } from "react";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const reveal = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
    transitionDelay: `${delay}ms`,
  });

  const pillars = [
    {
      title: "Molecular Science",
      description: "Gas chromatography revives fragments carried in ancient vessels, tombs, and temple floors.",
      mark: "Ø",
    },
    {
      title: "Ancient Text",
      description: "From cuneiform to Linear B, we decipher recipes written in the languages of the dead.",
      mark: "ﬁ",
    },
    {
      title: "Modern Craft",
      description: "Master perfumers translate millennia-old formulas into wearable, living fragrance.",
      mark: "✿",
    },
  ];

  return (
    <section ref={ref} className="section-lg" aria-labelledby="about-heading">
      <div className="frame">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start" style={{ gap: "4rem" }}>
          <div style={reveal(0)}>
            <span className="eyebrow">Our Mission</span>
            <h2 id="about-heading" className="font-serif text-foreground text-balance" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Fragrances lost to time,
              <br />
              <span className="italic text-primary">brought back to life.</span>
            </h2>
            <p className="text-muted-foreground font-light" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.8, marginTop: "1.75rem", maxWidth: "34rem" }}>
              Aroma Antiquaria is the world&apos;s first museum devoted to archaeological perfumery.
              We unite archaeologists, linguists, chemists, and perfumers in a single pursuit:
              to recover the scents our ancestors carried, revered, and traded across three millennia.
            </p>
            <p className="text-muted-foreground font-light" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.8, marginTop: "1.25rem", maxWidth: "34rem" }}>
              Every fragrance in our collection is grounded in evidence — a clay tablet, a residue sample,
              a sacred text — and reconstructed with the same rigor we bring to any museum artifact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ ...{ gap: "1rem" }, ...reveal(120) }}>
            {pillars.map((p) => (
              <article key={p.title} className="card group">
                <div
                  className="flex items-center justify-center rounded-full bg-primary/[0.05] text-primary font-serif text-2xl transition-all duration-300 group-hover:bg-accent group-hover:text-on-accent group-hover:scale-110"
                  style={{ width: "3.25rem", height: "3.25rem", marginBottom: "1rem" }}
                  aria-hidden="true"
                >
                  {p.mark}
                </div>
                <h3 className="font-serif text-foreground" style={{ fontSize: "1rem", marginBottom: "0.375rem" }}>{p.title}</h3>
                <p className="text-muted-foreground" style={{ fontSize: "0.8125rem", lineHeight: 1.65 }}>{p.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="divider-accent" style={{ marginTop: "4rem", marginBottom: "3rem" }} />

        <div
          className="flex flex-wrap justify-center"
          style={{ ...{ gap: "3rem 4rem" }, ...reveal(200) }}
          aria-label="Impact statistics"
        >
          {[
            { value: "147", label: "Fragrances Reconstructed" },
            { value: "23", label: "Civilizations Explored" },
            { value: "89", label: "Peer-Reviewed Papers" },
            { value: "34", label: "Museum Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center" style={{ minWidth: "10rem" }}>
              <div className="font-serif text-primary" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>{stat.value}</div>
              <div className="text-muted-foreground" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.18em", marginTop: "0.5rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
