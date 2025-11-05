"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/lib/siteConfig";

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "home", simple: true },
    { href: "/designs", label: "designed_by_me", simple: false },
    { href: "/blog", label: "blog", simple: true },
    { href: "/about", label: "about_me", simple: false },
    { href: "/contact", label: "contact", simple: true },
  ];

  const NavLink = ({ href, label, simple }: { href: string; label: string; simple: boolean }) => {
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
    const isDesigns = href === "/designs";
    const isAbout = href === "/about";

    if (simple) {
      return (
        <Link 
          href={href} 
          onClick={() => setMobileMenuOpen(false)}
          className={`text-sm sm:text-base font-medium tracking-wide transition-all px-4 py-2 rounded-full lowercase min-h-[44px] flex items-center justify-center ${
            isActive 
              ? "text-cyan-700 font-semibold bg-cyan-50"
              : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          {label}
        </Link>
      );
    }

    if (isDesigns) {
      return (
        <Link 
          href={href}
          onClick={() => setMobileMenuOpen(false)}
          className={`text-sm sm:text-base font-medium tracking-wide transition-all px-4 py-2 rounded-full min-h-[44px] flex items-center justify-center ${
            isActive 
              ? "text-cyan-700 font-semibold bg-cyan-50"
              : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <span className="font-mono lowercase">
            designed
            <motion.span
              className={isActive ? "text-cyan-700" : "text-cyan-600"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              _
            </motion.span>
            by
            <motion.span
              className={isActive ? "text-cyan-700" : "text-cyan-600"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              _
            </motion.span>
            me
            {isActive && (
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
      );
    }

    if (isAbout) {
      return (
        <Link 
          href={href}
          onClick={() => setMobileMenuOpen(false)}
          className={`text-sm sm:text-base font-medium tracking-wide transition-all px-4 py-2 rounded-full min-h-[44px] flex items-center justify-center ${
            isActive 
              ? "text-cyan-700 font-semibold bg-cyan-50"
              : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <span className="font-mono lowercase">
            about
            <motion.span
              className={isActive ? "text-cyan-700" : "text-cyan-600"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              _
            </motion.span>
            me
            {isActive && (
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
      );
    }

    return null;
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-5 relative min-h-[60px]">
        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center justify-center w-full">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-8 items-center">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} simple={link.simple} />
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-between w-full">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-900" />
            ) : (
              <Menu size={24} className="text-gray-900" />
            )}
          </button>

          {/* Mobile Icons */}
          <div className="flex items-center gap-3">
            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <Linkedin size={20} />
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-gray-200 mt-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink href={link.href} label={link.label} simple={link.simple} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Right side icons - Hidden on mobile */}
        <div className="hidden md:flex absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 items-center gap-3 sm:gap-4 md:gap-5">
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-600 hover:text-gray-900 transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100"
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
