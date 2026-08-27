"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden section" aria-labelledby="newsletter-heading">
      {/* Decorative borders */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px divider-accent" />
        <div className="absolute bottom-0 left-0 right-0 h-px divider-accent" />
      </div>

      <div className="frame">
        <div className="text-center" style={{ maxWidth: "36rem", margin: "0 auto" }}>
          <span className="eyebrow">Stay in the Scent</span>
          <h2 id="newsletter-heading" className="font-serif text-foreground text-balance" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            The Olfactory Archaeology
            <span className="block italic text-primary">Newsletter</span>
          </h2>
          <p className="text-muted-foreground font-light" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)", lineHeight: 1.7, marginTop: "1.25rem", maxWidth: "28rem", marginLeft: "auto", marginRight: "auto" }}>
            Monthly dispatches on new reconstructions, research breakthroughs, workshop dates,
            and the quiet science of resurrecting what was long forgotten.
          </p>

          <div style={{ marginTop: "2rem" }}>
            {submitted ? (
              <div
                className="mx-auto card text-center"
                style={{ maxWidth: "24rem", padding: "2rem" }}
                role="status"
              >
                <span className="font-serif text-accent block" style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>✓</span>
                <p className="text-foreground" style={{ fontSize: "0.95rem" }}>Thank you. Please confirm your subscription from your inbox.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row"
                style={{ gap: "0.625rem", maxWidth: "26rem", margin: "0 auto" }}
                aria-label="Newsletter signup"
              >
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300"
                  style={{ padding: "0.875rem 1.25rem", fontSize: "0.875rem" }}
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary text-on-primary font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_4px_20px_rgba(110,27,27,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 whitespace-nowrap"
                  style={{ padding: "0.875rem 1.75rem" }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <p className="text-muted-foreground/60" style={{ fontSize: "0.7rem", marginTop: "0.875rem" }}>
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
