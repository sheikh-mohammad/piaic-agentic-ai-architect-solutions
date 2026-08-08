import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Tilt from '@/components/Tilt';
import { JOURNAL } from '@/lib/data';

export default function Journal() {
  return (
    <section id="journal" className="relative scroll-mt-16 overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full -translate-x-1/2 gradient-line" aria-hidden="true" />

      <div className="container-x relative">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
          <Reveal>
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-gradient-to-r from-gold to-violet" aria-hidden="true" />
              Journal
            </p>
            <h2 className="max-w-2xl font-display text-3xl font-semibold uppercase leading-tight sm:text-5xl">
              Notes on <span className="text-grad-gold">making &amp; dwelling</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="#journal"
              className="group inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest2 text-white/70 transition-colors hover:text-gold-light"
            >
              All articles
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {JOURNAL.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <Link href="#journal" className="group block cursor-pointer">
                <div className="rounded-2xl bg-gradient-to-br from-gold via-violet to-teal p-px opacity-30 transition-opacity duration-500 group-hover:opacity-100">
                  <Tilt max={4} className="rounded-[15px]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[15px] bg-ink-soft">
                      <Image
                        src={post.src}
                        alt={post.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover opacity-80 transition-transform duration-[900ms] ease-out group-hover:scale-[1.06] group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-dark/70 to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-dark/50 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-widest2 text-gold-light backdrop-blur-md">
                        {post.tag}
                      </span>
                    </div>
                  </Tilt>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4 px-1">
                  <h3 className="font-display text-lg font-semibold uppercase leading-snug transition-colors duration-300 group-hover:text-gold-light">
                    {post.title}
                  </h3>
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-violet group-hover:text-ink-dark">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
                <p className="mt-2 px-1 text-xs uppercase tracking-widest2 text-white/45">{post.read}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
