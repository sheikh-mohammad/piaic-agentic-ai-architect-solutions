const STEPS = [
  {
    n: "01",
    t: "Contain",
    d: "Superconducting magnets weave an invisible cage inside a vacuum chamber. The plasma never touches a wall.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-primary" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="6.5" strokeDasharray="2.5 3" />
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    n: "02",
    t: "Heat",
    d: "Radiowaves and neutral beams spin the gas until it becomes a star — 150 million degrees, hotter than the Sun.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-primary" aria-hidden="true">
        <path d="M2 12h4l3-7 4 14 3-8 2 4h4" />
      </svg>
    ),
  },
  {
    n: "03",
    t: "Harvest",
    d: "Neutrons escape the field and boil water. Steam spins turbines. Electrons leave the plant.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-primary" aria-hidden="true">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
];

const WHY = [
  {
    t: "No chain reaction",
    d: "Fusion cannot run away. Disrupt the magnetic field and the plasma cools and dies in seconds.",
  },
  {
    t: "No meltdown",
    d: "There is no uranium and nothing to melt. A reactor's worst accident is that it simply stops.",
  },
  {
    t: "Fuel for a millennium",
    d: "One gram of deuterium from seawater holds the energy of eight tonnes of oil.",
  },
];

export default function ScienceSteps() {
  return (
    <div className="wrap pb-24 sm:pb-36">
      <div data-reveal-group className="grid gap-6 md:grid-cols-3">
        {STEPS.map((s) => (
          <article
            key={s.n}
            className="group rounded-2xl border border-border bg-surface p-8 transition-colors duration-300 hover:border-primary/60"
          >
            <div className="flex items-start justify-between">
              {s.icon}
              <span className="font-mono text-sm text-muted">{s.n} / 03</span>
            </div>
            <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">
              {s.t}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-fg/70">{s.d}</p>
          </article>
        ))}
      </div>

      <div data-reveal className="mt-20 grid gap-10 border-t border-border pt-14 md:grid-cols-3">
        {WHY.map((w) => (
          <div key={w.t}>
            <h3 className="font-display text-lg font-semibold">{w.t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-fg/70">{w.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
