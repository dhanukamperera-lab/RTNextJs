"use client";
import { useState } from "react";

const projectImages = [
  "/images/project1.jpeg",
  "/images/project2.jpeg",
  "/images/project3.jpeg",
  "/images/project4.jpeg",
  "/images/project5.jpeg",
  "/images/project6.jpeg",
  "/images/project7.jpeg",
  "/images/project8.jpeg",
  "/images/project9.jpeg",
];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title gradient-text">View Our Projects</h2>
        <center>
          <p className="section-subtitle">
            Showcasing completed projects to demonstrate our capabilities
          </p>
        </center>
        <div className="gallery-grid">
          {projectImages.map((src, index) => (
            <button
              key={`${src}-${index}`}
              className="gallery-item"
              onClick={() => setActive(src)}
            >
              <img src={src} alt={`Project ${index + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <img src={active} alt="Project large" />
        </div>
      )}
    </section>
  );
}
