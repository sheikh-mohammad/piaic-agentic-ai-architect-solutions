const SYSTEMS = [
  {
    n: "01",
    t: "Vacuum vessel",
    d: "A steel and beryllium chamber the size of a small room, pumped to space-grade vacuum. No air to steal the heat.",
  },
  {
    n: "02",
    t: "Superconducting magnets",
    d: "Sixteen toroidal coils at 12 tesla, chilled to 4 K — the invisible cage that holds the star.",
  },
  {
    n: "03",
    t: "Heating systems",
    d: "Neutral beams and radiofrequency antennas push the gas across the 150-million-degree threshold.",
  },
  {
    n: "04",
    t: "Fuel cycle",
    d: "Deuterium and tritium from the plant's own systems. Neutrons breed fresh fuel in the wall itself.",
  },
  {
    n: "05",
    t: "Steam cycle",
    d: "The escaping neutrons boil water — the same Rankine cycle every power plant on Earth already trusts.",
  },
  {
    n: "06",
    t: "Grid interface",
    d: "100 MW of clean base-load, conditioned, synchronised, and sold to the market like any other generator.",
  },
];

export default function ReactorSystems() {
  return (
    <section className="border-t border-border py-24 sm:py-36">
      <div className="wrap">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p data-reveal className="eyebrow mb-4">
              Anatomy of the machine
            </p>
            <h2
              data-reveal
              className="max-w-xl font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[1.06] tracking-tight"
            >
              Six systems, <span className="ember-text">one star.</span>
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-sm leading-relaxed text-fg/60">
            Every system is a constraint a physicist and an engineer argue
            about daily. That argument is the design process.
          </p>
        </div>

        <div
          data-reveal-group
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SYSTEMS.map((s) => (
            <article
              key={s.n}
              className="group rounded-2xl border border-border bg-surface p-8 transition-colors duration-300 hover:border-primary/60"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-3xl font-semibold tracking-tight text-stroke">
                  {s.n}
                </span>
                <span className="font-mono text-xs text-muted">
                  REACTOR-01
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
