"use client";

import { useEffect, useState, useRef } from "react";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = { threshold: 0.15 };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Molecular Reconstruction",
      description: "GC-MS analysis of archaeological residue transforms ancient remains into scientifically grounded fragrances.",
      image: "⚗",
    },
    {
      title: "Textual Decipherment",
      description: "From cuneiform tablets to Linear B archives, we unlock perfume recipes locked in dead languages.",
      image: "𓏛",
    },
    {
      title: "Experimental Perfumery",
      description: "Master perfumers translate historical data into wearable scents you can experience today.",
      image: "✿",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 border-y border-border bg-muted/20"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-mono uppercase tracking-widest text-primary mb-4 block">
            About the Museum
          </span>
          <h2 id="about-heading" className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6 text-balance">
            We Resurrect Fragrances That Vanished with Their Civilizations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Aroma Antiquaria is the world's first dedicated museum of archaeological perfumery. We unite
            archaeologists, linguists, chemists, and perfumers in a single mission: to recover the scents
            of the ancient world through rigorous science and artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)" }}>
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 text-primary text-3xl mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                {feature.image}
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {[
            { value: "147", label: "Fragrances Reconstructed" },
            { value: "23", label: "Civilizations Explored" },
            { value: "89", label: "Peer-Reviewed Papers" },
            { value: "34", label: "Museum Partners" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl border border-border bg-card transition-all duration-700"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transitionDelay: `${index * 100}ms` }}
            >
              <div className="font-serif text-4xl font-medium text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}