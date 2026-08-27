import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aroma Antiquaria — Archaeology of Scent",
  description: "A digital museum and archive dedicated to the reconstruction of historical perfumes through archaeological evidence, ancient texts, and molecular analysis.",
  keywords: ["historical perfume", "archaeology of scent", "ancient fragrance", "perfume reconstruction", "olfactory heritage", "molecular archaeology"],
  authors: [{ name: "Aroma Antiquaria" }],
  openGraph: {
    title: "Aroma Antiquaria — Archaeology of Scent",
    description: "A digital museum and archive dedicated to the reconstruction of historical perfumes through archaeological evidence, ancient texts, and molecular analysis.",
    type: "website",
    locale: "en_US",
    siteName: "Aroma Antiquaria",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}