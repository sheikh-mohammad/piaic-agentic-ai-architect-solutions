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
      className="relative overflow-hidden py-24 md:py-36 bg-secondary text-on-secondary"
      aria-labelledby="spotlight-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="absolute -top-10 right-0 font-serif text-[24rem] leading-none text-on-secondary/[0.05] select-none">☥</span>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-accent/10 animate-pulse" />
      </div>

      <div className="relative container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div
            className="order-2 lg:order-1 text-center lg:text-left"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <span className="eyebrow text-accent block mb-6">Fragrance of the Season · Egypt</span>
            <h2 id="spotlight-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08]">
              Kyphi,
              <br />
              <span className="italic text-accent">the Sacred Incense</span>
            </h2>
            <p className="mt-8 max-w-lg mx-auto lg:mx-0 text-base md:text-lg leading-relaxed opacity-90 font-light">
              Burned in Egyptian temples at sunset for over two millennia, Kyphi was the scent that
              &ldquo;makes the gods descend.&rdquo; Our latest reconstruction blends sixteen documented
              ingredients, each verified by molecular analysis of surviving residues.
            </p>

            <div className="mt-9 mb-9" role="list" aria-label="Kyphi fragrance notes">
              <h3 className="eyebrow text-on-secondary/60 mb-4">Olfactory Notes</h3>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                {notes.map((note) => (
                  <span
                    key={note}
                    role="listitem"
                    className="px-4 py-1.5 rounded-full border border-on-secondary/25 text-on-secondary/90 text-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/archive"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent text-on-accent font-medium hover:bg-accent/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                View Reconstruction
              </Link>
              <Link
                href="/methodology"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-on-secondary/30 text-on-secondary font-medium hover:bg-on-secondary/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
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
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border border-on-secondary/15 animate-pulse" style={{ animationDuration: "7s" }} aria-hidden="true" />
              <div className="absolute inset-9 rounded-full border border-accent/30 animate-pulse" style={{ animationDuration: "9s", animationDelay: "1s" }} aria-hidden="true" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/15 to-on-secondary/5 blur-sm" aria-hidden="true" />
              <div className="absolute inset-16 rounded-full bg-on-secondary/10 backdrop-blur border border-on-secondary/15 flex items-center justify-center shadow-2xl">
                <div className="text-center px-8">
                  <span className="block font-serif text-6xl md:text-7xl text-accent leading-none mb-3" aria-hidden="true">☥</span>
                  <span className="block font-serif text-3xl text-on-secondary">Kyphi</span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-on-secondary/60">Sixteen Ingredients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}