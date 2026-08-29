import Link from "next/link";

const galleryItems = [
  {
    id: 1,
    title: "Morning Light Bowl",
    category: "Tea Ceremony",
    year: "2024",
    description:
      "A chawan restored with pure gold lacquer, catching dawn light in every crack.",
  },
  {
    id: 2,
    title: "Ocean Memory Vase",
    category: "Floral Arrangement",
    year: "2024",
    description:
      "Large ceramic vase repaired with silver and platinum veins reminiscent of waves.",
  },
  {
    id: 3,
    title: "Winter Silence Plate",
    category: "Dining",
    year: "2023",
    description:
      "A delicate plate restored with gold, evoking frost patterns on still water.",
  },
  {
    id: 4,
    title: "Autumn Moon Cup",
    category: "Tea Ceremony",
    year: "2023",
    description:
      "Yunomi cup repaired with gold, inspired by harvest moon reflections.",
  },
  {
    id: 5,
    title: "Bamboo Grove Dish",
    category: "Serving",
    year: "2023",
    description:
      "Wide serving dish with gold repair lines mimicking bamboo stalks.",
  },
  {
    id: 6,
    title: "Mountain Mist Jar",
    category: "Storage",
    year: "2022",
    description:
      "Lidded jar restored with platinum, inspired by misty mountain peaks.",
  },
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-28">
          <div className="badge-gold mx-auto mb-10">
            <div className="gold-dot" />
            <span>Our Collection</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-10 font-heading">
            Gallery of{" "}
            <span className="text-gradient-gold italic">Restored Beauty</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground/55 leading-relaxed text-lg font-light">
            Each piece in our gallery represents a journey from brokenness to
            wholeness. Browse our collection of Kintsugi-restored ceramics, each
            one a unique testament to the art of golden repair.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-2xl bg-surface-elevated border border-border/25 p-9 flex flex-col justify-end transition-all duration-600 hover:border-gold/12 hover:shadow-[0_8px_64px_rgba(0,0,0,0.35)] relative overflow-hidden">
                {/* Kintsugi crack pattern overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.025] group-hover:opacity-[0.05] transition-opacity duration-700" viewBox="0 0 300 375" fill="none" stroke="currentColor" strokeWidth="0.8">
                  <path d="M30 80 Q80 120 150 140 Q220 160 270 100" className="text-gold" />
                  <path d="M60 200 Q130 240 150 280 Q170 320 240 340" className="text-gold" />
                </svg>

                <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/50 to-transparent" />

                <div className="relative z-10">
                  <div className="mb-5">
                    <span className="text-[9px] font-semibold tracking-[0.3em] text-gold/35 uppercase">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-foreground mb-4 group-hover:text-gold transition-colors duration-600 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground/45 mb-7 leading-relaxed font-light">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-border/15">
                    <span className="text-sm text-muted-foreground/25 font-light">
                      {item.year}
                    </span>
                    <span className="text-gold/50 text-[10px] font-medium tracking-[0.15em] uppercase group-hover:text-gold group-hover:translate-x-1.5 transition-all duration-500 flex items-center gap-2">
                      View
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <div className="max-w-2xl mx-auto glass-card rounded-3xl p-14 sm:p-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 font-heading">
              Commission Your{" "}
              <span className="text-gradient-gold italic">Own Piece</span>
            </h2>
            <p className="text-muted-foreground/50 mb-12 leading-relaxed text-lg font-light">
              Have a cherished piece that needs repair? Let us transform it into
              a work of art that tells your story of resilience and renewal.
            </p>
            <Link href="/contact" className="btn-gold cursor-pointer">
              <span>Start Your Commission</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
