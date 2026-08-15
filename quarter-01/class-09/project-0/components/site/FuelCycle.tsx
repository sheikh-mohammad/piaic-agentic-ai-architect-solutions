const CRITERIA = [
  {
    k: "Q = 10",
    d: "The fusion gain — ten times more energy out than in. The line between a science machine and a sold megawatt.",
  },
  {
    k: "T = 150M °C",
    d: "The temperature at which the plasma fuses faster than it cools. Ten times hotter than the Sun's core.",
  },
  {
    k: "nτ > 10²⁰",
    d: "Density times confinement time — the Lawson criterion. Pass it and the plasma is self-sustaining.",
  },
];

export default function FuelCycle() {
  return (
    <section className="border-t border-border py-24 sm:py-36">
      <div className="wrap grid gap-16 lg:grid-cols-2 lg:gap-20">
        {/* The reaction */}
        <div>
          <p data-reveal className="eyebrow mb-4">
            The fuel cycle
          </p>
          <h2
            data-reveal
            className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[1.06] tracking-tight"
          >
            Two atoms, <span className="ember-text">one difference.</span>
          </h2>

          <div
            data-reveal
            className="mt-10 rounded-2xl border border-border bg-surface p-8 sm:p-10"
          >
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              Deuterium + Tritium
            </p>
            <p className="mt-4 font-display text-[clamp(1.4rem,3.2vw,2.4rem)] font-semibold leading-snug tracking-tight">
              D + T <span className="text-muted">&rarr;</span> He + n{" "}
              <span className="text-muted">+</span>{" "}
              <span className="ember-text">17.6 MeV</span>
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-fg/70">
              The mass of the two hydrogen atoms is a little more than the
              helium they become. The difference escapes as light — the same
              accountancy that lights the Sun, balanced here on Earth.
            </p>
          </div>

          <p data-reveal className="mt-8 max-w-md text-sm leading-relaxed text-fg/60">
            The neutron that carries 80% of that energy is the harvest. It
            hits the wall, breeds the tritium, and boils the water. Nothing is
            wasted, nothing burns, nothing can run away.
          </p>
        </div>

        {/* The three numbers */}
        <div data-reveal-group className="flex flex-col">
          <p data-reveal className="eyebrow mb-8">
            Three numbers that decide everything
          </p>
          {CRITERIA.map((c) => (
            <div
              key={c.k}
              className="border-t border-border py-8 first:border-t-0 sm:py-10"
            >
              <div className="font-display text-4xl font-semibold tracking-tight">
                <span className="ember-text">{c.k}</span>
              </div>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-fg/70">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
