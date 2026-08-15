const MILESTONES = [
  {
    y: "2023",
    t: "First plasma",
    d: "REACTOR-01 reached 100M°C and held it for 40 seconds. The physics was proven.",
  },
  {
    y: "2025",
    t: "Sustained burn",
    d: "The same machine held fusion for minutes — net-positive science, engineered for repetition.",
  },
  {
    y: "2027",
    t: "First plant",
    d: "Unit 01 connects to the grid. 100 megawatts, continuous, zero carbon.",
  },
  {
    y: "2030",
    t: "A gigawatt",
    d: "Plants in series. Energy that is abundant, cheap and boring — exactly as it should be.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-36">
      <div className="wrap">
        <p data-reveal className="eyebrow mb-6">
          04 — The Roadmap
        </p>
        <h2
          data-reveal
          className="max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight"
        >
          From first plasma to grid.
        </h2>

        <div data-timeline className="relative mt-16">
          <div className="absolute bottom-2 left-4 top-2 w-px bg-border sm:left-[200px]">
            <div data-timeline-line className="absolute inset-0 bg-primary" />
          </div>

          <div className="space-y-16 sm:space-y-20">
            {MILESTONES.map((m) => (
              <div
                key={m.y}
                data-reveal
                className="relative grid gap-3 pl-12 sm:grid-cols-[200px_1fr] sm:gap-8 sm:pl-0"
              >
                <span className="absolute left-[12px] top-2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_rgba(255,90,31,0.9)] sm:left-[195px]" />
                <div className="font-display text-4xl font-semibold tracking-tight text-stroke sm:pr-8 sm:text-right">
                  {m.y}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {m.t}
                  </h3>
                  <p className="mt-2 max-w-md leading-relaxed text-fg/70">
                    {m.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
