// import { useEffect, useRef, useState } from 'react';

// export default function TimelineCards() {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current) {
//         const element = containerRef.current;
//         const rect = element.getBoundingClientRect();
//         const elementTop = rect.top;
//         const elementBottom = rect.bottom;
//         const windowHeight = window.innerHeight;

//         // Calculate progress from when element enters to when it leaves
//         const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementBottom)));
//         setScrollProgress(progress);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen ">

//       {/* Timeline Container */}
//       <div ref={containerRef} className="relative min-h-screen px-4 py-20">
//         {/* Central Timeline Line */}
//         <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-purple-600 to-purple-900 transform -translate-x-1/2"
//           style={{
//             height: `${scrollProgress * 100}%`,
//             boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)'
//           }}
//         />

//         {/* Full Line (Background) */}
//         <div className="absolute left-1/2 top-0 w-1 h-full bg-purple-900/30 transform -translate-x-1/2" />

//         {/* Step 1 - Left Card */}
//         <div className="mb-32 flex justify-start group-hover:opacity-100 transition-opacity duration-300">
//           <div className="w-full md:w-1/2 pr-0 md:pr-16">
//             <div className="group relative backdrop-blur-lg bg-purple-900/30 border  border-purple-400/30 rounded-2xl p-8 hover:border-purple-400/80 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
//               <div className="relative z-10">
//                 <h2 className="text-white text-3xl rounded-lg font-bold bg-gradient-to-r from-purple-900 to-blue-700 w-fit px-3 mb-3">
//                   Step-01
//                 </h2>
//                 <h1 className="text-3xl md:text-4xl font-bold  mb-5 leading-tight">
//                   Defining The Product Scope
//                 </h1>
//                 <p className=" text-base leading-relaxed opacity-90">
//                   Our journey begins with a focused, 7-day session to define the scope of your digital product. During this session, we align on vision and technical requirements, setting a solid foundation for development.
//                 </p>
//               </div>
//             </div>

//             {/* Dot on timeline */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-20">
//               <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-purple-950 shadow-lg shadow-purple-500/50" />
//             </div>
//           </div>
//         </div>

//         {/* Step 2 - Right Card */}
//         <div className="mb-32 flex justify-end">
//           <div className="w-full md:w-1/2 pl-0 md:pl-16">
//             <div className="group relative backdrop-blur-lg bg-purple-900/30 border border-purple-400/30 rounded-2xl p-8 hover:border-purple-400/80 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
//               <div className="relative z-10">
//                 <h2 className="text-white text-3xl rounded-lg font-bold bg-gradient-to-r from-purple-900 to-blue-700 w-fit px-3 mb-3">
//                   Step-02
//                 </h2>
//                 <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
//                   Crafting the Design Blueprint
//                 </h1>
//                 <p className=" text-base leading-relaxed opacity-90">
//                   Our journey begins with a focused, 7-day session to define the scope of your digital product. During this session, we align on vision and technical requirements, setting a solid foundation for development.
//                 </p>
//               </div>
//             </div>

//             {/* Dot on timeline */}
//             <div className="absolute right-1/2 transform translate-x-1/2 -translate-y-1/2 top-20">
//               <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-purple-950 shadow-lg shadow-purple-500/50" />
//             </div>
//           </div>
//         </div>

//         {/* Step 3 - Left Card */}
//         <div className="mb-32 flex justify-start">
//           <div className="w-full md:w-1/2 pr-0 md:pr-16">
//             <div className="group relative backdrop-blur-lg bg-purple-900/30 border border-purple-400/30 rounded-2xl p-8 hover:border-purple-400/80 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
//               <div className="relative z-10">
//                 <h2 className="text-white text-3xl rounded-lg font-bold bg-gradient-to-r from-purple-900 to-blue-700 w-fit px-3 mb-3">
//                   Step-03
//                 </h2>
//                 <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
//                   Development & Implementation
//                 </h1>
//                 <p className="-200 text-base leading-relaxed opacity-90">
//                   Our journey begins with a focused, 7-day session to define the scope of your digital product. During this session, we align on vision and technical requirements, setting a solid foundation for development.
//                 </p>
//               </div>
//             </div>

//             {/* Dot on timeline */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-20">
//               <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-purple-950 shadow-lg shadow-purple-500/50" />
//             </div>
//           </div>
//         </div>

//         {/* Step 2 - Right Card */}
//         <div className="mb-32 flex justify-end">
//           <div className="w-full md:w-1/2 pl-0 md:pl-16">
//             <div className="group relative backdrop-blur-lg bg-purple-900/30 border border-purple-400/30 rounded-2xl p-8 hover:border-purple-400/80 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
//               <div className="relative z-10">
//                 <h2 className="text-white text-3xl rounded-lg font-bold bg-gradient-to-r from-purple-900 to-blue-700 w-fit px-3 mb-3">
//                   Step-02
//                 </h2>
//                 <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
//                   Crafting the Design Blueprint
//                 </h1>
//                 <p className=" text-base leading-relaxed opacity-90">
//                   Our journey begins with a focused, 7-day session to define the scope of your digital product. During this session, we align on vision and technical requirements, setting a solid foundation for development.
//                 </p>
//               </div>
//             </div>

//             {/* Dot on timeline */}
//             <div className="absolute right-1/2 transform translate-x-1/2 -translate-y-1/2 top-20">
//               <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-purple-950 shadow-lg shadow-purple-500/50" />
//             </div>
//           </div>
//         </div>

//         {/* Step 3 - Left Card */}
//         <div className="mb-32 flex justify-start">
//           <div className="w-full md:w-1/2 pr-0 md:pr-16">
//             <div className="group relative backdrop-blur-lg bg-purple-900/30 border border-purple-400/30 rounded-2xl p-8 hover:border-purple-400/80 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
//               <div className="relative z-10">
//                 <h2 className="text-white text-3xl rounded-lg font-bold bg-gradient-to-r from-purple-900 to-blue-700 w-fit px-3 mb-3">
//                   Step-03
//                 </h2>
//                 <h1 className="text-3xl md:text-4xl font-bold  mb-5 leading-tight">
//                   Development & Implementation
//                 </h1>
//                 <p className="text-base leading-relaxed opacity-90">
//                   Our journey begins with a focused, 7-day session to define the scope of your digital product. During this session, we align on vision and technical requirements, setting a solid foundation for development.
//                 </p>
//               </div>
//             </div>

//             {/* Dot on timeline */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-20">
//               <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-purple-950 shadow-lg shadow-purple-500/50" />
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

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

export default function TimelineCards({ dark, setDark }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const progress = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight - rect.top) /
              (window.innerHeight + rect.height),
          ),
        );
        setScrollProgress(progress);
      }

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
        @keyframes dotPop {
          0%   { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          60%  { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        @keyframes pulse-ring {
          0%   { transform: translate(-50%,-50%) scale(1); opacity: 0.6; }
          100% { transform: translate(-50%,-50%) scale(2.2); opacity: 0; }
        }
        @keyframes shimmerTL {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .tl-card {
  opacity: 0;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
}
.tl-card.visible-left  { animation: fadeSlideLeft  0.7s ease forwards; }
.tl-card.visible-right { animation: fadeSlideRight 0.7s ease forwards; }

.tl-card:hover > div {
  background: rgba(168,85,247,0.06) !important;
  box-shadow: 0 20px 60px rgba(124,58,237,0.3) !important;
}
                      

        .tl-dot {
          opacity: 0;
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }
        .tl-dot.dot-visible {
          animation: dotPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        .tl-dot-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 24px; height: 24px;
          border-radius: 50%;
          background: rgba(168,85,247,0.4);
          animation: pulse-ring 2s ease-out infinite;
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
      `}</style>

      <div
        id="ourprocess"
        style={{
          // background: dark ? "#080c14" : "#f8f7ff",
          fontFamily: "'DM Sans', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
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
              color: dark ? "#475569" : "#94a3b8",
              marginBottom: "18px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "32px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #a855f7)",
                borderRadius: "2px",
              }}
            />
            How It Works
            <span
              style={{
                display: "block",
                width: "32px",
                height: "1px",
                background: "linear-gradient(90deg, #3b82f6, transparent)",
                borderRadius: "2px",
              }}
            />
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
            <span
              style={{
                background:
                  "linear-gradient(135deg, #a855f7 0%, #6366f1 40%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              our process.
            </span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: "480px",
              margin: "0 auto",
              color: d ? "#64748b" : "#94a3b8",
            }}
          >
            A clear, battle-tested 16-week roadmap that takes you from raw
            concept to a product your users love.
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={containerRef}
          style={{
            position: "relative",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 24px 100px",
          }}
        >
          {/* Background line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              transform: "translateX(-50%)",
              background: dark
                ? "rgba(124,58,237,0.12)"
                : "rgba(124,58,237,0.08)",
            }}
          />

          {/* Progress line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              width: "2px",
              transform: "translateX(-50%)",
              height: `${scrollProgress * 100}%`,
              background: "linear-gradient(180deg, #a855f7, #3b82f6)",
              boxShadow: "0 0 16px rgba(168,85,247,0.6)",
              transition: "height 0.1s linear",
            }}
          />

          {steps.map((step, i) => {
            const isLeft = step.side === "left";
            const isVisible = visibleCards.includes(i);
            // stagger delay
            const delay = `${i * 0.1}s`;
            // dot top position
            const dotTop = `${(i / (steps.length - 1)) * 90 + 5}%`;

            return (
              <div key={i}>
                {/* Dot */}
                <div
                  className={`tl-dot${isVisible ? " dot-visible" : ""}`}
                  style={{ top: dotTop, animationDelay: `${i * 0.15 + 0.2}s` }}
                >
                  {isVisible && <div className="tl-dot-ring" />}
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                      border: `3px solid ${dark ? "#080c14" : "#f8f7ff"}`,
                      boxShadow: "0 0 12px rgba(168,85,247,0.7)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                </div>

                {/* Card Row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: isLeft ? "flex-start" : "flex-end",
                    marginBottom: "80px",
                  }}
                >
                  <div
                    ref={(el) => (cardRefs.current[i] = el)}
                    className={`tl-card${isVisible ? (isLeft ? " visible-left" : " visible-right") : ""}`}
                    style={{
                      animationDelay: delay,
                      width: "100%",
                      maxWidth: "460px",
                      marginLeft: isLeft ? 0 : undefined,
                      marginRight: isLeft ? undefined : 0,
                      paddingLeft: isLeft ? 0 : "40px",
                      paddingRight: isLeft ? "40px" : 0,
                    }}
                  >
                    <div
                      style={{
                        background: dark
                          ? "rgba(255,255,255,0.03)"
                          : "rgba(255,255,255,0.85)",
                        border: dark
                          ? "1px solid rgba(255,255,255,0.07)"
                          : "1px solid rgba(0,0,0,0.07)",
                        borderRadius: "20px",
                        padding: "32px",
                        backdropFilter: "blur(12px)",
                        boxShadow: dark
                          ? "0 8px 40px rgba(0,0,0,0.3)"
                          : "0 8px 40px rgba(0,0,0,0.06)",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Subtle corner glow */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          width: "120px",
                          height: "120px",
                          background:
                            "radial-gradient(circle at top right, rgba(168,85,247,0.08), transparent 70%)",
                          pointerEvents: "none",
                          borderRadius: "20px",
                        }}
                      />

                      {/* Top row */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          marginBottom: "20px",
                          gap: "12px",
                        }}
                      >
                        <div>
                          <div
                            className="step-badge"
                            style={{ marginBottom: "6px" }}
                          >
                            Step — {step.step}
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              fontSize: "0.72rem",
                              fontWeight: 600,
                              padding: "3px 10px",
                              borderRadius: "50px",
                              background: dark
                                ? "rgba(168,85,247,0.1)"
                                : "rgba(124,58,237,0.08)",
                              border: dark
                                ? "1px solid rgba(168,85,247,0.2)"
                                : "1px solid rgba(124,58,237,0.15)",
                              color: dark ? "#c084fc" : "#7c3aed",
                              letterSpacing: "0.04em",
                            }}
                          >
                            {step.duration}
                          </div>
                        </div>

                        <div
                          className="tl-icon-wrap"
                          style={{
                            background: dark
                              ? "rgba(168,85,247,0.1)"
                              : "rgba(124,58,237,0.07)",
                            border: dark
                              ? "1px solid rgba(168,85,247,0.18)"
                              : "1px solid rgba(124,58,237,0.12)",
                          }}
                        >
                          {step.icon}
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 800,
                          fontSize: "1.4rem",
                          lineHeight: 1.25,
                          letterSpacing: "-0.02em",
                          color: dark ? "#f1f5f9" : "#0f172a",
                          marginBottom: "14px",
                        }}
                      >
                        {step.title}
                      </h3>

                      {/* Divider */}
                      <div
                        style={{
                          height: "1px",
                          background: dark
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(0,0,0,0.06)",
                          marginBottom: "14px",
                        }}
                      />

                      {/* Desc */}
                      <p
                        style={{
                          fontSize: "0.9rem",
                          lineHeight: 1.8,
                          color: dark ? "#94a3b8" : "#64748b",
                        }}
                      >
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
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                  boxShadow: "0 0 24px rgba(124,58,237,0.5)",
                }}
              >
                🎉
              </div>
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: dark ? "#c084fc" : "#7c3aed",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Product Launched
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
