import type { Metadata, Viewport } from "next";
import { Unbounded, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import SiteFX from "@/components/site/SiteFX";
import "./globals.css";

// Weights trimmed to what the design actually uses — fewer font files
// to download on weak devices. 400 display is never referenced.
const display = Unbounded({
  variable: "--font-helios-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Space_Grotesk({
  variable: "--font-helios-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-helios-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "HELIOS — A star, contained.",
  description:
    "HELIOS builds commercial fusion power plants. Ten million degrees of clean, unlimited energy, held in a magnetic cage and turned into the electricity that powers everything.",
  keywords: ["fusion energy", "tokamak", "clean energy", "HELIOS"],
  openGraph: {
    title: "HELIOS — A star, contained.",
    description: "Commercial fusion power. A star, contained.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080709",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="noise relative">
        <Nav />
        {children}
        <Footer />
        <SiteFX />
      </body>
    </html>
  );
}
