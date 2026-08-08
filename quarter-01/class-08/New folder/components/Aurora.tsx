'use client';

import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

type AuroraProps = {
  className?: string;
  /** Blob palette tokens, in order. */
  blobs?: { color: string; top: string; left: string; size: string }[];
  /** Intensity = base opacity (0.1–0.5). */
  intensity?: number;
};

const DEFAULT_BLOBS = [
  { color: 'bg-gold/70', top: '-10%', left: '-5%', size: 'w-[46vw] h-[46vw]' },
  { color: 'bg-violet/70', top: '30%', left: '55%', size: 'w-[42vw] h-[42vw]' },
  { color: 'bg-teal/60', top: '55%', left: '5%', size: 'w-[38vw] h-[38vw]' },
  { color: 'bg-coral/50', top: '5%', left: '65%', size: 'w-[30vw] h-[30vw]' },
];

/** Drifting aurora mesh — blurred gradient blobs that wander slowly. */
export default function Aurora({
  className = '',
  blobs = DEFAULT_BLOBS,
  intensity = 0.4,
}: AuroraProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (prefersReducedMotion()) return;

    const els = Array.from(wrap.querySelectorAll<HTMLElement>('[data-aurora]'));
    const ctx = gsap.context(() => {
      els.forEach((el, i) => {
        gsap.to(el, {
          x: gsap.utils.random(-120, 120),
          y: gsap.utils.random(-90, 90),
          scale: gsap.utils.random(1.05, 1.35),
          duration: gsap.utils.random(14, 22),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.8,
        });
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {blobs.map((b, i) => (
        <span
          key={i}
          data-aurora
          className={`aurora-blob ${b.color} ${b.size}`}
          style={{ top: b.top, left: b.left, opacity: intensity }}
        />
      ))}
    </div>
  );
}
