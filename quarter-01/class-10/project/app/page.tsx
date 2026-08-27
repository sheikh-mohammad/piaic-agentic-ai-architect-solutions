import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Spotlight } from "@/app/components/Spotlight";
import { Newsletter } from "@/app/components/Newsletter";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1" role="main">
        <Hero />
        <About />
        <Spotlight />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}