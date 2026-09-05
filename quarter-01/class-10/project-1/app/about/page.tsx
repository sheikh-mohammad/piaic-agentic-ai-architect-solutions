import Link from "next/link";

const values = [
  {
    title: "Patience",
    description:
      "We believe that true beauty cannot be rushed. Each piece receives the time it deserves.",
    number: "01",
  },
  {
    title: "Respect",
    description:
      "We honor the history of every object, treating each break as a chapter in its story.",
    number: "02",
  },
  {
    title: "Mastery",
    description:
      "Our artisans dedicate lifetimes to perfecting techniques passed down through generations.",
    number: "03",
  },
  {
    title: "Beauty",
    description:
      "We see imperfection not as a flaw, but as the doorway to something more beautiful.",
    number: "04",
  },
];

const timeline = [
  {
    year: "1985",
    title: "The Beginning",
    description:
      "Master artisan Takeshi Yamamoto founded our atelier in Kyoto, dedicated to preserving the ancient art of Kintsugi.",
  },
  {
    year: "1998",
    title: "International Recognition",
    description:
      "Our work was featured in the Metropolitan Museum of Art's exhibition on Japanese ceramics, bringing Kintsugi to global attention.",
  },
  {
    year: "2010",
    title: "New Generation",
    description:
      "Second-generation artisan Yuki Yamamoto introduced contemporary techniques while maintaining traditional integrity.",
  },
  {
    year: "2024",
    title: "Digital Atelier",
    description:
      "We launched our digital presence, making the art of Kintsugi accessible to collectors worldwide while maintaining our intimate, hands-on approach.",
  },
];

const team = [
  {
    name: "Yuki Yamamoto",
    role: "Master Artisan",
    description:
      "Second-generation Kintsugi master with 25 years of experience in traditional Japanese ceramic restoration.",
    initials: "YY",
  },
  {
    name: "Kenji Tanaka",
    role: "Senior Restorer",
    description:
      "Specializes in large-scale installations and architectural Kintsugi, bringing golden repair to public spaces.",
    initials: "KT",
  },
  {
    name: "Mei Chen",
    role: "Design Consultant",
    description:
      "Bridges traditional Japanese aesthetics with contemporary design sensibilities for modern commissions.",
    initials: "MC",
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-32">
          <div className="badge-gold mx-auto mb-10">
            <div className="gold-dot" />
            <span>Our Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-10 font-heading">
            The Art of{" "}
            <span className="text-gradient-gold italic">Golden Repair</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground/55 leading-relaxed text-lg font-light">
            For over three decades, our atelier has been dedicated to the ancient
            Japanese art of Kintsugi, transforming broken pottery into
            extraordinary works of art that celebrate resilience and the beauty
            of imperfection.
          </p>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center mb-40">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.4em] text-gold/45 uppercase block mb-6">
              Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-10 font-heading">
              Philosophy of{" "}
              <span className="text-gradient-gold italic">Wabi-Sabi</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-muted-foreground/55 leading-relaxed text-lg font-light">
                Kintsugi is more than a repair technique; it is a philosophy
                rooted in the Japanese concept of Wabi-Sabi &mdash; finding
                beauty in imperfection and impermanence. When a ceramic vessel
                breaks, rather than discarding it or hiding the damage, we
                embrace the cracks as part of its history.
              </p>
              <p className="text-muted-foreground/55 leading-relaxed text-lg font-light">
                Using lacquer dusted with gold, silver, or platinum, we mend the
                breaks with precious metals, creating veins of light that tell a
                story of resilience. The repaired piece becomes more valuable and
                more beautiful than before its break &mdash; a powerful metaphor
                for human experience.
              </p>
            </div>
            <Link
              href="/techniques"
              className="inline-flex items-center text-gold font-medium text-xs tracking-[0.15em] uppercase hover:text-gold-light transition-colors duration-400 group cursor-pointer"
            >
              Explore Our Techniques
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
            <div className="aspect-square rounded-3xl bg-surface-elevated border border-border/25 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.025] to-transparent" />
              <svg className="absolute inset-0 w-full h-full opacity-[0.035]" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="0.8">
                <path d="M50 100 Q120 180 200 200 Q280 220 350 150" className="text-gold" />
                <path d="M100 250 Q180 300 200 350 Q220 400 300 380" className="text-gold" />
                <path d="M200 50 Q220 150 200 250 Q180 350 200 380" className="text-gold" />
              </svg>
              <div className="relative text-center p-14">
                <div className="w-32 h-32 mx-auto mb-10 rounded-full border border-gold/12 flex items-center justify-center">
                  <svg className="w-14 h-14 text-gold/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                  </svg>
                </div>
                <p className="text-[9px] font-semibold tracking-[0.45em] text-gold/25 uppercase mb-3">
                  Est. 1985
                </p>
                <p className="text-xl font-light text-foreground font-heading">
                  Kyoto, Japan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <span className="text-[10px] font-semibold tracking-[0.4em] text-gold/45 uppercase block mb-6">
              Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-heading">
              Our{" "}
              <span className="text-gradient-gold italic">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-card rounded-2xl p-9 hover:-translate-y-1 group"
              >
                <span className="text-5xl font-light text-gold/[0.07] font-heading block mb-6">
                  {value.number}
                </span>
                <h3 className="text-2xl font-medium mb-4 text-foreground group-hover:text-gold transition-colors duration-600 font-heading">
                  {value.title}
                </h3>
                <p className="text-base text-muted-foreground/45 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <span className="text-[10px] font-semibold tracking-[0.4em] text-gold/45 uppercase block mb-6">
              History
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-heading">
              Our{" "}
              <span className="text-gradient-gold italic">Journey</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border/20 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-1/2 px-5">
                    <div className="glass-card rounded-2xl p-9">
                      <span className="text-gold/60 font-light text-xl font-heading">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-medium text-foreground mt-2 mb-4 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-base text-muted-foreground/45 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-20">
            <span className="text-[10px] font-semibold tracking-[0.4em] text-gold/45 uppercase block mb-6">
              Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-heading">
              Meet Our{" "}
              <span className="text-gradient-gold italic">Artisans</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="glass-card rounded-2xl p-12 text-center hover:-translate-y-1 group"
              >
                <div className="w-24 h-24 rounded-full bg-surface-elevated border border-gold/12 mx-auto mb-8 flex items-center justify-center group-hover:border-gold/25 transition-colors duration-600">
                  <span className="text-xl font-light text-gold/45 font-heading">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-2 font-heading">
                  {member.name}
                </h3>
                <p className="text-gold/55 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
                  {member.role}
                </p>
                <p className="text-base text-muted-foreground/45 leading-relaxed font-light">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
