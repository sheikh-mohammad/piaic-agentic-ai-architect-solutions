import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Works from '@/components/Works';
import Studio from '@/components/Studio';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonial from '@/components/Testimonial';
import Journal from '@/components/Journal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <Hero />
      <Marquee />
      <Works />
      <Studio />
      <Services />
      <Process />
      <Testimonial />
      <Journal />
      <Contact />
      <Footer />
    </main>
  );
}
