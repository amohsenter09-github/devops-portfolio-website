"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/designs", label: "Designs" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b bg-white dark:bg-slate-800 transition-colors">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="font-semibold text-gray-900 dark:text-white">
            Amr Fathy
          </Link>
        </motion.div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <ul className="hidden sm:flex gap-3 lg:gap-4 text-sm text-gray-700 dark:text-gray-300">
            {links.map((l) => (
              <motion.li 
                key={l.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={l.href} 
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  {l.label}
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
