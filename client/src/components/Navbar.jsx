import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import logo from "../assets/navlogo.png";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

const Navbar = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* INTERNAL CSS */}
      <style>
        {`
        /* =====================
           FONT IMPORT
        ======================*/
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        /* =====================
           THEME VARIABLES
        ======================*/
        :root {
          --bg-color: #ebfaff;              /* LIGHT MODE BODY */
          --text-color: #1f2937;
          --nav-bg: #f8fafc;
          --nav-text: #1f2937;
          --border-color: rgba(0,0,0,0.12);
        }

        [data-theme="dark"] {
          --bg-color: #070b16;              /* DARK MODE BODY */
          --text-color: #e5e7eb;
          --nav-bg: #243b4a;
          --nav-text: #ffffff;
          --border-color: rgba(255,255,255,0.18);
        }

        /* =====================
           GLOBAL
        ======================*/
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        body {
          background: var(--bg-color);
          color: var(--text-color);
          padding-top: 72px;
          transition: background 0.35s ease, color 0.3s ease;
        }

        /* =====================
           NAVBAR
        ======================*/
        .sw-navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          display: flex;
          justify-content: center;
        }

        .sw-navbar {
          background: var(--nav-bg);
          border-radius: 0 0 18px 18px;
          padding: 12px 20px;
          width: 100%;
          max-width: 1400px;
          box-shadow: 0 6px 24px rgba(0,0,0,0.15);
          transition: background 0.3s ease;
        }

        /* BRAND */
        .sw-logo {
          height: 40px;
          width: auto;
        }

        .brand-text {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--nav-text);
          letter-spacing: 0.2px;
          white-space: nowrap;
        }

        /* NAV LINKS */
        .sw-navbar .nav-link {
          color: var(--nav-text);
          font-size: 0.95rem;
          font-weight: 500;
          opacity: 0.85;
        }

        .sw-navbar .nav-link:hover,
        .sw-navbar .nav-link.active {
          opacity: 1;
        }

        /* THEME ICON BUTTON */
        .theme-btn {
          border: 1px solid var(--border-color);
          background: transparent;
          color: var(--nav-text);
          padding: 6px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .theme-btn:hover {
          background: rgba(255,255,255,0.08);
        }

        /* TOGGLER */
        .navbar-toggler {
          border: none;
        }

        .navbar-toggler:focus {
          box-shadow: none;
        }

        .navbar-toggler-icon {
          filter: invert(1);
        }

        /* =====================
           MOBILE
        ======================*/
        @media (max-width: 991px) {
          .sw-navbar {
            max-width: 100%;
            border-radius: 0 0 16px 16px;
          }

          .sw-navbar .navbar-collapse {
            margin-top: 12px;
            background: var(--nav-bg);
            border-radius: 0 0 16px 16px;
            padding: 12px;
          }

          .sw-navbar .nav-link {
            padding: 10px 0;
          }

          .sw-logo {
            height: 34px;
          }

          .brand-text {
            font-size: 0.95rem;
          }

          .theme-btn {
            margin-top: 8px;
          }
        }
        `}
      </style>

      {/* NAVBAR */}
      <div className="sw-navbar-wrapper">
        <nav className="navbar navbar-expand-lg sw-navbar">
          <div className="container-fluid px-2">
            {/* BRAND */}
            <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
              <img src={logo} alt="Zyntra Technologies Logo" className="sw-logo" />
              <span className="brand-text">Zyntra Technologies</span>
            </NavLink>

            {/* TOGGLER */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#swNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* LINKS */}
            <div className="collapse navbar-collapse" id="swNavbar">
              <ul className="navbar-nav mx-auto gap-lg-4 text-center">
                <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/services">Services</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/working">Working</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
              </ul>

              {/* THEME TOGGLE */}
              <div className="d-flex justify-content-center mt-2 mt-lg-0">
                <button className="theme-btn" onClick={toggleTheme}>
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
