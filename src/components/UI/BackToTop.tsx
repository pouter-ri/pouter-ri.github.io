import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative p-4 bg-gradient-to-br from-primary-600 to-secondary-500 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group active:scale-95"
        aria-label="Back to top"
      >
        {/* Main icon with hover effect */}
        <div className="relative z-10">
          <ArrowUp
            className={`w-6 h-6 transition-all duration-300 ${
              isHovered ? "-translate-y-1 rotate-12" : ""
            }`}
          />
        </div>

        {/* Pulse ring effect using Tailwind's animate-ping */}
        <div className="absolute inset-0 rounded-xl border-2 border-white/30 animate-ping [animation-duration:2s]" />

        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/30 to-secondary-400/30 blur-sm group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
      </button>

      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg transition-all duration-300 whitespace-nowrap pointer-events-none ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        Back to top
        <div className="absolute top-full right-4 -mt-1 w-2 h-2 bg-gray-900 rotate-45" />
      </div>
    </div>
  );
};

export default BackToTop;
