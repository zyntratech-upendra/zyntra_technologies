import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import FaqSection from "../components/FaqSection";
import FeaturesSection from "../components/FeaturesSection";

/* ================= NAV TABS ================= */
const tabs = [
  { id: "features", label: "Features" },
  { id: "plans", label: "Plans" },
  { id: "pricing", label: "Pricing" },
  { id: "coverage", label: "What's covered" },
  { id: "projects", label: "Projects" }, // ✅ INCLUDED
  { id: "faq", label: "FAQs" },
];

const Home = () => {
  const [active, setActive] = useState("features");

  /* ================= SEO ================= */
  useEffect(() => {
    document.title =
      "Zyntra Technologies | Complete AI Driven Tech & Marketing Solutions for every industry";

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "Zyntra Technologies builds scalable digital platforms, AI-powered solutions, and modern web applications to help businesses grow.";
  }, []);

  /* ================= SCROLL SPY ================= */
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.dataset.section);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main role="main">
      {/* ================= INTERNAL CSS ================= */}
      <style>
        {`
        .home-section {
          padding: clamp(80px, 10vw, 140px) 15px;
        }

        .home-section.alt {
  background: rgba(127, 212, 212, 0.25);
}

[data-theme="dark"] .home-section.alt {
  background: rgba(30, 58, 68, 0.45);
}


        .nav-boundary {
          position: relative;
        }

        .floating-nav {
          position: sticky;
          bottom: 20px;
          margin: 40px auto 0;
          width: max-content;
          max-width: calc(100% - 24px);
          z-index: 50;
          background: rgba(220,245,243,0.98);
          backdrop-filter: blur(12px);
          border-radius: 50px;
          padding: 14px 20px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.12);
        }

        .floating-nav-inner {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nav-tab {
          background: none;
          border: none;
          font-size: 15px;
          font-weight: 500;
          color: #8aadad;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .nav-tab:hover {
          color: #4fa3ff;
        }

        .nav-tab.active {
          font-size: 17px;
          font-weight: 600;
          color: #4fa3ff;
        }

        .back-top {
          margin-left: 12px;
          background: #1e3a44;
          color: #ffffff;
          border-radius: 30px;
          padding: 8px 14px;
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          white-space: nowrap;
        }

        .back-top:hover {
          background: #163039;
        }

        @media (max-width: 768px) {
          .floating-nav {
            display: none !important;
          }
        }
        `}
      </style>

      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= PAGE SECTIONS ================= */}
      <div className="nav-boundary">
        {/* FEATURES / PLANS / PRICING / COVERAGE */}
        {/* ================= FEATURES ================= */}
        <section
          id="features"
          data-section="features"
          className="home-section"
          aria-labelledby="features-title"
        >
          <h2 id="features-title" className="visually-hidden">
            Features
          </h2>

          <FeaturesSection/>
        </section>

        {/* ================= PLANS ================= */}
        <section id="plans" data-section="plans" className="home-section alt">
          <div className="container text-center">
            <h2 className="fw-bold">Plans</h2>
            <p className="text-muted">
              Flexible plans designed for startups, enterprises, and growing
              businesses.
            </p>
          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section id="pricing" data-section="pricing" className="home-section">
          <div className="container text-center">
            <h2 className="fw-bold">Pricing</h2>
            <p className="text-muted">
              Transparent pricing with no hidden costs.
            </p>
          </div>
        </section>

        {/* ================= COVERAGE ================= */}
        <section
          id="coverage"
          data-section="coverage"
          className="home-section alt"
        >
          <div className="container text-center">
            <h2 className="fw-bold">What's Covered</h2>
            <p className="text-muted">
              Everything you need to run, scale, and secure your digital
              business.
            </p>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section
          id="projects"
          data-section="projects"
          className="home-section"
          aria-labelledby="projects-title"
        >
          <h2 id="projects-title" className="visually-hidden">
            Projects
          </h2>
          <ProjectsSection />
        </section>

        {/* ================= FAQ ================= */}
        <section
          id="faq"
          data-section="faq"
          className="home-section alt"
          aria-labelledby="faq-title"
        >
          <h2 id="faq-title" className="visually-hidden">
            FAQs
          </h2>

          {/* FULL FAQ COMPONENT */}
          <FaqSection />
        </section>

        {/* ================= FLOATING NAV ================= */}
        <nav className="floating-nav" aria-label="Page section navigation">
          <div className="floating-nav-inner">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-tab ${active === tab.id ? "active" : ""}`}
                onClick={() => scrollTo(tab.id)}
                aria-current={active === tab.id ? "true" : "false"}
              >
                {tab.label}
              </button>
            ))}

            <button
              className="back-top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
            >
              Back to top
            </button>
          </div>
        </nav>
      </div>
    </main>
  );
};

export default Home;
