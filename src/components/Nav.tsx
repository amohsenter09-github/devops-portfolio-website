"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
        <div className="flex items-center justify-between w-full relative">
          {/* Centered Navigation Links - Absolutely centered */}
          <ul className="hidden sm:flex gap-6 lg:gap-8 text-sm font-medium items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            {links.map((l) => (
              <li key={l.href}>
                <Link 
                  href={l.href} 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Right side icons - Far right */}
          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
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
        
        {/* Mobile Navigation */}
        <div className="sm:hidden mt-4 pt-4 border-t border-gray-200">
          <ul className="flex flex-wrap gap-4 text-sm font-medium justify-center">
            {links.map((l) => (
              <li key={l.href}>
                <Link 
                  href={l.href} 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
