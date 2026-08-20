export default function LegalBody({
  intro,
  sections,
  updated,
}: {
  intro: string;
  sections: { h: string; p: string }[];
  updated: string;
}) {
  return (
    <div className="wrap pb-24 sm:pb-36">
      <p data-reveal className="max-w-2xl text-lg leading-relaxed text-fg/70">
        {intro}
      </p>

      <div className="mt-14 grid gap-y-10 lg:grid-cols-[220px_1fr] lg:gap-x-16">
        {sections.map((s) => (
          <div key={s.h} className="lg:contents">
            <h2
              data-reveal
              className="font-display text-xl font-semibold tracking-tight lg:pt-1"
            >
              {s.h}
            </h2>
            <p
              data-reveal
              className="max-w-xl leading-relaxed text-fg/70"
            >
              {s.p}
            </p>
          </div>
        ))}
      </div>

      <p data-reveal className="eyebrow mt-16 border-t border-border pt-8">
        Last updated — {updated}
      </p>
    </div>
  );
}
