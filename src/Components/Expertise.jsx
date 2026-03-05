import React from "react";
import BrushIcon from "@mui/icons-material/Brush";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import MemoryIcon from "@mui/icons-material/Memory";

const services = [
  {
    title: "UI/UX Design",
    desc: "We craft user interfaces that are not only visually appealing but also optimized for user interaction, increasing satisfaction and usability.",
    icon: <BrushIcon />,
  },
  {
    title: "Web Development",
    desc: "Develop your digital footprint with our tailored web solutions that ensure scalability and robust performance, meeting the dynamic needs of modern businesses.",
    icon: <LanguageIcon />,
  },
  {
    title: "Mobile App Dev",
    desc: "Expand your reach with our mobile app solutions, offering sleek, responsive designs and functional features that perform seamlessly across devices.",
    icon: <PhoneIphoneIcon />,
  },
  {
    title: "Integration & Automation",
    desc: "Enhance operational efficiency by integrating advanced automation processes that streamline workflows and reduce manual intervention.",
    icon: <SettingsSuggestIcon />,
  },
  {
    title: "AI Integration",
    desc: "Incorporate the latest AI technologies into your existing products to drive innovation, improve user engagement, and maintain competitive advantage.",
    icon: <MemoryIcon />,
  },
];

export default function ServicesSection({dark}) {
  return (
    <section className="relative py-20 px-6 ">
      <div className="max-w-7xl mx-auto grid gap-10">

        {/* TOP ROW */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.slice(0, 3).map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {services.slice(3).map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ item }) {
  return (
    <div className="relative rounded-2xl border border-white/10 p-8 text-center shadow-lg hover:scale-[1.02] transition">
      
      {/* ICON */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center shadow-lg">
        <span className=" text-2xl">
          {React.cloneElement(item.icon, { fontSize: "inherit" })}
        </span>
      </div>

      {/* CONTENT */}
      <h3 className="mt-8  text-xl font-semibold">
        {item.title}
      </h3>

      <p className="mt-4 text-sm leading-relaxed">
        {item.desc}
      </p>
    </div>
  );
}
