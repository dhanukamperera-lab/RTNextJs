"use client";
import { useRef } from "react";

const images = [
  "/images/testimonial1.png",
  "/images/testimonial2.png",
  "/images/testimonial3.svg",
  "/images/testimonial3.png"
];

export function Testimonials() {
  const scroller = useRef<HTMLDivElement | null>(null);
  return (
    <section className="section" aria-label="Client Testimonials">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <div className="scroller" ref={scroller}>
          {images.map((src) => (
            <div key={src} className="scroller-item">
              <img src={src} alt="Client testimonial" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


