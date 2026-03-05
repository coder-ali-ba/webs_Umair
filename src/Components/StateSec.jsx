import React from "react";
import StraightIcon from '@mui/icons-material/Straight';

const stats = [
  {
    title: "100% On-Time Delivery",
    desc: "Guaranteeing timely launches to keep your project on track and on schedule.",
  },
  {
    title: "50% Average Client Growth in the First Year",
    desc: "Fueling startup success with significant growth post-launch.",
  },
  {
    title: "16 Weeks to Launch",
    desc: "Rapid project delivery with our MVP Launchpad, achieving market readiness in just 16 weeks.",
  },
  {
    title: "98% First-Time Right Feature Integration",
    desc: "Precise execution, ensuring features meet client specifications from the start.",
  },
  {
    title: "95% Customer Satisfaction",
    desc: "High satisfaction rates reflect our commitment to exceeding client expectations.",
  },
  {
    title: "80% Repeat Business",
    desc: "A testament to our trusted client relationships and consistent performance.",
  },
];

export default function StatsSection({dark}) {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="rounded-2xl border  p-8" style={{
        backgroundColordark:dark ? "rgba(12, 7, 28, 0.95)" : "#ffffff",
        borderColor : dark ? "white" : "grey"
      }}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item, index) => (
            <div key={index} className="space-y-3 flex">
              {/* Arrow */}
              <div className=" animate-bounce flex items-center" style={{
                color :dark ? "white" : "black"
              }}><StraightIcon  sx={{fontSize:50, fontWeight:"bold"}}/></div>

              <div>
              {/* Title */}
              <h3 className=" text-2xl font-semibold leading-snug" style={{
                color :dark ? "white" : "black"
              }}>
                {item.title}
              </h3>

              {/* Description */}
              <p className=" text-sm leading-relaxed" style={{
                color :dark ? "white" : "gray"
              }}>
                {item.desc}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
