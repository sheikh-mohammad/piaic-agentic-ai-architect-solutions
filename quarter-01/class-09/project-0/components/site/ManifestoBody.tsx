const STATEMENT =
  "Every civilisation is defined by the energy it masters.";

const VALUES = [
  {
    t: "Boring is beautiful",
    d: "Energy should be a utility, not a drama. Fusion is the most boring revolution in history — exactly as it should be.",
  },
  {
    t: "Contain, don't exploit",
    d: "We borrow the Sun's furnace, then put it back in a box. We respect the scale we are operating at.",
  },
  {
    t: "Ship it",
    d: "The physics is proven. The problem is engineering — and engineering is what we do.",
  },
];

export default function ManifestoBody() {
  return (
    <div className="wrap pb-24 sm:pb-36">
      <h2
        data-manifesto
        className="max-w-5xl font-display text-[clamp(1.8rem,4.6vw,4rem)] font-semibold leading-[1.08] tracking-tight"
      >
        {STATEMENT.split(" ").map((word, i) => (
          <span key={i} className="word inline-block">
            {word}
            &nbsp;
          </span>
        ))}
      </h2>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6 text-lg leading-relaxed text-fg/70">
          <p>
            For a century we burned the past. Coal and gas are stored
            sunlight, and we have been spending the inheritance — carbon by
            carbon, into an atmosphere we are still learning to repair.
          </p>
          <p>
            HELIOS builds the engine that powers every star. Fusion presses
            two atoms of hydrogen into helium and releases the difference as
            light. No carbon. No meltdown. No fuel supply to fight over.
          </p>
          <p>
            Not a promise of clean energy. The operating manual — built,
            running, and scaling.
          </p>
        </div>

        <div data-reveal-group className="flex flex-col gap-px rounded-2xl border border-border bg-border">
          {VALUES.map((v) => (
            <article key={v.t} className="bg-bg p-7">
              <h3 className="font-display text-xl font-semibold">{v.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg/70">
                {v.d}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
