import { useEffect } from "react";

/* SAMPLE IMAGES */
import founder1 from "../assets/team4.jpg";
import founder2 from "../assets/team4.jpg";

const About = () => {
  /* ================= SEO ================= */
  useEffect(() => {
    document.title =
      "About Zyntra Technologies | AI Driven Tech & Digital Innovation Company";

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "Zyntra Technologies is an AI-driven digital innovation company delivering scalable software, intelligent systems, and long-term business solutions.";
  }, []);

  return (
    <main className="about-root">
      <style>
        {`
/* ==================================================
   THEME VARIABLES
================================================== */
:root {
  --accent: #a69cf8;
  --accent-soft: rgba(166,156,248,0.18);
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
   BASE
================================================== */
.about-root {
  background:
    radial-gradient(900px 450px at 90% 10%, var(--accent-soft), transparent 60%),
    linear-gradient(180deg, var(--bg-main), transparent);
  overflow-x: hidden;
}

/* ==================================================
   HERO
================================================== */
.about-hero {
  padding: clamp(100px, 12vw, 160px) 16px 90px;
  text-align: center;
  animation: fadeUp 1s ease forwards;
}

.about-hero h1 {
  font-size: clamp(42px, 5vw, 62px);
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), #7b6cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
}

.about-hero p {
  max-width: 920px;
  margin: auto;
  font-size: 18px;
  line-height: 1.8;
  color: var(--text-main);
}

/* ==================================================
   WHAT WE DO / VISION / MISSION
================================================== */
.about-info {
  padding: clamp(80px, 10vw, 120px) 16px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 60px;
  align-items: start;
}

/* LEFT TEXT */
.info-text p {
  font-size: 17px;
  line-height: 1.9;
  color: var(--text-main);
  margin-bottom: 28px;
}

.info-text strong {
  color: var(--text-heading);
}

/* RIGHT CARDS */
.info-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
}

.info-card {
  background: var(--bg-card);
  border-radius: 28px;
  padding: 36px;
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(166,156,248,0.25);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.info-card.highlight {
  background: linear-gradient(
    180deg,
    rgba(166,156,248,0.22),
    var(--bg-card)
  );
  border: 1.5px solid var(--accent);
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 60px 120px rgba(0,0,0,0.15);
}

.info-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--accent), #7b6cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  margin-bottom: 18px;
}

.info-card h3 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 10px;
}

.info-card p {
  font-size: 15.8px;
  line-height: 1.7;
  color: var(--text-main);
}

/* ==================================================
   FOUNDING TEAM
================================================== */
.founding-section {
  padding: clamp(90px, 12vw, 140px) 16px;
}

.founding-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;
}

.founding-text h2 {
  font-size: 38px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 14px;
}

.founding-text p {
  font-size: 17px;
  line-height: 1.8;
  color: var(--text-main);
  margin-bottom: 50px;
}

.goal h3 {
  font-size: 34px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 14px;
}

/* FOUNDERS */
.founders {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.founder-card {
  background: var(--bg-card);
  border-radius: 26px;
  padding: 52px 32px;
  text-align: center;
  box-shadow: var(--shadow-soft);
  position: relative;
  animation: fadeUp 1s ease forwards;
}

.founder-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 0 12px rgba(166,156,248,0.12);
  margin-bottom: 18px;
  transition: transform 0.45s ease;
}

.founder-card:hover .founder-img {
  transform: scale(1.08);
}

.founder-name {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-heading);
}

.founder-role {
  font-size: 15px;
  color: var(--accent);
  font-weight: 600;
  margin: 6px 0 16px;
}

.founder-desc {
  font-size: 15.5px;
  line-height: 1.7;
  color: var(--text-main);
}

/* ==================================================
   VALUES
================================================== */
.values-section {
  padding: clamp(90px, 12vw, 140px) 16px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
}

.value-card {
  background: var(--bg-card);
  border-radius: 24px;
  padding: 42px 32px;
  box-shadow: var(--shadow-soft);
  transition: transform 0.4s ease;
}

.value-card:hover {
  transform: translateY(-10px);
}

/* ==================================================
   JOURNEY
================================================== */
.journey {
  padding: clamp(90px, 12vw, 140px) 16px;
  text-align: center;
}

/* ==================================================
   ANIMATION
================================================== */
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ==================================================
   RESPONSIVE
================================================== */
@media (max-width: 992px) {
  .info-grid,
  .founding-grid {
    grid-template-columns: 1fr;
  }
  .info-cards,
  .founders,
  .values-grid {
    grid-template-columns: 1fr;
  }
}
        `}
      </style>

      {/* HERO */}
      <section className="about-hero">
        <h1>About Zyntra Technologies</h1>
        <p>
          We build intelligent, scalable, and human-centric digital solutions
          that help businesses grow with confidence in a fast-changing world.
        </p>
      </section>

      {/* WHAT WE DO / VISION / MISSION */}
      <section className="about-info">
        <div className="container info-grid">
          <div className="info-text">
            <p>
              From crafting dynamic, user-friendly websites to developing
              intelligent AI-powered systems, we turn ideas into impactful
              solutions that empower businesses to lead their industries.
            </p>
            <p>
              Our expertise spans across{" "}
              <strong>
                Website Design, Digital Marketing, Android Development,
                Artificial Intelligence, Machine Learning, Computer Vision, and
                Chatbot Solutions
              </strong>.
            </p>
            <p>
              At Zyntra, we believe in long-term collaboration — not just project
              completion.
            </p>
          </div>

          <div className="info-cards">
            <div className="info-card" >
              <div className="info-icon">🚀</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses through smart, scalable, and sustainable
                digital and AI-driven technologies.
              </p>
            </div>

            <div className="info-card highlight">
              <div className="info-icon">◎</div>
              <h3>Our Vision</h3>
              <p>
                To redefine innovation by integrating technology and
                intelligence into everyday business solutions.
              </p>
            </div>

            
            <div className="info-card"style={{ gridColumn: "1 / -1" }}>
              <div className="info-icon">✦</div>
              <h3>What We Do</h3>
              <p>
                We build modern digital experiences by blending creativity,
                technology, and intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDING TEAM */}
      <section className="founding-section">
        <div className="container">
          <div className="founding-grid">
            <div className="founding-text">
              <h2>Founding team</h2>
              <p>
                A tech entrepreneur and a computer science expert teamed up to
                turn Zyntra into a scalable digital innovation company.
              </p>
              <div className="goal">
                <h3>Our goal</h3>
                <p>
                  To build smart, reliable, and AI-driven technology that
                  delivers real business impact.
                </p>
              </div>
            </div>

            <div className="founders">
              <div className="founder-card">
                <img src={founder1} alt="Founder" className="founder-img" />
                <div className="founder-name">Damjan Dano</div>
                <div className="founder-role">Founder</div>
                <div className="founder-desc">
                  Serial tech entrepreneur building scalable digital products
                  and teams.
                </div>
              </div>

              <div className="founder-card">
                <img src={founder2} alt="Co-Founder" className="founder-img" />
                <div className="founder-name">Riste Stojanov</div>
                <div className="founder-role">Co-founder · Professor</div>
                <div className="founder-desc">
                  Ph.D. in Computer Science focused on AI systems and innovation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="container values-grid">
          <div className="value-card">
            <h4>Innovation First</h4>
            <p>We build with AI, data, and forward-thinking design.</p>
          </div>
          <div className="value-card">
            <h4>Long-term Partnerships</h4>
            <p>We care about outcomes, not just delivery.</p>
          </div>
          <div className="value-card">
            <h4>Scalable by Design</h4>
            <p>Everything we build is ready to grow.</p>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey">
        <h2 style={{ color: "var(--accent)" }}>Our Journey</h2>
        <p>
          From early experimentation to enterprise-ready platforms, Zyntra is
          driven by curiosity, collaboration, and purpose.
        </p>
      </section>
    </main>
  );
};

export default About;
