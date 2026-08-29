import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-cream to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-widest text-gold-dark border border-gold/30 rounded-full bg-gold/5">
              ANCIENT JAPANESE ART
            </span>
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">The Art of</span>
            <span className="block gold-text mt-2">Golden Repair</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 max-w-2xl mx-auto text-lg sm:text-xl text-stone mb-10 leading-relaxed">
            Embrace the beauty of imperfection. Kintsugi transforms broken pottery into extraordinary works of art, celebrating resilience and the wisdom of scars.
          </p>

          <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/gallery"
              className="px-8 py-4 bg-gold text-white rounded-full font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
            >
              Explore Gallery
            </Link>
            <Link
              href="/techniques"
              className="px-8 py-4 border-2 border-gold text-gold-dark rounded-full font-semibold tracking-wide hover:bg-gold hover:text-white transition-all duration-300"
            >
              Discover Techniques
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-stone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gold-text">Wabi-Sabi</span> Philosophy
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-stone">
              Rooted in the Japanese philosophy of embracing imperfection, Kintsugi teaches us that breakage and repair are part of the history of an object, rather than something to disguise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Acceptance",
                description: "Honor the cracks and imperfections as part of the object&apos;s story, not flaws to be hidden.",
                icon: "◐",
              },
              {
                title: "Transformation",
                description: "Turn damage into beauty with precious metals, creating something more valuable than before.",
                icon: "✦",
              },
              {
                title: "Resilience",
                description: "Celebrate the strength to be broken and the courage to be made whole again.",
                icon: "⬡",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl bg-cream/50 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-gold">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gold-dark transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-cream/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                From Broken to <span className="gold-text">Beautiful</span>
              </h2>
              <p className="text-lg text-stone mb-6 leading-relaxed">
                For over 500 years, Japanese artisans have practiced Kintsugi, using lacquer dusted with gold, silver, or platinum to repair broken pottery. Rather than disguising the damage, the repair becomes a celebrated feature.
              </p>
              <p className="text-lg text-stone mb-8 leading-relaxed">
                This ancient technique transforms vessels into powerful metaphors for human resilience, reminding us that our scars make us more beautiful.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-gold-dark font-semibold hover:text-gold transition-colors group"
              >
                Learn Our Story
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-gold/20 to-gold-light/20 border border-gold/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🍵</div>
                  <p className="text-sm font-medium text-stone tracking-widest">CHADO • TEA CEREMONY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Experience the <span className="gold-text">Mastery</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-stone mb-12">
            Each piece we create is a testament to patience, precision, and the transformative power of embracing our imperfections.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-white rounded-full font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
          >
            Commission a Piece
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
