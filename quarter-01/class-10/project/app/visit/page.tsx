import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Visit — Aroma Antiquaria",
  description: "Plan your visit to the Aroma Antiquaria museum, exhibitions, workshops, and olfactory tours.",
};

const exhibitions = [
  {
    id: "ex-1",
    title: "Scents of the Pharaohs",
    subtitle: "Featured Exhibition",
    dates: "Mar 15 — Sep 30, 2026",
    description: "An immersive journey through the olfactory world of ancient Egypt, featuring reconstructions of kyphi, sacred temple incense, and personal fragrances of the pharaohs.",
    highlights: ["27 reconstructed fragrances", "Interactive smelling stations", "Original temple vessel replicas", "Guided olfactory tours"],
    status: "Open",
    image: "◉",
    bg: "from-amber-900/80 to-[#1a1205]",
  },
  {
    id: "ex-2",
    title: "The Perfume Road",
    subtitle: "Traveling Exhibition",
    dates: "Oct 12 — Feb 28, 2027",
    description: "Trace the ancient spice and perfume routes from Mesopotamia to Rome, and discover how fragrance fueled trade, diplomacy, and cultural exchange across civilizations.",
    highlights: ["Trade route interactive map", "6 region reconstructions", "Amphora and vessel collection", "Scent timeline wall"],
    status: "Coming Soon",
    image: "⟁",
    bg: "from-emerald-900/80 to-[#06251a]",
  },
  {
    id: "ex-3",
    title: "Sacred Smoke",
    subtitle: "Permanent Collection",
    dates: "Ongoing",
    description: "A permanent exploration of incense and ritual fragrance across cultures—from Egyptian temple Kyphi to Maya Copal—revealing the sacred role of scent.",
    highlights: ["Ritual context gallery", "16 incense reconstructions", "Liturgical object collection", "Historical documentary film"],
    status: "Open",
    image: "☥",
    bg: "from-indigo-900/80 to-[#141030]",
  },
];

const workshops = [
  { id: "ws-1", title: "Introduction to Historical Perfumery", format: "Workshop", duration: "3 hours", level: "Beginner", capacity: "12", next: "Sep 5, 2026", seats: 4 },
  { id: "ws-2", title: "Reconstructing Kyphi: A Hands-On Lab", format: "Practical", duration: "5 hours", level: "Advanced", capacity: "8", next: "Sep 12, 2026", seats: 3 },
  { id: "ws-3", title: "Reading Ancient Fragrance Recipes", format: "Seminar", duration: "2 hours", level: "All levels", capacity: "20", next: "Sep 19, 2026", seats: 11 },
  { id: "ws-4", title: "Molecular Archaeology for Perfumers", format: "Lecture", duration: "4 hours", level: "Intermediate", capacity: "15", next: "Oct 3, 2026", seats: 9 },
];

const tours = [
  { id: "tour-1", name: "Signature Olfactory Tour", duration: "90 min", price: "$25", description: "A guided journey through all three exhibition wings, with staged smelling stations and narrative commentary.", spots: 12 },
  { id: "tour-2", name: "Private Curator's Tour", duration: "2 hours", price: "$75", description: "An intimate tour led by our head curator, exploring the reconstruction methodology and behind-the-scenes access.", spots: 6 },
  { id: "tour-3", name: "Scent and Memory Workshop", duration: "3 hours", price: "$45", description: "A reflective workshop connecting historical scents with personal and collective memory, with take-home samples.", spots: 10 },
];

function ExhibitionCard({ ex }: { ex: typeof exhibitions[0] }) {
  return (
    <article className={`group relative overflow-hidden rounded-2xl border border-border text-white`}>
      <div className={`relative aspect-[4/5] md:aspect-[3/4] bg-gradient-to-br ${ex.bg}`}>
        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity" aria-hidden="true">
          <span className="font-serif text-[200px] leading-none">{ex.image}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true" />
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <span className="text-sm font-mono uppercase tracking-widest opacity-80">{ex.subtitle}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            ex.status === "Open" ? "bg-emerald-500/80 text-white" : "bg-white/20 text-white backdrop-blur-sm"
          }`}>
            {ex.status}
          </span>
        </div>
        <div className="absolute inset-x-6 bottom-6">
          <p className="text-sm opacity-80 mb-2">{ex.dates}</p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium mb-3">{ex.title}</h2>
          <p className="text-sm leading-relaxed opacity-90 mb-4 line-clamp-3">{ex.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {ex.highlights.slice(0, 3).map((h) => (
              <span key={h} className="px-2 py-1 text-xs rounded bg-white/10 backdrop-blur-sm border border-white/20">
                {h}
              </span>
            ))}
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function VisitPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16" role="main">
        <section className="py-16 md:py-24 border-b border-border" aria-labelledby="visit-heading">
          <div className="container">
            <header className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-mono uppercase tracking-widest text-primary mb-4 block max-sm:text-xs">
                Plan Your Visit
              </span>
              <h1 id="visit-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6 text-balance">
                Smell History in Person
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Visit our museum in Alexandria, Egypt, to experience reconstructed historical
                fragrances, attend workshops, and explore the archaeology of scent.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {exhibitions.map((ex) => (
                <ExhibitionCard key={ex.id} ex={ex} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30 border-b border-border" aria-labelledby="hours-heading">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div>
                <h2 id="hours-heading" className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">Opening Hours</h2>
                <dl className="space-y-4 text-sm" role="group" aria-label="Opening hours">
                  {[
                    { days: "Monday", hours: "Closed" },
                    { days: "Tuesday — Friday", hours: "10:00 — 18:00" },
                    { days: "Saturday", hours: "10:00 — 20:00" },
                    { days: "Sunday", hours: "12:00 — 18:00" },
                  ].map((row) => (
                    <div key={row.days} className={`flex items-center justify-between py-3 px-4 rounded-lg ${row.hours === "Closed" ? "bg-destructive/5 border border-destructive/20" : "border border-border bg-card"}`}>
                      <dt className="font-medium text-foreground">{row.days}</dt>
                      <dd className={row.hours === "Closed" ? "text-destructive font-medium" : "text-muted-foreground"}>{row.hours}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 p-6 rounded-xl border border-border bg-card">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-4">Admission</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground" role="list">
                    <li className="flex justify-between"><span>General Admission</span><span className="font-medium text-foreground">$15</span></li>
                    <li className="flex justify-between"><span>Students & Seniors</span><span className="font-medium text-foreground">$10</span></li>
                    <li className="flex justify-between"><span>Children under 12</span><span className="font-medium text-foreground">Free</span></li>
                  </ul>
                  <a href="#book" className="mt-5 inline-flex items-center justify-center w-full px-6 py-3 rounded-md bg-primary text-on-primary font-medium text-sm hover:bg-primary/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    Reserve Tickets
                  </a>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">Getting Here</h2>
                <div className="rounded-xl border border-border overflow-hidden mb-6">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground p-8">
                      <svg className="w-10 h-10 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-sm">Interactive Map</p>
                      <p className="text-xs mt-1">3 Customs House Road, Alexandria, Egypt</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Located on the historic Corniche overlooking the Mediterranean, the museum is a 10-minute walk from
                  Alexandria's central railway station and 15 minutes from the airport.
                </p>
                <a
                  href="#directions"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Get Directions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border" aria-labelledby="workshops-heading">
          <div className="container">
            <header className="max-w-3xl mx-auto text-center mb-12">
              <h2 id="workshops-heading" className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
                Workshops & Seminars
              </h2>
              <p className="text-muted-foreground text-lg">Hands-on educational programs for students, perfumers, and fragrance enthusiasts.</p>
            </header>

            <div className="overflow-hidden rounded-xl border border-border">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left">
                  <caption className="sr-only">Upcoming workshops and seminars</caption>
                  <thead className="bg-muted/50">
                    <tr className="border-b border-border">
                      <th scope="col" className="px-6 py-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">Workshop</th>
                      <th scope="col" className="px-6 py-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">Format</th>
                      <th scope="col" className="px-6 py-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">Duration</th>
                      <th scope="col" className="px-6 py-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">Level</th>
                      <th scope="col" className="px-6 py-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">Next Session</th>
                      <th scope="col" className="px-6 py-4 text-xs font-mono uppercase tracking-widest text-muted-foreground text-right">Seats</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workshops.map((ws) => (
                      <tr key={ws.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                          <p className="font-medium text-foreground">{ws.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">Capacity: {ws.capacity}</p>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{ws.format}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{ws.duration}</td>
                        <td className="px-6 py-4">
                          <span className="px-2.5 py-1 rounded-full text-xs font-medium border border-border bg-muted text-muted-foreground">{ws.level}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground font-mono">{ws.next}</td>
                        <td className="px-6 py-4 text-right">
                          {ws.seats > 0 ? (
                            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-on-primary text-sm font-medium hover:bg-primary/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                              Book · {ws.seats} left
                            </button>
                          ) : (
                            <span className="text-sm text-destructive font-medium">Sold Out</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="tours-heading">
          <div className="container">
            <header className="max-w-3xl mx-auto text-center mb-12">
              <h2 id="tours-heading" className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
                Olfactory Tours
              </h2>
              <p className="text-muted-foreground text-lg">Immersive guided experiences of the museum's scent collection.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tours.map((tour) => (
                <article key={tour.id} className="rounded-2xl border border-border bg-card p-6 flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-1">{tour.name}</h3>
                  <p className="flex items-baseline gap-1 mb-4">
                    <span className="font-serif text-3xl font-medium text-primary">{tour.price}</span>
                    <span className="text-sm text-muted-foreground">/ person</span>
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tour.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Max {tour.spots} people
                    </span>
                  </div>
                  <a href="#book" className="mt-auto inline-flex items-center justify-center px-6 py-3 rounded-md border border-border text-sm font-medium hover:bg-muted transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    Book This Tour
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="book" className="py-16 md:py-24 border-b border-border" aria-labelledby="book-heading">
          <div className="container max-w-3xl">
            <header className="text-center mb-10">
              <h2 id="book-heading" className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-3">
                Reserve Your Visit
              </h2>
              <p className="text-muted-foreground">Fill in your details and we'll confirm your reservation within 24 hours.</p>
            </header>
            <form className="space-y-6 bg-card border border-border rounded-2xl p-8" method="post" action="#">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your name" className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input type="email" id="email" name="email" required placeholder="you@example.com" className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="visit-type" className="block text-sm font-medium text-foreground mb-2">Visit Type</label>
                  <select id="visit-type" name="visit-type" className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all">
                    <option>General Admission</option>
                    <option>Signature Olfactory Tour</option>
                    <option>Private Curator's Tour</option>
                    <option>Scent and Memory Workshop</option>
                    <option>Group Visit (10+)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">Preferred Date</label>
                  <input type="date" id="date" name="date" required className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">Number of Guests</label>
                <input type="number" id="guests" name="guests" min="1" max="20" defaultValue="1" className="w-full md:w-24 px-4 py-3 rounded-md border border-border bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-4 rounded-md bg-primary text-on-primary font-medium hover:bg-primary/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Submit Reservation Request
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}