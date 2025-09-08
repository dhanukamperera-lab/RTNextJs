import { Navbar } from "../sections/Navbar";
import { Footer } from "../sections/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container">
            <h1 className="section-title">Get in Touch</h1>
            <p className="section-subtitle">We’d love to discuss your next project. Reach out for consultations, project inquiries, or any questions.</p>
            <div className="contact-cards">
              <a className="contact-card" href="mailto:info@ranastech.com">
                <span className="contact-label">Email</span>
                <span className="contact-value">info@ranastech.com</span>
              </a>
              <a className="contact-card" href="tel:+971529150569">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+971 52 915 0569</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


