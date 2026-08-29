import Link from "next/link";

const values = [
  {
    title: "Patience",
    description:
      "We believe that true beauty cannot be rushed. Each piece receives the time it deserves.",
    icon: "⏳",
  },
  {
    title: "Respect",
    description:
      "We honor the history of every object, treating each break as a chapter in its story.",
    icon: "🙏",
  },
  {
    title: "Mastery",
    description:
      "Our artisans dedicate lifetimes to perfecting techniques passed down through generations.",
    icon: "⚒️",
  },
  {
    title: "Beauty",
    description:
      "We see imperfection not as a flaw, but as the doorway to something more beautiful.",
    icon: "✨",
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
      "Our work was featured in the Metropolitan Museum of Art&apos;s exhibition on Japanese ceramics, bringing Kintsugi to global attention.",
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
  },
  {
    name: "Kenji Tanaka",
    role: "Senior Restorer",
    description:
      "Specializes in large-scale installations and architectural Kintsugi, bringing golden repair to public spaces.",
  },
  {
    name: "Mei Chen",
    role: "Design Consultant",
    description:
      "Bridges traditional Japanese aesthetics with contemporary design sensibilities for modern commissions.",
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-widest text-accent border border-border rounded-full bg-muted">
            OUR STORY
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            The Art of <span className="text-accent">Golden Repair</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            For over three decades, our atelier has been dedicated to the ancient Japanese art of Kintsugi, transforming broken pottery into extraordinary works of art that celebrate resilience and the beauty of imperfection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Philosophy of <span className="text-accent">Wabi-Sabi</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Kintsugi is more than a repair technique; it is a philosophy rooted in the Japanese concept of Wabi-Sabi - finding beauty in imperfection and impermanence. When a ceramic vessel breaks, rather than discarding it or hiding the damage, we embrace the cracks as part of its history.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Using lacquer dusted with gold, silver, or platinum, we mend the breaks with precious metals, creating veins of light that tell a story of resilience. The repaired piece becomes more valuable and more beautiful than before its break - a powerful metaphor for human experience.
            </p>
            <Link
              href="/techniques"
              className="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors group cursor-pointer"
            >
              Explore Our Techniques
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-8xl mb-6">🍵</div>
                <p className="text-sm font-medium text-muted-foreground tracking-widest mb-2">
                  EST. 1985
                </p>
                <p className="text-2xl font-bold text-foreground">
                  Kyoto, Japan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-accent">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center bg-card rounded-2xl p-8 border border-border transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-accent">Journey</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="w-full md:w-1/2 px-4">
                    <div className="bg-card rounded-2xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                      <span className="text-accent font-bold text-lg">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mt-2 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Meet Our <span className="text-accent">Artisans</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl p-8 border border-border text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
