import { useState } from "react";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProjectKickoffModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (data) => {
    data.preventDefault();
    const info = {
      name,
      email,
      message: details,
    };

    const response = await axios.post(`http://localhost:8000/send-email`, info);

    alert(response.data.message);

    setEmail("");
    setName("");
    setDetails("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 flex items-center justify-center p-4">
      {/* Modal Container with inner border */}
      <div className="relative w-full max-w-5xl">
        {/* Inner Border */}
        <div className="absolute inset-0 rounded-lg border border-purple-500/40 pointer-events-none"></div>

        {/* Modal Content */}
        <div className="relative bg-gradient-to-br from-purple-900/80 to-slate-900/80 backdrop-blur-xl rounded-lg p-8 md:p-12">
          {/* Close Button */}
          <Link
            to="/"
            className="absolute top-6 right-6 w-8 h-8 rounded-full border border-purple-500 flex items-center justify-center hover:bg-purple-500/20 transition"
          >
            <X size={20} className="text-purple-400" />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                  KICK OFF YOUR PROJECT WITH US!
                </h1>
                <p className="text-gray-300">
                  Schedule your initial product session today. We're here to
                  assist with your specific needs.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Call Card */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg border border-purple-500 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      GIVE US A CALL
                    </h3>
                    <p className="text-gray-400 text-sm">React out to us at</p>
                    <p className="text-purple-300 font-semibold">
                      +92 3405987388
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg border border-purple-500 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">EMAIL US</h3>
                    <p className="text-gray-400 text-sm">Email us at</p>
                    <p className="text-purple-300 font-semibold">
                      habibali8770@gmail.com
                    </p>
                  </div>
                </div>

                {/* Location Card */}
                {/* <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg border border-purple-500 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      Our Office Location
                    </h3>
                    <p className="text-gray-400 text-sm">Our Location</p>
                    <p className="text-purple-300 font-semibold text-sm">
                      5900 Balcones Dr, Unit400, Austin TX 78731, USA
                    </p>
                  </div>
                </div> */}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-400 text-sm mb-3">Contact With Us On</p>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full border border-purple-500 flex items-center justify-center hover:bg-purple-500/20 transition">
                   <a 
                   href="https://www.facebook.com/habib.ali.522033"
                   target="_blank"
                   >
                    <Facebook size={18} className="text-purple-400" />
                   </a>
                    
                  </button>
                  <button className="w-10 h-10 rounded-full border border-purple-500 flex items-center justify-center hover:bg-purple-500/20 transition">
                  <a href="https://www.instagram.com/habibali5420/" target="_blank">
                    <Instagram size={18} className="text-purple-400" />
                  </a>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-purple-500 flex items-center justify-center hover:bg-purple-500/20 transition">
                  <a href="https://www.linkedin.com/in/habib-ali-635898288/" target="_blank">
                    <Linkedin size={18} className="text-purple-400" />
                  </a>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="space-y-4">
              <form onSubmit={(e) => handleSubmit(e)}>
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name*"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="w-full px-4 py-3 rounded bg-slate-700/50 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full px-4 py-3 mb-4 rounded bg-slate-700/50 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
                />

                {/* Project Details */}
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    What should we know about your project?
                  </label>
                  <textarea
                    name="projectDetails"
                    placeholder="Tell us about your project..."
                    onChange={(e) => {
                      setDetails(e.target.value);
                    }}
                    rows="5"
                    className="w-full px-4 py-3 rounded bg-slate-700/50 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold transition mt-6"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
