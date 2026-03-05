import * as React from "react";

function SpinningText({ dark }) {
  return (
    <div style={{ position: "relative", width: "160px", height: "160px", margin: "auto" }}>
      <svg viewBox="0 0 160 160" width="160" height="160" style={{ animation: "spin 10s linear infinite" }}>
        <defs>
          <path id="circle" d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
        </defs>
        <text fontSize="13" fontFamily="'DM Sans', sans-serif" fontWeight="500" fill={dark ? "#a78bfa" : "#7c3aed"} letterSpacing="4">
          <textPath href="#circle">SAASIFY • BUILD • LAUNCH • SCALE •</textPath>
        </text>
      </svg>
      <div style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "28px"
      }}>🚀</div>
    </div>
  );
}

export default function HeroSection({ dark, setDark }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.97); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(168,85,247,0.4); }
          50% { box-shadow: 0 0 0 8px rgba(168,85,247,0); }
        }

        .hero-section {
          min-height: 100vh;
          padding-top: 70px;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          display: flex;
          align-items: center;
        }

        .hero-section.dark {
          background: #080c14;
        }

        .hero-section.light {
          background: #f8f7ff;
        }

        /* Ambient blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: floatBlob 8s ease-in-out infinite;
        }

        .blob-1 {
          width: 500px; height: 500px;
          top: -100px; left: -100px;
          animation-delay: 0s;
        }

        .blob-1.dark { background: rgba(124, 58, 237, 0.18); }
        .blob-1.light { background: rgba(124, 58, 237, 0.1); }

        .blob-2 {
          width: 400px; height: 400px;
          bottom: -50px; right: -50px;
          animation-delay: -3s;
        }

        .blob-2.dark { background: rgba(37, 99, 235, 0.15); }
        .blob-2.light { background: rgba(37, 99, 235, 0.08); }

        .blob-3 {
          width: 300px; height: 300px;
          top: 40%; right: 25%;
          animation-delay: -5s;
        }

        .blob-3.dark { background: rgba(192, 38, 211, 0.1); }
        .blob-3.light { background: rgba(192, 38, 211, 0.06); }

        /* Grid pattern overlay */
        .hero-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.03;
          background-image:
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .hero-grid.light {
          opacity: 0.06;
          background-image:
            linear-gradient(rgba(0,0,0,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px);
        }

        /* Content */
        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 40px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 60px;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr;
            padding: 60px 24px;
            gap: 48px;
          }
        }

        .hero-left {
          animation: fadeUp 0.8s ease forwards;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px 6px 8px;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 28px;
          animation: badgePulse 3s ease infinite;
        }

        .hero-badge.dark {
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(168, 85, 247, 0.3);
          color: #c084fc;
        }

        .hero-badge.light {
          background: rgba(124, 58, 237, 0.08);
          border: 1px solid rgba(124, 58, 237, 0.2);
          color: #7c3aed;
        }

        .badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #a855f7;
          box-shadow: 0 0 6px #a855f7;
          animation: badgePulse 2s ease infinite;
        }

        /* Heading */
        .hero-heading {
          font-family: 'Syne', sans-serif;
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
        }

        .hero-heading .line {
          display: block;
          animation: fadeUp 0.8s ease forwards;
          opacity: 0;
        }

        .hero-heading .line:nth-child(1) { animation-delay: 0.1s; }
        .hero-heading .line:nth-child(2) { animation-delay: 0.2s; }
        .hero-heading .line:nth-child(3) { animation-delay: 0.3s; }

        .hero-heading.dark .line { color: #f1f5f9; }
        .hero-heading.light .line { color: #0f172a; }

        .gradient-word {
          background: linear-gradient(135deg, #a855f7 0%, #6366f1 40%, #3b82f6 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        /* Subtext */
        .hero-sub {
          font-size: 1.05rem;
          font-weight: 400;
          line-height: 1.75;
          max-width: 520px;
          margin-bottom: 40px;
          animation: fadeUp 0.8s ease 0.4s forwards;
          opacity: 0;
        }

        .hero-sub.dark { color: #94a3b8; }
        .hero-sub.light { color: #64748b; }

        /* CTA Row */
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          animation: fadeUp 0.8s ease 0.55s forwards;
          opacity: 0;
        }

        .btn-primary {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 12px;
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4), inset 0 1px 0 rgba(255,255,255,0.15);
          letter-spacing: 0.02em;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.5);
        }

        .btn-primary:active {
          transform: translateY(-1px);
        }

        .btn-secondary {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 12px;
          background: transparent;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.01em;
          text-decoration: none;
        }

        .btn-secondary.dark {
          color: #94a3b8;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .btn-secondary.dark:hover {
          color: #e2e8f0;
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.05);
        }

        .btn-secondary.light {
          color: #64748b;
          border: 1px solid rgba(0,0,0,0.1);
        }

        .btn-secondary.light:hover {
          color: #1e293b;
          border-color: rgba(0,0,0,0.2);
          background: rgba(0,0,0,0.03);
        }

        /* Stats row */
        .hero-stats {
          display: flex;
          gap: 32px;
          margin-top: 52px;
          padding-top: 36px;
          flex-wrap: wrap;
          animation: fadeUp 0.8s ease 0.7s forwards;
          opacity: 0;
        }

        .hero-stats.dark { border-top: 1px solid rgba(255,255,255,0.07); }
        .hero-stats.light { border-top: 1px solid rgba(0,0,0,0.08); }

        .stat-item {}

        .stat-num {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.7rem;
          line-height: 1;
          margin-bottom: 4px;
          background: linear-gradient(135deg, #a855f7, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .stat-label.dark { color: #475569; }
        .stat-label.light { color: #94a3b8; }

        /* Right side */
        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          animation: fadeIn 1s ease 0.4s forwards;
          opacity: 0;
        }

        @media (max-width: 768px) {
          .hero-right {
            display: flex;
          }
        }

        .spinning-card {
          position: relative;
          width: 240px;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spinning-card-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px dashed;
          animation: spin 20s linear infinite;
        }

        .spinning-card-ring.dark { border-color: rgba(168,85,247,0.2); }
        .spinning-card-ring.light { border-color: rgba(124,58,237,0.15); }

        .spinning-card-ring-2 {
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          border: 1px solid;
          animation: spin 15s linear infinite reverse;
        }

        .spinning-card-ring-2.dark { border-color: rgba(59,130,246,0.15); }
        .spinning-card-ring-2.light { border-color: rgba(37,99,235,0.1); }

        .spinning-card-center {
          position: relative;
          z-index: 1;
          width: 140px;
          height: 140px;
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 8px;
        }

        .spinning-card-center.dark {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .spinning-card-center.light {
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(0,0,0,0.06);
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 60px rgba(124,58,237,0.12), inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .spinning-card-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .spinning-card-label.dark { color: #64748b; }
        .spinning-card-label.light { color: #94a3b8; }

        .weeks-num {
          font-family: 'Syne', sans-serif;
          font-weight: 900;
          font-size: 2.8rem;
          line-height: 1;
          background: linear-gradient(135deg, #a855f7, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Mini floating cards */
        .floating-tag {
          padding: 8px 14px;
          border-radius: 10px;
          font-size: 0.78rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .floating-tag.dark {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          color: #94a3b8;
        }

        .floating-tag.light {
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.07);
          color: #475569;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }

        .tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
        }

        .tag-row {
          display: flex;
          gap: 8px;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>

      <section className={`hero-section max-md:pt-4 ${dark ? "dark-mode" : "light-mode"} `}>
        {/* Ambient background */}
        <div className={`blob blob-1 ${dark ? "dark" : "light"}`} />
        <div className={`blob blob-2 ${dark ? "dark" : "light"}`} />
        <div className={`blob blob-3 ${dark ? "dark" : "light"}`} />
        <div className={`hero-grid ${dark ? "dark" : "light"}`} />

        <div className="hero-inner">
          {/* LEFT CONTENT */}
          <div className="hero-left">
            {/* Badge */}
            <div className={`hero-badge ${dark ? "dark" : "light"}`}>
              <span className="badge-dot" />
              Now accepting clients for Q2 2025
            </div>

            {/* Heading */}
            <h1 className={`hero-heading ${dark ? "dark" : "light"}`}>
              <span className="line max-sm:text-2xl">Turn your SaaS</span>
              <span className="line max-sm:text-2xl">
                idea into a{" "}
                <span className="gradient-word max-sm:text-2xl">market-ready</span>
              </span>
              <span className="line max-sm:text-2xl">product fast.</span>
            </h1>

            {/* Sub */}
            <p className={`hero-sub  ${dark ? "dark" : "light"}`}>
              Fast-track your digital product development at SaaSify Labs.
              We specialize in turning your ideas into market-ready products
              in just <strong style={{ color: dark ? "#c084fc" : "#7c3aed" }}>16 weeks</strong> — design, build, and launch, all in one place.
            </p>

            {/* CTA */}
            <div className="hero-cta-row">
              <button className="btn-primary ">
                Get Started →
              </button>
              <a href="#ourprocess" className={`btn-secondary ${dark ? "dark" : "light"}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6.5 5.5l3 2.5-3 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                See how it works
              </a>
            </div>

            {/* Stats */}
            <div className={`hero-stats ${dark ? "dark" : "light"}`}>
              {[
                { num: "120+", label: "Products Launched" },
                { num: "16wk", label: "Avg. Time to Market" },
                { num: "98%", label: "Client Satisfaction" },
              ].map((s) => (
                <div className="stat-item max-sm:text-sm" key={s.label}>
                  <div className="stat-num max-sm:text-sm">{s.num}</div>
                  <div className={`stat-label max-sm:text-sm ${dark ? "dark" : "light"}`}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="hero-right">
            <div className="spinning-card">
              <div className={`spinning-card-ring ${dark ? "dark" : "light"}`} />
              <div className={`spinning-card-ring-2 ${dark ? "dark" : "light"}`} />
              <div className={`spinning-card-center ${dark ? "dark" : "light"}`}>
                <span className={`spinning-card-label ${dark ? "dark" : "light"}`}>Ship in</span>
                <span className="weeks-num">16</span>
                <span className={`spinning-card-label ${dark ? "dark" : "light"}`}>weeks</span>
              </div>
            </div>

            <div className="tag-row">
              {[
                { dot: "#a855f7", text: "UI/UX Design" },
                { dot: "#3b82f6", text: "Full-Stack Dev" },
                { dot: "#10b981", text: "Launch Ready" },
              ].map((tag) => (
                <div className={`floating-tag ${dark ? "dark" : "light"}`} key={tag.text}>
                  <span className="tag-dot" style={{ background: tag.dot, boxShadow: `0 0 6px ${tag.dot}` }} />
                  {tag.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}