import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const cormorant = Cormorant({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kintsugi Atelier | The Art of Golden Repair",
  description: "Discover the ancient Japanese art of Kintsugi - embracing imperfections through golden repair. Each piece tells a story of resilience, beauty, and transformation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
