"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

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
    <header className="backdrop-blur-md bg-white/10 dark:bg-slate-900/20 border-b border-white/20 dark:border-slate-700/30 transition-all duration-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="font-bold text-2xl text-white flex items-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
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
                  className="text-white/80 hover:text-white transition-colors duration-200 relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
