import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );

  /* -------------------- Responsive -------------------- */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* -------------------- Theme Observer -------------------- */
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(
        document.documentElement.getAttribute("data-theme") || "light"
      );
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  /* -------------------- Background Image -------------------- */
  const getBgImage = useCallback(() => {
    const images = {
      mobileLight: "/images/hero-mobile-light.jpg",
      mobileDark: "/images/hero-mobile-dark.jpg",
      desktopLight: "/images/hero-desktop-light.jpg",
      desktopDark: "/images/hero-desktop-dark.jpg",
    };

    if (isMobile && theme === "light") return images.mobileLight;
    if (isMobile && theme === "dark") return images.mobileDark;
    if (!isMobile && theme === "light") return images.desktopLight;
    return images.desktopDark;
  }, [isMobile, theme]);

  /* -------------------- Motion -------------------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <style>{`
        /* ===================== HERO BASE ===================== */
        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Overlay */
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.85)
          );
          z-index: 1;
        }

        [data-theme="light"] .hero::before {
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0.7),
            rgba(255,255,255,0.9)
          );
        }

        /* ===================== CONTENT ===================== */
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          padding: clamp(3rem, 6vw, 7rem) 1.5rem;
          text-align: center;
          color: var(--text-color);
        }

        .hero-badge {
          display: inline-block;
          margin-bottom: 1.5rem;
          padding: 0.5rem 1.25rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.4px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
        }

        .hero-title {
          font-size: clamp(2.6rem, 6vw, 4.2rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }

        .hero-title span {
          color: #0d6efd;
        }

        .hero-text {
          font-size: clamp(1.05rem, 2.5vw, 1.25rem);
          max-width: 780px;
          margin: 0 auto 2.8rem;
          opacity: 0.9;
          line-height: 1.7;
        }

        /* ===================== CTA ===================== */
        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .hero-btn {
          padding: 0.85rem 1.9rem;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          min-width: 180px;
        }

        /* ===================== STATS ===================== */
        .hero-stats {
          margin-top: 4rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 2rem;
        }

        .stat {
          font-size: 1.8rem;
          font-weight: 700;
        }

        .stat-label {
          font-size: 0.85rem;
          opacity: 0.75;
        }

        /* ===================== MOBILE ===================== */
        @media (max-width: 768px) {
          .hero-content {
            padding: 3rem 1.25rem;
          }

          .hero-title {
            font-size: 2.4rem;
          }
        }
      `}</style>

      <section className="hero" aria-label="Zyntra Technologies Hero Section">
        {/* Background */}
        <div className="hero-bg">
          <img
            src={getBgImage()}
            alt="Zyntra Technologies Background"
            loading="eager"
          />
        </div>

        {/* Content */}
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span className="hero-badge" variants={fadeUp}>
            Complete AI Driven Tech & Marketing Solutions for every industry
          </motion.span>

          <motion.h1 className="hero-title" variants={fadeUp}>
            Empowering Businesses with <br />
            <span>Digital & AI Solutions</span>
          </motion.h1>

          <motion.p className="hero-text" variants={fadeUp}>
            At <strong>Zyntra Technologies</strong>, we design and build modern
            websites, high-performance mobile apps, and intelligent AI-driven
            solutions. From premium UI/UX to advanced machine learning systems —
            we help brands innovate, scale, and lead digitally.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="/services" className="btn btn-primary hero-btn">
              Explore Services
            </a>
            <a href="/contact" className="btn btn-outline-primary hero-btn">
              Get in Touch
            </a>
          </motion.div>

          {/* Stats */}
         
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
