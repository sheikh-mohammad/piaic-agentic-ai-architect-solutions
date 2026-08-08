'use client';

import { useRef, type ReactNode, type MouseEvent } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** Max distance the element can travel toward the cursor, in px. */
  strength?: number;
};

/**
 * Wraps a button/link so it gently leans toward the cursor.
 * Disabled automatically for touch devices and reduced-motion users.
 */
export default function Magnetic({ children, className, strength = 18 }: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    gsap.to(el, {
      x: (x / r.width) * strength,
      y: (y / r.height) * strength,
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  };

  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}
