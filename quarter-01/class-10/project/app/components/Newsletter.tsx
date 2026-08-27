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
    <section className="py-24 md:py-32 border-b border-border" aria-labelledby="newsletter-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-mono uppercase tracking-widest text-primary mb-4 block">
            Stay in the Scent
          </span>
          <h2 id="newsletter-heading" className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6 text-balance">
            Join the Olfactory Archaeology Newsletter
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            Monthly dispatches on new reconstructions, research findings, workshop dates, and the science
            of resurrecting lost scents.
          </p>

          {submitted ? (
            <div
              className="mx-auto max-w-md p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
              role="status"
            >
              ✦ Thank you! Please check your inbox to confirm your subscription.
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
                placeholder="you@example.com"
                className="flex-1 px-4 py-4 rounded-md border border-border bg-card text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-md bg-primary text-on-primary font-medium hover:bg-primary/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            No spam. Unsubscribe anytime. We respect your olfactory privacy.
          </p>
        </div>
      </div>
    </section>
  );
}