"use client";
import { useRef, useEffect } from "react";

const images = [
  "/images/testimonial1.png",
  "/images/testimonial2.png",
  "/images/testimonial3.svg",
  "/images/testimonial3.png"
];

export function Testimonials() {
  const scroller = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const scrollElement = scroller.current;
    if (!scrollElement) return;
    
    let scrollPosition = 0;
    const cardWidth = 280; // 260px width + 16px gap + 4px extra
    const maxScroll = (images.length - 3) * cardWidth;
    
    const autoScroll = () => {
      scrollPosition += cardWidth;
      if (scrollPosition > maxScroll) {
        scrollPosition = 0;
      }
      scrollElement.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    };
    
    const interval = setInterval(autoScroll, 3000);
    return () => clearInterval(interval);
  }, []);
  
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


