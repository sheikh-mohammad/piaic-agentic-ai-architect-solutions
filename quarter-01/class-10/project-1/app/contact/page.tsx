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
    setTimeout(() => setSubmitted(false), 4000);
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
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-28">
          <div className="badge-gold mx-auto mb-10">
            <div className="gold-dot" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-10 font-heading">
            Commission a{" "}
            <span className="text-gradient-gold italic">Masterpiece</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground/55 leading-relaxed text-lg font-light">
            Every restoration begins with a conversation. Share your vision with
            us, and let&apos;s create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-10 sm:p-14">
              {submitted && (
                <div className="mb-10 p-5 bg-gold/[0.05] border border-gold/12 rounded-xl text-gold/75 text-center text-base font-light">
                  Thank you for your message! We&apos;ll be in touch within 24
                  hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[10px] font-semibold text-muted-foreground/45 mb-3 tracking-[0.2em] uppercase"
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
                      className="input-luxury"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[10px] font-semibold text-muted-foreground/45 mb-3 tracking-[0.2em] uppercase"
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
                      className="input-luxury"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[10px] font-semibold text-muted-foreground/45 mb-3 tracking-[0.2em] uppercase"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-luxury"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-[10px] font-semibold text-muted-foreground/45 mb-3 tracking-[0.2em] uppercase"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="input-luxury cursor-pointer appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="tea-ceremony">Tea Ceremony Pieces</option>
                      <option value="floral">
                        Floral Arrangement Vessels
                      </option>
                      <option value="dining">Dining &amp; Serving Ware</option>
                      <option value="decorative">Decorative Objects</option>
                      <option value="consultation">Consultation Only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-semibold text-muted-foreground/45 mb-3 tracking-[0.2em] uppercase"
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
                    className="input-luxury resize-none"
                    placeholder="Describe the piece you'd like restored, its history, and your vision for the transformation..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold justify-center cursor-pointer"
                >
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-9">
              <h3 className="text-xl font-medium text-foreground mb-7 font-heading">
                Visit Our Atelier
              </h3>
              <div className="space-y-6 text-base text-muted-foreground/55 font-light">
                <div>
                  <span className="font-medium text-foreground/60 block mb-1.5 text-[10px] tracking-[0.15em] uppercase">
                    Address
                  </span>
                  <p className="leading-relaxed">
                    123 Sakura Street
                    <br />
                    Kyoto, Japan 600-0000
                  </p>
                </div>
                <div>
                  <span className="font-medium text-foreground/60 block mb-1.5 text-[10px] tracking-[0.15em] uppercase">
                    Hours
                  </span>
                  <p className="leading-relaxed">
                    Tuesday - Saturday: 10am - 6pm
                    <br />
                    Sunday - Monday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-9">
              <h3 className="text-xl font-medium text-foreground mb-7 font-heading">
                Contact Info
              </h3>
              <div className="space-y-6 text-base text-muted-foreground/55 font-light">
                <div>
                  <span className="font-medium text-foreground/60 block mb-1.5 text-[10px] tracking-[0.15em] uppercase">
                    Email
                  </span>
                  <p>hello@kintsugiatelier.com</p>
                </div>
                <div>
                  <span className="font-medium text-foreground/60 block mb-1.5 text-[10px] tracking-[0.15em] uppercase">
                    Phone
                  </span>
                  <p>+81 (75) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-9 border border-gold/8 bg-gold/[0.02]">
              <h3 className="text-xl font-medium text-foreground mb-4 font-heading">
                Virtual Consultation
              </h3>
              <p className="text-base text-muted-foreground/45 mb-6 leading-relaxed font-light">
                Can&apos;t visit our Kyoto atelier? We offer video consultations
                worldwide to discuss your restoration project.
              </p>
              <span className="inline-flex items-center text-gold/65 text-[10px] font-semibold tracking-[0.15em] uppercase cursor-pointer hover:text-gold transition-colors duration-400">
                Schedule a Call
                <svg
                  className="ml-2 w-3.5 h-3.5"
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
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
