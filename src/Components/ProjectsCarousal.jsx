// import { useState, useRef, useEffect } from 'react';

// export default function Carousel() {
//   const [isHovering, setIsHovering] = useState(false);
//   const scrollContainerRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     const scroll = () => {
//       if (scrollContainerRef.current && !isHovering) {
//         scrollContainerRef.current.scrollLeft -= 1;
        
//         // Reset to end when reaching the start
//         if (scrollContainerRef.current.scrollLeft <= 0) {
//           scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
//         }
//       }
//       animationRef.current = requestAnimationFrame(scroll);
//     };

//     animationRef.current = requestAnimationFrame(scroll);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isHovering]);

//   const slides = [
//     {
//       id: 1,
//       title: "Design System",
//       desc: "Comprehensive design framework",
//       color: "from-slate-100 to-slate-200"
//     },
//     {
//       id: 2,
//       title: "Dashboard Layout",
//       desc: "Modern dashboard interface",
//       color: "from-gray-100 to-gray-200"
//     },
//     {
//       id: 3,
//       title: "Finance App",
//       desc: "Manage your finance easily",
//       color: "from-blue-200 to-blue-300"
//     },
//     {
//       id: 4,
//       title: "Analytics Dashboard",
//       desc: "Real-time analytics and insights",
//       color: "from-purple-100 to-purple-200"
//     },
//     {
//       id: 5,
//       title: "Mobile Design",
//       desc: "Responsive mobile interface",
//       color: "from-pink-100 to-pink-200"
//     },
//     {
//       id: 6,
//       title: "E-commerce",
//       desc: "Shopping experience redesigned",
//       color: "from-green-100 to-green-200"
//     }
//   ];

//   return (
//     <div className=" flex flex-col items-center justify-center px-4 py-6">
//       <div className="w-full">
//         {/* Carousel Container */}
//         <div
//           ref={scrollContainerRef}
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//           className="flex gap-6 overflow-x-hidden scroll-smooth pb-4 px-2"
//           style={{ scrollBehavior: 'auto' }}
//         >
//           {/* Duplicate slides for infinite loop effect */}
//           {[...slides, ...slides].map((slide, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-80 group cursor-pointer"
//             >
//               <div className="relative h-96 rounded-2xl border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
//                 {/* Background */}
//                 <div className={`absolute inset-0  bg-purple-900/30 border border-purple-400/30`} />

//                 {/* Content */}
//                 <div className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/40 to-transparent">
//                   <div>
//                     <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold mb-4 group-hover:bg-white/30 transition-all">
//                       Project {slide.id}
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="text-2xl font-bold mb-2">
//                       {slide.title}
//                     </h3>
//                     <p className=" text-sm">
//                       {slide.desc}
//                     </p>

//                     <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                       <button className="px-4 py-2 border  font-semibold rounded-lg hover:bg-gray-100 transition-colors">
//                         View Project
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Overlay on hover */}
//                 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useRef, useEffect } from 'react';

// const styles = `
//   @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap');

//   @keyframes shimmerCard {
//     0%   { background-position: 0% center; }
//     100% { background-position: 200% center; }
//   }
//   @keyframes pulse-glow {
//     0%, 100% { opacity: 0.5; transform: scale(1); }
//     50%       { opacity: 1;   transform: scale(1.08); }
//   }

//   .carousel-track {
//     display: flex;
//     gap: 24px;
//     overflow-x: hidden;
//     padding: 16px 8px 32px;
//     scroll-behavior: auto;
//   }

//   .slide-card {
//     flex-shrink: 0;
//     width: 300px;
//     height: 400px;
//     border-radius: 20px;
//     position: relative;
//     overflow: hidden;
//     border: 1px solid rgba(168,85,247,0.15);
//     transition: transform 0.4s cubic-bezier(0.34,1.2,0.64,1),
//                 box-shadow 0.4s ease,
//                 border-color 0.4s ease;
//     cursor: pointer;
//   }

//   .slide-card::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: radial-gradient(ellipse at 30% 0%, rgba(168,85,247,0.18) 0%, transparent 65%);
//     pointer-events: none;
//     z-index: 1;
//   }

//   .slide-card:hover {
//     transform: translateY(-8px) scale(1.02);
//     border-color: rgba(168,85,247,0.45);
//     box-shadow:
//       0 30px 70px rgba(124,58,237,0.4),
//       0 0 40px rgba(168,85,247,0.12) inset;
//   }

//   .slide-card:hover .card-glow { opacity: 1; }
//   .slide-card:hover .card-btn  { opacity: 1; transform: translateY(0); }

//   .card-glow {
//     position: absolute;
//     top: -60px; left: -60px;
//     width: 200px; height: 200px;
//     border-radius: 50%;
//     background: radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%);
//     opacity: 0;
//     transition: opacity 0.5s ease;
//     pointer-events: none;
//     z-index: 1;
//     animation: pulse-glow 3s ease-in-out infinite;
//   }

//   .card-tag {
//     font-family: 'Syne', sans-serif;
//     font-size: 0.65rem;
//     font-weight: 800;
//     letter-spacing: 0.14em;
//     text-transform: uppercase;
//     background: linear-gradient(135deg, #a855f7, #3b82f6);
//     background-size: 200% auto;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//     animation: shimmerCard 3s linear infinite;
//   }

//   .card-title {
//     font-family: 'Syne', sans-serif;
//     font-size: 1.5rem;
//     font-weight: 800;
//     color: #f0e9ff;
//     line-height: 1.2;
//     letter-spacing: -0.02em;
//   }

//   .card-desc {
//     font-family: 'DM Sans', sans-serif;
//     font-size: 0.82rem;
//     color: rgba(180,160,220,0.7);
//     line-height: 1.5;
//     margin-top: 6px;
//   }

//   .card-number {
//     font-family: 'Syne', sans-serif;
//     font-size: 5.5rem;
//     font-weight: 900;
//     color: rgba(168,85,247,0.07);
//     line-height: 1;
//     position: absolute;
//     top: 12px; right: 18px;
//     z-index: 2;
//     pointer-events: none;
//     user-select: none;
//   }

//   .card-btn {
//     font-family: 'DM Sans', sans-serif;
//     font-size: 0.78rem;
//     font-weight: 600;
//     opacity: 0;
//     transform: translateY(8px);
//     transition: opacity 0.35s ease, transform 0.35s ease, background 0.2s ease;
//     padding: 9px 18px;
//     border-radius: 10px;
//     border: 1px solid rgba(168,85,247,0.35);
//     color: rgba(220,200,255,0.9);
//     background: rgba(168,85,247,0.08);
//     cursor: pointer;
//     letter-spacing: 0.04em;
//     margin-top: 18px;
//     display: inline-block;
//   }
//   .card-btn:hover { background: rgba(168,85,247,0.22); }

//   .card-line {
//     width: 32px; height: 2px;
//     background: linear-gradient(90deg, #a855f7, #3b82f6);
//     border-radius: 2px;
//     margin: 10px 0;
//   }

//   .fade-left {
//     position: absolute; left: 0; top: 0; bottom: 0; width: 80px;
//     background: linear-gradient(to right, rgba(6,3,16,1) 0%, transparent 100%);
//     pointer-events: none; z-index: 20;
//   }
//   .fade-right {
//     position: absolute; right: 0; top: 0; bottom: 0; width: 80px;
//     background: linear-gradient(to left, rgba(6,3,16,1) 0%, transparent 100%);
//     pointer-events: none; z-index: 20;
//   }
// `;

// const slides = [
//   { id: 1, title: "Design System",    desc: "Comprehensive design framework for modern products", icon: "✦" },
//   { id: 2, title: "Dashboard Layout", desc: "Real-time data at a glance, beautifully composed",   icon: "◈" },
//   { id: 3, title: "Finance App",      desc: "Manage your wealth with clarity and confidence",      icon: "◆" },
//   { id: 4, title: "Analytics Core",   desc: "Insights that surface what actually matters",         icon: "⬡" },
//   { id: 5, title: "Mobile Interface", desc: "Pixel-perfect responsive design for every screen",    icon: "◉" },
//   { id: 6, title: "E-commerce UI",    desc: "Shopping experience reimagined from scratch",         icon: "⬟" },
// ];

// export default function Carousel({dark , setDark}) {
//   const [isHovering, setIsHovering] = useState(false);
//   const scrollRef = useRef(null);
//   const animRef = useRef(null);

//   useEffect(() => {
//     const scroll = () => {
//       if (scrollRef.current && !isHovering) {
//         scrollRef.current.scrollLeft += 0.7;
//         const { scrollLeft, scrollWidth } = scrollRef.current;
//         if (scrollLeft >= scrollWidth / 3) {
//           scrollRef.current.scrollLeft = 0;
//         }
//       }
//       animRef.current = requestAnimationFrame(scroll);
//     };
//     animRef.current = requestAnimationFrame(scroll);
//     return () => cancelAnimationFrame(animRef.current);
//   }, [isHovering]);

//   return (
//     <>
//       <style>{styles}</style>
//       <div style={{ position: 'relative', padding: '8px 0' }}>
//         <div className="fade-left" />
//         <div className="fade-right" />
//         <div
//           ref={scrollRef}
//           className="carousel-track"
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           {[...slides, ...slides, ...slides].map((slide, i) => (
//             <div key={i} className="slide-card"
//             style={{
//               backgroundColor : dark ? "rgba(12, 7, 28, 0.95)" : "white"
//             }}>
//               <div className="card-glow" />
//               <div className="card-number">{String(slide.id).padStart(2, '0')}</div>

//               {/* Icon area */}
//               <div style={{
//                 position: 'absolute', top: 0, left: 0, right: 0, height: '185px',
//                 background: 'linear-gradient(135deg, rgba(88,28,135,0.25) 0%, rgba(30,10,60,0.1) 100%)',
//                 zIndex: 1,
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 fontSize: '3.5rem', opacity: 0.55,
//               }}>
//                 {slide.icon}
//               </div>

//               {/* Bottom content */}
//               <div style={{
//                 position: 'absolute', bottom: 0, left: 0, right: 0,
//                 padding: '28px 24px',
//                 background: 'linear-gradient(to top, rgba(6,3,18,0.98) 55%, transparent 100%)',
//                 zIndex: 5,
//               }}>
//                 <div className="card-tag">Project {String(slide.id).padStart(2,'0')}</div>
//                 <div className="card-line" />
//                 <div className="card-title">{slide.title}</div>
//                 <div className="card-desc">{slide.desc}</div>
//                 <div className="card-btn">View Project →</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


import { useState, useRef, useEffect } from "react";
import "../App.css"

const slides = [
  { id: 1, title: "Design System", desc: "Comprehensive design framework for modern products", icon: "✦" },
  { id: 2, title: "Dashboard Layout", desc: "Real-time data at a glance, beautifully composed", icon: "◈" },
  { id: 3, title: "Finance App", desc: "Manage your wealth with clarity and confidence", icon: "◆" },
  { id: 4, title: "Analytics Core", desc: "Insights that surface what actually matters", icon: "⬡" },
  { id: 5, title: "Mobile Interface", desc: "Pixel-perfect responsive design for every screen", icon: "◉" },
  { id: 6, title: "E-commerce UI", desc: "Shopping experience reimagined from scratch", icon: "⬟" },
];

export default function Carousel({ dark }) {
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef(null);
  const animRef = useRef(null);

  /* ================= THEME ================= */
  

  const theme = {
    // bg: dark ? "#060310" : "#f5f5f7",
    
    cardBg: dark ? "rgba(12, 7, 28, 0.95)" : "#ffffff",
    textPrimary: dark ? "#f0e9ff" : "#111",
    textSecondary: dark ? "rgba(180,160,220,0.7)" : "#555",
    gradientTop: dark
      ? "linear-gradient(135deg, rgba(88,28,135,0.25) 0%, rgba(30,10,60,0.1) 100%)"
      : "linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(59,130,246,0.1) 100%)",
    bottomFade: dark
      ? "linear-gradient(to top, rgba(6,3,18,0.98) 55%, transparent 100%)"
      : "linear-gradient(to top, rgba(255,255,255,0.98) 55%, transparent 100%)",
    fadeLeft: dark
      ? "linear-gradient(to right, rgba(6,3,16,1) 0%, transparent 100%)"
      : "linear-gradient(to right, #f5f5f7 0%, transparent 100%)",
    fadeRight: dark
      ? "linear-gradient(to left, rgba(6,3,16,1) 0%, transparent 100%)"
      : "linear-gradient(to left, #f5f5f7 0%, transparent 100%)",
  };

  /* ================= AUTO SCROLL ================= */

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current && !isHovering) {
        scrollRef.current.scrollLeft += 0.7;
        const { scrollLeft, scrollWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth / 3) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animRef.current = requestAnimationFrame(scroll);
    };
    animRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animRef.current);
  }, [isHovering]);

  return (
    <div style={{ background: theme.bg, padding: "40px 0", position: "relative" }}>
      
      {/* Fade overlays */}
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 80,
        background: theme.fadeLeft,
        zIndex: 10,
        pointerEvents: "none"
      }} />

      <div style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: 80,
        background: theme.fadeRight,
        zIndex: 10,
        pointerEvents: "none"
      }} />

      {/* Track */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: 24,
          overflowX: "hidden",
          padding: "16px 8px 32px"
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        
        {[...slides, ...slides, ...slides].map((slide, i) => (
          <div
            key={i}
            style={{
              width: 300,
              height: 400,
              borderRadius: 20,
              background: theme.cardBg,
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
              transition: "0.4s",
              cursor: "pointer",
              boxShadow: dark
                ? "0 20px 50px rgba(124,58,237,0.3)"
                : "0 10px 30px rgba(0,0,0,0.08)",
              
            }}
          >
            {/* Icon Area */}
           
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 185,
              background: theme.gradientTop,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3.5rem",
              opacity: 0.6
            }}>
              {slide.icon}
            </div>

            {/* Content */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "28px 24px",
              background: theme.bottomFade
            }}>
              <div style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#a855f7"
              }}>
                PROJECT {String(slide.id).padStart(2, "0")}
              </div>

              <div style={{
                width: 32,
                height: 2,
                background: "linear-gradient(90deg,#a855f7,#3b82f6)",
                margin: "10px 0"
              }} />

              <div style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: theme.textPrimary
              }}>
                {slide.title}
              </div>

              <div style={{
                fontSize: "0.85rem",
                marginTop: 6,
                color: theme.textSecondary
              }}>
                {slide.desc}
              </div>

              <button style={{
                marginTop: 18,
                padding: "9px 18px",
                borderRadius: 10,
                border: "1px solid #a855f7",
                background: dark
                  ? "rgba(168,85,247,0.12)"
                  : "rgba(168,85,247,0.08)",
                color: theme.textPrimary,
                cursor: "pointer",
                transition: "0.3s"
              }}>
                View Project →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}