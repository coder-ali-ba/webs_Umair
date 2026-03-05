import { useState, useEffect } from 'react';
import { Linkedin, Facebook } from 'lucide-react';

export default function ContactSection({dark}) {
  const [colorIndex, setColorIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const colors = [
    { bg: 'bg-purple-600', border: 'border-purple-400', text: 'text-purple-300' },
    { bg: 'bg-cyan-600', border: 'border-cyan-400', text: 'text-cyan-300' },
    { bg: 'bg-pink-600', border: 'border-pink-400', text: 'text-pink-300' },
    { bg: 'bg-green-600', border: 'border-green-400', text: 'text-green-300' },
    { bg: 'bg-yellow-600', border: 'border-yellow-400', text: 'text-yellow-300' },
    { bg: 'bg-indigo-600', border: 'border-indigo-400', text: 'text-indigo-300' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setColorIndex(prev => (prev + 1) % colors.length);
      
      // Show text after 1 second
      setTimeout(() => {
        setShowText(true);
      }, 1000);
    }, 3000);

    // Show text initially after 1 second
    const initialTimer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimer);
    };
  }, []);

  const currentColor = colors[colorIndex];

  return (
    <div className="max-w-[81%] mx-auto  p-8 border border-gray-300 rounded-md " style={{
      background : dark ? "linear-gradient(to right, #020617, #3b0764)" : "white",
      color : dark ? "white" : "black"
    }}>
      <div className=" mx-auto">
        {/* Main Section with Heading and Circle aligned horizontally */}
        <div className="flex items-center justify-between mb-12 gap-8">
          {/* Left - Heading */}
          <h1 className="text-3xl md:text-7xl font-bold tracking-tight flex-1">
            Let's Talk<span className="text-purple-400">.</span>
          </h1>

          {/* Right - Animated Circle */}
          <div
            className={`
              w-32 h-32 rounded-full flex flex-col items-center justify-center flex-shrink-0
              border-4 transition-all duration-1000 ease-in-out
              ${currentColor.border} ${currentColor.bg}
              shadow-lg shadow-purple-500/50
            `}
          >
            <div className={`text-center transition-opacity duration-500 ${showText ? 'opacity-100' : 'opacity-0'}`}>
              <div className={`text-xl font-bold ${currentColor.text} transition-colors duration-1000`}>
                GET A
              </div>
              <div className={`text-lg font-bold ${currentColor.text} transition-colors duration-1000`}>
                QUOTE
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-purple-500/30 pt-8">
          {/* Left Section - Social Icons and Phone */}
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              {/* Email Icon */}
              <button className="w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center hover:bg-purple-500 transition duration-300">
                <span className="text-sm">@</span>
              </button>

              {/* LinkedIn Icon */}
              <button className="w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center hover:bg-purple-500 transition duration-300">
                <Linkedin size={18} />
              </button>

              {/* Facebook Icon */}
              <button className="w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center hover:bg-purple-500 transition duration-300">
                <Facebook size={18} />
              </button>
            </div>

            {/* Phone Number */}
            <div className="text-lg font-semibold pl-4 border-l border-purple-500">
              +1 (737) 313-4991
            </div>
          </div>

          {/* Right Section - Contact Message */}
          <div className="flex-1 text-right">
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="text-2xl mr-2">👋</span>
              contact@saasiftylabs.com Ready to advance your next digital or SaaS product? We're just an email away—let's discuss your project ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}