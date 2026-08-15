"use client";

import dynamic from "next/dynamic";

// Three.js (~1MB) is the single heaviest module — never send it until the
// hero is about to render, and never let it touch SSR.
const PlasmaCore = dynamic(() => import("./PlasmaCore"), {
  ssr: false,
  loading: () => null,
});

export default function PlasmaLoader() {
  return <PlasmaCore />;
}
