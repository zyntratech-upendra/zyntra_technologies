import { NavLink } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import logo from "../assets/navlogo.png";

const Footer = () => {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>
        {`
        /* ================= THEME VARIABLES ================= */
        :root {
          --footer-bg: #ebfaff;
          --footer-text: #14162b;
          --footer-muted: rgba(20, 22, 43, 0.75);
          --footer-border: rgba(20, 22, 43, 0.12);
          --footer-icon-bg: rgba(20, 22, 43, 0.08);
        }

        [data-theme="dark"] {
          --footer-bg: #14162b;
          --footer-text: #ffffff;
          --footer-muted: rgba(255, 255, 255, 0.75);
          --footer-border: rgba(255, 255, 255, 0.15);
          --footer-icon-bg: rgba(255, 255, 255, 0.18);
        }

        /* ================= FOOTER BASE ================= */
        .footer-wrapper {
          background: var(--footer-bg);
          color: var(--footer-text);
          position: relative;
          overflow: hidden;
        }

        /* ================= WAVE ================= */
        .footer-wave {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 140px;
          z-index: 1;
          line-height: 0;
        }

        .footer-wave svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* ================= CONTENT ================= */
        .footer {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: auto;
          padding: 6rem 1.5rem 2.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 3rem;
        }

        /* ================= BRAND ================= */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-brand-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-logo {
          height: 40px;
        }

        .footer-brand-name {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .footer-description {
          font-size: 0.95rem;
          color: var(--footer-muted);
          line-height: 1.65;
          max-width: 340px;
        }

        /* ================= TITLES ================= */
        .footer-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        /* ================= LINKS ================= */
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .footer-links a,
        .footer-links span {
          font-size: 0.95rem;
          color: var(--footer-muted);
          text-decoration: none;
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          line-height: 1.5;
        }

        .footer-links a:hover {
          color: var(--footer-text);
        }

        /* ================= SOCIAL ================= */
        .footer-social {
          display: flex;
          gap: 0.8rem;
          margin-top: 0.5rem;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--footer-icon-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--footer-text);
          transition: all 0.25s ease;
        }

        .social-icon:hover {
          transform: translateY(-3px);
          background: rgba(0,0,0,0.12);
        }

        [data-theme="dark"] .social-icon:hover {
          background: rgba(255,255,255,0.35);
        }

        /* ================= BOTTOM ================= */
        .footer-bottom {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--footer-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: var(--footer-muted);
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .footer {
            padding-top: 5rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-wave {
            height: 100px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
        `}
      </style>

      {/* FOOTER */}
      <footer className="footer-wrapper">
        {/* WAVE */}
        <div className="footer-wave">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="var(--footer-bg)"
              d="
                M0,160
                C240,80 480,80 720,120
                C960,160 1200,200 1440,160
                L1440,0
                L0,0
                Z
              "
            />
          </svg>
        </div>

        <div className="footer">
          <div className="footer-grid">
            {/* BRAND */}
            <div className="footer-brand">
              <div className="footer-brand-top">
                <img src={logo} alt="Zyntra Logo" className="footer-logo" />
                <span className="footer-brand-name">Zyntra Technologies</span>
              </div>
              <p className="footer-description">
                We build modern websites, scalable applications, and AI-powered
                digital solutions that help businesses grow and innovate.
              </p>
              <div className="footer-social">
                <a href="#" className="social-icon"><Facebook size={18} /></a>
                <a href="#" className="social-icon"><Twitter size={18} /></a>
                <a href="#" className="social-icon"><Instagram size={18} /></a>
                <a href="#" className="social-icon"><Youtube size={18} /></a>
                <a href="#" className="social-icon"><Linkedin size={18} /></a>
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <div className="footer-title">Navigation</div>
              <div className="footer-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/working">Working</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <div className="footer-title">Company</div>
              <div className="footer-links">
                <NavLink to="/careers">Careers</NavLink>
                <NavLink to="/team">Team</NavLink>
                <NavLink to="/privacy">Privacy Policy</NavLink>
                <NavLink to="/terms">Terms & Conditions</NavLink>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <div className="footer-title">Contact</div>
              <div className="footer-links">
                <span><MapPin size={32} /> Guduru, Krishna Dist., Andhra Pradesh, India – 521162</span>
                <span><Mail size={16} /> upendra.zyntratech@gmail.com</span>
                <span><Phone size={16} /> +91 85005 38521</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2026 Zyntra Technologies. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
