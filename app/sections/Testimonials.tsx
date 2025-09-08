"use client";
import { useRef, useEffect, useState } from "react";

const images = [
  "/images/testimonial1.png",
  "/images/testimonial2.png",
  "/images/testimonial3.svg",
  "/images/testimonial3.png"
];

export function Testimonials() {
  const scroller = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const totalSlides = images.length;
  const maxIndex = totalSlides - 3; // Show 3 cards at once
  
  const scrollToIndex = (index: number) => {
    const scrollElement = scroller.current;
    if (!scrollElement) return;
    
    const cardWidth = 276; // 260px width + 16px gap
    const scrollPosition = index * cardWidth;
    
    scrollElement.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };
  
  const goToNext = () => {
    const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    scrollToIndex(nextIndex);
  };
  
  const goToPrev = () => {
    const prevIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    scrollToIndex(prevIndex);
  };
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, maxIndex]);
  
  return (
    <section className="section" aria-label="Client Testimonials">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <div className="carousel-container" 
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
          
          {/* Navigation Buttons */}
          <button 
            className="carousel-nav carousel-nav-prev" 
            onClick={goToPrev}
            aria-label="Previous testimonials">
            ‹
          </button>
          
          <div className="scroller" ref={scroller}>
            {images.map((src, index) => (
              <div key={src} className="scroller-item">
                <img src={src} alt={`Client testimonial ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-nav carousel-nav-next" 
            onClick={goToNext}
            aria-label="Next testimonials">
            ›
          </button>
          
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


