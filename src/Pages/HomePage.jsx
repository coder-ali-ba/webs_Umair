import React, { useState } from "react";
import ResponsiveAppBar from "../Components/NavbarComp";
import SpinningText from "../Components/SpinningDev";
import GlowingCard from "../Components/Card";
import TimelineCards from "../Components/Card";
import Carousel from "../Components/ProjectsCarousal";
import StatsSection from "../Components/StateSec";
import PricingCards from "../Components/PricingCards";
import ServicesSection from "../Components/Expertise";
import ClientsReview from "../Components/ClientsReview";
import Awards from "../Components/Awards";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NewsletterSubscription from "../Components/NewsLetter";
import ContactSection from "../Components/Talks";
import ProjectKickoffModal from "./ContactPage";
import HeroSection from "../Components/HeroSection";
import TrustedBy from "../Components/TrustedBy";

function HomePage() {
  const [dark, setDark] = useState(false);
  return (
    <div
      className={
        dark
          ? "bg-gradient-to-r from-slate-950 to-purple-950 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <ResponsiveAppBar dark={dark} setDark={setDark} />

      {/* <div className="w-[90%] mt-18 flex pl-6 m-auto pb-18">
        <div className="w-full md:w-2/3 border-r-1 border-gray-500">
          <h1
            className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500
          bg-clip-text text-transparent"
          >
            Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing.
          </h1>
          <p className="md:text-xl mt-3">
            Fast-track your digital product development at SaaSify Labs. We
            specialize <br /> in turning your SaaS ideas into market-ready
            products in just 16 weeks.
          </p>
          <button className="bg-gradient-to-r from-purple-900 to-blue-700 font-bold text-xl rounded-xl px-6 py-3 cursor-pointer mt-4">
            Get Started
          </button>
        </div>
        <div className="w-1/3 h-full hidden md:flex">
          <div className="h-full w-1/2"></div>

          <div className="h-full w-1/2 border-l-1 border-gray-500 ">
            <SpinningText dark={dark} setDark={setDark} />
          </div>
        </div>
      </div> */}
      <HeroSection dark={dark} setDark={setDark} />

      {/* <div className="text-center mt-12 mb-12 py-12 border-y  border-gray-500/40">
        <h1 className="text-3xl md:text-6xl font-bold">
          Trusted by
          <span className="bg-gradient-to-r from-purple-500 to-blue-800 bg-clip-text text-transparent">
            Inovators and leaders
          </span>
        </h1>
        <marquee
          behavior=""
          direction="left"
          className="mt-6 text-2xl md:text-5xl w-[60%] "
        >
          <div className="flex gap-6">
            <p>tyygy</p>
            <p>tyygy</p>
            <p>tyygy</p>
            <p>tyygy</p>
          </div>
        </marquee>
      </div> */}
      <TrustedBy dark={dark} setDark={setDark} />

      {/* //ABOUT */}
      {/* <div id="about" className="text-center w-[70%] m-auto pb-6">
        <h1 className="text-4xl">About Us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolorum
          maiores necessitatibus velit, in excepturi cumque, officiis, libero
          odio autem aliquid quibusdam ab impedit nisi ullam culpa! Voluptas
          quas harum obcaecati aspernatur pariatur dolorem dolor laudantium
          optio, quibusdam voluptatem omnis ut eligendi velit deserunt tempore.
        </p>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolorum
          maiores necessitatibus velit, in excepturi cumque, officiis, libero
          odio autem aliquid quibusdam ab impedit nisi ullam culpa! Voluptas
          quas harum obcaecati aspernatur pariatur dolorem dolor laudantium
          optio, quibusdam voluptatem omnis ut eligendi velit deserunt tempore.
        </p>

        <span className="w-[70%] flex  lg:gap-6 m-auto flex-wrap justify-center">
          <button className="bg-purple-900/30 border border-purple-400/30 font-bold sm:text-xl rounded-xl px-4 py-2 cursor-pointer mt-4">
            Realize your vision
          </button>
          <button className="bg-gradient-to-r from-purple-900 to-blue-700 font-bold sm:text-xl rounded-xl px-4 py-2 cursor-pointer mt-4">
            Explore our services
          </button>
        </span>
      </div> */}

      <div
        id="about"
        style={{
          position: "relative",
          padding: "40px 24px",
          overflow: "hidden",
          fontFamily: "'DM Sans', sans-serif",
          // background: dark ? "#080c14" : "#f8f7ff",
        }}
        className={
          dark
            ? "bg-gradient-to-r from-slate-950 to-purple-950 text-white min-h-screen"
            : "bg-white text-black min-h-screen"
        }
      >
        {/* Ambient blob */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: dark
              ? "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Inner container */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "780px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Eyebrow */}
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
              marginBottom: "20px",
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
            Who We Are
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

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: dark ? "#f1f5f9" : "#0f172a",
              marginBottom: "28px",
            }}
          >
            We build products{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #a855f7 0%, #6366f1 40%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              the world uses.
            </span>
          </h1>

          {/* Divider line */}
          <div
            style={{
              width: "60px",
              height: "3px",
              borderRadius: "4px",
              background: "linear-gradient(90deg, #a855f7, #3b82f6)",
              margin: "0 auto 36px",
            }}
          />

          {/* Paragraphs */}
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: dark ? "#94a3b8" : "#64748b",
              marginBottom: "20px",
            }}
          >
            At{" "}
            <strong
              style={{ color: dark ? "#c084fc" : "#7c3aed", fontWeight: 600 }}
            >
              SaaSify Labs
            </strong>
            , we partner with founders and product teams to transform raw ideas
            into polished, market-ready digital products. Our cross-functional
            team of designers, engineers, and strategists works as an extension
            of your own — fast, focused, and obsessed with quality.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: dark ? "#94a3b8" : "#64748b",
              marginBottom: "52px",
            }}
          >
            We've helped over{" "}
            <strong
              style={{ color: dark ? "#c084fc" : "#7c3aed", fontWeight: 600 }}
            >
              120+ startups
            </strong>{" "}
            across industries go from zero to launch in just 16 weeks. Whether
            you're validating an MVP or scaling an existing platform, we bring
            the expertise, speed, and craft to get you there.
          </p>

          {/* Feature pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "52px",
            }}
          >
            {[
              { icon: "⚡", label: "Fast Delivery" },
              { icon: "🎨", label: "Premium Design" },
              { icon: "🔒", label: "Secure by Default" },
              { icon: "📈", label: "Built to Scale" },
            ].map((pill) => (
              <div
                key={pill.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderRadius: "50px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  background: dark
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.9)",
                  border: dark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(0,0,0,0.08)",
                  color: dark ? "#94a3b8" : "#64748b",
                  boxShadow: dark ? "none" : "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <span>{pill.icon}</span>
                {pill.label}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 700,
                padding: "14px 32px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                color: "white",
                border: "none",
                cursor: "pointer",
                boxShadow:
                  "0 4px 20px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                letterSpacing: "0.02em",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(124,58,237,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.15)";
              }}
            >
              Explore Our Services →
            </button>

            <button
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 600,
                padding: "14px 32px",
                borderRadius: "12px",
                background: "transparent",
                color: dark ? "#94a3b8" : "#64748b",
                border: dark
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(0,0,0,0.1)",
                cursor: "pointer",
                letterSpacing: "0.01em",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = dark ? "#e2e8f0" : "#1e293b";
                e.currentTarget.style.borderColor = dark
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(0,0,0,0.2)";
                e.currentTarget.style.background = dark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = dark ? "#94a3b8" : "#64748b";
                e.currentTarget.style.borderColor = dark
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.1)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Realize Your Vision
            </button>
          </div>
        </div>
      </div>

      {/* HOW ITS WORKS */}

      <div id="ourprocess" className="md:mt-12 w-[90%] m-auto">
        {/* <h1 className="w-full text-center text-6xl font-bold mb-12">
          How it's{" "}
          <span className="bg-gradient-to-r from-purple-900 to-blue-700 text-transparent bg-clip-text">
            work
          </span>
        </h1> */}
        <TimelineCards dark={dark} setDark={setDark} />
      </div>

      {/* OUR PORTFOLIO */}
      <div id="portfolio" className="mt-6">
        <h1 className="text-6xl w-full text-center font-bold">
          Our Work{" "}
          <span className="bg-gradient-to-r from-purple-900 to-blue-700 bg-clip-text text-transparent">
            Portfolio
          </span>{" "}
        </h1>
        <p className="w-full text-center text-2xl">
          Check out some of our works for clients
        </p>
        <Carousel dark={dark} setDark={setDark} />
      </div>

      <div>
        <StatsSection dark={dark} />
      </div>

      {/* SERVICES & PRICING */}

      <div id="services" className="mt-6">
        <h1 className="w-full text-center text-5xl font-bold">
          Services{" "}
          <span className="bg-gradient-to-r from-purple-900 to-blue-700  text-transparent bg-clip-text ">
            {" "}
            & Pricing{" "}
          </span>
        </h1>
        <PricingCards dark={dark} />
      </div>

      {/* Expertise */}
      <div className="mt-12 max-w-[90%] m-auto">
        <h1 className="w-full text-center md:text-6xl font-bold ">
          Addtional{" "}
          <span className="bg-gradient-to-r from-purple-900 to-blue-700 bg-clip-text text-transparent ">
            Expertise & Services
          </span>
        </h1>
        <ServicesSection dark={dark} />
      </div>

      {/* CLients LOVE */}
      <div id="clientslove">
        <h1 className="text-5xl font-bold w-full text-center">
          What Our{" "}
          <span className="bg-gradient-to-r from-purple-900 to-blue-700 bg-clip-text text-transparent">
            Clients Say
          </span>
        </h1>
        <p className="w-full text-center mt-4">
          Voices of Success: Hear From Our Clients How We Consistently Exceed
          Expectations
        </p>
        <ClientsReview />
      </div>

      {/* AWARDS */}
      {/* <div className="mt-12">
        <h1 className="w-full text-center text-5xl font-bold">
          Awards{" "}
          <span className="bg-gradient-to-r from-purple-900 to-blue-700 bg-clip-text text-transparent">
            & Recognition
          </span>
        </h1>
        <p className="w-[50%] mt-6 text-center m-auto pb-6">
          Celebrated for excellence in digital product development, we've earned
          top honors from industry leaders. Explore our accolades that showcase
          our dedication to web and mobile innovation.ClutchTop DevClutchTop
          Software Developer
        </p>

        <Awards />
      </div> */}

      {/* FAQS */}
      <div
        id="faqs"
        className="flex w-[80%] m-auto justify-center gap-18 flex-wrap mt-12"
      >
        <div className="max-w-[450px]">
          <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
          <p>
            Gain insights into how we streamline your path to launching
            successful digital products. Explore common queries about our
            services to understand better how we can help turn your ideas into
            market-ready SaaS solutions.
          </p>
          <span className="flex justify-between flex-wrap">
            <button
                className="font-bold sm:text-xl rounded-md px-8 py-2 cursor-pointer mt-4 mr-8 hover:shadow-xl"
              style={{
                background: dark
                  ? "linear-gradient(to right, #4c1d95, #1e3a8a)" // purple-900 → blue-700
                  : "#d1d5db", // gray-100
                  color :dark ? "white" : "gray",
                  transition: "all 0.4s ease"
              }}
            >
              Contact Us
            </button>
            <button className=" font-bold sm:text-xl rounded-md px-8 py-2 cursor-pointer mt-4 mr-8 hover:shadow-xl " style={{
                background: dark
                  ? "linear-gradient(to right, #4c1d95, #1e3a8a)" // purple-900 → blue-700
                  : "#d1d5db", // gray-100
                  color :dark ? "white" : "gray",
                  transition: "all 0.4s ease"

              }}>
              View Portfolio
            </button>
          </span>
        </div>

        <div className="max-w-[450px] flex flex-col gap-2">
          <Accordion
            sx={{
              color: dark ? "white" : "gray",
              border: "1px solid rgba(156, 163, 175, 0.3)",
              backgroundColor: dark ? "rgba(88, 28, 135, 0.3)" : "white",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon
                  sx={{
                    color: dark ? "white" : "gray",
                    border: "1px solid gray",
                    borderRadius: "3px",
                  }}
                />
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              color: dark ? "white" : "gray",
              border: "1px solid rgba(156, 163, 175, 0.3)",
              backgroundColor: dark ? "rgba(88, 28, 135, 0.3)" : "white",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon
                  sx={{
                    color: dark ? "white" : "gray",
                    border: "1px solid gray",
                    borderRadius: "3px",
                  }}
                />
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              color: dark ? "white" : "gray",
              border: "1px solid rgba(156, 163, 175, 0.3)",
              backgroundColor: dark ? "rgba(88, 28, 135, 0.3)" : "white",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon
                  sx={{
                    color: dark ? "white" : "gray",
                    border: "1px solid gray",
                    borderRadius: "3px",
                  }}
                />
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              color: dark ? "white" : "gray",
              border: "1px solid rgba(156, 163, 175, 0.3)",
              backgroundColor: dark ? "rgba(88, 28, 135, 0.3)" : "white",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon
                  sx={{
                    color: dark ? "white" : "gray",
                    border: "1px solid gray",
                    borderRadius: "3px",
                  }}
                />
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              color: dark ? "white" : "gray",
              border: "1px solid rgba(156, 163, 175, 0.3)",
              backgroundColor: dark ? "rgba(88, 28, 135, 0.3)" : "white",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon
                  sx={{
                    color: dark ? "white" : "gray",
                    border: "1px solid gray",
                    borderRadius: "3px",
                  }}
                />
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      {/* NEWSLETTERS */}
      <div className="mt-12">
        <NewsletterSubscription dark={dark}/>
      </div>

      <div className="mt-8 mb-4">
        <ContactSection dark={dark} />
      </div>

      {/* <ProjectKickoffModal /> */}
    </div>
  );
}

export default HomePage;
