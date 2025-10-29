"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/lib/siteConfig";

const links = [
  { href: "/", label: "Home" },
  { href: "/business-impact", label: "ROI & Impact" },
  { href: "/projects", label: "Projects" },
  { href: "/designs", label: "Designs" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Spacer for left side (balanced layout) */}
          <div className="flex items-center gap-4 opacity-0 pointer-events-none">
            <Linkedin size={20} />
            <div className="w-8 h-8" />
          </div>
          
          {/* Centered Navigation Links */}
          <ul className="hidden sm:flex gap-6 lg:gap-8 text-sm font-medium items-center justify-center">
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
          
          {/* Right side icons */}
          <div className="flex items-center gap-4 sm:gap-6">
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
