import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Tilt from '@/components/Tilt';
import { PROJECTS, type Project } from '@/lib/data';

function ProjectCard({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <Link href="#work" className={`group block cursor-pointer ${className}`}>
      {/* Gradient hairline border that lights up on hover */}
      <div className="rounded-2xl bg-gradient-to-br from-gold via-violet to-teal p-px opacity-30 transition-opacity duration-500 group-hover:opacity-100">
        <Tilt max={5} className="rounded-[15px]">
          <div
            className={`relative overflow-hidden rounded-[15px] bg-ink-soft ${
              project.wide ? 'aspect-[16/10]' : 'aspect-[4/5]'
            }`}
          >
            <Image
              src={project.src}
              alt={project.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover opacity-80 transition-transform duration-[900ms] ease-out group-hover:scale-[1.07] group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-dark via-ink-dark/20 to-transparent" />

            {/* Index badge */}
            <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-dark/50 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-widest2 text-gold-light backdrop-blur-md">
              {project.index}
            </span>

            {/* View pill */}
            <span className="absolute right-4 top-4 flex translate-y-2 items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-violet px-4 py-2 text-[11px] font-bold uppercase tracking-widest2 text-ink-dark opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              View
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>

            {/* Bottom meta on image */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <p className="text-[11px] uppercase tracking-widest2 text-white/60">
                {project.location}
              </p>
              <span className="font-display text-sm font-semibold text-gold-light">{project.year}</span>
            </div>
          </div>
        </Tilt>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4 px-1">
        <h3 className="font-display text-lg font-semibold uppercase tracking-wide transition-colors duration-300 sm:text-xl">
          <span className="bg-gradient-to-r from-white to-white bg-[length:100%_1px] bg-no-repeat bg-left-bottom pb-1 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-violet group-hover:bg-[length:100%_2px]">
            {project.title}
          </span>
        </h3>
        <span className="mt-0.5 whitespace-nowrap text-xs uppercase tracking-widest2 text-white/45">
          {project.category}
        </span>
      </div>
    </Link>
  );
}

export default function Works() {
  return (
    <section id="work" className="relative scroll-mt-16 overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full -translate-x-1/2 gradient-line" aria-hidden="true" />

      <div className="container-x relative">
        {/* Section header */}
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <Reveal>
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-gradient-to-r from-gold to-violet" aria-hidden="true" />
              Selected Works
            </p>
            <h2 className="max-w-3xl font-display text-3xl font-semibold uppercase leading-tight sm:text-5xl">
              Projects that <span className="text-grad-iris">hold their ground</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest2 text-white/70 transition-colors hover:text-gold-light"
            >
              Full portfolio
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-14 sm:gap-x-8">
          {PROJECTS.map((project, i) => {
            const isLast = i === PROJECTS.length - 1;
            const colCls = isLast
              ? 'col-span-12 md:col-span-6 md:col-start-4'
              : project.wide
                ? 'col-span-12 md:col-span-7 md:mt-24'
                : 'col-span-12 md:col-span-5';

            return (
              <Reveal key={project.index} delay={project.wide ? 0.12 : 0} className={colCls}>
                <ProjectCard project={project} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
