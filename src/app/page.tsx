import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />

        {/* Anchor destinations for primary navigation — content reserved */}
        <section id="services" className="sr-only" aria-label="Services">
          Services
        </section>
        <section id="our-work" className="sr-only" aria-label="Our Work">
          Our Work
        </section>
      </main>
      <Footer />
    </>
  );
}
