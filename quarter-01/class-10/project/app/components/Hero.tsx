"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const reveal = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
    transitionDelay: `${delay}ms`,
  });

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden hero-gradient"
      style={{ minHeight: "100vh", paddingTop: "6rem" }}
      aria-labelledby="hero-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute hidden lg:block" style={{ top: "15%", left: "8%" }}>
          <span className="font-serif select-none" style={{ fontSize: "10rem", lineHeight: 1, color: "rgba(28,25,23,0.025)" }}>𓁜</span>
        </div>
        <div className="absolute hidden lg:block" style={{ bottom: "20%", right: "5%" }}>
          <span className="font-serif select-none" style={{ fontSize: "14rem", lineHeight: 1, color: "rgba(28,25,23,0.02)" }}>☥</span>
        </div>
        <div className="absolute rounded-full blur-[100px] animate-pulse" style={{ top: "10%", left: "20%", width: "30rem", height: "30rem", background: "rgba(176,141,87,0.07)" }} />
        <div className="absolute rounded-full blur-[100px] animate-pulse" style={{ bottom: "5%", right: "15%", width: "25rem", height: "25rem", background: "rgba(110,27,27,0.06)", animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 frame" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
        <div className="text-center" style={{ maxWidth: "52rem", margin: "0 auto" }}>
          {/* Eyebrow */}
          <div
            className="inline-flex items-center"
            style={{ ...{ gap: "0.75rem" }, ...reveal(0) }}
          >
            <span className="h-px bg-accent/60" style={{ width: "2rem" }} aria-hidden="true" />
            <span className="eyebrow">A Digital Museum of Historical Fragrance</span>
            <span className="h-px bg-accent/60" style={{ width: "2rem" }} aria-hidden="true" />
          </div>

          {/* Main heading */}
          <h1 id="hero-heading" className="text-balance" style={{ marginTop: "1.5rem" }}>
            <span className="block font-serif font-normal text-foreground" style={{ ...{ fontSize: "clamp(3rem, 8vw, 5.5rem)", lineHeight: 1.02, letterSpacing: "-0.03em" }, ...reveal(80) }}>
              Archaeology
            </span>
            <span className="block font-serif italic font-normal text-primary" style={{ ...{ fontSize: "clamp(3rem, 8vw, 5.5rem)", lineHeight: 1.02, letterSpacing: "-0.03em", marginTop: "0.15rem" }, ...reveal(160) }}>
              of Scent
            </span>
          </h1>

          {/* Subtitle */}
          <p className="block uppercase text-muted-foreground font-medium" style={{ ...{ fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)", letterSpacing: "0.4em", marginTop: "2rem" }, ...reveal(240) }}>
            Buried Fragrances, Resurrected
          </p>

          {/* Description */}
          <p className="text-muted-foreground font-light" style={{ ...{ maxWidth: "38rem", margin: "2.5rem auto 0", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", lineHeight: 1.75 }, ...reveal(320) }}>
            From the incense of Egyptian temples to the perfumed oils of Mycenaean palaces,
            we recover the lost scents of antiquity through molecular science, ancient texts,
            and the craft of fine perfumery.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center" style={{ ...{ gap: "1rem", marginTop: "2.5rem" }, ...reveal(400) }}>
            <Link
              href="/archive"
              className="group inline-flex items-center justify-center rounded-full bg-primary text-on-primary font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_8px_30px_rgba(110,27,27,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{ gap: "0.625rem", padding: "0.875rem 2rem" }}
            >
              Enter the Archive
              <svg className="transition-transform duration-300 group-hover:translate-x-1" style={{ width: "0.875rem", height: "0.875rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/methodology"
              className="inline-flex items-center justify-center rounded-full border border-border text-foreground font-medium transition-all duration-300 hover:bg-card hover:border-accent/40 hover:shadow-[0_4px_20px_rgba(28,25,23,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{ padding: "0.875rem 2rem" }}
            >
              Our Methodology
            </Link>
          </div>

          {/* Stats */}
          <div
            className="flex items-center justify-center flex-wrap"
            style={{ ...{ gap: "2.5rem", marginTop: "4rem" }, ...reveal(500) }}
            aria-label="Key statistics"
          >
            {[
              { value: "147", label: "Fragrances" },
              { value: "23", label: "Civilizations" },
              { value: "3,400+", label: "Years" },
              { value: "89", label: "Papers" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center" style={{ minWidth: "5rem" }}>
                <div className="font-serif text-foreground" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.1 }}>{stat.value}</div>
                <div className="text-muted-foreground" style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: "0.375rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute text-muted-foreground/40"
        style={{ ...{ bottom: "2rem", left: "50%", transform: "translateX(-50%)" }, ...reveal(700) }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em" }}>Scroll</span>
          <svg className="animate-bounce" style={{ width: "1rem", height: "1rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
