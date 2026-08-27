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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="frame">
        <div className="flex items-center justify-between" style={{ height: "5rem" }}>
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Aroma Antiquaria Home"
          >
            <span
              className="flex items-center justify-center rounded-full border border-accent/60 text-accent font-serif text-xl transition-colors group-hover:bg-accent group-hover:text-on-accent"
              style={{ width: "2.5rem", height: "2.5rem" }}
              aria-hidden="true"
            >
              A
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-lg tracking-tight text-foreground">
                Aroma Antiquaria
              </span>
              <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                Archaeology of Scent
              </span>
            </span>
          </Link>

          <div className="hidden md:flex md:items-center" style={{ gap: "1.75rem" }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-sm font-medium text-foreground/75 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                style={{ padding: "0.25rem 0.5rem" }}
              >
                {item.name}
                <span
                  className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-accent/70 text-accent text-sm font-medium hover:bg-accent hover:text-on-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{ padding: "0.625rem 1.5rem" }}
            >
              Get in Touch
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={{ width: "2.75rem", height: "2.75rem" }}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg style={{ width: "1.25rem", height: "1.25rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg style={{ width: "1.25rem", height: "1.25rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div
          id="mobile-menu"
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: mobileMenuOpen ? "20rem" : "0",
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="border-t border-border" style={{ padding: "1rem 0" }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                style={{ padding: "0.75rem" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-base font-medium text-accent hover:bg-muted rounded-lg transition-colors"
              style={{ padding: "0.75rem" }}
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
