const points = [
  { title: "Expert Craftsmanship", desc: "Meticulous attention to detail from seasoned professionals." },
  { title: "Trusted Expertise", desc: "Proven track record across homes and commercial spaces." },
  { title: "Exceptional Quality", desc: "Premium materials and finishes that stand the test of time." }
];

export function Differentiators() {
  return (
    <section id="why-us" className="section alt">
      <div className="container">
        <h2 className="section-title">What Makes Us Different</h2>
        <div className="cards-grid three">
          {points.map((p) => (
            <div key={p.title} className="card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


