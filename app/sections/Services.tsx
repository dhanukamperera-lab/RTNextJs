const services = [
  {
    title: "Comprehensive AC Services",
    icon: "❄️",
    img: "/images/services/ac.png",
  },
  {
    title: "Maintenance Services",
    icon: "🧰",
    img: "/images/services/maintenance.png",
  },
  {
    title: "Mechanical, Electrical & Plumbing (MEP) Services",
    icon: "⚙️",
    img: "/images/services/mep.png",
  },
  {
    title: "House Fit-Out Services",
    icon: "🏠",
    img: "/images/services/fitout.png",
  },
  {
    title: "Professional Painting Services",
    icon: "🎨",
    img: "/images/services/painting.png",
  },
  {
    title: "Gypsum Installation & Finishing",
    icon: "🧱",
    img: "/images/services/gypsum.png",
  },
  {
    title: "Custom Carpentry Services",
    icon: "🪵",
    img: "/images/services/carpentry.png",
  },
  {
    title: "Tiling & Flooring Solutions",
    icon: "🧩",
    img: "/images/services/flooring.png",
  },
  {
    title: "Handyman Services",
    icon: "🛠️",
    img: "/images/services/handyman.png",
  },
  {
    title: "Building Cleaning Services",
    icon: "🧽",
    img: "/images/services/cleaning.png",
  },
  {
    title: "Outdoor Cleaning & Maintenance",
    icon: "🌿",
    img: "/images/services/outdoor.png",
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title gradient-text">Our Services</h2>
        <p className="section-subtitle">
          <center>
            Premium solutions delivered by trusted experts in Dubai
          </center>
        </p>
        <div className="cards-grid">
          {services.map((s) => (
            <div
              key={s.title}
              className="card service-card"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="service-overlay" />
              <div className="service-content">
                <div className="service-icon" aria-hidden>
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
