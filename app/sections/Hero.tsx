import Link from "next/link";
import { HeroAnimation } from "./HeroAnimation";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-anim" aria-hidden />
      <HeroAnimation />
      <div className="container hero-inner">
        <h1>Transforming Your Home</h1>
        <p>From Concept to Creation – Transforming Your Home</p>
        <Link className="button" href="/contact">Let&apos;s Bring Your Vision to Life</Link>
      </div>
    </section>
  );
}


