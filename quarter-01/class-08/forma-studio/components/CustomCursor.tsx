'use client';

import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

/**
 * Iridescent glow trail: a gold dot + trailing ring that follows the
 * pointer with eased lag, expanding over interactive elements. Native
 * cursor stays visible (accessibility); this adds, never replaces.
 * Hidden for touch devices and reduced-motion users via CSS.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    if (prefersReducedMotion()) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power2.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power2.out' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.38, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.38, ease: 'power3.out' });

    // Center the dot/ring on the cursor (xPercent/yPercent compose with the x/y tween).
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    let visible = false;
    const onMove = (e: PointerEvent) => {
      if (!visible) {
        visible = true;
        gsap.set([dot, ring], { opacity: 1 });
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);

      // Expand over interactive targets
      const target = (e.target as HTMLElement).closest(
        'a, button, [role="button"], select, textarea, input, [data-cursor]'
      );
      ring.classList.toggle('is-hovering', !!target);
    };

    const onLeave = () => {
      visible = false;
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      gsap.set([dot, ring], { opacity: 0 });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot opacity-0" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring opacity-0" aria-hidden="true" />
    </>
  );
}
