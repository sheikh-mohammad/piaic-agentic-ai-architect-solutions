const PRESS = [
  {
    outlet: "Nature Energy",
    headline: "A star in a magnetic cage: sustained fusion burn, repeated.",
    year: "2025",
  },
  {
    outlet: "The Economist",
    headline: "The cheapest energy in history now has a price tag.",
    year: "2026",
  },
  {
    outlet: "Financial Times",
    headline: "HELIOS raises $2bn to build the first commercial fusion plant.",
    year: "2025",
  },
  {
    outlet: "MIT Technology Review",
    headline: "Seawater, superconductors and a very hot donut.",
    year: "2024",
  },
];

export default function NewsList() {
  return (
    <section className="border-t border-border py-24 sm:py-36">
      <div className="wrap">
        <div className="mb-10 flex items-baseline justify-between">
          <p data-reveal className="eyebrow">
            Press
          </p>
          <p data-reveal className="eyebrow hidden sm:block">
            2024 — 2026
          </p>
        </div>

        <div data-reveal-group>
          {PRESS.map((p) => (
            <div
              key={p.headline}
              className="grid gap-1 border-t border-border py-6 sm:grid-cols-[170px_1fr_auto] sm:items-baseline sm:gap-6 sm:py-8"
            >
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-secondary">
                {p.outlet}
              </span>
              <span className="font-display text-xl font-medium tracking-tight text-fg/90 sm:text-2xl">
                {p.headline}
              </span>
              <span className="font-mono text-xs text-muted">{p.year}</span>
            </div>
          ))}
        </div>

        <p data-reveal className="eyebrow mt-10 border-t border-border pt-8">
          The numbers are illustrative. The urgency is not.
        </p>
      </div>
    </section>
  );
}
