const PRINCIPLES = [
  {
    n: "01",
    t: "Build in public",
    d: "Every milestone ships with the data behind it. Skeptics get numbers, not adjectives — and the numbers have held up.",
  },
  {
    n: "02",
    t: "Reuse before build",
    d: "If it flew on REACTOR-01, it flies on Unit 01. Each plant inherits the lessons and the hardware of the last.",
  },
  {
    n: "03",
    t: "Boring where it counts",
    d: "The reactor is exotic; the balance of plant is standard. We keep the risk exactly where it earns its keep.",
  },
  {
    n: "04",
    t: "Units before science",
    d: "Every experiment ends with one question: does this get us closer to a sold megawatt?",
  },
];

export default function RoadmapPrinciples() {
  return (
    <section className="border-t border-border py-24 sm:py-36">
      <div className="wrap grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
        {/* Sticky lead */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p data-reveal className="eyebrow mb-8">
            How we ship
          </p>
          <h2
            data-reveal
            className="font-display text-[clamp(2.2rem,5.2vw,4.5rem)] font-bold leading-[1.02] tracking-tight"
          >
            Dates are <span className="ember-text">promises.</span>
          </h2>
          <p data-reveal className="mt-8 max-w-md text-lg leading-relaxed text-fg/70">
            Fusion has been &ldquo;thirty years away&rdquo; for sixty years.
            The only way to break that habit is to publish a calendar and
            then make it true. This is how we intend to.
          </p>
        </div>

        {/* Principles */}
        <div data-reveal-group className="flex flex-col">
          {PRINCIPLES.map((p) => (
            <div
              key={p.n}
              className="border-t border-border py-8 first:border-t-0 sm:py-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-primary">{p.n}</span>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {p.t}
                </h3>
              </div>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-fg/70">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
