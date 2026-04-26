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
    <section id="achievements" className="py-28 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Milestones & <span className="text-gradient">Achievements</span></h2>
        <p className="text-white/40 text-lg">Recognitions for technical excellence and impact.</p>
      </div>

      {/* Horizontal Ticker */}
      <div className="flex relative items-center gap-10">
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="flex gap-10 whitespace-nowrap"
        >
          {/* Double the array for infinite-like scrolling */}
          {[...achievements, ...achievements].map((ach, i) => (
            <div 
              key={i} 
              className="px-10 py-8 glass rounded-3xl border border-white/5 flex items-center gap-6 min-w-[400px]"
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
        
        {/* Gradient overlays for the ticker ends */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
