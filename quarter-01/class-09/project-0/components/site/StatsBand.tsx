const STATS = [
  {
    v: "4.2",
    d: 1,
    suffix: "B",
    k: "Capital raised",
    note: "From sovereign funds and utility partners, committed behind first-of-a-kind.",
  },
  {
    v: "12",
    d: 0,
    suffix: "GW",
    k: "Pipeline under contract",
    note: "Megawatt-hours reserved before the first plant is even built.",
  },
  {
    v: "150",
    d: 0,
    suffix: "M °C",
    k: "Reached in REACTOR-01",
    note: "Ten times hotter than the core of the Sun, held in a cage.",
  },
  {
    v: "200",
    d: 0,
    suffix: "+",
    k: "Physicists & engineers",
    note: "Across our Oxford and Rotterdam campuses, one problem at a time.",
  },
];

export default function StatsBand() {
  return (
    <section className="border-b border-border">
      <div
        data-reveal-group
        className="wrap grid grid-cols-2 gap-px overflow-hidden rounded-b-2xl bg-border lg:grid-cols-4"
      >
        {STATS.map((s) => (
          <div key={s.k} className="bg-bg px-5 py-10 sm:px-8 sm:py-14">
            <div className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              <span data-count={s.v} data-decimals={s.d}>
                0
              </span>
              <span className="ember-text">{s.suffix}</span>
            </div>
            <p className="eyebrow mt-4">{s.k}</p>
            <p className="mt-2 max-w-[24ch] text-sm leading-relaxed text-fg/55">
              {s.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
