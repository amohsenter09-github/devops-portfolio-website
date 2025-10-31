"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/lib/siteConfig";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 relative">
        <div className="flex items-center justify-center w-full">
          {/* Navigation Tabs - Centered */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 items-center">
            <Link 
              href="/" 
              className="text-base font-medium transition-colors px-4 py-2 rounded-full text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <Link 
              href="/designs" 
              className="text-base font-medium transition-colors px-4 py-2 rounded-full text-gray-700 hover:text-gray-900"
            >
              <span className="font-mono">
                designed
                <motion.span
                  className="text-cyan-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  _
                </motion.span>
                by
                <motion.span
                  className="text-cyan-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  _
                </motion.span>
                me
                {pathname === "/designs" && (
                  <motion.span
                    className="text-cyan-600 ml-0.5"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    |
                  </motion.span>
                )}
              </span>
            </Link>
            <Link 
              href="/blog" 
              className="text-base font-medium transition-colors px-4 py-2 rounded-full text-gray-700 hover:text-gray-900"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-base font-medium transition-colors px-4 py-2 rounded-full text-gray-700 hover:text-gray-900"
            >
              <span className="font-mono">
                About
                <motion.span
                  className="text-cyan-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  _
                </motion.span>
                me
                {pathname === "/about" && (
                  <motion.span
                    className="text-cyan-600 ml-0.5"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    |
                  </motion.span>
                )}
              </span>
            </Link>
            <Link 
              href="/contact" 
              className="text-base font-medium transition-colors px-4 py-2 rounded-full text-gray-700 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>

          {/* Right side icons - Absolutely positioned far right */}
          <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 flex items-center gap-4 sm:gap-6">
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
