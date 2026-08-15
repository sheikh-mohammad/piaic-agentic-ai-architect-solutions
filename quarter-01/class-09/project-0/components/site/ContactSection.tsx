import ContactForm from "@/components/site/ContactForm";

const CHANNELS = [
  {
    k: "Deals & partnerships",
    v: "hello@helios.energy",
    href: "mailto:hello@helios.energy",
  },
  {
    k: "Press & media",
    v: "press@helios.energy",
    href: "mailto:press@helios.energy",
  },
  {
    k: "Careers",
    v: "careers@helios.energy",
    href: "mailto:careers@helios.energy",
  },
  {
    k: "Oxford HQ",
    v: "HELIOS Fusion · 1 Plasma Way · Oxford OX1 2JD · UK",
  },
];

const SOCIALS = [
  {
    k: "X / Twitter",
    v: "@heliosfusion",
    href: "https://x.com/helios",
  },
  {
    k: "LinkedIn",
    v: "Helios Fusion Ltd",
    href: "https://www.linkedin.com/company/helios",
  },
];

function InfoRow({
  k,
  v,
  href,
}: {
  k: string;
  v: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
        {k}
      </span>
      <span className="text-right font-display text-lg font-medium tracking-tight text-fg transition-colors duration-200 sm:text-xl">
        {v}
      </span>
    </>
  );
  return (
    <div className="flex items-center justify-between gap-6 border-t border-border py-5 first:border-t-0 sm:py-6">
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex w-full cursor-pointer items-center justify-between gap-6"
        >
          {inner}
        </a>
      ) : (
        <div className="flex w-full items-center justify-between gap-6">
          {inner}
        </div>
      )}
    </div>
  );
}

export default function ContactSection() {
  return (
    <div className="wrap pb-24 sm:pb-36">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Form column */}
        <div>
          <p data-reveal className="eyebrow mb-6">
            Start a conversation
          </p>
          <h2
            data-reveal
            className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            The switch is on.
          </h2>
          <p data-reveal className="mt-4 max-w-md leading-relaxed text-fg/70">
            Every enquiry gets a human reply within one working day. Deals,
            press, careers or the physics — ask us anything. We answer all
            of it, usually with more honesty than PR allows.
          </p>
          <div data-reveal className="mt-8">
            <ContactForm />
          </div>
          <p data-reveal className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Response time: &lt; 24 h · Real people · No automated mail
          </p>
        </div>

        {/* Channels column */}
        <div data-reveal-group>
          <div className="flex flex-col">
            {CHANNELS.map((c) => (
              <InfoRow key={c.k} {...c} />
            ))}
          </div>
          <h3 className="eyebrow mt-10 mb-2">Elsewhere</h3>
          <div className="flex flex-col">
            {SOCIALS.map((s) => (
              <InfoRow key={s.k} {...s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
