"use client";
import { useState } from "react";

const projectImages = [
  "/images/project1.svg",
  "/images/project2.svg",
  "/images/project3.svg",
  "/images/project4.svg",
  "/images/project5.svg",
  "/images/project6.svg"
];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">View Our Projects</h2>
        <p className="section-subtitle">Showcasing completed projects to demonstrate our capabilities</p>
        <div className="gallery-grid">
          {projectImages.map((src) => (
            <button key={src} className="gallery-item" onClick={() => setActive(src)}>
              <img src={src} alt="Project" loading="lazy" />
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


