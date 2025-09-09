import { Navbar } from "../sections/Navbar";
import { Footer } from "../sections/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <div className="contact-hero-content">
              <h1>Let's Transform Your Space Together</h1>
              <p>Ready to bring your vision to life? Get in touch with our expert team for personalized consultations and premium interior solutions across Dubai.</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="contact-section">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Choose your preferred way to connect with us</p>
            
            <div className="contact-grid">
              {/* Email Card */}
              <a href="mailto:info@ranastech.com" className="contact-method-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="m4 4 16 0 0 16-16 0z"/>
                    <path d="m22 6-10 7L2 6"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3>Email Us</h3>
                  <p>Get detailed project information</p>
                  <span className="contact-value">info@ranastech.com</span>
                </div>
                <div className="contact-arrow">→</div>
              </a>

              {/* Phone Card */}
              <a href="tel:+971529150569" className="contact-method-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3>Call Us</h3>
                  <p>Speak directly with our experts</p>
                  <span className="contact-value">+971 52 915 0569</span>
                </div>
                <div className="contact-arrow">→</div>
              </a>

              {/* WhatsApp Card */}
              <a href="https://wa.me/971529150569" className="contact-method-card" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon whatsapp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3>WhatsApp</h3>
                  <p>Quick responses via messaging</p>
                  <span className="contact-value">+971 52 915 0569</span>
                </div>
                <div className="contact-arrow">→</div>
              </a>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="service-areas-section">
          <div className="container">
            <h2 className="section-title">Service Areas</h2>
            <p className="section-subtitle">We serve premium communities across Dubai</p>
            
            <div className="service-areas-grid">
              <div className="area-category">
                <h3>Emirates Living</h3>
                <div className="area-list">
                  <span>The Meadows</span>
                  <span>The Springs</span>
                  <span>The Lakes</span>
                </div>
              </div>
              
              <div className="area-category">
                <h3>Premium Communities</h3>
                <div className="area-list">
                  <span>Arabian Ranches</span>
                  <span>Dubai Hills</span>
                  <span>Palm Jumeirah</span>
                </div>
              </div>
              
              <div className="area-category">
                <h3>Modern Developments</h3>
                <div className="area-list">
                  <span>JVT</span>
                  <span>Damac Hills</span>
                  <span>Victory Heights</span>
                </div>
              </div>
              
              <div className="area-category">
                <h3>Family Communities</h3>
                <div className="area-list">
                  <span>Mudon</span>
                  <span>Mira</span>
                  <span>Jumeirah Park</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>Join hundreds of satisfied clients across Dubai's most prestigious communities</p>
              <div className="cta-buttons">
                <a href="tel:+971529150569" className="button primary">
                  <span>Call Now</span>
                </a>
                <a href="mailto:info@ranastech.com" className="button secondary">
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}