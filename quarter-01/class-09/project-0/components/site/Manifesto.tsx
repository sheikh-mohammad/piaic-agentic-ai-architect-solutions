const STATEMENT =
  "Every civilisation is defined by the energy it masters.";

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-24 sm:py-36">
      <div className="wrap">
        <p data-reveal className="eyebrow mb-12">
          01 — Manifesto
        </p>

        <h2
          data-manifesto
          className="max-w-5xl font-display text-[clamp(2rem,5.2vw,4.5rem)] font-semibold leading-[1.06] tracking-tight"
        >
          {STATEMENT.split(" ").map((word, i) => (
            <span key={i} className="word inline-block">
              {word}
              &nbsp;
            </span>
          ))}
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
          <p
            data-reveal
            className="max-w-xl text-lg leading-relaxed text-fg/70"
          >
            For a century we burned the past — coal and gas are stored
            sunlight, and we have been spending the inheritance. HELIOS builds
            the engine that powers every star. Not a promise of clean energy.
            The operating manual, built and running.
          </p>
          <p data-reveal className="eyebrow text-left sm:text-right">
            Fuel: seawater
            <br />
            Waste: helium
          </p>
        </div>
      </div>
    </section>
  );
}
