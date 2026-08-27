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
      <div className="frame section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5" style={{ gap: "2.5rem" }}>
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3" style={{ marginBottom: "1.5rem" }} aria-label="Aroma Antiquaria Home">
              <span
                className="flex items-center justify-center rounded-full border border-accent/60 text-accent font-serif text-xl group-hover:bg-accent group-hover:text-on-accent transition-colors"
                style={{ width: "2.5rem", height: "2.5rem" }}
                aria-hidden="true"
              >
                A
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-lg">Aroma Antiquaria</span>
                <span className="block text-on-secondary/60" style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.22em" }}>
                  Archaeology of Scent
                </span>
              </span>
            </Link>
            <p className="text-on-secondary/70 font-light" style={{ fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "24rem" }}>
              A digital museum and research archive recovering the fragrances of the ancient world
              through molecular archaeology, textual analysis, and the craft of perfumery.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-accent" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "1.25rem" }}>{col.title}</h3>
              <ul className="flex flex-col" style={{ gap: "0.75rem" }} role="list">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-on-secondary/80 hover:text-on-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                      style={{ fontSize: "0.875rem" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between" style={{ marginTop: "3.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(246,239,230,0.1)", gap: "1.5rem" }}>
          <p className="text-on-secondary/50" style={{ fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Aroma Antiquaria. All rights reserved.
          </p>
          <div className="flex items-center" style={{ gap: "1.5rem" }}>
            <Link href="/contact" className="text-on-secondary/60 hover:text-on-secondary transition-colors" style={{ fontSize: "0.75rem" }}>
              Contact
            </Link>
            <Link href="/" className="text-on-secondary/60 hover:text-on-secondary transition-colors" style={{ fontSize: "0.75rem" }}>
              Privacy
            </Link>
            <Link href="/" className="text-on-secondary/60 hover:text-on-secondary transition-colors" style={{ fontSize: "0.75rem" }}>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
