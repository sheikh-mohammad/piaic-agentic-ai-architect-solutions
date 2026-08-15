"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Reactor", href: "#reactor" },
  { label: "Science", href: "#science" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? "border-b border-border bg-bg/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between sm:h-[72px]">
          <a
            href="#top"
            className="group flex items-center gap-2 font-display text-lg font-semibold tracking-wide cursor-pointer"
            aria-label="HELIOS — back to top"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(255,90,31,0.9)] transition-transform duration-300 group-hover:scale-125" />
            HELIOS<span className="text-primary">®</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted transition-colors duration-200 hover:text-fg cursor-pointer"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary cursor-pointer"
            >
              Get access
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-10 flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[7px] md:hidden"
          >
            <span
              className={`h-px w-6 bg-fg transition-transform duration-300 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-fg transition-transform duration-300 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-bg/95 px-8 backdrop-blur-xl transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-6">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 font-display text-3xl tracking-wide text-fg transition-colors duration-200 hover:text-primary cursor-pointer"
            >
              <span className="font-mono text-xs text-primary">
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="btn-primary mt-10 w-fit cursor-pointer"
        >
          Get access
        </a>
      </div>
    </>
  );
}
