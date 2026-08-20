const ROLES = [
  {
    t: "Staff Plasma Physicist",
    tag: "Oxford",
    type: "Full-time",
    d: "Design and drive experiments on REACTOR-01 — confinement, stability, and the numbers that will decide a century.",
  },
  {
    t: "Magnet Systems Engineer",
    tag: "Oxford",
    type: "Full-time",
    d: "Own superconducting coils at 12 tesla. Cryogenics, quench protection, and the patience of a three-month cool-down.",
  },
  {
    t: "Real-Time Controls Engineer",
    tag: "Rotterdam",
    type: "Full-time",
    d: "Keep 150 million degrees in the cage. Low-latency plasma control, written in a language the hardware respects.",
  },
  {
    t: "Power Electronics Engineer",
    tag: "Rotterdam",
    type: "Full-time",
    d: "Turn the tokamak's magnetic appetite into grid-grade power. Converters that feed a star without flickering.",
  },
  {
    t: "Facilities & Tritium Ops",
    tag: "Rotterdam",
    type: "Full-time",
    d: "Run the plant that contains the fuel cycle. Safety first, logistics always, paperwork as craft.",
  },
  {
    t: "Software — Plant Simulation",
    tag: "Remote",
    type: "Full-time",
    d: "Model the machine before we build it. Physics, optimisation, and a GPU farm that never sleeps.",
  },
];

const PERKS = [
  {
    t: "Own the outcome",
    d: "Equity in every role. We are early, the upside is real, and we structure it so it follows the work.",
  },
  {
    t: "Work where the machine is",
    d: "Oxford and Rotterdam, on the campuses with the devices. No ivory-tower engineering — the lab is a walk away.",
  },
  {
    t: "A decade of runway",
    d: "Funding locked for the build of Unit 01. You will not be watching the burn rate chart at the office.",
  },
  {
    t: "Ship it",
    d: "The physics is proven; the problem is delivery. We celebrate machines that run, not slide decks about machines.",
  },
];

export default function CareersBody() {
  return (
    <div className="wrap pb-24 sm:pb-36">
      {/* Intro */}
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <h2
          data-reveal
          className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-tight"
        >
          We are building the machine that <span className="ember-text">ends the energy problem</span>.
          There is room for one more.
        </h2>
        <p data-reveal className="self-end leading-relaxed text-fg/70">
          Two hundred physicists, engineers and believers across two
          campuses. We move at the speed of a startup with the patience of a
          physics experiment. No generic applications, no culture decks — show
          us the work.
        </p>
      </div>

      {/* Open roles */}
      <p data-reveal className="eyebrow mb-6 mt-20">
        Open roles
      </p>
      <div data-reveal-group className="border-t border-border">
        {ROLES.map((r) => (
          <a
            key={r.t}
            href="mailto:careers@helios.energy?subject=Application: REACTOR-01"
            className="group grid cursor-pointer grid-cols-1 gap-2 border-b border-border py-6 transition-colors duration-200 hover:bg-surface/40 sm:grid-cols-[1fr_auto_auto_auto] sm:items-baseline sm:gap-8 sm:px-3"
          >
            <span className="font-display text-xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary sm:text-2xl">
              {r.t}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-fg/55 sm:w-28 sm:text-right">
              {r.tag}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-secondary sm:w-24 sm:text-right">
              {r.type}
            </span>
            <span
              aria-hidden="true"
              className="hidden font-mono text-sm text-muted transition-colors duration-200 group-hover:text-primary sm:block"
            >
              apply →
            </span>
            <p className="col-span-full text-sm leading-relaxed text-fg/60">
              {r.d}
            </p>
          </a>
        ))}
      </div>

      {/* Perks */}
      <div data-reveal-group className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {PERKS.map((p) => (
          <div key={p.t} className="bg-surface p-7">
            <h3 className="font-display text-lg font-semibold">{p.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg/70">{p.d}</p>
          </div>
        ))}
      </div>

      <p data-reveal className="eyebrow mt-14">
        Don&rsquo;t see your role? Send a note to{" "}
        <a
          href="mailto:careers@helios.energy"
          className="text-secondary transition-colors duration-200 hover:text-primary"
        >
          careers@helios.energy
        </a>{" "}
        — show the work.
      </p>
    </div>
  );
}
