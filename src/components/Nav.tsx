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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/" className="font-bold text-xl text-gray-900">
          Amr Fathy
        </Link>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden sm:flex gap-6 lg:gap-8 text-sm font-medium">
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
      </nav>
    </header>
  );
}
