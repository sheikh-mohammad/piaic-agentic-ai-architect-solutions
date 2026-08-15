# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** HELIOS — Fusion Energy
**Generated:** 2026-08-15
**Category:** Clean Energy / Industrial-Futurist
**Design Dials:** Variance 9/10 (Bold / Editorial-Cinematic) | Motion 8/10 (Scrub-driven)

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Background | `#080709` | `--color-bg` |
| Surface | `#0E0C0A` | `--color-surface` |
| Surface Raised | `#14110E` | `--color-surface-2` |
| Foreground | `#F4F1EA` | `--color-fg` |
| Muted | `#8F8A82` | `--color-muted` |
| Border | `#26221C` | `--color-border` |
| Primary (Solar Ember) | `#FF5A1F` | `--color-primary` |
| Primary Strong | `#FF3D00` | `--color-primary-strong` |
| Secondary (Amber) | `#FFB01F` | `--color-secondary` |
| Tertiary (Cream) | `#FFE0B8` | `--color-tertiary` |
| Glow | `#FF7A33` | `--color-glow` |
| Destructive | `#FF4D4D` | `--color-destructive` |

**Color Notes:** Warm void black + solar ember. Plasma gradient `#FF3D00 → #FFB01F → #FFE0B8` reserved for the 3D core and glow accents. WCAG AA: `fg` on `bg` ≈ 13:1, `muted` on `bg` ≈ 5.2:1. Do NOT introduce violet/blue "AI" gradients.

### Typography

- **Display Font:** Unbounded (400–800) — wide, futuristic, humanist-futurist. Used only for headlines, logotype, big numerals.
- **Body Font:** Space Grotesk (300–700) — neutral grotesque for paragraphs, UI.
- **Mono Font:** JetBrains Mono (400–700) — labels, eyebrows, data, indices, nav.
- **Mood:** contained power, physics, cinema, industrial precision, optimism
- **Google Fonts:** Unbounded + Space Grotesk + JetBrains Mono (loaded via `next/font`, self-hosted, zero CLS)

**Rules:**
- Eyebrows: mono, uppercase, letter-spacing `0.18em`, size 12px.
- Display sizing is fluid: `clamp()` from ~2.6rem (mobile) to ~7.5rem (desktop) for the hero.
- Body copy: Space Grotesk, `text-fg/80`, max-width ~62ch.
- Never letter-space display type beyond normal; it is already wide.

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `40px` / `2.5rem` | Large gaps |
| `--space-2xl` | `64px` / `4rem` | Section margins |
| `--space-3xl` | `96px` / `6rem` | Hero + major section padding |

Sections alternate `py-2xl` / `py-3xl`; generous, cinematic whitespace is the signature.

### Shadow / Glow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--glow-sm` | `0 0 24px rgba(255,90,31,0.15)` | Subtle ember wash |
| `--glow-md` | `0 0 60px rgba(255,90,31,0.22)` | Core glow, hover states |
| `--glow-lg` | `0 0 120px rgba(255,90,31,0.3)` | Hero halo, CTA |
| `--shadow-card` | `0 20px 60px rgba(0,0,0,0.5)` | Raised cards |

---

## Component Specs

### Buttons

```css
/* Primary CTA — ember fill, glow, arrow slide */
.btn-primary {
  background: linear-gradient(135deg, #FF3D00, #FF5A1F);
  color: #0A0908;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 600;
  font-family: var(--font-mono);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 13px;
  transition: box-shadow 250ms ease, transform 250ms ease, filter 250ms ease;
  cursor: pointer;
  box-shadow: var(--glow-sm);
}
.btn-primary:hover {
  box-shadow: var(--glow-md);
  transform: translateY(-2px);
  filter: brightness(1.05);
}

/* Ghost button — hairline, hover fills with ember text + arrow */
.btn-ghost {
  background: transparent;
  color: var(--color-fg);
  border: 1px solid var(--color-border);
  padding: 14px 28px;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: border-color 250ms ease, color 250ms ease;
  cursor: pointer;
}
.btn-ghost:hover { border-color: var(--color-primary); color: var(--color-primary); }
```

### Hairline Divider

1px `var(--color-border)` line. Used between all sections and inside lists. Never use a heavy border.

### Section Index

Each section carries a mono index `01 — REACTOR` at the top-left, mono uppercase, muted, with an ember tick `—`.

### Cards

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  padding: 28px;
  transition: border-color 250ms ease, transform 250ms ease;
}
.card:hover { border-color: var(--color-primary); transform: translateY(-3px); }
```

---

## Style Guidelines

**Style:** Editorial Cinematic

**Keywords:** oversized display type, asymmetric grid, mono technical labels, hairline rules, one glowing object, film-grain atmosphere, high contrast, physics-poster energy

**Best For:** Mission-led technology brands, energy, aerospace, deep-tech

**Key Effects:** masked line reveals, scroll-scrubbed 3D, word-by-word manifesto reveal, count-up numerals, infinite marquee, ember glow on hover

### Page Pattern

**Pattern Name:** Cinematic One-Pager

- **Conversion Strategy:** Single overwhelming "why now" + one clear CTA. Emotional, then rational.
- **Section Order:** 1. Hero (3D core + headline), 2. Marquee, 3. Manifesto (word reveal), 4. The Core (sticky facts), 5. How it works, 6. Metrics (count-up), 7. Roadmap, 8. CTA, 9. Footer.

---

## Motion

**Master Ease:** `power4.out` for reveals, `expo.out` for hero, `power2.inOut` for scrubs.
**Stagger:** 60–90ms between items. Never stagger > 12 items.
**Durations:** reveals 0.8–1.1s; marquee 28s linear; scrubs bounded to section.

```js
// Masked line reveal — headline split into lines wrapped in overflow-hidden
gsap.to('.line-inner', {
  yPercent: -100,
  duration: 1,
  stagger: 0.08,
  ease: 'power4.out',
  scrollTrigger: { trigger, start: 'top 80%' },
});
```

**Rules:**
- ✅ One hero object moves with the scroll (the plasma core); everything else is typographic.
- ✅ `prefers-reduced-motion`: render static, skip all GSAP, CSS marquee paused.
- ✅ Scrub only with `toggleActions`/`scrub` bounded to a section; never free-run time-based tweens on page load.
- ❌ No bounce/back easings on core UI; overshoot reads as toy-like.
- ❌ No random floating elements; every animation must answer a scroll or intent.
- ⚡ Three.js: cap DPR at 1.75, no MSAA on the shader mesh, pause render loop when off-screen or tab hidden, dispose on unmount, defer context creation past first paint.

---

## Anti-Patterns (Do NOT Use)

- ❌ Purple / blue-violet gradient "AI" heroes
- ❌ Emojis as icons — use inline SVG (stroke, 1.5px)
- ❌ Missing `cursor-pointer` on all interactive elements
- ❌ Instant state changes — always 200–300ms transitions
- ❌ Layout-shifting hovers (scale must use transform, never width/height)
- ❌ Low-contrast text (< 4.5:1)
- ❌ Invisible focus states — always visible 2px ember ring
- ❌ Horizontal scroll on mobile / content under fixed nav

---

## Pre-Delivery Checklist

- [ ] No emojis as icons (SVG only, consistent stroke set)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states 200–300ms, transform-based only
- [ ] Contrast: body 4.5:1+, muted ≥ 4.5:1 on bg
- [ ] `prefers-reduced-motion` respected (3D static + no scroll animation)
- [ ] Responsive: 375px / 768px / 1024px / 1440px
- [ ] No content hidden behind fixed nav (nav has solid-on-scroll bg)
- [ ] No horizontal scroll on mobile
- [ ] Three.js: DPR cap, off-screen pause, dispose, WebGL fallback
- [ ] Fonts self-hosted via next/font (no external font requests)
- [ ] Zero network images; visuals are shaders / CSS / inline SVG
