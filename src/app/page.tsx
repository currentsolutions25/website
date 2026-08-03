import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <WhyChoose />
        </div>

        {/* Anchor destinations for primary navigation — content reserved */}
        <section id="services" className="sr-only" aria-label="Services">
          Services
        </section>
        <section id="our-work" className="sr-only" aria-label="Our Work">
          Our Work
        </section>
        <section id="contact" className="sr-only" aria-label="Contact">
          Contact
        </section>
      </main>
    </>
  );
}
