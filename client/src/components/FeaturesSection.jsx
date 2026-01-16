import {
  Cpu,
  Rocket,
  ShieldCheck,
  BarChart3,
  Workflow,
  Cloud,
} from "lucide-react";

const FEATURES = [
  {
    icon: Rocket,
    title: "Fast Product Launch",
    front: "Launch products faster",
    back:
      "Ship faster using modular architecture, reusable components, and automated delivery pipelines.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Intelligence",
    front: "Smarter decisions",
    back:
      "Leverage machine learning, predictive insights, and AI-powered automation across systems.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    front: "Less manual work",
    back:
      "Replace repetitive manual work with intelligent workflows that scale with your business.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    front: "Instant visibility",
    back:
      "Gain real-time insights into KPIs, performance metrics, and user behavior.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    front: "Security first",
    back:
      "Compliance-ready infrastructure with encryption, access control, and auditing.",
  },
  {
    icon: Cloud,
    title: "Cloud Native Scale",
    front: "Built to scale",
    back:
      "Highly available, cloud-native systems designed for global scalability.",
  },
];

const FeaturesSection = () => {
  return (
    <>
      {/* ================= INTERNAL CSS ================= */}
      <style>{`
/* ================= SECTION ================= */
.features-polaroid {
  padding: clamp(100px, 12vw, 160px) 0;
}

/* ================= HEADER ================= */
.features-head {
  max-width: 680px;
  margin-bottom: 80px;
}

.features-label {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #5cc6c7;
  margin-bottom: 14px;
}

.features-head h2 {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 18px;
  color: var(--text-color);
}

.features-head p {
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(31,41,55,0.75);
}

[data-theme="dark"] .features-head p {
  color: rgba(229,231,235,0.75);
}

/* ================= GRID ================= */
.polaroid-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 42px 32px;
}

/* ================= POLAROID ================= */
.polaroid {
  perspective: 1400px;
}

.polaroid-inner {
  position: relative;
  width: 100%;
  height: 320px;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(.22,1,.36,1);
}

/* tilt variation */
.polaroid:nth-child(odd) .polaroid-inner {
  transform: rotate(-1.2deg);
}

.polaroid:nth-child(even) .polaroid-inner {
  transform: rotate(1deg);
}

.polaroid:hover .polaroid-inner {
  transform: rotateY(180deg) rotate(0deg);
}

/* ================= CARD FACES ================= */
.polaroid-front,
.polaroid-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 8px;
  background: #ffffff;
  padding: 18px 18px 56px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.25);
}

[data-theme="dark"] .polaroid-front,
[data-theme="dark"] .polaroid-back {
  background: #0f1f29;
}

/* ================= FRONT ================= */
.polaroid-front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.polaroid-icon {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  background: rgba(92,198,199,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5cc6c7;
  margin-bottom: 20px;
}

.polaroid-icon svg {
  width: 32px;
  height: 32px;
}

.polaroid-front h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-color);
}

.polaroid-front span {
  font-size: 0.9rem;
  color: rgba(31,41,55,0.7);
}

[data-theme="dark"] .polaroid-front span {
  color: rgba(229,231,235,0.7);
}

/* ================= LABEL ================= */
.polaroid-label {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-weight: 700;
  color: #243b46;
}

[data-theme="dark"] .polaroid-label {
  color: #e5e7eb;
}

/* ================= BACK ================= */
.polaroid-back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.polaroid-back h4 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.polaroid-back p {
  font-size: 0.95rem;
  line-height: 1.65;
  color: rgba(31,41,55,0.75);
}

[data-theme="dark"] .polaroid-back p {
  color: rgba(229,231,235,0.75);
}

/* ================= RESPONSIVE ================= */
@media (max-width: 992px) {
  .polaroid-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .polaroid-grid {
    grid-template-columns: 1fr;
  }

  .polaroid-inner {
    height: 300px;
  }
}
      `}</style>

      {/* ================= FEATURES ================= */}
      <section className="features-polaroid">
        <div className="container">
          <div className="features-head">
            <div className="features-label">Platform Capabilities</div>
            <h2>Features built like products — not checklists</h2>
            <p>
              Every Zyntra capability is engineered as a standalone system,
              designed to work beautifully on its own and seamlessly together.
            </p>
          </div>

          <div className="polaroid-grid">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div className="polaroid" key={i}>
                  <div className="polaroid-inner">
                    {/* FRONT */}
                    <div className="polaroid-front">
                      <div className="polaroid-icon">
                        <Icon />
                      </div>
                      <h4>{f.title}</h4>
                      <span>{f.front}</span>
                      <div className="polaroid-label">{f.title}</div>
                    </div>

                    {/* BACK */}
                    <div className="polaroid-back">
                      <h4>{f.title}</h4>
                      <p>{f.back}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
