'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

type FloatProps = {
  children: ReactNode;
  className?: string;
  /** Drift distance in px. */
  distance?: number;
  /** Seconds per cycle. */
  duration?: number;
  delay?: number;
};

/** Keeps a decorative element gently bobbing forever. */
export default function Float({
  children,
  className,
  distance = 16,
  duration = 5,
  delay = 0,
}: FloatProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const tween = gsap.to(el, {
      y: distance,
      duration,
      delay,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      tween.kill();
    };
  }, [distance, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
