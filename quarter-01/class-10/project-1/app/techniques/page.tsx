import Link from "next/link";

const techniques = [
  {
    id: 1,
    title: "Hon Kazari",
    subtitle: "True Repair",
    description:
      "The traditional method using natural urushi lacquer and genuine gold powder. Each crack is filled by hand, creating veins of precious metal that become the signature of the piece.",
    steps: [
      "Clean and prepare the broken pieces",
      "Apply natural urushi lacquer",
      "Dust with pure gold powder",
      "Allow to cure for 24 hours",
      "Repeat for desired thickness",
      "Polish to a luminous finish",
    ],
    duration: "2-4 weeks",
    difficulty: "Master",
  },
  {
    id: 2,
    title: "Yobitsugi",
    subtitle: "Borrowed Repair",
    description:
      "An elegant technique that incorporates fragments from other broken vessels, creating a mosaic of interconnected histories and unexpected harmonies.",
    steps: [
      "Source complementary fragments",
      "Design mosaic composition",
      "Fit pieces into original form",
      "Secure with lacquer joints",
      "Apply gold or silver accent",
      "Seal and polish surface",
    ],
    duration: "3-6 weeks",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Tomotsugi",
    subtitle: "Companion Repair",
    description:
      "A contemporary approach where missing pieces are recreated using modern materials, maintaining dialogue between the original and the new.",
    steps: [
      "Scan missing piece geometry",
      "Model replacement fragment",
      "3D print or hand-sculpt piece",
      "Integrate with original vessel",
      "Apply unified gold treatment",
      "Document transformation",
    ],
    duration: "4-8 weeks",
    difficulty: "Expert",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Assessment",
    description:
      "We carefully examine each piece to understand its history, the nature of its breaks, and the story it carries.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Together we envision the transformation, choosing metals and techniques that honor the object's essence.",
  },
  {
    number: "03",
    title: "Restoration",
    description:
      "Our artisans work with patience and precision, applying traditional methods passed down through generations.",
  },
  {
    number: "04",
    title: "Revelation",
    description:
      "The final polish reveals the golden veins, and the piece emerges more beautiful than before its break.",
  },
];

export default function Techniques() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-28">
          <div className="badge-gold mx-auto mb-10">
            <div className="gold-dot" />
            <span>The Craft</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-10 font-heading">
            Techniques of{" "}
            <span className="text-gradient-gold italic">Golden Repair</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground/55 leading-relaxed text-lg font-light">
            Our artisans employ time-honored techniques alongside contemporary
            innovations, each method chosen to honor the unique character of
            every piece.
          </p>
        </div>

        {/* Techniques */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-40">
          {techniques.map((technique) => (
            <div
              key={technique.id}
              className="glass-card rounded-2xl p-9 sm:p-10 hover:-translate-y-1 group"
            >
              <div className="mb-9">
                <span className="text-[9px] font-semibold tracking-[0.3em] text-gold/45 uppercase">
                  {technique.subtitle}
                </span>
                <h3 className="text-3xl sm:text-4xl font-light text-foreground mt-3 font-heading group-hover:text-gold transition-colors duration-600">
                  {technique.title}
                </h3>
              </div>

              <p className="text-muted-foreground/50 mb-9 leading-relaxed text-base font-light">
                {technique.description}
              </p>

              <div className="space-y-3.5 mb-9">
                {technique.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3.5">
                    <span className="text-gold/25 font-mono text-[10px] mt-1 w-5 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base text-foreground/65 font-light">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-7 border-t border-border/20">
                <div>
                  <span className="text-[9px] text-muted-foreground/35 block mb-1.5 tracking-[0.15em] uppercase font-medium">
                    Duration
                  </span>
                  <span className="text-base font-medium text-foreground">
                    {technique.duration}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-muted-foreground/35 block mb-1.5 tracking-[0.15em] uppercase font-medium">
                    Level
                  </span>
                  <span className="text-base font-medium text-gold">
                    {technique.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="text-[10px] font-semibold tracking-[0.4em] text-gold/45 uppercase block mb-6">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-5 font-heading">
              Our <span className="text-gradient-gold italic">Process</span>
            </h2>
            <p className="max-w-lg mx-auto text-muted-foreground/45 text-lg font-light">
              Every restoration follows a sacred journey of transformation,
              guided by centuries of wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="glass-card rounded-2xl p-9 hover:-translate-y-1 group relative overflow-hidden"
              >
                <span className="text-8xl font-light text-gold/[0.03] absolute -top-3 right-3 font-heading group-hover:text-gold/[0.06] transition-colors duration-600">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-medium mb-4 text-foreground font-heading group-hover:text-gold transition-colors duration-600">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground/45 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card rounded-3xl p-14 sm:p-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 font-heading">
            Ready to Begin Your{" "}
            <span className="text-gradient-gold italic">Journey</span>?
          </h2>
          <p className="max-w-lg mx-auto text-muted-foreground/45 mb-12 leading-relaxed text-lg font-light">
            Every masterpiece starts with a single conversation. Share your
            vision with us, and let&apos;s create something extraordinary
            together.
          </p>
          <Link href="/contact" className="btn-gold cursor-pointer">
            <span>Discuss Your Project</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
