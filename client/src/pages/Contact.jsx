import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  /* ================= SEO ================= */
  useEffect(() => {
    document.title =
      "Contact Zyntra Technologies | Let’s Build Something Powerful";

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "Get in touch with Zyntra Technologies to discuss AI, software, cloud, and digital innovation solutions.";
  }, []);

  return (
    <main className="contact-root">
      <Navbar />

      {/* ================= INTERNAL CSS ================= */}
      <style>
        {`
/* ==================================================
   THEME VARIABLES (MATCH ABOUT PAGE)
================================================== */
:root {
  --accent: #9f87f4;
  --accent-soft: rgba(159,135,244,0.18);
  --bg-main: #ffffff;
  --bg-card: #ffffff;
  --text-main: #3f445e;
  --text-heading: #1e2238;
  --shadow-soft: 0 40px 80px rgba(0,0,0,0.08);
}

[data-theme="dark"] {
  --bg-main: #070b16;
  --bg-card: #0d1526;
  --text-main: #cbd5e1;
  --text-heading: #ffffff;
  --shadow-soft: 0 40px 90px rgba(0,0,0,0.6);
}

/* ==================================================
   ROOT
================================================== */
.contact-root {
  background:
    radial-gradient(900px 450px at 90% 10%, var(--accent-soft), transparent 60%),
    linear-gradient(180deg, var(--bg-main), transparent);
  overflow-x: hidden;
  color: var(--text-main);
}

/* ==================================================
   HERO
================================================== */
.contact-hero {
  padding: clamp(100px, 12vw, 160px) 16px 90px;
  text-align: center;
  animation: fadeUp 1s ease forwards;
}

.contact-hero h1 {
  font-size: clamp(42px, 5vw, 60px);
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), #7b6cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
}

.contact-hero p {
  max-width: 820px;
  margin: auto;
  font-size: 18px;
  line-height: 1.8;
  color: var(--text-main);
}

/* ==================================================
   CONTACT GRID
================================================== */
.contact-section {
  padding: clamp(80px, 10vw, 120px) 16px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: start;
}

/* ==================================================
   LEFT INFO
================================================== */
.contact-info span {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  display: inline-block;
  margin-bottom: 14px;
}

.contact-info h2 {
  font-size: 34px;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 18px;
}

.contact-info p {
  font-size: 16.5px;
  line-height: 1.9;
  margin-bottom: 40px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 15.5px;
}

.contact-item svg {
  color: var(--accent);
  margin-top: 3px;
}

/* ==================================================
   FORM CARD
================================================== */
.contact-card {
  background: var(--bg-card);
  border-radius: 32px;
  padding: 48px;
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(159,135,244,0.25);
}

.form-label {
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--text-heading);
}

.form-control,
.form-select {
  border-radius: 14px;
  padding: 13px 15px;
  border: 1px solid rgba(159,135,244,0.25);
  background: transparent;
  color: var(--text-main);
}

.form-control:focus,
.form-select:focus {
  box-shadow: none;
  border-color: var(--accent);
}

/* BUTTON */
.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, var(--accent), #7b6cf6);
  color: #ffffff;
  border: none;
  padding: 15px 30px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(159,135,244,0.45);
}

/* ==================================================
   ANIMATION
================================================== */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ==================================================
   RESPONSIVE
================================================== */
@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-card {
    padding: 36px 28px;
  }
}
        `}
      </style>

      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <h1>Contact Zyntra Technologies</h1>
        <p>
          Let’s discuss how we can help you build intelligent, scalable, and
          future-ready digital solutions.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="contact-section">
        <div className="container contact-grid">

          {/* LEFT */}
          <div className="contact-info">
            <span>Contact</span>
            <h2>Let’s talk about your idea</h2>
            <p>
              Whether you’re launching a new product, improving an existing
              system, or exploring AI-driven innovation — we’re here to help.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <Mail />
                <span>support@zyntratech.in</span>
              </div>

              <div className="contact-item">
                <Phone />
                <span>+91 79934 99944</span>
              </div>

              <div className="contact-item">
                <MapPin />
                <span>
                  Zyntra Technologies<br />
                  India
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="contact-card">
            <form>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label">Full name</label>
                  <input className="form-control" placeholder="Your name" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email address</label>
                  <input className="form-control" placeholder="you@company.com" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone (optional)</label>
                  <input className="form-control" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Service interested in</label>
                  <select className="form-select">
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>AI & Automation</option>
                    <option>Cloud & DevOps</option>
                    <option>UI / UX Design</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Tell us briefly about your project..."
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="contact-btn">
                    <Send size={18} />
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Contact;
