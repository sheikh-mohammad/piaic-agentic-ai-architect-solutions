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
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      <div className="frame">
        <div className="text-center" style={{ maxWidth: "40rem", margin: "0 auto" }}>
          <span className="eyebrow text-accent">Stay in the Scent</span>
          <h2 id="newsletter-heading" className="font-serif text-foreground text-balance" style={{ fontSize: "clamp(2.25rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}>
            The Olfactory Archaeology
            <span className="block italic text-primary">Newsletter</span>
          </h2>
          <p className="text-muted-foreground font-light" style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.7, marginTop: "1.5rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
            Monthly dispatches on new reconstructions, research breakthroughs, workshop dates,
            and the quiet science of resurrecting what was long forgotten.
          </p>

          <div style={{ marginTop: "2.5rem" }}>
            {submitted ? (
              <div
                className="mx-auto rounded-2xl border border-accent/30 bg-accent/10 text-foreground"
                style={{ maxWidth: "28rem", padding: "1.5rem" }}
                role="status"
              >
                <span className="font-serif text-accent block" style={{ fontSize: "1.875rem", marginBottom: "0.5rem" }}>✓</span>
                Thank you. Please confirm your subscription from your inbox.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row"
                style={{ gap: "0.75rem", maxWidth: "28rem", margin: "0 auto" }}
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
                  className="flex-1 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all"
                  style={{ padding: "1rem 1.25rem", fontSize: "0.875rem" }}
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary text-on-primary font-medium hover:bg-primary/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 whitespace-nowrap shadow-lg shadow-primary/10"
                  style={{ padding: "1rem 2rem" }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <p className="text-muted-foreground" style={{ fontSize: "0.75rem", marginTop: "1rem" }}>
            No spam, ever. You may unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
