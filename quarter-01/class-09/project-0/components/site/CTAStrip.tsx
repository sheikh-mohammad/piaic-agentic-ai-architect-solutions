export default function CTAStrip() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.12),transparent_65%)]"
      />
      <div className="wrap relative">
        <h2
          data-reveal
          className="max-w-3xl font-display text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.0] tracking-tight"
        >
          Flip the <span className="ember-text">switch.</span>
        </h2>
        <p data-reveal className="mt-8 max-w-xl text-lg leading-relaxed text-fg/70">
          We&rsquo;re hiring plasma physicists, engineers and believers. Or
          just say hello.
        </p>
        <a data-reveal href="/contact" className="btn-primary mt-10 inline-flex cursor-pointer">
          Get early access
        </a>
      </div>
    </section>
  );
}
