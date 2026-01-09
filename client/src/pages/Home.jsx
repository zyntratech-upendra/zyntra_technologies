import { useEffect, useState } from "react";
import Hero from "../components/Hero";

const tabs = [
  { id: "features", label: "Features" },
  { id: "plans", label: "Plans" },
  { id: "pricing", label: "Pricing" },
  { id: "coverage", label: "What's covered" },
  { id: "faq", label: "FAQs" },
];

const Home = () => {
  const [active, setActive] = useState("features");

  /* ================= SEO ================= */
  useEffect(() => {
    document.title = "Zyntra Technologies | Complete AI Driven Tech & Marketing Solutions for every industry";

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
        /* ===== SECTION LAYOUT ===== */
        .home-section {
          padding: clamp(80px, 10vw, 140px) 15px;
        }

        .home-section.alt {
          background: #f4fffd;
        }

        /* ===== STICKY BOUNDARY ===== */
        .nav-boundary {
          position: relative;
        }

        /* ===== STICKY NAV ===== */
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

        /* ===== NAV ITEMS ===== */
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

        /* ===== ACTIVE STATE ===== */
        .nav-tab.active {
          font-size: 17px;
          font-weight: 600;
          color: #4fa3ff;
        }

        /* ===== BACK TO TOP ===== */
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

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .floating-nav {
            display: none !important;
          }
        }
        `}
      </style>

      <Hero />

      {/* ================= CONTENT ================= */}
      <div className="nav-boundary">
        {tabs.map((tab, index) => (
          <section
            key={tab.id}
            id={tab.id}
            data-section={tab.id}
            className={`home-section ${index % 2 ? "alt" : ""}`}
            aria-labelledby={`${tab.id}-title`}
          >
            <div className="container text-center">
              <h2
                id={`${tab.id}-title`}
                className="fw-bold"
              >
                {tab.label}
              </h2>
              <p className="text-muted">
                This is the {tab.label} section content.
              </p>
            </div>
          </section>
        ))}

        {/* ================= STICKY NAV ================= */}
        <nav
          className="floating-nav"
          aria-label="Page section navigation"
        >
          <div className="floating-nav-inner">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-tab ${
                  active === tab.id ? "active" : ""
                }`}
                onClick={() => scrollTo(tab.id)}
                aria-current={active === tab.id ? "true" : "false"}
              >
                {tab.label}
              </button>
            ))}

            <button
              className="back-top"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
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
