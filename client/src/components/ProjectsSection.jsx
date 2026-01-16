import React, { useState } from "react";

export default function ProjectsSection() {
  const projects = [
    {
      name: "Wesley",
      desc:
        "Amazing service from safetywing. I was diagnosed with an acute hernia. Everything was settled within a day, operation the next day everything went smooth they even found a second hernia.",
      highlight:
        "insurance company who is in it for the customer instead of the money.",
      author: "Wesley Dekadt",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Staff System",
      desc:
        "An enterprise-grade workforce management system handling attendance, payroll, and reporting seamlessly.",
      highlight: "Built for scalability and automation.",
      author: "Zyntra Technologies",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Automation",
      desc:
        "A smart automation platform optimizing bookings and notifications with speed and reliability.",
      highlight: "AI-powered efficiency platform.",
      author: "Zyntra Technologies",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=900&auto=format&fit=crop",
    },
  ];

  const [active, setActive] = useState(0);

  const next = () =>
    setActive((p) => (p + 1) % projects.length);

  const prev = () =>
    setActive((p) => (p - 1 + projects.length) % projects.length);

  return (
    <section
      style={{
        background: "#243b46",
        padding: "120px 0",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <h2
          className="text-center fw-bold mb-5"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          What We’ve <span style={{ color: "#5CC6C7" }}>Built</span>
        </h2>

        <div className="row align-items-center gy-5">
          {/* ================= LEFT POLAROID STACK ================= */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              style={{
                position: "relative",
                width: "420px",
                height: "420px",
              }}
            >
              {projects.map((p, i) => {
                const rel =
                  (i - active + projects.length) %
                  projects.length;

                if (rel > 4) return null;

                const stack = [
                  { x: 0, y: 0, r: 0, z: 5 },
                  { x: -80, y: -60, r: -12, z: 4 },
                  { x: 60, y: -50, r: 6, z: 3 },
                  { x: 95, y: 0, r: -5, z: 2 },
                  { x: 35, y: 55, r: 12, z: 1 },
                ][rel];

                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      inset: 0,
                      transform: `translate(${stack.x}px, ${stack.y}px) rotate(${stack.r}deg)`,
                      zIndex: stack.z,
                      transition:
                        "transform 0.65s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    {/* POLAROID FRAME */}
                    <div
                      style={{
                        background: "#ffffff",
                        padding: "14px 14px 56px",
                        borderRadius: "6px",
                        boxShadow:
                          rel === 0
                            ? "0 45px 70px rgba(0,0,0,0.55)"
                            : "0 25px 45px rgba(0,0,0,0.35)",
                        position: "relative",
                      }}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{
                          width: "100%",
                          height: "260px",
                          objectFit: "cover",
                          borderRadius: "4px",
                        }}
                      />

                      {/* POLAROID LABEL */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "18px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          fontWeight: 700,
                          fontSize: "15px",
                          color: "#243b46",
                        }}
                      >
                        {p.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT TESTIMONIAL ================= */}
          <div className="col-lg-6 position-relative">
            <div
              style={{
                maxWidth: "520px",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(18px)",
                borderRadius: "22px",
                padding: "40px",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  color: "#5CC6C7",
                  marginBottom: "12px",
                }}
              >
                “
              </div>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.75",
                }}
              >
                {projects[active].desc}{" "}
                <span
                  style={{
                    background: "#f6d365",
                    color: "#1f2937",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontWeight: 700,
                    display: "inline-block",
                  }}
                >
                  {projects[active].highlight}
                </span>
              </p>

              <div className="mt-3 fw-semibold">
                {projects[active].author}
              </div>
            </div>

            {/* ================= ARROWS ================= */}
            <div
              style={{
                display: "flex",
                gap: "14px",
                position: "absolute",
                bottom: "-70px",
                left: "40px",
              }}
            >
              <Arrow onClick={prev}>←</Arrow>
              <Arrow onClick={next}>→</Arrow>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Arrow = ({ children, onClick }) => (
  <button
    onClick={onClick}
    style={{
      width: "52px",
      height: "52px",
      borderRadius: "50%",
      background: "#5CC6C7",
      border: "none",
      color: "#243b46",
      fontSize: "20px",
      cursor: "pointer",
      boxShadow: "0 15px 30px rgba(0,0,0,0.35)",
    }}
  >
    {children}
  </button>
);
