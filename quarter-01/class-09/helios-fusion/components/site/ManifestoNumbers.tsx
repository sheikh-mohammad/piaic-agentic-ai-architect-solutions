const NUMBERS = [
  {
    v: "40",
    suffix: " s",
    k: "First sustained burn",
    d: "REACTOR-01 held 100M °C in 2023 — long enough to prove the physics was real.",
  },
  {
    v: "0",
    suffix: " g",
    k: "Carbon in operation",
    d: "Fusion burns nothing. Its only exhaust, helium, is the gas in a birthday balloon.",
  },
  {
    v: "8",
    suffix: " t",
    k: "Oil, per gram of fuel",
    d: "One gram of deuterium holds the energy of eight tonnes of crude — the whole economic argument.",
  },
  {
    v: "12",
    suffix: " T",
    k: "Magnetic field strength",
    d: "Ten times a hospital MRI, woven by superconducting coils into a cage.",
  },
];

export default function ManifestoNumbers() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="wrap py-16 sm:py-24">
        <p data-reveal className="eyebrow mb-12">
          The case, in numbers
        </p>
        <div
          data-reveal-group
          className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {NUMBERS.map((n) => (
            <div key={n.k} className="bg-bg p-7 sm:p-9">
              <div className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                <span data-count={n.v} data-decimals="0">
                  0
                </span>
                <span className="ember-text">{n.suffix}</span>
              </div>
              <p className="eyebrow mt-4">{n.k}</p>
              <p className="mt-2 text-sm leading-relaxed text-fg/60">{n.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
