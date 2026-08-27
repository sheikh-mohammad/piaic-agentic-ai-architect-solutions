"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navigation = [
  { name: "Archive", href: "/archive" },
  { name: "Reconstructions", href: "/reconstructions" },
  { name: "Methodology", href: "/methodology" },
  { name: "Journal", href: "/journal" },
  { name: "Visit", href: "/visit" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/50 shadow-[0_1px_3px_rgba(28,25,23,0.04)]"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="frame">
        <div className="flex items-center justify-between" style={{ height: "5rem" }}>
          <Link href="/" className="group flex items-center gap-3" aria-label="Aroma Antiquaria Home">
            <span
              className="flex items-center justify-center rounded-full border border-accent/40 text-accent font-serif text-xl transition-all duration-300 group-hover:bg-accent group-hover:text-on-accent group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(176,141,87,0.3)]"
              style={{ width: "2.5rem", height: "2.5rem" }}
              aria-hidden="true"
            >
              A
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-lg tracking-tight text-foreground transition-colors group-hover:text-primary">
                Aroma Antiquaria
              </span>
              <span className="block text-muted-foreground" style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.25em" }}>
                Archaeology of Scent
              </span>
            </span>
          </Link>

          <div className="hidden md:flex md:items-center" style={{ gap: "0.25rem" }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-sm font-medium text-foreground/60 transition-colors duration-300 hover:text-foreground rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ padding: "0.5rem 0.875rem" }}
              >
                {item.name}
                <span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-accent transition-all duration-300 group-hover:w-[calc(100%-1rem)]"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-accent/50 text-accent text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-on-accent hover:shadow-[0_4px_20px_rgba(176,141,87,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{ padding: "0.5rem 1.25rem" }}
            >
              Get in Touch
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground hover:bg-muted transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={{ width: "2.5rem", height: "2.5rem" }}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg style={{ width: "1.125rem", height: "1.125rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg style={{ width: "1.125rem", height: "1.125rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div
          id="mobile-menu"
          className="md:hidden overflow-hidden transition-all duration-400 ease-out"
          style={{
            maxHeight: mobileMenuOpen ? "24rem" : "0",
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="glass rounded-b-2xl border border-border/50 border-t-0" style={{ padding: "1rem 1.25rem 1.25rem" }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-foreground/70 hover:text-foreground hover:bg-muted/60 rounded-xl transition-all duration-200"
                style={{ padding: "0.75rem 1rem" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-base font-medium text-accent hover:bg-muted/60 rounded-xl transition-all duration-200"
              style={{ padding: "0.75rem 1rem", marginTop: "0.25rem" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
