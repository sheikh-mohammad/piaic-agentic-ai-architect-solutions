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
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-[12%] hidden lg:block">
          <span className="font-serif text-[9rem] leading-none text-foreground/[0.03] select-none">𓁜</span>
        </div>
        <div className="absolute bottom-1/4 right-[8%] hidden lg:block">
          <span className="font-serif text-[11rem] leading-none text-foreground/[0.03] select-none">☥</span>
        </div>
        <div className="absolute top-16 left-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl bg-accent/10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] rounded-full blur-3xl bg-primary/10 animate-pulse" />
      </div>

      <div className="relative z-10 container">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-3 mb-9"
            style={reveal(0)}
          >
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="eyebrow text-accent">A Digital Museum of Historical Fragrance</span>
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
          </div>

          <h1 id="hero-heading" className="text-balance">
            <span className="block font-serif font-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-foreground" style={reveal(100)}>
              Archaeology
            </span>
            <span className="block font-serif italic font-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-primary mt-1" style={reveal(200)}>
              of Scent
            </span>
            <span className="block uppercase tracking-[0.35em] text-xs sm:text-sm md:text-base text-muted-foreground mt-8 font-medium" style={reveal(300)}>
              Buried Fragrances, Resurrected
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-10 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-light" style={reveal(400)}>
            From the incense of Egyptian temples to the perfumed oils of Mycenaean palaces,
            we recover the lost scents of antiquity through molecular science, ancient texts,
            and the craft of fine perfumery.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4" style={reveal(500)}>
            <Link
              href="/archive"
              className="group inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-primary text-on-primary font-medium hover:bg-primary/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background shadow-lg shadow-primary/10"
            >
              Enter the Archive
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/methodology"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full border border-accent/60 text-foreground font-medium hover:bg-accent hover:text-on-accent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Our Methodology
            </Link>
          </div>

          <div
            className="mt-16 flex items-center justify-center gap-8 sm:gap-14"
            style={reveal(650)}
            aria-label="Key statistics"
          >
            {[
              { value: "147", label: "Fragrances" },
              { value: "23", label: "Civilizations" },
              { value: "3,400+", label: "Years" },
              { value: "89", label: "Papers" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground">{stat.value}</div>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        style={reveal(900)}
        aria-hidden="true"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}