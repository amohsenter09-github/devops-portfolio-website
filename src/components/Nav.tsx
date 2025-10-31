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
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Navigation Tabs - Centered */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 items-center flex-1">
            <Link 
              href="/" 
              className={`text-base font-medium transition-colors px-4 py-2 rounded-full ${
                pathname === "/" 
                  ? "text-gray-900 bg-gray-100" 
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/designs" 
              className={`text-base font-medium transition-colors px-4 py-2 rounded-full ${
                pathname === "/designs" 
                  ? "text-gray-900 bg-gray-100" 
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Designs
            </Link>
            <Link 
              href="/blog" 
              className={`text-base font-medium transition-colors px-4 py-2 rounded-full ${
                pathname.startsWith("/blog") 
                  ? "text-gray-900 bg-gray-100" 
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className={`text-base font-medium transition-colors px-4 py-2 rounded-full ${
                pathname === "/about" 
                  ? "text-gray-900 bg-gray-100" 
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
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
              className={`text-base font-medium transition-colors px-4 py-2 rounded-full ${
                pathname === "/contact" 
                  ? "text-gray-900 bg-gray-100" 
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right side icons - Far right with minimal right padding */}
          <div className="flex items-center gap-4 sm:gap-6 -mr-4 sm:-mr-6 lg:-mr-8">
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
