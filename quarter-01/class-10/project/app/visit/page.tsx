import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Visit — Aroma Antiquaria",
  description: "Plan your visit to the Aroma Antiquaria museum, exhibitions, workshops, and olfactory tours.",
};

const exhibitions = [
  {
    title: "Scents of the Pharaohs",
    dates: "Mar 15 — Sep 30, 2026",
    desc: "An immersive journey through the olfactory world of ancient Egypt, featuring reconstructions of kyphi and the temple incense of the pharaohs.",
    status: "Open",
    mark: "𓁜",
    gradient: "from-[#2E1A11] to-[#09060A]",
  },
  {
    title: "The Perfume Road",
    dates: "Oct 12 — Feb 28, 2027",
    desc: "Trace the ancient spice and perfume routes from Mesopotamia to Rome, and how fragrance fueled trade and cultural exchange.",
    status: "Coming Soon",
    mark: "⟁",
    gradient: "from-[#17332B] to-[#08130F]",
  },
  {
    title: "Sacred Smoke",
    dates: "Ongoing",
    desc: "A permanent exploration of ritual incense across cultures — from Egyptian Kyphi to Maya Copal.",
    status: "Open",
    mark: "☥",
    gradient: "from-[#2A2140] to-[#121021]",
  },
];

const schedule = [
  { days: "Monday", hours: "Closed" },
  { days: "Tuesday — Friday", hours: "10:00 — 18:00" },
  { days: "Saturday", hours: "10:00 — 20:00" },
  { days: "Sunday", hours: "12:00 — 18:00" },
];

const workshops = [
  { title: "Introduction to Historical Perfumery", format: "Workshop", level: "Beginner", next: "Sep 5", seats: 4 },
  { title: "Reconstructing Kyphi: A Hands-On Lab", format: "Practical", level: "Advanced", next: "Sep 12", seats: 3 },
  { title: "Reading Ancient Fragrance Recipes", format: "Seminar", level: "All levels", next: "Sep 19", seats: 11 },
  { title: "Molecular Archaeology for Perfumers", format: "Lecture", level: "Intermediate", next: "Oct 3", seats: 9 },
];

const tours = [
  { name: "Signature Olfactory Tour", duration: "90 min", price: "$25", desc: "A guided journey through all three exhibition wings, with staged smelling stations." },
  { name: "Private Curator's Tour", duration: "2 hours", price: "$75", desc: "An intimate tour led by our head curator with behind-the-scenes access to the lab." },
  { name: "Scent & Memory Workshop", duration: "3 hours", price: "$45", desc: "A reflective workshop connecting historical scents to personal memory, with samples to take home." },
];

export default function VisitPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-24" role="main">
        <section className="py-16 md:py-24 border-b border-border" aria-labelledby="visit-heading">
          <div className="frame">
            <header className="max-w-3xl mb-16">
              <span className="eyebrow text-accent block mb-5">Plan Your Visit</span>
              <h1 id="visit-heading" className="font-serif text-4xl md:text-6xl tracking-tight text-foreground leading-[1.08] text-balance">
                Smell History
                <span className="block italic text-primary">in Person</span>
              </h1>
              <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
                Experience reconstructed historical fragrances, attend workshops, and explore the
                archaeology of scent in our museum on the Mediterranean.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {exhibitions.map((ex) => (
                <article
                  key={ex.title}
                  className={`group relative overflow-hidden rounded-2xl text-on-secondary bg-gradient-to-br ${ex.gradient} transition-transform duration-300 hover:-translate-y-1`}
                >
                  <div className="relative h-80 p-8 flex flex-col">
                    <span className="absolute -right-4 -top-6 font-serif text-[9rem] leading-none text-on-secondary/[0.06] select-none" aria-hidden="true">
                      {ex.mark}
                    </span>
                    <div className="flex items-start justify-between relative">
                      <span className="text-xs uppercase tracking-[0.2em] text-on-secondary/70">Exhibition</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        ex.status === "Open" ? "bg-accent text-on-accent" : "bg-on-secondary/15 text-on-secondary"
                      }`}>
                        {ex.status}
                      </span>
                    </div>
                    <div className="mt-auto relative">
                      <p className="text-xs text-on-secondary/70 mb-2">{ex.dates}</p>
                      <h2 className="font-serif text-2xl md:text-3xl text-on-secondary leading-snug mb-3">{ex.title}</h2>
                      <p className="text-sm text-on-secondary/80 leading-relaxed">{ex.desc}</p>
                      <span className="mt-5 inline-block text-sm font-medium text-accent">Learn more →</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 border-b border-border" aria-labelledby="visit-info">
          <div className="frame">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <span className="eyebrow text-accent block mb-5">Visiting Information</span>
                <h2 id="visit-info" className="font-serif text-3xl md:text-4xl tracking-tight text-foreground leading-tight mb-8">
                  Hours & Admission
                </h2>
                <dl className="space-y-3 text-sm mb-8" role="group" aria-label="Opening hours">
                  {schedule.map((row) => (
                    <div key={row.days} className={`flex items-center justify-between px-5 py-4 rounded-xl border ${
                      row.hours === "Closed" ? "border-destructive/30 bg-destructive/5" : "border-border bg-card"
                    }`}>
                      <dt className="font-medium text-foreground">{row.days}</dt>
                      <dd className={row.hours === "Closed" ? "text-destructive font-medium" : "text-muted-foreground"}>{row.hours}</dd>
                    </div>
                  ))}
                </dl>
                <div className="rounded-2xl border border-border bg-card p-7">
                  <h3 className="font-serif text-xl text-foreground mb-5">Admission</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">General Admission</span><span className="font-medium text-foreground">$15</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Students & Seniors</span><span className="font-medium text-foreground">$10</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Children under 12</span><span className="font-medium text-foreground">Free</span></div>
                  </div>
                  <a href="#book" className="mt-6 inline-flex items-center justify-center w-full px-6 py-3.5 rounded-full bg-primary text-on-primary font-medium hover:bg-primary/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    Reserve Tickets
                  </a>
                </div>
              </div>

              <div>
                <span className="eyebrow text-accent block mb-5">Getting Here</span>
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground leading-tight mb-8">
                  The Location
                </h2>
                <div className="aspect-[4/3] rounded-2xl border border-border bg-muted flex items-center justify-center mb-6">
                  <div className="text-center text-muted-foreground">
                    <svg className="w-10 h-10 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm font-medium">Interactive Map</p>
                    <p className="text-xs mt-1">3 Customs House Road · Alexandria</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  On the historic Corniche overlooking the Mediterranean, ten minutes from the central
                  railway station and fifteen from the airport.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 md:py-28 bg-secondary text-on-secondary" aria-labelledby="workshops-heading">
          <div className="frame">
            <header className="max-w-2xl mb-12">
              <span className="eyebrow text-accent block mb-5">Education</span>
              <h2 id="workshops-heading" className="font-serif text-3xl md:text-5xl tracking-tight leading-tight">
                Workshops & Seminars
              </h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {workshops.map((ws) => (
                <div key={ws.title} className="rounded-2xl border border-on-secondary/15 bg-on-secondary/5 p-7 flex items-center justify-between gap-6 transition-colors hover:bg-on-secondary/10">
                  <div>
                    <h3 className="font-serif text-lg text-on-secondary leading-snug mb-2">{ws.title}</h3>
                    <p className="text-xs uppercase tracking-wider text-on-secondary/60">{ws.format} · {ws.level}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm text-accent font-medium">{ws.next}</p>
                    <button className="mt-2 inline-flex px-5 py-2 rounded-full bg-accent text-on-accent text-sm font-medium hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary">
                      Book · {ws.seats} left
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28" aria-labelledby="tours-heading">
          <div className="frame">
            <header className="max-w-2xl mb-12">
              <span className="eyebrow text-accent block mb-5">Guided Experiences</span>
              <h2 id="tours-heading" className="font-serif text-3xl md:text-5xl tracking-tight text-foreground leading-tight">
                Olfactory Tours
              </h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tours.map((tour) => (
                <article key={tour.name} className="rounded-2xl border border-border bg-card p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
                  <h3 className="font-serif text-xl text-foreground leading-snug mb-1">{tour.name}</h3>
                  <p className="flex items-baseline gap-1 mb-4">
                    <span className="font-serif text-3xl text-primary">{tour.price}</span>
                    <span className="text-sm text-muted-foreground">/ person</span>
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{tour.desc}</p>
                  <div className="mt-auto pt-5 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3">{tour.duration}</p>
                    <a href="#book" className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full border border-accent/60 text-foreground text-sm font-medium hover:bg-accent hover:text-on-accent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      Book This Tour
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="book" className="py-20 md:py-28 border-t border-border" aria-labelledby="book-heading">
          <div className="frame">
            <div className="mx-auto w-full max-w-2xl">
              <header className="text-center mb-10">
                <span className="eyebrow text-accent block mb-5">Reservation</span>
                <h2 id="book-heading" className="font-serif text-3xl md:text-4xl tracking-tight text-foreground">
                  Reserve Your Visit
                </h2>
                <p className="mt-4 text-sm text-muted-foreground">We'll confirm your reservation within 24 hours.</p>
              </header>
              <form className="space-y-6 rounded-3xl border border-border bg-card p-8 md:p-10" method="post" action="#">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input type="text" id="name" required placeholder="Your name" className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-sm focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input type="email" id="email" required placeholder="you@example.com" className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-sm focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-foreground mb-2">Visit Type</label>
                    <select id="type" className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-sm focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all appearance-none">
                      <option>General Admission</option>
                      <option>Signature Olfactory Tour</option>
                      <option>Private Curator's Tour</option>
                      <option>Scent & Memory Workshop</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">Preferred Date</label>
                    <input type="date" id="date" required className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-sm focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all" />
                  </div>
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-on-primary font-medium hover:bg-primary/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-lg shadow-primary/10">
                  Submit Reservation
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}