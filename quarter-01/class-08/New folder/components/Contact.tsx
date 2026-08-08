'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Loader2, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Aurora from '@/components/Aurora';
import Sparkle from '@/components/Sparkle';
import { CONTACT } from '@/lib/data';

type FormData = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const INITIAL: FormData = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  message: '',
};

const PROJECT_TYPES = [
  'Residential',
  'Commercial / Workplace',
  'Interior Architecture',
  'Product / Furniture',
  'Master Planning',
  'Other',
];

const BUDGETS = ['$50k – $150k', '$150k – $500k', '$500k – $2M', '$2M+', 'Not sure yet'];

export default function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const set = (key: keyof FormData) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) next.name = 'Please tell us your name.';
    if (!form.email.trim()) {
      next.email = 'An email lets us reply.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'That email doesn’t look right.';
    }
    if (!form.projectType) next.projectType = 'Choose a project type.';
    if (!form.message.trim()) next.message = 'A few words about your project helps.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-ink-soft py-24 sm:py-32">
      <Aurora className="opacity-50" intensity={0.22} />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full -translate-x-1/2 gradient-line" aria-hidden="true" />

      <div className="container-x relative grid gap-16 lg:grid-cols-12">
        {/* Left: invitation */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-gradient-to-r from-gold to-violet" aria-hidden="true" />
              Contact
            </p>
            <h2 className="font-display text-4xl font-semibold uppercase leading-tight sm:text-5xl lg:text-6xl">
              Let&rsquo;s build something <span className="text-grad-iris">timeless.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              Tell us about your site, your ambition and your timeline. We reply to every
              enquiry within two working days.
            </p>

            <ul className="mt-10 space-y-3">
              {[
                { icon: Mail, text: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: Phone, text: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
                { icon: MapPin, text: CONTACT.address, href: undefined },
              ].map((item) => (
                <li key={item.text}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="glass group inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm text-white/80 transition-colors hover:border-gold/50"
                    >
                      <item.icon className="h-4 w-4 text-gold" aria-hidden="true" />
                      {item.text}
                    </a>
                  ) : (
                    <span className="glass inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm text-white/80">
                      <item.icon className="h-4 w-4 text-gold" aria-hidden="true" />
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-3">
              <Sparkle className="h-4 w-4 text-gold" />
              <p className="text-xs uppercase tracking-widest2 text-white/45">
                Currently accepting projects for 2027
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="glass-strong rounded-3xl p-6 sm:p-10">
            {status === 'success' ? (
              <div
                className="flex min-h-[420px] flex-col items-center justify-center p-10 text-center"
                role="status"
              >
                <CheckCircle2 className="h-14 w-14 text-teal" aria-hidden="true" />
                <h3 className="mt-6 font-display text-2xl font-semibold uppercase text-white">
                  Thank you, {form.name.split(' ')[0] || 'friend'}.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
                  Your brief is with the studio. We&rsquo;ll write to {form.email} within two
                  working days.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className="mb-1 block text-xs font-semibold uppercase tracking-widest2 text-white/60">
                      Your name
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => set('name')(e.target.value)}
                      className={`input-line ${errors.name ? '!border-coral' : ''}`}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs text-coral" role="alert">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="c-email" className="mb-1 block text-xs font-semibold uppercase tracking-widest2 text-white/60">
                      Email address
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => set('email')(e.target.value)}
                      className={`input-line ${errors.email ? '!border-coral' : ''}`}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs text-coral" role="alert">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-type" className="mb-1 block text-xs font-semibold uppercase tracking-widest2 text-white/60">
                      Project type
                    </label>
                    <select
                      id="c-type"
                      value={form.projectType}
                      onChange={(e) => set('projectType')(e.target.value)}
                      className={`input-line cursor-pointer ${form.projectType ? 'text-white' : 'text-white/40'} ${errors.projectType ? '!border-coral' : ''}`}
                      aria-invalid={!!errors.projectType}
                    >
                      <option value="" disabled>
                        Select a type…
                      </option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-ink text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="mt-2 text-xs text-coral" role="alert">{errors.projectType}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="c-budget" className="mb-1 block text-xs font-semibold uppercase tracking-widest2 text-white/60">
                      Budget range
                    </label>
                    <select
                      id="c-budget"
                      value={form.budget}
                      onChange={(e) => set('budget')(e.target.value)}
                      className={`input-line cursor-pointer ${form.budget ? 'text-white' : 'text-white/40'}`}
                    >
                      <option value="" disabled>
                        Select a range…
                      </option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b} className="bg-ink text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="c-message" className="mb-1 block text-xs font-semibold uppercase tracking-widest2 text-white/60">
                    About the project
                  </label>
                  <textarea
                    id="c-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => set('message')(e.target.value)}
                    className={`input-line resize-none ${errors.message ? '!border-coral' : ''}`}
                    placeholder="Site location, scale, timeline, anything you feel is important…"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-coral" role="alert">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-grad w-full cursor-pointer sm:w-auto"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send enquiry
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
