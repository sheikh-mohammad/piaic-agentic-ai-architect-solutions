import { MARQUEE_ITEMS } from '@/lib/data';
import Sparkle from '@/components/Sparkle';

/**
 * Iridescent capability band — animated gradient background with
 * seamless -50% marquee loop.
 */
export default function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      className="marquee-track relative overflow-hidden border-y border-white/10 py-4 text-white"
      aria-label="Capabilities"
    >
      {/* animated gradient behind the band */}
      <div
        className="absolute inset-0 animate-shimmer opacity-80"
        style={{
          backgroundImage:
            'linear-gradient(100deg, #F5B841 0%, #A78BFA 30%, #2DD4BF 55%, #FB7185 80%, #F5B841 100%)',
          backgroundSize: '220% auto',
        }}
        aria-hidden="true"
      />
      <div className="relative flex w-max animate-marquee items-center">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 pr-10 whitespace-nowrap"
            aria-hidden={i >= MARQUEE_ITEMS.length}
          >
            <span className="font-display text-sm font-semibold uppercase tracking-widest2 text-ink-dark">
              {item}
            </span>
            <Sparkle className="h-3.5 w-3.5 text-ink-dark/70" />
          </span>
        ))}
      </div>
    </section>
  );
}
