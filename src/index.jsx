import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // move your <style> content into this file

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container navbar__inner">
          {/* Logo */}
          <a href="#" className="navbar__logo">
            <img src="data:image/png;base64,..." alt="RegTech Logo" />
          </a>

          {/* Desktop Nav */}
          <nav className="navbar__links">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">About Us</a>
            <a href="#" className="nav-link">Our Services</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="#" className="nav-link">FAQ</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>

          {/* CTA */}
          <div className="navbar__cta">
            <a href="tel:+1234567890" className="btn-call">
              Call Us Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About Us</a>
          <a href="#" className="nav-link">Services</a>
          <a href="#" className="nav-link">Pricing</a>
          <a href="#" className="nav-link">FAQ</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <div className="hero__badge">
              Regulatory Compliance Solutions
            </div>

            <h1 className="hero__heading">
              Navigate Regulations <br />
              with <span className="highlight-wrap">Confidence</span> <br />
              &amp; Clarity
            </h1>

            <p className="hero__subtext">
              Streamlined compliance management for businesses of all sizes.
              Our expert team ensures you stay ahead of regulatory changes.
            </p>

            <ul className="hero__features">
              <li>✔ Real-time regulatory updates</li>
              <li>✔ Expert consultation</li>
              <li>✔ Scalable solutions</li>
            </ul>

            <div className="hero__ctas">
              <button className="btn btn--primary">Get Started</button>
              <button className="btn btn--outline">Learn More</button>
            </div>
          </div>

          {/* Right Side */}
          <div className="hero__visual">
            <img
              src="https://via.placeholder.com/500"
              alt="Hero"
              className="hero__image"
            />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <div className="container why-us__inner">
          <div className="why-us__visual">
            <img
              src="https://via.placeholder.com/400"
              alt="Why Us"
              className="why-us__image"
            />
          </div>

          <div className="why-us__content">
            <h2 className="section-heading">
              Why Choose Us
            </h2>

            <p className="section-subtext">
              We provide modern compliance solutions tailored to your business.
            </p>

            <div className="why-us__cards">
              <div className="feature-card">
                <h3>Automation</h3>
                <p>Save time with automated compliance workflows.</p>
              </div>

              <div className="feature-card">
                <h3>Accuracy</h3>
                <p>Ensure precision with expert validation.</p>
              </div>

              <div className="feature-card">
                <h3>Support</h3>
                <p>24/7 expert support whenever you need it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
          <p className="footer__copy">
            © 2026 RegTech. All rights reserved.
          </p>

          <div className="footer__links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);