"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const experiences = [
  {
    company: "Viewr",
    role: "AI ENGINEER INTERN",
    period: "Jun 2025 – Oct 2025",
    desc: "Worked as an AI Engineer Intern at Viewr, where I designed and deployed intelligent systems for real-world analytics. Built an AI-powered attendance and productivity system using AWS Rekognition with IoU-based tracking and frame sampling, reducing operational costs by 1000x while enabling automated cheating detection. Developed a LangGraph-based autonomous pipeline integrating audio-video streams to analyze customer behavior, sentiment, and sales performance, generating actionable insights similar to CRM analytics platforms.",
    tech: "AWS Rekognition, LangGraph, IoU Tracking, Python, Computer Vision"
  },
  {
    company: "Matiks",
    role: "AI ENGINEER INTERN",
    period: "Nov 2024 – Jan 2025",
    desc: "Developed a GenAI-Driven Math Problem Generator using Deepseek-math, GPT-4 and Gemini-2.0-flash for reasoning validation. Optimized costs to $0.65/question by leveraging open-source models. Automated solution pipelines and ensured dynamic difficulty adjustments for better usability. Generated problems across 15 categories with 90% accuracy in validation and complexity analysis. Integrated VertexAI for storing question templates, as well as implementing hybrid search for enhanced retrieval. Enhanced user experience with hint generation and adaptive difficulty using SymPy.",
    tech: "DeepSeek-Math, GPT-4, Gemini 2.0 Flash, VertexAI, SymPy, Prompt Engineering"
  },
  {
    company: "Delhi Police",
    role: "Full-Stack Web Developer",
    period: "May 2024 – Jul. 2024",
    desc: "Led a team of six to design and implement a dynamic dashboard, streamlining data visualization and enhancing user interaction. Contributed to building a responsive, scalable platform using React, RESTful APIs, Tailwind CSS, and MongoDB, ensuring robust frontend and backend integration.",
    tech: "React, RESTful APIs, Tailwind CSS, MongoDB, Team Leadership"
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Professional <span className="text-gradient">Journey</span></h2>
          <p className="text-white/40 text-lg">Where I&apos;ve been and what I&apos;ve built along the way.</p>
        </div>

        <div className="relative ml-4 md:ml-6">
          {/* Main vertical line */}
          <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-white/10" />
          
          {/* Animated progress line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 top-2 bottom-0 w-[2px] bg-primary z-10"
          />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index, scrollYProgress }: { exp: any, index: number, scrollYProgress: any }) {
  const step = 1 / experiences.length;
  const start = index * step;
  const end = (index + 1) * step;

  const opacity = useTransform(scrollYProgress, [start, start + step * 0.5], [0.3, 1]);
  const x = useTransform(scrollYProgress, [start, start + step * 0.5], [20, 0]);

  return (
    <motion.div
      style={{ opacity, x }}
      className="relative pl-12 md:pl-16"
    >
      {/* Dot */}
      <motion.div 
        className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-background border-2 border-white/20 z-20"
        style={{ 
          backgroundColor: useTransform(scrollYProgress, [start, start + 0.05], ["#0a0a0a", "#6366f1"]),
          borderColor: useTransform(scrollYProgress, [start, start + 0.05], ["rgba(255,255,255,0.2)", "#6366f1"]),
          boxShadow: useTransform(scrollYProgress, [start, start + 0.05], ["0px 0px 0px rgba(99, 102, 241, 0)", "0px 0px 15px rgba(99, 102, 241, 0.5)"])
        }}
      />
      
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
            {exp.role}
          </h3>
          <p className="text-primary font-medium mt-1">
            {exp.company}
          </p>
        </div>
        <span className="text-white/40 font-medium text-sm whitespace-nowrap pt-2">
          {exp.period}
        </span>
      </div>
      
      <p className="text-white/60 text-base md:text-lg leading-relaxed mb-4">
        {exp.desc}
      </p>

      {exp.tech && (
        <div className="flex flex-wrap gap-2 pt-2">
          {exp.tech.split(", ").map((tech: string, i: number) => (
            <span key={i} className="text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white/5 border border-white/10 rounded-full text-primary/80">
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
