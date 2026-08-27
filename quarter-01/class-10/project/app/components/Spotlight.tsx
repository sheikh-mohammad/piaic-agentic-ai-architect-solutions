"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export function Spotlight() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const notes = ["Honey", "Wine", "Myrrh", "Frankincense", "Cypress", "Juniper"];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-secondary text-on-secondary section-lg"
      aria-labelledby="spotlight-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="absolute font-serif text-on-secondary/[0.05] select-none" style={{ top: "-2.5rem", right: 0, fontSize: "24rem", lineHeight: 1 }}>☥</span>
        <div className="absolute rounded-full blur-3xl bg-accent/10 animate-pulse" style={{ top: "25%", left: "25%", width: "24rem", height: "24rem" }} />
      </div>

      <div className="relative frame">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: "3.5rem" }}>
          <div
            className="order-2 lg:order-1 text-center lg:text-left"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <span className="eyebrow text-accent" style={{ marginBottom: "1.5rem" }}>Fragrance of the Season · Egypt</span>
            <h2 id="spotlight-heading" className="font-serif" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
              Kyphi,
              <br />
              <span className="italic text-accent">the Sacred Incense</span>
            </h2>
            <p className="opacity-90 font-light" style={{ maxWidth: "32rem", margin: "2rem auto 0", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.7 }}>
              Burned in Egyptian temples at sunset for over two millennia, Kyphi was the scent that
              &ldquo;makes the gods descend.&rdquo; Our latest reconstruction blends sixteen documented
              ingredients, each verified by molecular analysis of surviving residues.
            </p>

            <div style={{ marginTop: "2.25rem", marginBottom: "2.25rem" }} role="list" aria-label="Kyphi fragrance notes">
              <h3 className="eyebrow text-on-secondary/60" style={{ marginBottom: "1rem" }}>Olfactory Notes</h3>
              <div className="flex flex-wrap justify-center lg:justify-start" style={{ gap: "0.625rem" }}>
                {notes.map((note) => (
                  <span
                    key={note}
                    role="listitem"
                    className="rounded-full border border-on-secondary/25 text-on-secondary/90"
                    style={{ padding: "0.375rem 1rem", fontSize: "0.875rem" }}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start" style={{ gap: "1rem" }}>
              <Link
                href="/archive"
                className="inline-flex items-center justify-center rounded-full bg-accent text-on-accent font-medium hover:bg-accent/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                style={{ gap: "0.5rem", padding: "0.875rem 2rem" }}
              >
                View Reconstruction
              </Link>
              <Link
                href="/methodology"
                className="inline-flex items-center justify-center rounded-full border border-on-secondary/30 text-on-secondary font-medium hover:bg-on-secondary/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                style={{ gap: "0.5rem", padding: "0.875rem 2rem" }}
              >
                How It Was Rebuilt
              </Link>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 flex justify-center"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "scale(1)" : "scale(0.92)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="relative" style={{ width: "24rem", height: "24rem" }}>
              <div className="absolute inset-0 rounded-full border border-on-secondary/15 animate-pulse" style={{ animationDuration: "7s" }} aria-hidden="true" />
              <div className="absolute rounded-full border border-accent/30 animate-pulse" style={{ inset: "2.25rem", animationDuration: "9s", animationDelay: "1s" }} aria-hidden="true" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/15 to-on-secondary/5 blur-sm" aria-hidden="true" />
              <div className="absolute rounded-full bg-on-secondary/10 backdrop-blur border border-on-secondary/15 flex items-center justify-center shadow-2xl" style={{ inset: "4rem" }}>
                <div className="text-center" style={{ padding: "0 2rem" }}>
                  <span className="block font-serif text-accent" style={{ fontSize: "clamp(3.75rem, 8vw, 4.5rem)", lineHeight: 1, marginBottom: "0.75rem" }} aria-hidden="true">☥</span>
                  <span className="block font-serif text-on-secondary" style={{ fontSize: "1.875rem" }}>Kyphi</span>
                  <span className="block text-on-secondary/60" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: "0.5rem" }}>Sixteen Ingredients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
