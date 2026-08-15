const STEPS = [
  {
    n: "01",
    t: "Contain",
    d: "Superconducting magnets weave an invisible cage inside a vacuum chamber. The plasma never touches a wall.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-primary" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="6.5" strokeDasharray="2.5 3" />
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    n: "02",
    t: "Heat",
    d: "Radiowaves and neutral beams spin the gas until it becomes a star — 150 million degrees, hotter than the Sun.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-primary" aria-hidden="true">
        <path d="M2 12h4l3-7 4 14 3-8 2 4h4" />
      </svg>
    ),
  },
  {
    n: "03",
    t: "Harvest",
    d: "Neutrons escape the field and boil water. Steam spins turbines. Electrons leave the plant.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-primary" aria-hidden="true">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
];

export default function Science() {
  return (
    <section id="science" className="relative border-t border-border bg-surface py-24 sm:py-36">
      <div className="wrap">
        <p data-reveal className="eyebrow mb-6">
          03 — The Science
        </p>
        <h2
          data-reveal
          className="max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight"
        >
          Three moves. One star.
        </h2>

        <div
          data-reveal-group
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {STEPS.map((s) => (
            <article
              key={s.n}
              className="group rounded-2xl border border-border bg-bg p-8 transition-colors duration-300 hover:border-primary/60"
            >
              <div className="flex items-start justify-between">
                {s.icon}
                <span className="font-mono text-sm text-muted">
                  {s.n} / 03
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">
                {s.t}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-fg/70">
                {s.d}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
