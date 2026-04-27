"use client";

import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-white">HEMANG</span>
            <span className="text-primary">.</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-white/40">
            <a href="/#home" className="hover:text-primary transition-colors">Home</a>
            <a href="/#about" className="hover:text-primary transition-colors">About</a>
            <a href="/#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="text-sm text-white/40 flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by hemangjain17 © {currentYear}
          </div>
        </div>
        
        <div className="mt-12 text-center text-[10px] text-white/20 uppercase tracking-[0.2em]">
          Designed for excellence • Powered by Next.js
        </div>
      </div>
    </footer>
  );
}
