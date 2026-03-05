import { useEffect, useRef, useState } from "react";

const steps = [
  {
    step: "01",
    title: "Defining The Product Scope",
    desc: "Our journey begins with a focused, 7-day session to define the scope of your digital product. We align on vision and technical requirements, setting a solid foundation for everything ahead.",
    icon: "🎯",
    duration: "Week 1",
    side: "left",
  },
  {
    step: "02",
    title: "Crafting the Design Blueprint",
    desc: "We translate your vision into high-fidelity wireframes and interactive prototypes. Every screen is crafted with intention — balancing beauty, usability, and conversion.",
    icon: "🎨",
    duration: "Week 2–4",
    side: "right",
  },
  {
    step: "03",
    title: "Development & Implementation",
    desc: "Our engineers bring designs to life with clean, scalable code. We follow agile sprints with weekly demos so you're always in the loop and in control.",
    icon: "⚙️",
    duration: "Week 5–12",
    side: "left",
  },
  {
    step: "04",
    title: "QA, Launch & Scale",
    desc: "Rigorous testing, performance tuning, and a smooth launch — followed by post-launch support to ensure your product grows confidently in the market.",
    icon: "🚀",
    duration: "Week 13–16",
    side: "right",
  },
];

export default function TimelineCards({ dark = true }) {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((ref, i) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.88) {
            setVisibleCards((prev) => (prev.includes(i) ? prev : [...prev, i]));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const d = dark;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerTL {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes dotPop {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        .tl-card {
          opacity: 0;
          transition: box-shadow 0.3s ease;
        }
        .tl-card.visible-left  { animation: fadeSlideLeft  0.65s ease forwards; }
        .tl-card.visible-right { animation: fadeSlideRight 0.65s ease forwards; }
        .tl-card.visible-up    { animation: fadeSlideUp    0.65s ease forwards; }

        .tl-card-inner {
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }
        .tl-card:hover .tl-card-inner {
          box-shadow: 0 20px 60px rgba(124,58,237,0.28) !important;
        }

        .tl-dot {
          opacity: 0;
          transition: opacity 0.3s;
        }
        .tl-dot.dot-visible {
          animation: dotPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        .step-badge {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #a855f7, #3b82f6);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerTL 3s linear infinite;
        }

        .tl-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .tl-card:hover .tl-icon-wrap {
          transform: scale(1.1) rotate(-4deg);
        }

        /* ── Responsive ── */

        /* Desktop: alternating left/right */
        .tl-row {
          display: flex;
          margin-bottom: 72px;
          position: relative;
        }
        .tl-row.side-left  { justify-content: flex-start; }
        .tl-row.side-right { justify-content: flex-end; }

        .tl-card-wrap {
          width: 46%;
        }
        .tl-card-wrap.side-left  { padding-right: 48px; }
        .tl-card-wrap.side-right { padding-left:  48px; }

        /* Center dot for desktop */
        .tl-dot-desktop {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        /* Mobile: single column, left-aligned with left-side line */
        @media (max-width: 767px) {
          .tl-row {
            justify-content: flex-end !important;
            margin-bottom: 48px;
          }
          .tl-card-wrap {
            width: 100% !important;
            padding-left: 28px !important;
            padding-right: 0 !important;
          }
          .tl-card.visible-left,
          .tl-card.visible-right {
            animation: fadeSlideUp 0.6s ease forwards !important;
          }

          /* Hide center line & dots, show left line */
          .tl-line-center  { display: none !important; }
          .tl-dot-desktop  { display: none !important; }
          .tl-line-mobile  { display: block !important; }
          .tl-dot-mobile   { display: flex !important; }
        }

        .tl-line-mobile { display: none; }
        .tl-dot-mobile  { display: none; }
      `}</style>

      <div
        id="ourprocess"
        style={{ fontFamily: "'DM Sans', sans-serif", position: "relative", overflow: "hidden" }}
      >
        {/* Section Header */}
        <div style={{ textAlign: "center", padding: "90px 24px 60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: d ? "#475569" : "#94a3b8",
              marginBottom: "18px",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "linear-gradient(90deg, transparent, #a855f7)", borderRadius: "2px" }} />
            How It Works
            <span style={{ display: "block", width: "32px", height: "1px", background: "linear-gradient(90deg, #3b82f6, transparent)", borderRadius: "2px" }} />
          </div>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: d ? "#f1f5f9" : "#0f172a",
              marginBottom: "16px",
            }}
          >
            From idea to launch —{" "}
            <span style={{ background: "linear-gradient(135deg, #a855f7 0%, #6366f1 40%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              our process.
            </span>
          </h2>

          <p style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: "480px", margin: "0 auto", color: d ? "#64748b" : "#94a3b8" }}>
            A clear, battle-tested 16-week roadmap that takes you from raw concept to a product your users love.
          </p>
        </div>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            maxWidth: "1100px",
            margin: "0 auto",
            // padding: "0 24px 100px",
          }}
        >

          

          {steps.map((step, i) => {
            const isLeft = step.side === "left";
            const isVisible = visibleCards.includes(i);
            const delay = `${i * 0.12}s`;

            return (
              <div key={i} className={`tl-row side-${step.side}`}>

                {/* Desktop center dot */}
                <div
                  className={`tl-dot tl-dot-desktop${isVisible ? " dot-visible" : ""}`}
                  style={{ animationDelay: `${i * 0.15 + 0.1}s` }}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                      border: `3px solid ${d ? "#080c14" : "#f8f7ff"}`,
                      boxShadow: "0 0 12px rgba(168,85,247,0.7)",
                    }}
                  />
                </div>

                {/* Mobile left dot */}
                <div
                  className={`tl-dot tl-dot-mobile${isVisible ? " dot-visible" : ""}`}
                  style={{
                    position: "absolute",
                    left: "0px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    alignItems: "center",
                    justifyContent: "center",
                    animationDelay: `${i * 0.15 + 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                      border: `3px solid ${d ? "#080c14" : "#f8f7ff"}`,
                      boxShadow: "0 0 10px rgba(168,85,247,0.6)",
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className={`tl-card-wrap side-${isLeft ? "left" : "right"}`}
                  ref={(el) => (cardRefs.current[i] = el)}
                >
                  <div
                    className={`tl-card${isVisible ? (isLeft ? " visible-left" : " visible-right") : ""}`}
                    style={{ animationDelay: delay }}
                  >
                    <div
                      className="tl-card-inner"
                      style={{
                        background: d ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)",
                        border: d ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.07)",
                        borderRadius: "20px",
                        padding: "28px",
                        backdropFilter: "blur(12px)",
                        boxShadow: d ? "0 8px 40px rgba(0,0,0,0.3)" : "0 8px 40px rgba(0,0,0,0.06)",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Corner glow */}
                      <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: "radial-gradient(circle at top right, rgba(168,85,247,0.08), transparent 70%)", pointerEvents: "none", borderRadius: "20px" }} />

                      {/* Top row */}
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px", gap: "12px" }}>
                        <div>
                          <div className="step-badge" style={{ marginBottom: "6px" }}>Step — {step.step}</div>
                          <div style={{
                            display: "inline-block",
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            padding: "3px 10px",
                            borderRadius: "50px",
                            background: d ? "rgba(168,85,247,0.1)" : "rgba(124,58,237,0.08)",
                            border: d ? "1px solid rgba(168,85,247,0.2)" : "1px solid rgba(124,58,237,0.15)",
                            color: d ? "#c084fc" : "#7c3aed",
                            letterSpacing: "0.04em",
                          }}>
                            {step.duration}
                          </div>
                        </div>

                        <div
                          className="tl-icon-wrap"
                          style={{
                            background: d ? "rgba(168,85,247,0.1)" : "rgba(124,58,237,0.07)",
                            border: d ? "1px solid rgba(168,85,247,0.18)" : "1px solid rgba(124,58,237,0.12)",
                          }}
                        >
                          {step.icon}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.35rem", lineHeight: 1.25, letterSpacing: "-0.02em", color: d ? "#f1f5f9" : "#0f172a", marginBottom: "12px" }}>
                        {step.title}
                      </h3>

                      {/* Divider */}
                      <div style={{ height: "1px", background: d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)", marginBottom: "12px" }} />

                      {/* Desc */}
                      <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: d ? "#94a3b8" : "#64748b", margin: 0 }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* End cap */}
          <div style={{ textAlign: "center", position: "relative", zIndex: 5 }}>
            <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.3rem",
                boxShadow: "0 0 24px rgba(124,58,237,0.5)",
              }}>
                🎉
              </div>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: d ? "#c084fc" : "#7c3aed", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Product Launched
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}