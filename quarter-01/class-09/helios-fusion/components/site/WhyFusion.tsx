const WHY = [
  {
    n: "01",
    t: "The physics is proven",
    d: "Sustained, net-positive fusion has been demonstrated and repeated in machines we have run. What remains is engineering — and engineering is what we do.",
  },
  {
    n: "02",
    t: "The fuel is everywhere",
    d: "A litre of seawater holds the deuterium energy of a litre of crude. No mining, no supply chains, no oil to fight over — the fuel falls from every tap.",
  },
  {
    n: "03",
    t: "The clock is running",
    d: "Wind and sun cannot carry the night, the calm or the winter. Fusion is the only clean base-load on/off switch we have — and we are late.",
  },
];

export default function WhyFusion() {
  return (
    <section className="border-t border-border py-24 sm:py-36">
      <div className="wrap grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
        {/* Sticky editorial lead */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p data-reveal className="eyebrow mb-8">
            Why now
          </p>
          <h2
            data-reveal
            className="font-display text-[clamp(2.2rem,5.2vw,4.5rem)] font-bold leading-[1.02] tracking-tight"
          >
            The last <span className="ember-text">energy</span> problem.
          </h2>
          <p data-reveal className="mt-8 max-w-md text-lg leading-relaxed text-fg/70">
            For two centuries every boom rode on a different fuel — wood,
            coal, oil, gas. Each time we traded one set of scars for another.
            HELIOS is the bet that the next thousand years run on hydrogen
            and sunlight, tapped directly.
          </p>
        </div>

        {/* Numbered arguments */}
        <div data-reveal-group className="flex flex-col">
          {WHY.map((w) => (
            <div
              key={w.n}
              className="border-t border-border py-8 first:border-t-0 sm:py-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-primary">{w.n}</span>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {w.t}
                </h3>
              </div>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-fg/70">
                {w.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
