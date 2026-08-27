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
      className="py-24 md:py-32 bg-primary text-on-primary"
      aria-labelledby="spotlight-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className="order-2 lg:order-1 transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)" }}
          >
            <span className="inline-block text-sm font-mono uppercase tracking-widest opacity-70 mb-6">
              Fragrance of the Month · Ancient Egypt
            </span>
            <h2 id="spotlight-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-tight">
              Kyphi,
              <br />
              the Sacred Incense
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8 max-w-lg">
              Burned in Egyptian temples at sunset for over two millennia, Kyphi was "the perfume that
              makes the gods descend." Our latest reconstruction blends sixteen historically documented
              ingredients, verified by molecular analysis of surviving residues.
            </p>

            <div className="mb-8" role="list" aria-label="Kyphi fragrance notes">
              <h3 className="text-xs font-mono uppercase tracking-widest opacity-70 mb-3">Olfactory Notes</h3>
              <div className="flex flex-wrap gap-2">
                {notes.map((note) => (
                  <span
                    key={note}
                    role="listitem"
                    className="px-3 py-1.5 rounded-full bg-on-primary/10 border border-on-primary/20 text-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/archive"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-on-primary text-primary font-medium hover:opacity-90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-primary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                View the Reconstruction
              </Link>
              <Link
                href="/methodology"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-on-primary/40 text-on-primary font-medium hover:bg-on-primary/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-primary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                How It Was Rebuilt
              </Link>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 flex justify-center transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0.9)" }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div
                className="absolute inset-0 rounded-full border border-on-primary/20 animate-pulse"
                style={{ animationDuration: "6s" }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-8 rounded-full border border-on-primary/20 animate-pulse"
                style={{ animationDuration: "8s", animationDelay: "1s" }}
                aria-hidden="true"
              />
              <div className="absolute inset-16 rounded-full bg-on-primary/10 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                <div className="text-center px-8">
                  <span className="block font-serif text-6xl md:text-7xl mb-3" aria-hidden="true">☥</span>
                  <span className="font-serif text-2xl font-medium">Kyphi</span>
                  <span className="block text-sm opacity-70 mt-1">XVI Ingredients · 1550 BCE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}