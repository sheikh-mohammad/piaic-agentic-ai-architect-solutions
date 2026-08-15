import type { Metadata, Viewport } from "next";
import { Unbounded, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Unbounded({
  variable: "--font-helios-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Space_Grotesk({
  variable: "--font-helios-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-helios-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
        {children}
      </body>
    </html>
  );
}
