"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export function Spotlight() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.15 });
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
        <span className="absolute font-serif text-on-secondary/[0.04] select-none" style={{ top: "-3rem", right: "-2rem", fontSize: "28rem", lineHeight: 1 }}>☥</span>
        <div className="absolute rounded-full blur-[80px] animate-pulse" style={{ top: "20%", left: "10%", width: "20rem", height: "20rem", background: "rgba(176,141,87,0.08)" }} />
        <div className="absolute rounded-full blur-[60px]" style={{ bottom: "10%", right: "20%", width: "15rem", height: "15rem", background: "rgba(176,141,87,0.05)" }} />
      </div>

      <div className="relative frame">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: "4rem" }}>
          {/* Text content */}
          <div
            className="order-2 lg:order-1 text-center lg:text-left"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <span className="eyebrow" style={{ marginBottom: "1.25rem" }}>Fragrance of the Season · Egypt</span>
            <h2 id="spotlight-heading" className="font-serif" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Kyphi,
              <br />
              <span className="italic text-accent">the Sacred Incense</span>
            </h2>
            <p className="opacity-85 font-light" style={{ maxWidth: "30rem", margin: "1.75rem auto 0", fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.75 }}>
              Burned in Egyptian temples at sunset for over two millennia, Kyphi was the scent that
              &ldquo;makes the gods descend.&rdquo; Our latest reconstruction blends sixteen documented
              ingredients, each verified by molecular analysis of surviving residues.
            </p>

            {/* Notes */}
            <div style={{ marginTop: "2rem", marginBottom: "2rem" }} role="list" aria-label="Kyphi fragrance notes">
              <h3 className="eyebrow text-on-secondary/50" style={{ marginBottom: "0.75rem", fontSize: "0.65rem" }}>Olfactory Notes</h3>
              <div className="flex flex-wrap justify-center lg:justify-start" style={{ gap: "0.5rem" }}>
                {notes.map((note) => (
                  <span
                    key={note}
                    role="listitem"
                    className="rounded-full border border-on-secondary/20 text-on-secondary/80 transition-all duration-300 hover:border-accent/40 hover:text-accent"
                    style={{ padding: "0.375rem 1rem", fontSize: "0.8125rem" }}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start" style={{ gap: "0.75rem" }}>
              <Link
                href="/archive"
                className="inline-flex items-center justify-center rounded-full bg-accent text-on-accent font-medium transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_4px_20px_rgba(176,141,87,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                style={{ padding: "0.75rem 1.75rem" }}
              >
                View Reconstruction
              </Link>
              <Link
                href="/methodology"
                className="inline-flex items-center justify-center rounded-full border border-on-secondary/25 text-on-secondary font-medium transition-all duration-300 hover:bg-on-secondary/10 hover:border-on-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                style={{ padding: "0.75rem 1.75rem" }}
              >
                How It Was Rebuilt
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div
            className="order-1 lg:order-2 flex justify-center"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "scale(1)" : "scale(0.95)",
              transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s",
            }}
          >
            <div className="relative" style={{ width: "22rem", height: "22rem" }}>
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-on-secondary/10" style={{ animation: "float 8s ease-in-out infinite" }} aria-hidden="true" />
              {/* Middle ring */}
              <div className="absolute rounded-full border border-accent/20" style={{ inset: "2rem", animation: "float 6s ease-in-out infinite 1s" }} aria-hidden="true" />
              {/* Glow */}
              <div className="absolute inset-0 rounded-full blur-sm" style={{ background: "linear-gradient(135deg, rgba(176,141,87,0.12), rgba(246,239,230,0.05))" }} aria-hidden="true" />
              {/* Center */}
              <div className="absolute rounded-full bg-on-secondary/[0.07] backdrop-blur-sm border border-on-secondary/10 flex items-center justify-center" style={{ inset: "3.5rem", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.3)" }}>
                <div className="text-center" style={{ padding: "0 1.5rem" }}>
                  <span className="block font-serif text-accent" style={{ fontSize: "clamp(3rem, 6vw, 4rem)", lineHeight: 1, marginBottom: "0.5rem" }} aria-hidden="true">☥</span>
                  <span className="block font-serif text-on-secondary" style={{ fontSize: "1.5rem", letterSpacing: "-0.01em" }}>Kyphi</span>
                  <span className="block text-on-secondary/50" style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: "0.375rem" }}>Sixteen Ingredients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
