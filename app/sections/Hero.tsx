import Link from "next/link";
import { HeroAnimation } from "./HeroAnimation";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-anim" aria-hidden />
      <HeroAnimation />
      <div className="container hero-inner">
        <h1 className="floating">Transforming Your <span className="gradient-text">Home</span></h1>
        <p className="floating">From Concept to Creation – Bringing Premium Design to Dubai's Finest Communities</p>
        <Link className="button" href="/contact">Let&apos;s Bring Your Vision to Life</Link>
      </div>
    </section>
  );
}


