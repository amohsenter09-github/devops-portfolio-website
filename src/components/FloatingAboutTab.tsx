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
      className={`fixed bottom-10 right-10 z-50 rounded-full px-4 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur transition-all duration-300 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
        bg-gray-900 hover:bg-gray-800 ring-1 ring-gray-300/20`}
      aria-label="Scroll to About Me section"
    >
      About Me
    </button>
  );
}

