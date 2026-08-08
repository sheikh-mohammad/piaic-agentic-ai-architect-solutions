'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

/** Brand reveal: FORMA letters slide in, a counter runs to 100, then a curtain lifts. */
export default function Preloader() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (prefersReducedMotion()) {
      setDone(true);
      return;
    }

    const counter = { v: 0 };
    const numRef = root.querySelector<HTMLElement>('[data-counter]');
    const tl = gsap.timeline();

    tl.from('.pre-loader-letter', {
      yPercent: 120,
      opacity: 0,
      duration: 0.7,
      stagger: 0.05,
      ease: 'power3.out',
    })
      .to(
        counter,
        {
          v: 100,
          duration: 1.4,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (numRef) numRef.textContent = String(Math.round(counter.v)).padStart(3, '0');
          },
        },
        '-=0.3'
      )
      .to('.pre-loader-line', { scaleX: 1, duration: 1.4, ease: 'power2.inOut' }, '<')
      .to('.pre-loader-body', { opacity: 0, y: -16, duration: 0.4, ease: 'power2.in' }, '+=0.1')
      .to(root, {
        yPercent: -100,
        duration: 0.8,
        ease: 'expo.inOut',
        onComplete: () => setDone(true),
      });

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[300] flex items-center justify-center overflow-hidden bg-ink-dark"
      role="status"
      aria-label="Loading"
    >
      <div className="pre-loader-body flex flex-col items-center">
        <div className="flex overflow-hidden">
          {'FORMA'.split('').map((ch, i) => (
            <span
              key={i}
              className="pre-loader-letter font-display text-4xl font-bold uppercase tracking-[0.3em] text-white sm:text-6xl"
            >
              {ch}
            </span>
          ))}
        </div>
        <div className="mt-6 h-px w-52 overflow-hidden bg-white/10">
          <div className="pre-loader-line h-full w-full origin-left scale-x-0 bg-gradient-to-r from-gold via-violet to-teal" />
        </div>
        <p className="mt-4 font-body text-xs tracking-widest2 text-white/50">
          Architecture &amp; Interior Design
        </p>
      </div>
      <p
        data-counter
        className="absolute bottom-8 right-8 font-display text-4xl font-semibold text-white/20 sm:text-6xl"
      >
        000
      </p>
    </div>
  );
}
