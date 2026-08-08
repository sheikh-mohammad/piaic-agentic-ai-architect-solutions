'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import Magnetic from '@/components/Magnetic';
import Float from '@/components/Float';
import Sparkle from '@/components/Sparkle';
import Aurora from '@/components/Aurora';

const ThreeScene = dynamic(() => import('@/components/ThreeScene'), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const q = gsap.utils.selector(section);
    if (prefersReducedMotion()) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.set(q('.line-inner'), { yPercent: 115 })
      .set(q('.hero-fade'), { opacity: 0, y: 26 })
      .from(q('.hero-aurora > span'), {
        opacity: 0,
        scale: 0.6,
        duration: 1.6,
        stagger: 0.2,
        ease: 'power2.out',
      })
      .to(q('.line-inner'), { yPercent: 0, duration: 1.2, stagger: 0.13 }, '-=0.9')
      .to(q('.hero-fade'), { opacity: 1, y: 0, duration: 0.9, stagger: 0.09 }, '-=0.7')
      .from(q('.hero-sparkle'), { opacity: 0, scale: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(2)' }, '-=0.4');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink-dark text-white"
    >
      {/* Aurora + architectural grid */}
      <Aurora className="hero-aurora opacity-80" intensity={0.5} />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
          maskImage: 'radial-gradient(60% 60% at 50% 40%, black, transparent)',
        }}
        aria-hidden="true"
      />

      {/* Three.js sculpture */}
      <ThreeScene className="absolute inset-y-0 right-0 h-full w-full md:w-2/3 lg:w-1/2" />

      {/* Floating sparkles */}
      <Float className="hero-sparkle absolute left-[8%] top-[22%] text-gold-light" distance={22} duration={6}>
        <Sparkle className="h-5 w-5" />
      </Float>
      <Float className="hero-sparkle absolute right-[6%] top-[16%] text-violet-light" distance={18} duration={5} delay={0.4}>
        <Sparkle className="h-3.5 w-3.5" />
      </Float>
      <Float className="hero-sparkle absolute left-[42%] top-[12%] text-teal" distance={24} duration={7} delay={0.8}>
        <Sparkle className="h-6 w-6 opacity-80" />
      </Float>
      <Float className="hero-sparkle absolute right-[28%] bottom-[30%] text-coral" distance={16} duration={5.5} delay={1.1}>
        <Sparkle className="h-3 w-3" />
      </Float>

      {/* Content */}
      <div className="relative z-10 container-x flex flex-col justify-end pb-14 pt-36 sm:pb-16">
        <p className="hero-fade eyebrow mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-gold/30 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
          <Sparkle className="h-3 w-3 text-gold" />
          Architecture &amp; Interior Design Studio
        </p>

        <h1 className="font-display text-[clamp(2.9rem,9.5vw,7.5rem)] font-semibold uppercase leading-[1.02] tracking-tight">
          <span className="line">
            <span className="line-inner">We shape</span>
          </span>
          <span className="line">
            <span className="line-inner">spaces that</span>
          </span>
          <span className="line">
            <span className="line-inner text-grad-iris">endure.</span>
          </span>
        </h1>

        <div className="mt-9 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="hero-fade max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            FORMA is an award-winning studio designing timeless buildings, interiors
            and objects — where light, material and proportion meet human ritual.
          </p>

          <div className="hero-fade flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link href="#work" className="btn btn-grad group">
                View our work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
            <Link href="#contact" className="btn btn-glass">
              Start a project
            </Link>
          </div>
        </div>

        {/* Bottom meta bar */}
        <div className="hero-fade mt-14 flex items-center justify-between gap-6 border-t border-white/12 pt-6">
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-widest2 text-white/50">Karachi</span>
            <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-widest2 text-white/50">Lahore</span>
            <span className="h-1 w-1 rounded-full bg-violet" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-widest2 text-white/50">Dubai</span>
          </div>
          <a
            href="#work"
            className="group flex flex-col items-center gap-2 text-[11px] uppercase tracking-widest2 text-white/60 transition-colors hover:text-gold-light"
          >
            Scroll
            <span className="relative h-8 w-px overflow-hidden bg-white/15">
              <span className="absolute left-0 top-0 h-full w-full animate-scroll-cue bg-gradient-to-b from-gold to-violet" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
