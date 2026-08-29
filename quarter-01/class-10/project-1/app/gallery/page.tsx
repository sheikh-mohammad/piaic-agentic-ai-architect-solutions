import Link from "next/link";

const galleryItems = [
  {
    id: 1,
    title: "Morning Light Bowl",
    category: "Tea Ceremony",
    year: "2024",
    description: "A chawan restored with pure gold lacquer, catching dawn light in every crack.",
    color: "from-amber-100 to-orange-50",
    borderColor: "border-amber-200",
  },
  {
    id: 2,
    title: "Ocean Memory Vase",
    category: "Floral Arrangement",
    year: "2024",
    description: "Large ceramic vase repaired with silver and platinum veins reminiscent of waves.",
    color: "from-sky-100 to-blue-50",
    borderColor: "border-sky-200",
  },
  {
    id: 3,
    title: "Winter Silence Plate",
    category: "Dining",
    year: "2023",
    description: "A delicate plate restored with gold, evoking frost patterns on still water.",
    color: "from-slate-100 to-zinc-50",
    borderColor: "border-slate-200",
  },
  {
    id: 4,
    title: "Autumn Moon Cup",
    category: "Tea Ceremony",
    year: "2023",
    description: "Yunomi cup repaired with gold, inspired by harvest moon reflections.",
    color: "from-yellow-100 to-amber-50",
    borderColor: "border-yellow-200",
  },
  {
    id: 5,
    title: "Bamboo Grove Dish",
    category: "Serving",
    year: "2023",
    description: "Wide serving dish with gold repair lines mimicking bamboo stalks.",
    color: "from-green-100 to-emerald-50",
    borderColor: "border-green-200",
  },
  {
    id: 6,
    title: "Mountain Mist Jar",
    category: "Storage",
    year: "2022",
    description: "Lidded jar restored with platinum, inspired by misty mountain peaks.",
    color: "from-stone-100 to-neutral-50",
    borderColor: "border-stone-200",
  },
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-widest text-accent border border-border rounded-full bg-muted">
            OUR COLLECTION
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Gallery of <span className="text-accent">Restored Beauty</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Each piece in our gallery represents a journey from brokenness to wholeness. Browse our collection of Kintsugi-restored ceramics, each one a unique testament to the art of golden repair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`aspect-[4/5] rounded-2xl bg-gradient-to-br ${item.color} border ${item.borderColor} p-8 flex flex-col justify-end transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2`}
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-xs font-medium text-muted-foreground">
                    {item.year}
                  </span>
                  <span className="text-accent text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="max-w-3xl mx-auto bg-card rounded-3xl p-12 border border-border">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Commission Your <span className="text-accent">Own Piece</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have a cherished piece that needs repair? Let us transform it into a work of art that tells your story of resilience and renewal.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-full font-semibold tracking-wide hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 cursor-pointer"
            >
              Start Your Commission
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
