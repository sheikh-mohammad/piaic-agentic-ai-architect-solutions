import ContactForm from "@/components/site/ContactForm";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-28 sm:py-44">
      {/* ambient ember glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.13),transparent_65%)]"
      />

      <div className="wrap relative">
        <p data-reveal className="eyebrow mb-6">
          05 — Contact
        </p>
        <h2
          data-reveal
          className="max-w-4xl font-display text-[clamp(2.6rem,7vw,6rem)] font-bold leading-[1.0] tracking-tight"
        >
          Flip the <span className="ember-text">switch.</span>
        </h2>
        <p
          data-reveal
          className="mt-8 max-w-xl text-lg leading-relaxed text-fg/70"
        >
          We&rsquo;re hiring plasma physicists, engineers and believers. Or just
          say hello — we&rsquo;ll show you the reactor.
        </p>
        <div data-reveal className="mt-10 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
