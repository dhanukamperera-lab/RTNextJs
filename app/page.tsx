import Link from "next/link";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Differentiators } from "./sections/Differentiators";
import { Testimonials } from "./sections/Testimonials";
import { Gallery } from "./sections/Gallery";
import { Footer } from "./sections/Footer";
import dynamic from "next/dynamic";

// Import the project locations component
import ProjectLocations from './components/ProjectLocations';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Differentiators />
        <Testimonials />
        <Gallery />
        <section>
          <ProjectLocations />
        </section>
        <section className="cta">
          <div className="container">
            <h2>From Concept to Creation – Transforming Your Home</h2>
            <Link className="button" href="/contact">Let&apos;s Bring Your Vision to Life</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


