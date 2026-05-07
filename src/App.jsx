import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ===================== NAVIGATION ===================== */}
<header className="navbar">
  <div className="container navbar__inner">

    {/* Logo */}
    <a href="#" className="navbar__logo">
      <img src="../Assets/Logo.png" alt="RegTech Logo" />
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

  {/* OVERLAY */}
  <div
    className={`mobile-overlay ${menuOpen ? "show" : ""}`}
    onClick={() => setMenuOpen(false)}
  ></div>

  {/* MOBILE MENU */}
  <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

    {/* TOP */}
    <div className="mobile-menu__top">
      <a href="#" className="mobile-logo">
        <img src="../Assets/Logo.png" alt="Logo" />
      </a>

      <button
        className="mobile-close"
        onClick={() => setMenuOpen(false)}
      >
        ✕
      </button>
    </div>

    {/* LINKS */}
    <div className="mobile-menu__links">

      <a href="#" className="mobile-link active">
        <img src="../Assets/Home.png" alt="" className="nav-icon" />
        <span>Home</span>
      </a>

      <a href="#" className="mobile-link">
        <img src="../Assets/AboutUs.png" alt="" className="nav-icon" />
        <span>About Us</span>
      </a>

      <a href="#" className="mobile-link">
        <img src="../Assets/Our Services.png" alt="" className="nav-icon" />
        <span>Our Services</span>
      </a>

      <a href="#" className="mobile-link">
        <img src="../Assets/Pricing.png" alt="" className="nav-icon" />
        <span>Pricing</span>
      </a>

      <a href="#" className="mobile-link">
        <img src="../Assets/FAQ.png" alt="" className="nav-icon" />
        <span>FAQ</span>
      </a>

      <a href="#" className="mobile-link">
        <img src="../Assets/Contact.png" alt="" className="nav-icon" />
        <span>Contact</span>
      </a>

    </div>

    {/* BUTTON */}
    <a href="#" className="mobile-contact-btn">
      Contact Us
    </a>

  </div>
</header>

      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="container hero__inner">

          {/* Left */}
          <div className="hero__content">

            <div className="hero__badge">
              <span>Regulatory Compliance Solutions</span>
            </div>

            <h1 className="hero__heading">
              Navigate Regulations <br />
              with <span className="highlight-wrap">Confidence</span>
            </h1>

            <p className="hero__subtext">
              Simplify compliance, reduce risks, and stay ahead with our modern
              regulatory technology solutions.
            </p>

            <ul className="hero__features">
              <li>Automated compliance tracking</li>
              <li>Real-time reporting</li>
              <li>Secure & scalable solutions</li>
            </ul>

            <div className="hero__ctas">
              <button className="btn btn--primary">
                Get Started
              </button>

              <button className="btn btn--outline">
                Book A Consultation
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="hero__visual">
            <div className="hero__image-wrap">
              <img
                src="../Assets/Banner Image.png"
                className="hero__image"
                alt="Hero"
              />

              {/* Floating Cards */}
              <div className="float-card float-card--trust">
                <div>
                  <div className="float-card__number">10K+</div>
                  <div className="float-card__sub">Trusted Clients</div>
                </div>
              </div>

              <div className="float-card float-card--rating">
                <div>
                  <div className="float-card__score">4.9</div>
                  <div className="float-card__sub">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY US ===================== */}
      <section className="why-us">
        <div className="container why-us__inner">

          {/* LEFT CONTENT */}
          <div className="why-us__left">

            <h2 className="why-us__heading">
              Why <span>Compliance Matters</span> <br />
              For Research Analysts
            </h2>

            <div className="why-us__illustration">
              <img
                src="../Assets/Section2-Image.png"
                alt="Compliance"
                className="why-us__image"
              />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="why-us__right">

            <p className="why-us__description">
              In today’s regulatory environment, even a small oversight can lead to
              penalties, reputational risks, and loss of client trust. We help
              research analysts and firms navigate complex compliance requirements so
              they can focus on delivering high-quality research without worry.
            </p>

            <div className="feature-card">
              <div className="feature-icon">🔍</div>

              <div className="feature-card__body">
                <h3>Regulatory Clarity</h3>
                <p>
                  We decode complex compliance rules into simple,
                  actionable steps.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📄</div>

              <div className="feature-card__body">
                <h3>Hassle-Free Filings Clarity</h3>
                <p>
                  From registration to ongoing reporting—we manage it
                  end-to-end.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛡️</div>

              <div className="feature-card__body">
                <h3>Risk Protection</h3>
                <p>
                  Stay ahead of audits, inspections, and compliance gaps
                  with proactive support.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
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