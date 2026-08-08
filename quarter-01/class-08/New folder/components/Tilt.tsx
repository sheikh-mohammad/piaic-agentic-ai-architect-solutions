'use client';

import { useRef, type ReactNode, type MouseEvent } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

type TiltProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees. */
  max?: number;
};

/** 3D tilt that follows the cursor. Auto-disabled on touch / reduced motion. */
export default function Tilt({ children, className, max = 6 }: TiltProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(el, {
      rotateY: px * max,
      rotateX: -py * max,
      transformPerspective: 900,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.8, ease: 'elastic.out(1, 0.45)' });
  };

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className ?? ''}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}
