"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const reveal = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
    transitionDelay: `${delay}ms`,
  });

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden hero-gradient"
      style={{ minHeight: "100vh", paddingTop: "6rem" }}
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute hidden lg:block" style={{ top: "33%", left: "12%" }}>
          <span className="font-serif select-none" style={{ fontSize: "9rem", lineHeight: 1, color: "rgba(28,25,23,0.03)" }}>𓁜</span>
        </div>
        <div className="absolute hidden lg:block" style={{ bottom: "25%", right: "8%" }}>
          <span className="font-serif select-none" style={{ fontSize: "11rem", lineHeight: 1, color: "rgba(28,25,23,0.03)" }}>☥</span>
        </div>
        <div className="absolute rounded-full blur-3xl animate-pulse" style={{ top: "4rem", left: "50%", transform: "translateX(-50%)", width: "40rem", height: "40rem", background: "rgba(176,141,87,0.1)" }} />
        <div className="absolute rounded-full blur-3xl animate-pulse" style={{ bottom: 0, right: "25%", width: "30rem", height: "30rem", background: "rgba(110,27,27,0.1)" }} />
      </div>

      <div className="relative z-10 frame" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="text-center" style={{ maxWidth: "56rem", margin: "0 auto" }}>
          <div
            className="inline-flex items-center"
            style={{ ...{ gap: "0.75rem", marginBottom: "2.25rem" }, ...reveal(0) }}
          >
            <span className="h-px bg-accent" style={{ width: "2.5rem" }} aria-hidden="true" />
            <span className="eyebrow text-accent">A Digital Museum of Historical Fragrance</span>
            <span className="h-px bg-accent" style={{ width: "2.5rem" }} aria-hidden="true" />
          </div>

          <h1 id="hero-heading" className="text-balance">
            <span className="block font-serif font-normal text-foreground" style={{ ...{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }, ...reveal(100) }}>
              Archaeology
            </span>
            <span className="block font-serif italic font-normal text-primary" style={{ ...{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: "0.25rem" }, ...reveal(200) }}>
              of Scent
            </span>
            <span className="block uppercase text-muted-foreground font-medium" style={{ ...{ fontSize: "clamp(0.75rem, 2vw, 1rem)", letterSpacing: "0.35em", marginTop: "2rem" }, ...reveal(300) }}>
              Buried Fragrances, Resurrected
            </span>
          </h1>

          <p className="text-muted-foreground font-light" style={{ ...{ maxWidth: "40rem", margin: "2.5rem auto 0", fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.7 }, ...reveal(400) }}>
            From the incense of Egyptian temples to the perfumed oils of Mycenaean palaces,
            we recover the lost scents of antiquity through molecular science, ancient texts,
            and the craft of fine perfumery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center" style={{ ...{ gap: "1rem", marginTop: "3rem" }, ...reveal(500) }}>
            <Link
              href="/archive"
              className="group inline-flex items-center justify-center rounded-full bg-primary text-on-primary font-medium hover:bg-primary/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background shadow-lg shadow-primary/10"
              style={{ gap: "0.75rem", padding: "1rem 2.25rem" }}
            >
              Enter the Archive
              <svg className="transition-transform group-hover:translate-x-1" style={{ width: "1rem", height: "1rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/methodology"
              className="inline-flex items-center justify-center rounded-full border border-accent/60 text-foreground font-medium hover:bg-accent hover:text-on-accent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{ gap: "0.5rem", padding: "1rem 2.25rem" }}
            >
              Our Methodology
            </Link>
          </div>

          <div
            className="flex items-center justify-center flex-wrap"
            style={{ ...{ gap: "2rem", marginTop: "4rem" }, ...reveal(650) }}
            aria-label="Key statistics"
          >
            {[
              { value: "147", label: "Fragrances" },
              { value: "23", label: "Civilizations" },
              { value: "3,400+", label: "Years" },
              { value: "89", label: "Papers" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-foreground" style={{ fontSize: "clamp(1.875rem, 5vw, 3rem)" }}>{stat.value}</div>
                <div className="text-muted-foreground" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: "0.5rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute text-muted-foreground animate-bounce"
        style={{ ...{ bottom: "2rem", left: "50%", transform: "translateX(-50%)" }, ...reveal(900) }}
        aria-hidden="true"
      >
        <svg style={{ width: "1.5rem", height: "1.5rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
