const ITEMS = [
  "Magnetic confinement",
  "Zero carbon",
  "150M °C",
  "Seawater fuel",
  "Tokamak 01",
  "Clean base load",
  "No meltdown",
  "Scales by the gigawatt",
];

function Diamond() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      aria-hidden="true"
      className="shrink-0 text-primary"
    >
      <rect
        x="3"
        y="3"
        width="4"
        height="4"
        transform="rotate(45 5 5)"
        fill="currentColor"
      />
    </svg>
  );
}

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.22em] text-muted"
        >
          {item}
          <Diamond />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-border bg-surface">
      <div className="marquee-track flex w-max py-5">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
