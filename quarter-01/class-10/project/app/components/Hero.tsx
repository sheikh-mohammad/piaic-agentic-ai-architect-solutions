"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/50" />
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border text-sm font-medium text-muted-foreground mb-8 transition-opacity duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inset-0 h-full w-full rounded-full bg-primary/75 opacity-75" />
              <span className="relative flex h-full w-full rounded-full bg-primary" />
            </span>
            Digital Museum & Archive — Est. 2024
          </div>

          <h1
            id="hero-heading"
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05] text-foreground mb-6 transition-opacity duration-700"
            style={{ transitionDelay: "200ms" }}
          >
            <span className="block" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}>
              Archaeology
            </span>
            <span className="block text-primary" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: "100ms" }}>
              of Scent
            </span>
            <span className="block" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: "200ms" }}>
              Reconstructed
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light transition-opacity duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: "400ms" }}
          >
            We revive lost fragrances through molecular archaeology, ancient textual analysis,
            and experimental reconstruction—bringing the olfactory past into the present.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-opacity duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: "500ms" }}
          >
            <Link
              href="/archive"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary text-on-primary font-medium text-base hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"
            >
              Enter the Archive
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/methodology"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-border bg-transparent font-medium text-base hover:bg-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Our Methodology
            </Link>
          </div>

          <div
            className="mt-16 flex items-center justify-center gap-8 md:gap-16 text-sm text-muted-foreground transition-opacity duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: "600ms" }}
            aria-label="Key statistics"
          >
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-medium text-foreground">147</div>
              <div className="mt-1">Reconstructed Fragrances</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" aria-hidden="true" />
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-medium text-foreground">23</div>
              <div className="mt-1">Ancient Civilizations</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" aria-hidden="true" />
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-medium text-foreground">3,400+</div>
              <div className="mt-1">Years of History</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" aria-hidden="true" />
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-medium text-foreground">89</div>
              <div className="mt-1">Published Papers</div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: "1000ms" }}
          aria-hidden="true"
        >
          <svg className="h-6 w-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}