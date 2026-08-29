"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-widest text-accent border border-border rounded-full bg-muted">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Commission a <span className="text-accent">Masterpiece</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Every restoration begins with a conversation. Share your vision with us, and let&apos;s create something extraordinary together. We&apos;d love to hear about the piece you&apos;d like to transform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-3xl p-8 sm:p-12 border border-border">
              {submitted && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center">
                  Thank you for your message! We&apos;ll be in touch within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="tea-ceremony">Tea Ceremony Pieces</option>
                      <option value="floral">Floral Arrangement Vessels</option>
                      <option value="dining">Dining & Serving Ware</option>
                      <option value="decorative">Decorative Objects</option>
                      <option value="consultation">Consultation Only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Tell Us About Your Piece
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Describe the piece you&apos;d like restored, its history, and your vision for the transformation..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent text-white rounded-full font-semibold tracking-wide hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-3xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Visit Our Atelier
              </h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Address:</span>
                  <br />
                  123 Sakura Street
                  <br />
                  Kyoto, Japan 600-0000
                </p>
                <p>
                  <span className="font-semibold text-foreground">Hours:</span>
                  <br />
                  Tuesday - Saturday: 10am - 6pm
                  <br />
                  Sunday - Monday: Closed
                </p>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Contact Info
              </h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Email:</span>
                  <br />
                  hello@kintsugiatelier.com
                </p>
                <p>
                  <span className="font-semibold text-foreground">Phone:</span>
                  <br />
                  +81 (75) 123-4567
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 border border-accent/20">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Virtual Consultation
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Can&apos;t visit our Kyoto atelier? We offer video consultations worldwide to discuss your restoration project.
              </p>
              <span className="inline-flex items-center text-accent text-sm font-semibold">
                Schedule a Call →
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
