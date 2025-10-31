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
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <nav className="mx-auto max-w-6xl px-6 sm:px-8 py-5 relative">
        <div className="flex flex-col items-center space-y-3">
          {/* Navigation Tabs - Centered */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 items-center">
            <Link 
              href="/" 
              className={`text-sm sm:text-base font-medium tracking-wide transition-all px-4 py-1 rounded-full ${
                pathname === "/" 
                  ? "text-cyan-700 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/designs" 
              className={`text-sm sm:text-base font-medium tracking-wide transition-all px-4 py-1 rounded-full ${
                pathname === "/designs" 
                  ? "text-cyan-700 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
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
              className={`text-sm sm:text-base font-medium tracking-wide transition-all px-4 py-1 rounded-full ${
                pathname.startsWith("/blog") 
                  ? "text-cyan-700 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className={`text-sm sm:text-base font-medium tracking-wide transition-all px-4 py-1 rounded-full ${
                pathname === "/about" 
                  ? "text-cyan-700 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
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
              className={`text-sm sm:text-base font-medium tracking-wide transition-all px-4 py-1 rounded-full ${
                pathname === "/contact" 
                  ? "text-cyan-700 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Thin subtle divider below nav */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-3" />
        </div>

        {/* Right side icons - top right */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-5">
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
