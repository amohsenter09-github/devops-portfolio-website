"use client";

import { useEffect, useState } from "react";

export default function FloatingAboutTab() {
  const [visible, setVisible] = useState(false);

  // Show after user scrolls halfway down
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-10 right-10 z-50 rounded-full px-6 py-3 text-sm font-medium text-white shadow-lg backdrop-blur transition-all duration-300 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
        bg-cyan-600 hover:bg-cyan-500 ring-2 ring-cyan-500/30 hover:ring-cyan-400/40 shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40`}
      aria-label="Scroll to About Me section"
    >
      About Me
    </button>
  );
}

