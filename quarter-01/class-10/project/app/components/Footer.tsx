import Link from "next/link";

const footerNavigation = {
  Explore: [
    { name: "Digital Archive", href: "/archive" },
    { name: "Reconstructions", href: "/reconstructions" },
    { name: "Research Journal", href: "/journal" },
    { name: "Methodology", href: "/methodology" },
  ],
  Research: [
    { name: "Molecular Analysis", href: "/research/molecular" },
    { name: "Textual Sources", href: "/research/textual" },
    { name: "Archaeological Context", href: "/research/archaeological" },
    { name: "Publications", href: "/research/publications" },
  ],
  Visit: [
    { name: "Exhibitions", href: "/visit/exhibitions" },
    { name: "Workshops", href: "/visit/workshops" },
    { name: "Olfactory Tours", href: "/visit/tours" },
    { name: "Plan Your Visit", href: "/visit/plan" },
  ],
  Connect: [
    { name: "Newsletter", href: "/newsletter" },
    { name: "Collaborate", href: "/collaborate" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )},
  { name: "Twitter", href: "https://twitter.com", icon: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )},
  { name: "GitHub", href: "https://github.com", icon: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )},
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-xl font-serif font-medium tracking-tight mb-6" aria-label="Aroma Antiquaria Home">
              <span className="text-primary" aria-hidden="true">⬡</span>
              <span>Aroma Antiquaria</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A digital museum and archive dedicated to the reconstruction of historical perfumes through archaeological evidence, ancient texts, and molecular analysis.
            </p>
          </div>

          {Object.entries(footerNavigation).map(([category, links]) => (
            <nav key={category} aria-label={category}>
              <h3 className="font-medium text-sm tracking-wide uppercase text-foreground mb-4">{category}</h3>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aroma Antiquaria. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <nav aria-label="Legal">
                <ul className="flex items-center gap-6" role="list">
                  <li>
                    <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Accessibility
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center gap-4" aria-label="Social links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full p-1"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}