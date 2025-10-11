"use client";
import { useState } from "react";
import Link from "next/link";

export default function HeroTabs() {
  const [active, setActive] = useState<"projects" | "about">("projects");

  return (
    <div className="mt-8 flex justify-center">
      {/* Pill container */}
      <div className="relative inline-flex items-center gap-0 rounded-full bg-white/5 p-1 ring-1 ring-white/10 backdrop-blur">
        {/* Moving indicator */}
        <span
          aria-hidden
          className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-transform duration-300"
          style={{ transform: active === "projects" ? "translateX(0)" : "translateX(100%)" }}
        />
        {/* Tabs */}
        <Link
          href="/projects"
          onMouseDown={() => setActive("projects")}
          className={`relative z-10 px-5 py-2 text-sm font-medium transition-colors ${
            active === "projects" ? "text-white" : "text-gray-300 hover:text-white"
          }`}
        >
          View Projects
        </Link>
        <Link
          href="/about"
          onMouseDown={() => setActive("about")}
          className={`relative z-10 px-5 py-2 text-sm font-medium transition-colors ${
            active === "about" ? "text-white" : "text-gray-300 hover:text-white"
          }`}
        >
          About
        </Link>
      </div>
    </div>
  );
}
