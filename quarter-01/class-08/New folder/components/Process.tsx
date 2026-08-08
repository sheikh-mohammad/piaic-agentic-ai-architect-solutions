import Reveal from '@/components/Reveal';
import Float from '@/components/Float';
import Sparkle from '@/components/Sparkle';
import { PROCESS_STEPS } from '@/lib/data';

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-16 overflow-hidden bg-ink-soft py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-violet/20 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-teal/15 blur-[100px]" aria-hidden="true" />

      <div className="container-x relative">
        <Reveal className="mb-16">
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-gradient-to-r from-gold to-violet" aria-hidden="true" />
            How we work
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-semibold uppercase leading-tight sm:text-5xl">
            Four moves, <span className="text-grad-iris">one obsession</span>
          </h2>
        </Reveal>

        {/* Gradient connecting line */}
        <div className="relative mb-12 hidden h-px bg-gradient-to-r from-gold via-violet to-teal lg:block" aria-hidden="true" />

        <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.1}>
              <li className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-glow sm:p-8">
                <Float distance={7} duration={5.5} delay={i * 0.6}>
                  <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold via-violet to-teal font-display text-sm font-bold text-ink-dark">
                    {step.index}
                  </span>
                </Float>
                <Sparkle className="absolute right-5 top-5 h-3 w-3 text-gold/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <h3 className="font-display text-2xl font-semibold uppercase text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
