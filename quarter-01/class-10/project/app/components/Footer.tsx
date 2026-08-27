import Link from "next/link";

const columns = [
  {
    title: "Explore",
    links: [
      { name: "Digital Archive", href: "/archive" },
      { name: "Reconstructions", href: "/reconstructions" },
      { name: "Methodology", href: "/methodology" },
      { name: "Ingredient Atlas", href: "/ingredients" },
    ],
  },
  {
    title: "Research",
    links: [
      { name: "Research Journal", href: "/journal" },
      { name: "Molecular Analysis", href: "/journal" },
      { name: "Textual Sources", href: "/methodology" },
      { name: "Publications", href: "/journal" },
    ],
  },
  {
    title: "Visit",
    links: [
      { name: "Plan Your Visit", href: "/visit" },
      { name: "Exhibitions", href: "/visit" },
      { name: "Workshops", href: "/visit" },
      { name: "Olfactory Tours", href: "/visit" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-on-secondary" role="contentinfo">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3 mb-6" aria-label="Aroma Antiquaria Home">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/60 text-accent font-serif text-xl group-hover:bg-accent group-hover:text-on-accent transition-colors" aria-hidden="true">
                A
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-lg">Aroma Antiquaria</span>
                <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-on-secondary/60">
                  Archaeology of Scent
                </span>
              </span>
            </Link>
            <p className="text-sm text-on-secondary/70 leading-relaxed max-w-sm font-light">
              A digital museum and research archive recovering the fragrances of the ancient world
              through molecular archaeology, textual analysis, and the craft of perfumery.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-accent mb-5">{col.title}</h3>
              <ul className="space-y-3" role="list">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-on-secondary/80 hover:text-on-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-on-secondary/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-on-secondary/50">
            © {new Date().getFullYear()} Aroma Antiquaria. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs text-on-secondary/60 hover:text-on-secondary transition-colors">
              Contact
            </Link>
            <Link href="/" className="text-xs text-on-secondary/60 hover:text-on-secondary transition-colors">
              Privacy
            </Link>
            <Link href="/" className="text-xs text-on-secondary/60 hover:text-on-secondary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}