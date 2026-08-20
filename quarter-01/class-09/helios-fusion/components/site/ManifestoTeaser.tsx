import Link from "next/link";

const STATEMENT =
  "Every civilisation is defined by the energy it masters.";

export default function ManifestoTeaser() {
  return (
    <section className="border-t border-border py-24 sm:py-36">
      <div className="wrap">
        <p data-reveal className="eyebrow mb-10">
          01 — Manifesto
        </p>
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
        <Link data-reveal href="/manifesto" className="btn-ghost mt-10 inline-flex cursor-pointer">
          Read the manifesto
        </Link>
      </div>
    </section>
  );
}
