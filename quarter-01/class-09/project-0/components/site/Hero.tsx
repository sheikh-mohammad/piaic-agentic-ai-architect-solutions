import PlasmaLoader from "@/components/three/PlasmaLoader";

const STATS = [
  { v: "150M °C", k: "Plasma temperature" },
  { v: "0 g", k: "CO₂ in operation" },
  { v: "24/7", k: "Clean base load" },
];

export default function Hero() {
  return (
    <section id="top" data-hero className="relative min-h-svh overflow-hidden">
      {/* Plasma core — lazy WebGL layer */}
      <div data-core-wrap className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-full w-full sm:w-[62%]">
          <PlasmaLoader />
          {/* legibility fades over the orb */}
          <div className="absolute inset-0 bg-linear-to-r from-bg via-bg/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-bg to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="wrap relative z-10 flex min-h-svh flex-col justify-end pb-12 pt-28 sm:justify-between sm:pb-0 sm:pt-36">
        <div className="max-w-3xl">
          <p data-hero-fade className="eyebrow mb-6 flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(255,90,31,0.9)]" />
            Helios Fusion — Reactor 01 · Online
          </p>

          <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] font-bold leading-[0.95] tracking-tight">
            <span data-hero-line className="line-mask">
              <span className="line-inner">A star,</span>
            </span>
            <span data-hero-line className="line-mask">
              <span className="line-inner ember-text">contained.</span>
            </span>
          </h1>

          <p data-hero-fade className="mt-8 max-w-xl text-lg leading-relaxed text-fg/75">
            HELIOS builds the fusion plants that will power the next thousand
            years — a sun&rsquo;s worth of energy held in a magnetic cage,
            turning seawater into electricity.
          </p>

          <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#reactor" className="btn-primary">
              See the reactor
            </a>
            <a href="#science" className="btn-ghost">
              Read the science
            </a>
          </div>
        </div>

        <div
          data-hero-fade
          className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-24 sm:max-w-2xl"
        >
          {STATS.map((s) => (
            <div key={s.v} className="bg-surface/85 px-4 py-5 sm:px-6 sm:py-6">
              <div className="font-display text-xl font-semibold text-fg sm:text-3xl">
                {s.v}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted sm:text-[11px]">
                {s.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
