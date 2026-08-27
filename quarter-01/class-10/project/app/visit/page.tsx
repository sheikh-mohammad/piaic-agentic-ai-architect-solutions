import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Visit — Aroma Antiquaria",
  description: "Plan your visit to the Aroma Antiquaria museum, exhibitions, workshops, and olfactory tours.",
};

const exhibitions = [
  { title: "Scents of the Pharaohs", dates: "Mar 15 — Sep 30, 2026", desc: "An immersive journey through the olfactory world of ancient Egypt, featuring reconstructions of kyphi and the temple incense of the pharaohs.", status: "Open", mark: "𓁜", gradient: "from-[#2E1A11] to-[#09060A]" },
  { title: "The Perfume Road", dates: "Oct 12 — Feb 28, 2027", desc: "Trace the ancient spice and perfume routes from Mesopotamia to Rome, and how fragrance fueled trade and cultural exchange.", status: "Coming Soon", mark: "⟁", gradient: "from-[#17332B] to-[#08130F]" },
  { title: "Sacred Smoke", dates: "Ongoing", desc: "A permanent exploration of ritual incense across cultures — from Egyptian Kyphi to Maya Copal.", status: "Open", mark: "☥", gradient: "from-[#2A2140] to-[#121021]" },
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
        <section className="section border-b border-border/50" aria-labelledby="visit-heading">
          <div className="frame">
            <header style={{ maxWidth: "40rem", marginBottom: "3.5rem" }}>
              <span className="eyebrow">Plan Your Visit</span>
              <h1 id="visit-heading" className="font-serif text-foreground text-balance" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Smell History
                <span className="block italic text-primary">in Person</span>
              </h1>
              <p className="text-muted-foreground font-light" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "36rem" }}>
                Experience reconstructed historical fragrances, attend workshops, and explore the
                archaeology of scent in our museum on the Mediterranean.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1rem" }}>
              {exhibitions.map((ex) => (
                <article
                  key={ex.title}
                  className={`group relative overflow-hidden rounded-2xl text-on-secondary bg-gradient-to-br ${ex.gradient} transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)]`}
                >
                  <div className="relative flex flex-col" style={{ padding: "2rem", minHeight: "20rem" }}>
                    <span className="absolute font-serif text-on-secondary/[0.05] select-none" style={{ right: "-1rem", top: "-1.5rem", fontSize: "8rem", lineHeight: 1 }} aria-hidden="true">
                      {ex.mark}
                    </span>
                    <div className="flex items-start justify-between relative">
                      <span className="text-on-secondary/60" style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.2em" }}>Exhibition</span>
                      <span className={`rounded-full font-medium ${ex.status === "Open" ? "bg-accent text-on-accent" : "bg-on-secondary/15 text-on-secondary"}`} style={{ padding: "0.25rem 0.75rem", fontSize: "0.65rem" }}>
                        {ex.status}
                      </span>
                    </div>
                    <div className="mt-auto relative">
                      <p className="text-on-secondary/60" style={{ fontSize: "0.7rem", marginBottom: "0.5rem" }}>{ex.dates}</p>
                      <h2 className="font-serif text-on-secondary leading-snug" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)", marginBottom: "0.75rem" }}>{ex.title}</h2>
                      <p className="text-on-secondary/70" style={{ fontSize: "0.8125rem", lineHeight: 1.65 }}>{ex.desc}</p>
                      <span className="inline-block text-accent font-medium" style={{ fontSize: "0.8125rem", marginTop: "1rem" }}>Learn more →</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-b border-border/50" aria-labelledby="visit-info">
          <div className="frame">
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "3rem" }}>
              <div>
                <span className="eyebrow">Visiting Information</span>
                <h2 id="visit-info" className="font-serif text-foreground" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.15, marginBottom: "1.75rem" }}>
                  Hours & Admission
                </h2>
                <div className="flex flex-col" style={{ gap: "0.5rem", marginBottom: "1.75rem" }} role="group" aria-label="Opening hours">
                  {schedule.map((row) => (
                    <div key={row.days} className={`flex items-center justify-between rounded-xl border ${row.hours === "Closed" ? "border-destructive/30 bg-destructive/5" : "border-border bg-card"}`} style={{ padding: "0.875rem 1.25rem" }}>
                      <dt className="font-medium text-foreground" style={{ fontSize: "0.875rem" }}>{row.days}</dt>
                      <dd className={row.hours === "Closed" ? "text-destructive font-medium" : "text-muted-foreground"} style={{ fontSize: "0.875rem" }}>{row.hours}</dd>
                    </div>
                  ))}
                </div>
                <div className="card" style={{ padding: "1.5rem" }}>
                  <h3 className="font-serif text-foreground" style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>Admission</h3>
                  <div className="flex flex-col" style={{ gap: "0.625rem" }}>
                    <div className="flex justify-between"><span className="text-muted-foreground" style={{ fontSize: "0.875rem" }}>General Admission</span><span className="font-medium text-foreground" style={{ fontSize: "0.875rem" }}>$15</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground" style={{ fontSize: "0.875rem" }}>Students & Seniors</span><span className="font-medium text-foreground" style={{ fontSize: "0.875rem" }}>$10</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground" style={{ fontSize: "0.875rem" }}>Children under 12</span><span className="font-medium text-foreground" style={{ fontSize: "0.875rem" }}>Free</span></div>
                  </div>
                  <a href="#book" className="mt-5 inline-flex items-center justify-center w-full rounded-full bg-primary text-on-primary font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_4px_20px_rgba(110,27,27,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" style={{ padding: "0.75rem 1.5rem" }}>
                    Reserve Tickets
                  </a>
                </div>
              </div>

              <div>
                <span className="eyebrow">Getting Here</span>
                <h2 className="font-serif text-foreground" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.15, marginBottom: "1.75rem" }}>
                  The Location
                </h2>
                <div className="rounded-2xl border border-border bg-muted flex items-center justify-center" style={{ aspectRatio: "4/3", marginBottom: "1.25rem" }}>
                  <div className="text-center text-muted-foreground">
                    <svg className="mx-auto" style={{ width: "2.5rem", height: "2.5rem", marginBottom: "0.75rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="font-medium" style={{ fontSize: "0.875rem" }}>Interactive Map</p>
                    <p style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>3 Customs House Road · Alexandria</p>
                  </div>
                </div>
                <p className="text-muted-foreground" style={{ fontSize: "0.8125rem", lineHeight: 1.65 }}>
                  On the historic Corniche overlooking the Mediterranean, ten minutes from the central
                  railway station and fifteen from the airport.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden section bg-secondary text-on-secondary" aria-labelledby="workshops-heading">
          <div className="frame">
            <header style={{ maxWidth: "28rem", marginBottom: "2.5rem" }}>
              <span className="eyebrow">Education</span>
              <h2 id="workshops-heading" className="font-serif text-on-secondary" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.15 }}>
                Workshops & Seminars
              </h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "0.875rem" }}>
              {workshops.map((ws) => (
                <div key={ws.title} className="rounded-xl border border-on-secondary/10 bg-on-secondary/[0.04] flex items-center justify-between transition-all duration-300 hover:bg-on-secondary/[0.08] hover:border-on-secondary/20" style={{ padding: "1.5rem", gap: "1.5rem" }}>
                  <div>
                    <h3 className="font-serif text-on-secondary leading-snug" style={{ fontSize: "1rem", marginBottom: "0.375rem" }}>{ws.title}</h3>
                    <p className="text-on-secondary/50" style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{ws.format} · {ws.level}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-accent font-medium" style={{ fontSize: "0.8125rem" }}>{ws.next}</p>
                    <button className="mt-1.5 inline-flex rounded-full bg-accent text-on-accent font-medium transition-all duration-300 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary" style={{ padding: "0.375rem 1rem", fontSize: "0.75rem" }}>
                      Book · {ws.seats} left
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="tours-heading">
          <div className="frame">
            <header style={{ maxWidth: "28rem", marginBottom: "2.5rem" }}>
              <span className="eyebrow">Guided Experiences</span>
              <h2 id="tours-heading" className="font-serif text-foreground" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.15 }}>
                Olfactory Tours
              </h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1rem" }}>
              {tours.map((tour) => (
                <article key={tour.name} className="card flex flex-col" style={{ padding: "1.75rem" }}>
                  <h3 className="font-serif text-foreground leading-snug" style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>{tour.name}</h3>
                  <p className="flex items-baseline" style={{ gap: "0.375rem", marginBottom: "0.75rem" }}>
                    <span className="font-serif text-primary" style={{ fontSize: "1.75rem" }}>{tour.price}</span>
                    <span className="text-muted-foreground" style={{ fontSize: "0.8125rem" }}>/ person</span>
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: "0.8125rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{tour.desc}</p>
                  <div className="mt-auto" style={{ paddingTop: "1rem", borderTop: "1px solid var(--color-border)" }}>
                    <p className="text-muted-foreground" style={{ fontSize: "0.7rem", marginBottom: "0.75rem" }}>{tour.duration}</p>
                    <a href="#book" className="inline-flex items-center justify-center w-full rounded-full border border-border text-foreground font-medium transition-all duration-300 hover:bg-card hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" style={{ padding: "0.625rem 1.25rem", fontSize: "0.8125rem" }}>
                      Book This Tour
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="book" className="section border-t border-border/50" aria-labelledby="book-heading">
          <div className="frame">
            <div style={{ maxWidth: "36rem", margin: "0 auto" }}>
              <header className="text-center" style={{ marginBottom: "2rem" }}>
                <span className="eyebrow">Reservation</span>
                <h2 id="book-heading" className="font-serif text-foreground" style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", lineHeight: 1.15 }}>
                  Reserve Your Visit
                </h2>
                <p className="text-muted-foreground" style={{ fontSize: "0.8125rem", marginTop: "0.75rem" }}>We&apos;ll confirm your reservation within 24 hours.</p>
              </header>
              <form className="flex flex-col card" style={{ gap: "1.25rem", padding: "2rem", borderRadius: "1.25rem" }} method="post" action="#">
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1rem" }}>
                  <div>
                    <label htmlFor="name" className="block text-foreground font-medium" style={{ fontSize: "0.8125rem", marginBottom: "0.5rem" }}>Full Name</label>
                    <input type="text" id="name" required placeholder="Your name" className="w-full rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300" style={{ padding: "0.75rem 1rem", fontSize: "0.875rem" }} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground font-medium" style={{ fontSize: "0.8125rem", marginBottom: "0.5rem" }}>Email Address</label>
                    <input type="email" id="email" required placeholder="you@example.com" className="w-full rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300" style={{ padding: "0.75rem 1rem", fontSize: "0.875rem" }} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1rem" }}>
                  <div>
                    <label htmlFor="type" className="block text-foreground font-medium" style={{ fontSize: "0.8125rem", marginBottom: "0.5rem" }}>Visit Type</label>
                    <select id="type" className="w-full rounded-xl border border-border bg-background text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 appearance-none" style={{ padding: "0.75rem 1rem", fontSize: "0.875rem" }}>
                      <option>General Admission</option>
                      <option>Signature Olfactory Tour</option>
                      <option>Private Curator&apos;s Tour</option>
                      <option>Scent & Memory Workshop</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-foreground font-medium" style={{ fontSize: "0.8125rem", marginBottom: "0.5rem" }}>Preferred Date</label>
                    <input type="date" id="date" required className="w-full rounded-xl border border-border bg-background text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300" style={{ padding: "0.75rem 1rem", fontSize: "0.875rem" }} />
                  </div>
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center rounded-full bg-primary text-on-primary font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_8px_30px_rgba(110,27,27,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" style={{ padding: "0.875rem 2rem" }}>
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
