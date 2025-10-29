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
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="font-bold text-2xl text-gray-900 flex items-center">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Amr Fathy
            </span>
          </Link>
        </motion.div>
        
        <div className="flex items-center gap-2 sm:gap-6">
          <ul className="hidden sm:flex gap-6 lg:gap-8 text-sm font-medium">
            {links.map((l) => (
              <motion.li 
                key={l.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={l.href} 
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
          
          {/* LinkedIn Icon */}
          <motion.a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={24} />
          </motion.a>
          
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
