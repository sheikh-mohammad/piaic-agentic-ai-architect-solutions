"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SiteFX — single client orchestrator for all scroll motion.
 * Runs on every page (Nav/Footer/SiteFX live in the root layout).
 * Sections stay server-rendered; this component locates them by
 * data-attributes and wires GSAP + the ember cursor glow. Every tween
 * is guarded so it simply no-ops on pages that lack its elements.
 *
 * The motion effect re-runs whenever the route changes (usePathname)
 * so a soft navigation to another page gets a fresh hero intro and
 * ScrollTriggers for the new page's DOM. The hero intro uses
 * clearProps so content can never be left mid-animation (hidden) if
 * a timeline is ever interrupted.
 */
export default function SiteFX() {
  const pathname = usePathname();

  useEffect(() => {
    const mq = gsap.matchMedia();

    mq.add("(prefers-reduced-motion: no-preference)", () => {
      // ── Page-hero intro (home hero + all subpage heroes) ──────────
      try {
        const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
        intro
          .from(
            "[data-hero-line] .line-inner",
            { yPercent: 118, duration: 1.1, stagger: 0.1, clearProps: "transform" },
            0.08
          )
          .from(
            "[data-hero-fade]",
            { y: 26, opacity: 0, duration: 0.9, stagger: 0.07, clearProps: "opacity,transform" },
            "-=0.55"
          );
      } catch {
        /* never let JS leave above-the-fold content hidden */
      }

      // ── Home: plasma core drifts off as the page scrolls away ─────
      if (document.querySelector("[data-hero]")) {
        gsap.to("[data-core-wrap]", {
          opacity: 0,
          scale: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero]",
            start: "top top",
            end: "bottom 15%",
            scrub: true,
          },
        });
      }

      // ── Generic reveal-on-scroll ──────────────────────────────────
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.05,
            ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 86%" },
          }
        );
      });

      // ── Staggered grid groups (cards / facts) ─────────────────────
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((el) => {
        gsap.fromTo(
          el.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            stagger: 0.08,
            scrollTrigger: { trigger: el, start: "top 84%" },
          }
        );
      });

      // ── Manifesto word-by-word scrub highlight ────────────────────
      if (document.querySelector("[data-manifesto]")) {
        gsap.fromTo(
          "[data-manifesto] .word",
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.03,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-manifesto]",
              start: "top 72%",
              end: "bottom 42%",
              scrub: 0.4,
            },
          }
        );
      }

      // ── Count-up metrics ──────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const state = { v: 0 };
        gsap.to(state, {
          v: target,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent =
              decimals > 0
                ? state.v.toFixed(decimals)
                : Math.round(state.v).toLocaleString("en-US");
          },
        });
      });

      // ── Timeline line grows as you scroll ─────────────────────────
      if (document.querySelector("[data-timeline]")) {
        gsap.fromTo(
          "[data-timeline-line]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: "[data-timeline]",
              start: "top 70%",
              end: "bottom 65%",
              scrub: 0.5,
            },
          }
        );
      }
    });

    return () => {
      mq.revert();
    };
  }, [pathname]);

  // Ember cursor glow — GPU-cheap transform lerp, pointer-fine only.
  useEffect(() => {
    const cur = document.querySelector<HTMLElement>(".cursor-fx");
    if (!cur) return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.1;
      y += (ty - y) * 0.1;
      cur.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="cursor-fx" aria-hidden="true" />;
}
