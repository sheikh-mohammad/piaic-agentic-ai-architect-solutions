import Link from "next/link";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { href: "/gallery", label: "Gallery" },
      { href: "/techniques", label: "Techniques" },
      { href: "/about", label: "Our Story" },
      { href: "/contact", label: "Commission" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "mailto:hello@kintsugiatelier.com", label: "Email Us" },
      { href: "tel:+81751234567", label: "Call Us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 cursor-pointer group mb-8">
              <svg
                className="w-6 h-6 text-gold"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.077-.78-.214-1.133M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6.75 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-[0.3em] text-foreground font-heading leading-none">
                  KINTSUGI
                </span>
                <span className="text-[7px] tracking-[0.45em] text-gold/35 uppercase mt-0.5">
                  Atelier
                </span>
              </div>
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm mb-8 font-light">
              Embracing imperfection through the ancient art of golden repair.
              Each piece tells a story of resilience, beauty, and
              transformation.
            </p>
            <p className="text-[11px] tracking-[0.2em] text-muted-foreground/40 uppercase">
              Kyoto, Japan &bull; Est. 1985
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[10px] font-semibold tracking-[0.3em] text-gold/50 uppercase mb-8">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-400 cursor-pointer font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-border/15 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/35">
            &copy; {new Date().getFullYear()} Kintsugi Atelier. All rights reserved.
          </p>
          <p className="text-[11px] tracking-[0.1em] text-muted-foreground/25 italic font-heading text-base">
            &ldquo;The world breaks everyone, and afterward, many are strong at the broken places.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
