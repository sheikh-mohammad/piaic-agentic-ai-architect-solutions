"use client";

import { useEffect, useState, useRef } from "react";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const reveal = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(28px)",
    transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
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
    <section
      ref={ref}
      className="py-24 md:py-36"
      aria-labelledby="about-heading"
    >
      <div className="frame">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div style={reveal(0)}>
            <span className="eyebrow text-accent mb-6 block">Our Mission</span>
            <h2 id="about-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.08] text-balance">
              Fragrances lost to time,
              <br />
              <span className="italic text-primary">brought back to life.</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-xl">
              Aroma Antiquaria is the world's first museum devoted to archaeological perfumery.
              We unite archaeologists, linguists, chemists, and perfumers in a single pursuit:
              to recover the scents our ancestors carried, revered, and traded across three millennia.
            </p>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-xl">
              Every fragrance in our collection is grounded in evidence — a clay tablet, a residue sample,
              a sacred text — and reconstructed with the same rigor we bring to any museum artifact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5" style={reveal(150)}>
            {pillars.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/40"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary/[0.06] text-primary font-serif text-2xl mb-5 group-hover:bg-accent group-hover:text-on-accent transition-colors duration-300" aria-hidden="true">
                  {p.mark}
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div
          className="mt-20 md:mt-28 flex flex-wrap justify-center gap-x-16 gap-y-10"
          style={reveal(250)}
          aria-label="Impact statistics"
        >
          {[
            { value: "147", label: "Fragrances Reconstructed" },
            { value: "23", label: "Civilizations Explored" },
            { value: "89", label: "Peer-Reviewed Papers" },
            { value: "34", label: "Museum Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-5xl md:text-6xl text-primary">{stat.value}</div>
              <div className="mt-2 text-[0.75rem] uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}