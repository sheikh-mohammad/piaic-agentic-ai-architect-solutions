"use client";

import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (email.includes("@")) setSent(true);
        }}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <label htmlFor="helios-email" className="sr-only">
          Email address
        </label>
        <input
          id="helios-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@planet.earth"
          className="h-[52px] w-full rounded-full border border-border bg-surface px-6 font-mono text-sm text-fg placeholder:text-muted/70 transition-colors duration-200 focus:border-primary focus:outline-none"
        />
        <button type="submit" className="btn-primary h-[52px] shrink-0 cursor-pointer">
          {sent ? "You're in" : "Get early access"}
        </button>
      </form>

      <p
        aria-live="polite"
        className={`mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] transition-opacity duration-300 ${
          sent ? "opacity-100 text-secondary" : "opacity-0"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        Sealed with plasma. We&rsquo;ll be in touch.
      </p>
    </div>
  );
}
