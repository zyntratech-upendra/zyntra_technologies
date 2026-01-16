import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PolaroidStack({
  items,
  active,
  direction,
  onNext,
  onPrev,
  autoplay = true,
  interval = 4200,
}) {
  const cardsRef = useRef([]);
  const timer = useRef(null);
  const touch = useRef({ startX: 0, dx: 0 });

  /* ---------------- AUTOPLAY WITH INERTIA ---------------- */
  useEffect(() => {
    if (!autoplay) return;
    timer.current = setInterval(onNext, interval);
    return () => clearInterval(timer.current);
  }, [active]);

  /* ---------------- STACK POSITIONS (MATCH IMAGE) ---------------- */
  const forwardStack = [
    { x: 0, y: 0, r: 0, z: 6 },
    { x: -70, y: -65, r: -12, z: 5 },
    { x: 50, y: -50, r: 3, z: 4 },
    { x: 80, y: -5, r: -5, z: 3 },
    { x: 30, y: 45, r: 10, z: 2 },
    { x: -60, y: 65, r: 14, z: 1 },
  ];

  const backwardStack = [
    { x: 0, y: 0, r: 0, z: 6 },
    { x: 60, y: 80, r: 12, z: 5 },
    { x: -50, y: 55, r: -6, z: 4 },
    { x: -90, y: -10, r: 8, z: 3 },
    { x: -35, y: -70, r: -14, z: 2 },
    { x: 40, y: -90, r: -20, z: 1 },
  ];

  /* ---------------- GSAP SPRING MOTION ---------------- */
  useEffect(() => {
    cardsRef.current.forEach((el, i) => {
      if (!el) return;

      const rel = (i - active + items.length) % items.length;
      if (rel > 5) {
        gsap.set(el, { autoAlpha: 0 });
        return;
      }

      const stack =
        direction === "next" ? forwardStack[rel] : backwardStack[rel];

      gsap.to(el, {
        x: stack.x,
        y: stack.y,
        rotate: stack.r,
        zIndex: stack.z,
        autoAlpha: 1,
        duration: 0.9,
        ease: "elastic.out(1, 0.65)",
      });
    });
  }, [active, direction]);

  /* ---------------- SUBTLE PAPER WOBBLE ---------------- */
  useEffect(() => {
    cardsRef.current.forEach((el) => {
      if (!el) return;
      gsap.to(el, {
        rotate: "+=0.6",
        duration: 2.5 + Math.random(),
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });
  }, []);

  /* ---------------- TOUCH / SWIPE ---------------- */
  const onTouchStart = (e) => {
    clearInterval(timer.current);
    touch.current.startX = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touch.current.dx = e.touches[0].clientX - touch.current.startX;
  };

  const onTouchEnd = () => {
    if (touch.current.dx > 60) onPrev();
    if (touch.current.dx < -60) onNext();
    touch.current.dx = 0;
  };

  return (
    <div
      style={{
        position: "relative",
        width: 420,
        height: 420,
        userSelect: "none",
        touchAction: "pan-y",
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {items.map((item, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          style={{ position: "absolute", inset: 0 }}
        >
          {/* POLAROID */}
          <div
            style={{
              background: "#fff",
              padding: "14px 14px 56px",
              borderRadius: 6,
              boxShadow:
                i === active
                  ? "0 45px 75px rgba(0,0,0,.55)"
                  : "0 25px 45px rgba(0,0,0,.35)",
              position: "relative",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: 260,
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 18,
                left: "50%",
                transform: "translateX(-50%)",
                fontWeight: 700,
                color: "#243b46",
              }}
            >
              {item.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
