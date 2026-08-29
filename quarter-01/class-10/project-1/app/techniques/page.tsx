import Link from "next/link";

const techniques = [
  {
    id: 1,
    title: "Hon Kazari",
    subtitle: "True Repair",
    description: "The traditional method using natural urushi lacquer and genuine gold powder. Each crack is filled by hand, creating veins of precious metal that become the signature of the piece.",
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
    color: "from-amber-50 to-yellow-50",
    accentColor: "text-amber-700",
  },
  {
    id: 2,
    title: "Yobitsugi",
    subtitle: "Borrowed Repair",
    description: "An elegant technique that incorporates fragments from other broken vessels, creating a mosaic of interconnected histories and unexpected harmonies.",
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
    color: "from-orange-50 to-amber-50",
    accentColor: "text-orange-700",
  },
  {
    id: 3,
    title: "Tomotsugi",
    subtitle: "Companion Repair",
    description: "A contemporary approach where missing pieces are recreated using modern materials, maintaining dialogue between the original and the new.",
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
    color: "from-yellow-50 to-orange-50",
    accentColor: "text-yellow-700",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Assessment",
    description: "We carefully examine each piece to understand its history, the nature of its breaks, and the story it carries.",
  },
  {
    number: "02",
    title: "Design",
    description: "Together we envision the transformation, choosing metals and techniques that honor the object&apos;s essence.",
  },
  {
    number: "03",
    title: "Restoration",
    description: "Our artisans work with patience and precision, applying traditional methods passed down through generations.",
  },
  {
    number: "04",
    title: "Revelation",
    description: "The final polish reveals the golden veins, and the piece emerges more beautiful than before its break.",
  },
];

export default function Techniques() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-widest text-accent border border-border rounded-full bg-muted">
            THE CRAFT
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Techniques of <span className="text-accent">Golden Repair</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Our artisans employ time-honored techniques alongside contemporary innovations, each method chosen to honor the unique character of every piece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {techniques.map((technique) => (
            <div
              key={technique.id}
              className={`rounded-3xl bg-gradient-to-br ${technique.color} border border-border p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1`}
            >
              <div className="mb-6">
                <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  {technique.subtitle}
                </span>
                <h3 className="text-3xl font-bold text-foreground mt-2">
                  {technique.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {technique.description}
              </p>

              <div className="space-y-3 mb-8">
                {technique.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-accent font-mono text-sm mt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-foreground">{step}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">
                    Duration
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {technique.duration}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground block mb-1">
                    Level
                  </span>
                  <span
                    className={`text-sm font-semibold ${technique.accentColor}`}
                  >
                    {technique.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Every restoration follows a sacred journey of transformation, guided by centuries of wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="relative bg-card rounded-2xl p-8 border border-border transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
              >
                <span className="text-6xl font-bold text-accent/10 absolute top-4 right-6">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-3xl p-12 border border-border text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
            Ready to Begin Your <span className="text-accent">Journey</span>?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            Every masterpiece starts with a single conversation. Share your vision with us, and let&apos;s create something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-full font-semibold tracking-wide hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 cursor-pointer"
          >
            Discuss Your Project
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
