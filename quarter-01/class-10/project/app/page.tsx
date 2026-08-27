import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1" role="main">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}