import * as React from "react";

const logos = [
  { name: "Stripe", icon: "💳" },
  { name: "Vercel", icon: "▲" },
  { name: "Notion", icon: "📝" },
  { name: "Linear", icon: "⬡" },
  { name: "Figma", icon: "🎨" },
  { name: "Supabase", icon: "⚡" },
  { name: "Shopify", icon: "🛍️" },
  { name: "GitHub", icon: "🐙" },
];

// Duplicate for seamless loop
const allLogos = [...logos, ...logos];

export default function TrustedBy(dark , setDark) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .trusted-section {
          position: relative;
          padding: 80px 0;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .trusted-section.dark {
          background: #080c14;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .trusted-section.light {
          background: #f8f7ff;
          border-top: 1px solid rgba(0,0,0,0.07);
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }

        /* Subtle top glow line */
        .trusted-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 40%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #a855f7, #3b82f6, transparent);
        }

        .trusted-section::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 40%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #3b82f6, #a855f7, transparent);
        }

        /* Heading */
        .trusted-heading-wrap {
          text-align: center;
          margin-bottom: 56px;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .trusted-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .trusted-eyebrow.dark { color: #475569; }
        .trusted-eyebrow.light { color: #94a3b8; }

        .eyebrow-line {
          display: block;
          width: 32px;
          height: 1px;
          background: linear-gradient(90deg, #a855f7, #3b82f6);
          border-radius: 2px;
        }

        .trusted-heading {
          font-family: 'Syne', sans-serif;
          font-weight: 900;
          font-size: clamp(2rem, 4.5vw, 3.8rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .trusted-heading.dark { color: #f1f5f9; }
        .trusted-heading.light { color: #0f172a; }

        .trusted-heading .gradient-word {
          background: linear-gradient(135deg, #a855f7 0%, #6366f1 40%, #3b82f6 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 4s linear infinite;
        }

        @keyframes shimmerText {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .trusted-sub {
          font-size: 0.95rem;
          font-weight: 400;
          margin-top: 14px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        .trusted-sub.dark { color: #64748b; }
        .trusted-sub.light { color: #94a3b8; }

        /* Marquee */
        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        /* Fade edges */
        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 200px;
          z-index: 2;
          pointer-events: none;
        }

        .marquee-wrapper.dark::before {
          left: 0;
          background: linear-gradient(90deg, #080c14, transparent);
        }

        .marquee-wrapper.dark::after {
          right: 0;
          background: linear-gradient(-90deg, #080c14, transparent);
        }

        .marquee-wrapper.light::before {
          left: 0;
          background: linear-gradient(90deg, #f8f7ff, transparent);
        }

        .marquee-wrapper.light::after {
          right: 0;
          background: linear-gradient(-90deg, #f8f7ff, transparent);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
          gap: 16px;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Logo card */
        .logo-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 24px;
          border-radius: 14px;
          white-space: nowrap;
          cursor: default;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .logo-card.dark {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
        }

        .logo-card.light {
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(0,0,0,0.07);
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }

        .logo-card:hover.dark {
          background: rgba(168,85,247,0.08);
          border-color: rgba(168,85,247,0.2);
          transform: translateY(-2px);
        }

        .logo-card:hover.light {
          background: rgba(255,255,255,1);
          border-color: rgba(124,58,237,0.2);
          box-shadow: 0 8px 24px rgba(124,58,237,0.1);
          transform: translateY(-2px);
        }

        .logo-icon {
          font-size: 1.3rem;
          line-height: 1;
          filter: grayscale(1);
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .logo-card:hover .logo-icon {
          filter: grayscale(0);
          opacity: 1;
        }

        .logo-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.01em;
          transition: color 0.3s ease;
        }

        .logo-name.dark {
          color: #475569;
        }

        .logo-name.light {
          color: #94a3b8;
        }

        .logo-card:hover .logo-name.dark {
          color: #c084fc;
        }

        .logo-card:hover .logo-name.light {
          color: #7c3aed;
        }

        /* Count badge */
        .trusted-count {
          text-align: center;
          margin-top: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .count-line {
          height: 1px;
          width: 60px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.3));
        }

        .count-line.right {
          background: linear-gradient(90deg, rgba(168,85,247,0.3), transparent);
        }

        .count-text {
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.04em;
        }

        .count-text.dark { color: #475569; }
        .count-text.light { color: #94a3b8; }

        .count-num {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          background: linear-gradient(135deg, #a855f7, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <section className={` ${dark ? "dark" : "light"}`}>
        {/* Heading */}
        <div className="trusted-heading-wrap">
          <div className={`trusted-eyebrow `}>
            <span className="eyebrow-line" />
            Trusted Worldwide
            <span className="eyebrow-line" />
          </div>

          <h2 className={`trusted-heading`}>
            Trusted by{" "}
            <span className="gradient-word">innovators</span>
            <br />
            and industry leaders
          </h2>

          <p className={`trusted-sub ${dark ? "dark" : "light"}`}>
            From early-stage startups to enterprise teams — builders worldwide
            trust SaaSify to ship faster.
          </p>
        </div>

        {/* Marquee */}
        <div className={`marquee-wrapper ${dark ? "dark" : "light"}`}>
          <div className="marquee-track">
            {allLogos.map((logo, i) => (
              <div
                key={i}
                className={`logo-card ${dark ? "dark" : "light"}`}
              >
                <span className="logo-icon">{logo.icon}</span>
                <span className={`logo-name ${dark ? "dark" : "light"}`}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom count */}
        <div className="trusted-count">
          <div className="count-line" />
          <span className={`count-text ${dark ? "dark" : "light"}`}>
            <span className="count-num">500+</span> companies and counting
          </span>
          <div className="count-line right" />
        </div>
      </section>
    </>
  );
}