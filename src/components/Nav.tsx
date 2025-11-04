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
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 relative min-h-[60px]">
        {/* Navigation Links - Responsive Layout */}
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-8 items-center">
            <Link 
              href="/" 
              className={`text-sm sm:text-base font-medium tracking-wide transition-all px-4 py-1 rounded-full lowercase ${
                pathname === "/" 
                  ? "text-cyan-700 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              home
            </Link>
            <Link 
              href="/designs" 
              className={`text-sm sm:text-base font-medium tracking-wide transition-all px-4 py-1 rounded-full ${
                pathname === "/designs" 
                  ? "text-cyan-700 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <span className="font-mono lowercase">
                designed
                <motion.span
                  className={pathname === "/designs" ? "text-cyan-700" : "text-cyan-600"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  _
                </motion.span>
                by
                <motion.span
                  className={pathname === "/designs" ? "text-cyan-700" : "text-cyan-600"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  _
                </motion.span>
                me
                {pathname === "/designs" && (
                  <motion.span
                    className="text-cyan-700 ml-0.5 font-semibold"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    |
                  </motion.span>
                )}
              </span>
            </Link>
            <Link 
              href="/blog" 
              className={`text-sm sm:text-base font-medium tracking-wide transition-all px-4 py-1 rounded-full lowercase ${
                pathname.startsWith("/blog") 
                  ? "text-cyan-700 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              blog
            </Link>
            <Link 
              href="/about" 
              className={`text-sm sm:text-base font-medium tracking-wide transition-all px-4 py-1 rounded-full ${
                pathname === "/about" 
                  ? "text-cyan-700 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <span className="font-mono lowercase">
                about
                <motion.span
                  className={pathname === "/about" ? "text-cyan-700" : "text-cyan-600"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  _
                </motion.span>
                me
                {pathname === "/about" && (
                  <motion.span
                    className="text-cyan-700 ml-0.5 font-semibold"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    |
                  </motion.span>
                )}
              </span>
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm sm:text-base font-medium tracking-wide transition-all px-4 py-1 rounded-full lowercase ${
                pathname === "/contact" 
                  ? "text-cyan-700 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              contact
            </Link>
          </div>
        </div>

        {/* Right side icons - Responsive positioning */}
        <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex items-center gap-3 sm:gap-4 md:gap-5">
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

        {/* Thin subtle divider below nav - positioned absolutely */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </nav>
    </header>
  );
}
