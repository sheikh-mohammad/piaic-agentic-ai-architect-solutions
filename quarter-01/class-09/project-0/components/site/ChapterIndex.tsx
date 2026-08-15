const CHAPTERS = [
  {
    i: "01",
    t: "Manifesto",
    d: "Why we must stop burning the past.",
    href: "/manifesto",
  },
  {
    i: "02",
    t: "Reactor",
    d: "Ten million degrees, held in a magnetic cage.",
    href: "/reactor",
  },
  {
    i: "03",
    t: "Science",
    d: "Contain. Heat. Harvest. Three moves, one star.",
    href: "/science",
  },
  {
    i: "04",
    t: "Roadmap",
    d: "From first plasma to a gigawatt in the ground.",
    href: "/roadmap",
  },
  {
    i: "05",
    t: "Contact",
    d: "Join us. Or just say hello.",
    href: "/contact",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M4 12h15m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

export default function ChapterIndex() {
  return (
    <section className="py-24 sm:py-36">
      <div className="wrap">
        <p data-reveal className="eyebrow mb-10">
          Index
        </p>
        <div data-reveal-group>
          {CHAPTERS.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="group grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-border py-6 transition-colors duration-300 last:border-b hover:bg-surface/40 sm:grid-cols-[80px_1fr_auto_auto] sm:gap-6 sm:py-8"
            >
              <span className="font-mono text-xs text-muted">{c.i}</span>
              <span className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-4xl">
                {c.t}
              </span>
              <span className="hidden max-w-xs text-right font-mono text-sm text-muted sm:block">
                {c.d}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-fg transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-bg">
                <Arrow />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
