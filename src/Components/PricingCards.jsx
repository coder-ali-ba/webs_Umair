import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { linear } from "animejs";

const plans = [
  {
    title: "Launchpad Essentials Package",
    price: "from $5,750",
    desc: "Kickstart your web-based SaaS project with our streamlined design and rapid development services.",
    features: [
      { text: "UI/UX of Web-based SaaS product", ok: true },
      { text: "Landing Page Development", ok: true },
      { text: "Pitch Deck Template", ok: true },
      { text: "Web-based MVP Development", ok: true },
      { text: "UI/UX of Mobile Based SaaS product", ok: false },
      { text: "Landing Page Design", ok: false },
      { text: "Cross Platform Mobile based MVP Development", ok: false },
    ],
  },
  {
    title: "Accelerator Pro Package",
    price: "from $7,000",
    desc: "Propel your mobile SaaS product to new heights with our full-spectrum cross-platform development and design.",
    features: [
      { text: "UI/UX of Mobile Based SaaS product", ok: true },
      { text: "Landing Page Development", ok: true },
      { text: "Cross Platform Mobile based MVP Development", ok: true },
      { text: "Pitch Deck Template", ok: true },
      { text: "UI/UX of Web-based SaaS product", ok: false },
      { text: "Landing Page Design", ok: false },
      { text: "Web-based MVP Development", ok: false },
    ],
  },
  {
    title: "Visionary Full-Spectrum Package",
    price: "from $9,500",
    desc: "Master the digital landscape with our comprehensive package for both web and mobile SaaS solutions.",
    features: [
      { text: "UI/UX of Web-based SaaS product", ok: true },
      { text: "UI/UX of Mobile Based SaaS product", ok: true },
      { text: "Landing Page Development", ok: true },
      { text: "Landing Page Design", ok: true },
      { text: "Web-based MVP Development", ok: true },
      { text: "Cross Platform Mobile based MVP Development", ok: true },
      { text: "Pitch Deck Template", ok: true },
    ],
  },
];

export default function PricingCards({ dark }) {
  return (
    <section className="max-w-[90%] mx-auto px-6 py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10  overflow-hidden shadow-lg hover:scale-[1.02] transition"
            style={{
              background: dark
                ? "linear-gradient(to bottom, #3b0f6f, #1b1536, #0b0b1a)"
                : "white",
            }}
          >
            {/* Header */}
            <div
              className=" p-6"
              style={{
                background: dark
                  ? "linear-gradient(to right, #9333ea, #6b21a8)"
                  : "#f3f4f6",
              }}
            >
              <h3
                className=" text-xl font-semibold"
                style={{
                  color: dark ? "white" : "black",
                }}
              >
                {plan.title}
              </h3>
              <p className=" font-bold mt-2" style={{
                color :dark ? "white" : "gray"
              }}>({plan.price})</p>
              <p className=" text-sm mt-3"  style={{
                color :dark ? "white" : "gray"
              }}>{plan.desc}</p>
            </div>

            {/* Features */}
            <div className="p-6 space-y-3">
              {plan.features.map((f, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {f.ok ? (
                    <CheckCircleIcon className="text-green-400 text-[20px] mt-[2px]" />
                  ) : (
                    <CancelIcon className="text-red-500 text-[20px] mt-[2px]" />
                  )}
                  <p className=" text-sm"  style={{
                color :dark ? "white" : "gray"
              }}>{f.text}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="p-6">
              <button className="w-full rounded-xl py-3 font-semibold hover:opacity-90 transition" style={{
                background: dark
                 ? "linear-gradient(to right, #9333ea, #6b21a8)" // purple gradient
                 : "linear-gradient(to right, #f3f4f6, #d1d5db)",
              }}>
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
