import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-20">
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient glow orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="ambient-orb ambient-orb-gold w-[700px] h-[700px] top-[15%] left-[10%] animate-float" />
          <div className="ambient-orb ambient-orb-gold w-[600px] h-[600px] bottom-[15%] right-[5%] animate-float" style={{ animationDelay: "3s" }} />
          <div className="ambient-orb ambient-orb-gold w-[900px] h-[900px] top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.6 }} />
        </div>

        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.4) 1px, transparent 0)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
          {/* Badge */}
          <div className="animate-fade-in-up">
            <div className="badge-gold mx-auto mb-12">
              <div className="gold-dot" />
              <span>Ancient Japanese Art</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up animate-delay-100 text-5xl sm:text-7xl lg:text-[8rem] font-light mb-12 leading-[0.88] font-heading tracking-tight">
            <span className="block text-foreground/85">The Art of</span>
            <span className="block text-gradient-gold gold-glow mt-4 font-medium italic">
              Golden Repair
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up animate-delay-200 max-w-xl mx-auto text-base sm:text-lg text-muted-foreground/70 mb-16 leading-relaxed font-light">
            Embrace the beauty of imperfection. Kintsugi transforms broken
            pottery into extraordinary works of art, celebrating resilience
            and the wisdom of scars.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/gallery" className="btn-gold cursor-pointer">
              <span>Explore Gallery</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/techniques" className="btn-outline-gold cursor-pointer">
              Discover Techniques
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-600">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[8px] tracking-[0.5em] text-muted-foreground/25 uppercase">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-gold/25 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── Philosophy ───────────────────────────────────── */}
      <section className="py-36 sm:py-44 relative section-luxury">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-24">
            <span className="text-[10px] font-semibold tracking-[0.4em] text-gold/45 uppercase block mb-6">
              Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-10 font-heading">
              <span className="text-gradient-gold italic">Wabi-Sabi</span>{" "}
              Philosophy
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground/60 leading-relaxed text-lg font-light">
              Rooted in the Japanese philosophy of embracing imperfection,
              Kintsugi teaches us that breakage and repair are part of the
              history of an object, rather than something to disguise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Acceptance",
                description:
                  "Honor the cracks and imperfections as part of the object&apos;s story, not flaws to be hidden.",
                number: "01",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8M12 8v8" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Transformation",
                description:
                  "Turn damage into beauty with precious metals, creating something more valuable than before.",
                number: "02",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
              {
                title: "Resilience",
                description:
                  "Celebrate the strength to be broken and the courage to be made whole again.",
                number: "03",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card group p-10 rounded-2xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-10">
                  <span className="text-gold/15 font-heading text-6xl font-light">
                    {item.number}
                  </span>
                  <span className="text-gold/20 group-hover:text-gold/45 transition-colors duration-600">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-medium mb-5 text-foreground group-hover:text-gold transition-colors duration-600 font-heading">
                  {item.title}
                </h3>
                <p className="text-muted-foreground/50 leading-relaxed text-base font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Story ────────────────────────────────────────── */}
      <section className="py-36 sm:py-44 relative">
        <div className="absolute inset-0 bg-surface" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.4em] text-gold/45 uppercase block mb-6">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-5xl font-light mb-12 font-heading">
                From Broken to{" "}
                <span className="text-gradient-gold italic">Beautiful</span>
              </h2>
              <div className="space-y-6 mb-12">
                <p className="text-muted-foreground/65 leading-relaxed text-lg font-light">
                  For over 500 years, Japanese artisans have practiced
                  Kintsugi, using lacquer dusted with gold, silver, or
                  platinum to repair broken pottery. Rather than disguising
                  the damage, the repair becomes a celebrated feature.
                </p>
                <p className="text-muted-foreground/65 leading-relaxed text-lg font-light">
                  This ancient technique transforms vessels into powerful
                  metaphors for human resilience, reminding us that our scars
                  make us more beautiful.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center text-gold font-medium text-xs tracking-[0.15em] uppercase hover:text-gold-light transition-colors duration-400 group cursor-pointer"
              >
                Learn Our Story
                <svg
                  className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-surface-elevated border border-border/30 flex items-center justify-center overflow-hidden group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent" />
                {/* Decorative kintsugi lines */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700" viewBox="0 0 400 500" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M50 100 Q120 180 200 200 Q280 220 350 150" className="text-gold" />
                  <path d="M100 250 Q180 300 200 350 Q220 400 300 420" className="text-gold" />
                  <path d="M150 50 Q200 150 180 250 Q160 350 200 480" className="text-gold" />
                </svg>
                <div className="relative text-center p-14">
                  <div className="w-32 h-32 mx-auto mb-10 rounded-full border border-gold/12 flex items-center justify-center group-hover:border-gold/25 transition-colors duration-700">
                    <svg className="w-14 h-14 text-gold/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                    </svg>
                  </div>
                  <p className="text-[9px] font-semibold tracking-[0.45em] text-gold/25 uppercase mb-3">
                    Chado &bull; Tea Ceremony
                  </p>
                  <p className="text-sm text-muted-foreground/35 font-light">Since 1985</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ────────────────────────────────────────── */}
      <section className="py-28 relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "500+", label: "Years of Tradition" },
              { value: "2,400+", label: "Pieces Restored" },
              { value: "38", label: "Years of Practice" },
              { value: "12", label: "Master Artisans" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl sm:text-5xl font-light text-gradient-gold font-heading mb-3">
                  {stat.value}
                </p>
                <p className="text-[11px] tracking-[0.2em] text-muted-foreground/40 uppercase font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-36 sm:py-44 relative section-luxury">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-gold/45 uppercase block mb-6">
            Begin Your Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-10 font-heading">
            Experience the{" "}
            <span className="text-gradient-gold italic">Mastery</span>
          </h2>
          <p className="max-w-lg mx-auto text-muted-foreground/50 mb-16 leading-relaxed text-lg font-light">
            Each piece we create is a testament to patience, precision, and the
            transformative power of embracing our imperfections.
          </p>
          <Link href="/contact" className="btn-gold cursor-pointer">
            <span>Commission a Piece</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
