import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { SERVICES } from '@/lib/data';

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-16 overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full -translate-x-1/2 gradient-line" aria-hidden="true" />

      <div className="container-x relative">
        <Reveal className="mb-14 sm:mb-16">
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-gradient-to-r from-gold to-violet" aria-hidden="true" />
            What we do
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-semibold uppercase leading-tight sm:text-5xl">
            One studio, <span className="text-grad-gold">every scale</span>
          </h2>
        </Reveal>

        <div className="border-t border-white/10">
          {SERVICES.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.06}>
              <Link
                href="#contact"
                className="group grid cursor-pointer grid-cols-12 items-baseline gap-4 border-b border-white/10 py-8 transition-all duration-300 hover:border-transparent hover:bg-white/[0.04] sm:py-10"
              >
                <span className="col-span-2 font-display text-sm text-transparent sm:col-span-1 sm:text-base"
                  style={{ WebkitTextStroke: '1px rgba(245,184,65,0.9)' }}
                >
                  {service.index}
                </span>
                <h3 className="col-span-9 font-display text-xl font-semibold uppercase tracking-wide transition-all duration-300 sm:col-span-4 sm:text-3xl">
                  <span className="bg-gradient-to-r from-white to-white bg-[length:0_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-violet group-hover:bg-[length:100%_2px]">
                    {service.title}
                  </span>
                </h3>
                <p className="col-span-10 col-start-3 text-sm leading-relaxed text-white/55 transition-colors duration-300 group-hover:text-white/75 sm:col-span-5 sm:col-start-auto sm:text-base">
                  {service.description}
                </p>
                <span className="col-span-2 hidden justify-end sm:col-span-2 sm:flex">
                  <span className="flex h-11 w-11 -translate-y-1 items-center justify-center rounded-full border border-white/20 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-violet group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
