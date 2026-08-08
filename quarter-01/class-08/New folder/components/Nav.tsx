'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { NAV_LINKS } from '@/lib/data';
import Sparkle from '@/components/Sparkle';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (!open) {
      gsap.set(overlay, { display: 'none' });
      return;
    }
    if (prefersReducedMotion()) {
      gsap.set(overlay, { display: 'flex' });
      return;
    }

    gsap.set(overlay, { display: 'flex' });
    const ctx = gsap.context(() => {
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'power2.out' });
      gsap.from('.menu-link-inner', {
        y: 56,
        opacity: 0,
        duration: 0.65,
        stagger: 0.06,
        ease: 'power3.out',
        delay: 0.15,
      });
      gsap.from('.menu-foot', { opacity: 0, y: 16, duration: 0.5, ease: 'power2.out', delay: 0.5 });
    }, overlay);

    return () => ctx.revert();
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[110] transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/10 bg-ink-dark/70 text-white backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent text-white'
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between">
          <Link
            href="#top"
            onClick={close}
            aria-label="FORMA Studio — back to top"
            className="group flex items-center gap-2 font-display text-xl font-bold uppercase tracking-widest text-white"
          >
            FORMA
            <Sparkle className="h-3 w-3 text-gold transition-transform duration-500 group-hover:rotate-90" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[13px] font-semibold uppercase tracking-widest2 text-white/70 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-gold to-violet transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link href="#contact" className="btn btn-grad !px-5 !py-2.5">
              Start a project
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm transition-colors hover:border-gold lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        ref={overlayRef}
        className="fixed inset-0 z-[100] hidden flex-col justify-between overflow-hidden bg-ink-dark px-6 pb-8 pt-28 text-white"
        style={{ display: 'none' }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-violet/30 blur-[80px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-gold/25 blur-[80px]" aria-hidden="true" />

        <nav className="relative flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="group border-b border-white/10 py-4"
            >
              <span className="menu-link-inner flex items-baseline gap-4 font-display text-3xl font-semibold uppercase tracking-tight transition-colors group-hover:text-gold-light">
                <span className="text-xs tracking-widest2 text-gold">{link.label.slice(0, 1)}</span>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="menu-foot relative flex items-end justify-between">
          <div>
            <p className="eyebrow mb-2">Get in touch</p>
            <a href="mailto:studio@formastudio.pk" className="text-lg text-white/80 hover:text-gold-light">
              studio@formastudio.pk
            </a>
          </div>
          <p className="text-xs uppercase tracking-widest2 text-white/40">Karachi — Dubai</p>
        </div>
      </div>
    </>
  );
}
