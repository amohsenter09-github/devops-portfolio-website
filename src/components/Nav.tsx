"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/lib/siteConfig";

const links = [
  { href: "/", label: "Home" },
  { href: "/designs", label: "Designs" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-end w-full">
          {/* Right side icons - Far right */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Colored Logo */}
            <Link 
              href="/"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 text-white font-bold text-sm hover:from-cyan-600 hover:to-cyan-800 transition-all shadow-sm hover:shadow-md"
              aria-label="Home"
            >
              AF
            </Link>
            
            {/* LinkedIn Icon */}
            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
