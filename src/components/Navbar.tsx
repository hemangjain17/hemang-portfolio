"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Achievements", href: "/#achievements" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-7xl",
        isScrolled ? "top-2" : "top-6"
      )}
    >
      <div 
        className={cn(
          "relative flex items-center justify-between px-4 md:px-8 py-3 md:py-5 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 border border-white/10",
          isScrolled 
            ? "bg-background/60 backdrop-blur-xl shadow-2xl shadow-primary/10 py-3" 
            : "bg-white/[0.03] backdrop-blur-md"
        )}
      >
        {/* Left Side: Favicon/Logo */}
        <div className="flex-shrink-0 z-10">
          <a href="/#home" className="flex items-center gap-2">
            <img src="/initials.jpeg" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover border border-white/10 shadow-2xl" />
          </a>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden xl:flex items-center gap-6 2xl:gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[11px] 2xl:text-xs font-bold text-white/50 hover:text-white transition-colors tracking-[0.2em] uppercase group whitespace-nowrap"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Side: Resume Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <motion.a
            href="https://drive.google.com/file/d/1xgU-Un8RQ7rOCTALzAPUPEGEWhCp55Tg/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative hidden sm:flex items-center gap-2 px-4 md:px-7 py-2 md:py-3 rounded-full bg-primary text-black text-sm md:text-base font-bold transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] overflow-hidden"
          >
            <FileText className="w-4 h-4 md:w-5 md:h-5" />
            <span>Resume</span>
          </motion.a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Menu className="w-6 h-6 md:w-7 md:h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-20 md:top-24 left-0 right-0 bg-background/98 backdrop-blur-3xl border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-2xl xl:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-4 md:space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl md:text-2xl font-bold text-white/70 hover:text-primary transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <div className="w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-8 md:group-hover:w-12" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
