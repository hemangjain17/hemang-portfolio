"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Award, Medal } from "lucide-react";

const achievements = [
  { title: "Winner", desc: "Adobe Devcraft, DTU (Real-time Ad Bidding Challenge)", icon: <Trophy className="text-yellow-500" /> },
  { title: "AIR 85", desc: "Amazon ML Challenge (Product Price Prediction)", icon: <Star className="text-blue-500" /> },
  { title: "National Winner", desc: "brAInwave, DTU (Created StockXpert)", icon: <Award className="text-purple-500" /> },
  { title: "Grand Finalist", desc: "Google GenAI Hackathon (TruthLens)", icon: <Medal className="text-red-500" /> },
  { title: "Appreciation", desc: "Delhi Police Certificate for Crime Reporting Platform", icon: <Award className="text-green-500" /> },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 md:px-12 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Milestones & <span className="text-gradient">Achievements</span></h2>
        <p className="text-white/40 text-base">Recognitions for technical excellence and impact.</p>
      </div>

      {/* Horizontal Ticker */}
      <div className="max-w-7xl mx-auto relative px-4 md:px-0">
        <div className="flex items-center gap-10 overflow-hidden">
          <motion.div
             animate={{ x: ["0%", "-50%"] }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="flex gap-10 whitespace-nowrap py-4"
          >
            {/* Double the array for infinite-like scrolling */}
            {[...achievements, ...achievements].map((ach, i) => (
              <div 
                key={i} 
                className="px-6 py-6 md:px-10 md:py-8 glass rounded-3xl border border-white/5 flex items-center gap-4 md:gap-6 min-w-[280px] md:min-w-[400px]"
              >
                 <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                   {ach.icon}
                 </div>
                 <div>
                    <div className="text-primary font-bold text-lg">{ach.title}</div>
                    <div className="text-sm text-white/60 whitespace-normal max-w-xs">{ach.desc}</div>
                 </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Gradient overlays for the ticker ends */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
