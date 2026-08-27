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
    <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="newsletter-heading">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow text-accent block mb-6">Stay in the Scent</span>
          <h2 id="newsletter-heading" className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            The Olfactory Archaeology
            <span className="block italic text-primary">Newsletter</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-lg mx-auto">
            Monthly dispatches on new reconstructions, research breakthroughs, workshop dates,
            and the quiet science of resurrecting what was long forgotten.
          </p>

          <div className="mt-10">
            {submitted ? (
              <div
                className="mx-auto max-w-md p-6 rounded-2xl border border-accent/30 bg-accent/{10} text-foreground"
                role="status"
              >
                <span className="font-serif text-3xl block mb-2 text-accent">✓</span>
                Thank you. Please confirm your subscription from your inbox.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
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
                  className="flex-1 px-5 py-4 rounded-full border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full bg-primary text-on-primary font-medium hover:bg-primary/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 whitespace-nowrap shadow-lg shadow-primary/10"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            No spam, ever. You may unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}