import Reveal from '@/components/Reveal';
import Float from '@/components/Float';
import Aurora from '@/components/Aurora';

function QuoteMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 36" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="qm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5B841" />
          <stop offset="50%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#2DD4BF" />
        </linearGradient>
      </defs>
      <path
        d="M0 0h14v14c0 10-4 18-14 22V20c4-2 6-6 6-12H0V0Zm26 0h14v14c0 10-4 18-14 22V20c4-2 6-6 6-12H26V0Z"
        fill="url(#qm)"
      />
    </svg>
  );
}

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <Aurora className="opacity-40" intensity={0.2} />
      <div className="container-x relative">
        <Reveal>
          <div className="glass-strong relative mx-auto max-w-4xl rounded-3xl p-8 text-center sm:p-14">
            <Float className="absolute -top-8 left-6 sm:-left-6" distance={14} duration={6}>
              <QuoteMark className="h-16 w-16 sm:h-24 sm:w-24" />
            </Float>
            <Float className="absolute -bottom-8 right-6 sm:-right-6" distance={12} duration={7} delay={0.6}>
              <QuoteMark className="h-12 w-12 rotate-180 opacity-60 sm:h-16 sm:w-16" />
            </Float>

            <blockquote>
              <p className="font-display text-2xl font-medium leading-snug text-white sm:text-4xl lg:text-[2.6rem]">
                &ldquo;Every room FORMA touched feels inevitable — as if it could never have been
                any other way. That is the rarest gift a studio can give a home.&rdquo;
              </p>
              <footer className="mt-10">
                <p className="font-body text-sm font-semibold uppercase tracking-widest2 text-grad-gold">
                  Ayesha &amp; Omar Sheikh
                </p>
                <p className="mt-1 text-sm text-white/50">The Halo House, Lahore</p>
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
