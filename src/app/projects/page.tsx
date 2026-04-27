"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Play, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { allProjects } from "@/lib/projects";
import Navbar from "@/components/Navbar";

export default function AllProjects() {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />
      
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">All <span className="text-gradient">Projects</span></h1>
            <p className="text-white/40 text-lg">A comprehensive list of my work, experiments, and production-grade systems.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
            {allProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                {/* Project Image Card */}
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-[#1a1a1a] border border-white/5 group-hover:border-white/50 transition-all duration-500 mb-10">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Award Badge */}
                  {project.award && (
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 bg-white text-black text-[8px] md:text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5 md:gap-2 shadow-2xl z-20">
                      <Trophy className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      {project.award}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 md:gap-6 z-10 backdrop-blur-sm">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" className="p-3 md:p-4 bg-white/10 hover:bg-white rounded-full transition-all hover:scale-110 flex items-center justify-center group/btn">
                        <img src="/github.png" className="w-5 h-5 md:w-6 md:h-6 filter invert group-hover/btn:invert-0" alt="Github" />
                      </a>
                    )}
                    {project.youtube && (
                      <a href={project.youtube} target="_blank" className="p-3 md:p-4 bg-white/10 hover:bg-red-600 rounded-full transition-all hover:scale-110 flex items-center justify-center">
                        <Play className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="px-2">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-white transition-colors text-white/90">
                    {project.title}
                  </h3>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-5 py-2.5 bg-[#1a1a1a] rounded-xl text-xs font-semibold text-white/80 border border-white/5 hover:border-white/30 hover:text-white transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description with Read More */}
                  <div className="relative">
                    <p className={`text-lg text-white/50 leading-relaxed ${expandedIndex === i ? "" : "line-clamp-3"}`}>
                      {project.description}
                    </p>
                    <button 
                      onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                      className="text-white font-bold mt-4 hover:underline focus:outline-none transition-all block"
                    >
                      {expandedIndex === i ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
