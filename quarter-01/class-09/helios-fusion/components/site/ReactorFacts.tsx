const FACTS = [
  {
    n: "150M °C",
    t: "Hotter than the sun",
    d: "The plasma burns at ten times the temperature of the Sun's core — no solid wall can survive that. So the wall is not solid. It is a magnetic field, woven by superconducting coils.",
  },
  {
    n: "0 g CO₂",
    t: "Fuel from the sea",
    d: "The reactor's fuel is hydrogen pulled from seawater. Its only waste is helium — the same gas in a birthday balloon.",
  },
  {
    n: "24/7",
    t: "Clean base load",
    d: "Fusion runs through the night, the storm and the winter. It is the missing on-switch for a renewable grid.",
  },
];

const SPECS: Array<[string, string]> = [
  ["Core temperature", "150,000,000 °C"],
  ["Magnetic field", "12 tesla"],
  ["Plasma volume", "40 m³"],
  ["Net output", "100 MW / unit"],
  ["Fuel", "Hydrogen from seawater"],
  ["Waste", "Helium"],
];

export default function ReactorFacts() {
  return (
    <div className="wrap pb-24 sm:pb-36">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Sticky tokamak visual */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div data-reveal className="reactor-orb mx-auto max-w-md lg:max-w-none">
            <div className="reactor-ring-outer" />
            <div className="reactor-ring" />
            <div className="reactor-ring-plasma" />
          </div>
          <p
            data-reveal
            className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
          >
            Tokamak 01 — cross-section
          </p>
        </div>

        {/* Facts */}
        <div data-reveal-group className="flex flex-col">
          {FACTS.map((f) => (
            <article
              key={f.n}
              className="border-t border-border py-10 first:border-t-0 sm:py-12"
            >
              <div className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
                <span className="ember-text">{f.n}</span>
              </div>
              <h3 className="mt-4 font-mono text-sm uppercase tracking-[0.16em] text-secondary">
                {f.t}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-fg/70">
                {f.d}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Spec sheet */}
      <div
        data-reveal
        className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
      >
        {SPECS.map(([k, v]) => (
          <div key={k} className="bg-surface p-6">
            <div className="eyebrow mb-2">{k}</div>
            <div className="font-display text-lg font-semibold">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
