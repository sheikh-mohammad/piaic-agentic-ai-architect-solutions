import Link from 'next/link';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT, NAV_LINKS } from '@/lib/data';
import Sparkle from '@/components/Sparkle';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-dark text-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[70%] -translate-x-1/2 rounded-full bg-violet/15 blur-[110px]" aria-hidden="true" />

      <div className="container-x relative pt-20 sm:pt-24">
        {/* Giant iridescent wordmark */}
        <div className="select-none overflow-hidden border-b border-white/10 pb-8">
          <p
            className="text-grad-gold text-center font-display text-[clamp(3.5rem,16vw,13rem)] font-bold uppercase leading-none tracking-tight"
            aria-hidden="true"
          >
            FORMA
          </p>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="eyebrow mb-5">Studio</h3>
            <p className="text-sm leading-relaxed text-white/60">
              An architecture and interior design practice making timeless, human spaces since
              2008.
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Sitemap</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold-light"
                  >
                    <span className="h-px w-0 bg-gradient-to-r from-gold to-violet transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Contact</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {CONTACT.address}
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 transition-colors hover:text-gold-light">
                  <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 transition-colors hover:text-gold-light">
                  <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Connect</h3>
            <ul className="flex flex-wrap gap-2.5">
              {CONTACT.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:border-gold/50 hover:text-gold-light"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-xs uppercase tracking-widest2 text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} FORMA Studio. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Karachi <Sparkle className="h-2.5 w-2.5 text-gold" /> Lahore
            <Sparkle className="h-2.5 w-2.5 text-violet" /> Dubai
          </p>
          <Link
            href="#top"
            className="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-gold-light"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-violet group-hover:text-ink-dark">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
