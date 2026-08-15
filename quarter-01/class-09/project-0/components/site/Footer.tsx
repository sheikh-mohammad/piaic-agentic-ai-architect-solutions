const COMPANY = [
  { label: "Manifesto", href: "/manifesto" },
  { label: "Reactor", href: "/reactor" },
  { label: "Science", href: "/science" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Careers", href: "/careers" },
];

const CONNECT = [
  { label: "X / Twitter", href: "https://x.com/helios", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/helios", external: true },
  { label: "Contact", href: "/contact" },
];

const CONTACT = [
  { label: "hello@helios.energy", href: "mailto:hello@helios.energy", external: true },
  { label: "Press", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="eyebrow mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-sm text-fg/70 transition-colors duration-200 hover:text-primary cursor-pointer"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-20">
      <div className="wrap">
        <div className="grid gap-12 pb-20 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <a
              href="/"
              className="flex items-center gap-2 font-display text-xl font-semibold cursor-pointer"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(255,90,31,0.9)]" />
              HELIOS<span className="text-primary">®</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Fusion energy, engineered to scale. A star, contained.
            </p>
          </div>
          <FooterCol title="Company" links={COMPANY} />
          <FooterCol title="Connect" links={CONNECT} />
          <FooterCol title="Contact" links={CONTACT} />
          <FooterCol title="Legal" links={LEGAL} />
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-border py-10 sm:flex-row sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            © 2026 Helios Fusion
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Made with 60&nbsp;Hz of obsession
          </p>
        </div>
      </div>

      {/* giant outlined watermark */}
      <div aria-hidden="true" className="select-none pb-2">
        <div className="whitespace-nowrap text-center font-display text-[clamp(6rem,24vw,20rem)] font-extrabold leading-[0.8] tracking-tight text-stroke">
          HELIOS
        </div>
      </div>
    </footer>
  );
}
