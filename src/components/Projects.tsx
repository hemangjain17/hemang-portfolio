"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Trophy, Code, Play } from "lucide-react";

import Link from 'next/link';
import { allProjects } from '../lib/projects';

const projects = allProjects.slice(0, 4);

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  return (
    <section id="projects" className="py-28 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-white/40 text-lg">Award-winning solutions and production-grade systems.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group ${i >= 3 ? 'hidden md:block' : ''}`}
            >
              {/* Project Image Card */}
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-[#1a1a1a] border border-white/5 group-hover:border-primary/50 transition-all duration-500 mb-10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Award Badge */}
                {project.award && (
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 bg-primary text-black text-[8px] md:text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5 md:gap-2 shadow-2xl z-20">
                    <Trophy className="w-2.5 h-2.5 md:w-3 md:h-3" />
                    {project.award}
                  </div>
                )}

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 md:gap-6 z-10 backdrop-blur-sm">
                  <a href={project.github} target="_blank" className="p-3 md:p-4 bg-white/10 hover:bg-primary rounded-full transition-all hover:scale-110 flex items-center justify-center">
                    <img src="/github.png" className="w-5 h-5 md:w-6 md:h-6 filter invert" alt="Github" />
                  </a>
                  {project.youtube && (
                    <a href={project.youtube} target="_blank" className="p-3 md:p-4 bg-white/10 hover:bg-red-600 rounded-full transition-all hover:scale-110 flex items-center justify-center">
                      <Play className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="px-2">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-5 py-2.5 bg-[#161616] rounded-xl text-xs font-semibold text-white/80 border border-white/5 hover:border-primary/30 hover:text-primary transition-all cursor-default"
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
                    className="text-primary font-bold mt-4 hover:underline focus:outline-none transition-all block"
                  >
                    {expandedIndex === i ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 hidden justify-center relative z-50">
          <a href="/projects" className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white hover:text-black transition-all font-bold tracking-wide">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
