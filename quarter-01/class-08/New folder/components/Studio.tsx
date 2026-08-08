import Image from 'next/image';
import { Compass, Leaf, Ruler } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import Parallax from '@/components/Parallax';
import Float from '@/components/Float';
import Sparkle from '@/components/Sparkle';
import Aurora from '@/components/Aurora';
import { STATS } from '@/lib/data';

const STUDIO_IMG =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80';

const FEATURES = [
  {
    icon: Compass,
    title: 'Founder-led',
    text: 'Every project is led by a principal from first sketch to final walkthrough.',
  },
  {
    icon: Leaf,
    title: 'Low-carbon',
    text: 'Material, daylight and energy choices that cost less to the planet over time.',
  },
  {
    icon: Ruler,
    title: 'Made in-house',
    text: 'Joinery, furniture and lighting designed alongside the architecture.',
  },
];

export default function Studio() {
  return (
    <section id="studio" className="relative scroll-mt-16 overflow-hidden bg-ink-soft py-24 sm:py-32">
      <Aurora className="opacity-40" intensity={0.18} />

      <div className="container-x relative">
        {/* Statement */}
        <div className="mb-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-gradient-to-r from-gold to-violet" aria-hidden="true" />
              The Studio
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-9">
            <h2 className="font-display text-2xl font-medium uppercase leading-snug sm:text-4xl lg:text-5xl">
              FORMA is built on the belief that great spaces are{' '}
              <span className="text-grad-iris">felt before they are seen</span> — composed from
              light, material and the quiet rhythm of daily life.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Founded in Karachi in 2008, our studio of architects, interior designers and
              makers works at every scale — from a single chair to a city block. Every project
              begins with the same question: <em>how will this space make you feel in ten years?</em>
            </p>
          </Reveal>
        </div>

        {/* Feature cards */}
        <div className="mb-16 grid gap-5 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <Float distance={10} duration={5.5} delay={i * 0.5}>
                <div className="glass group h-full rounded-2xl p-6 transition-colors duration-300 hover:border-gold/40">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-violet/20 text-gold-light transition-transform duration-300 group-hover:scale-110">
                    <f.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{f.text}</p>
                </div>
              </Float>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-10 sm:grid-cols-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-gold/40 sm:p-6">
                <div className="font-display text-4xl font-semibold sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} className="text-grad-gold" />
                </div>
                <p className="mt-2 text-xs uppercase tracking-widest2 text-white/50">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full-bleed parallax band */}
      <Reveal className="container-x mt-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 sm:aspect-[21/9]">
          <Parallax className="absolute -inset-y-[14%] inset-x-0">
            <Image
              src={STUDIO_IMG}
              alt="Architectural drawings and materials on the studio worktable"
              fill
              sizes="100vw"
              className="object-cover opacity-80"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-tr from-ink-dark/80 via-transparent to-violet/30" />

          <Float className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8" distance={12} duration={6}>
            <div className="glass-strong flex items-center gap-3 rounded-full px-5 py-3">
              <Sparkle className="h-4 w-4 text-gold" />
              <div>
                <p className="text-[10px] uppercase tracking-widest2 text-white/50">Established</p>
                <p className="font-display text-sm font-semibold text-white">Karachi · 2008</p>
              </div>
            </div>
          </Float>
        </div>
      </Reveal>
    </section>
  );
}
