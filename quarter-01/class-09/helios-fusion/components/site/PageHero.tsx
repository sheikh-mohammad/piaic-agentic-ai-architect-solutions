export default function PageHero({
  index,
  eyebrow,
  title,
  sub,
}: {
  index: string;
  eyebrow: string;
  title: string[];
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[60vmin] w-[60vmin] rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.12),transparent_65%)]"
      />
      <div className="wrap relative">
        <p data-hero-fade className="eyebrow mb-8 flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(255,90,31,0.9)]" />
          {index} — {eyebrow}
        </p>
        <h1 className="font-display text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[1.0] tracking-tight">
          {title.map((line, i) => (
            <span key={i} data-hero-line className="line-mask">
              <span className="line-inner">{line}</span>
            </span>
          ))}
        </h1>
        {sub && (
          <p data-hero-fade className="mt-8 max-w-xl text-lg leading-relaxed text-fg/70">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
