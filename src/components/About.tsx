"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Database, Workflow, ArrowRight } from "lucide-react";

const specialSkills = [
  "Agentic AI Design", "Multimodal RAG", "Technical Leadership", "Real-Time Analytics",
  "Computer Vision", "Scalable System Design", "Full-Stack Development", "Algorithmic Optimization",
  "Strategic Vision", "Rapid Prototyping", "Competitive Adaptability", "Team Management", "Problem Solving",
];

const expertise = [
  { 
    title: "AI Engineering", 
    desc: "Architecting LLM agents, RAG pipelines, and autonomous systems that transform raw data into actionable intelligence.", 
    icon: <Brain className="w-7 h-7" />,
    gradient: "from-violet-500/20 to-indigo-500/20"
  },
  { 
    title: "Computer Vision", 
    desc: "Building real-time detection systems and SOTA SAR image analysis with AWS Rekognition and DeepSort.", 
    icon: <Cpu className="w-7 h-7" />,
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  { 
    title: "Scalable Systems", 
    desc: "Designing production-grade pipelines that reduce operational costs by up to 1000x without sacrificing performance.", 
    icon: <Workflow className="w-7 h-7" />,
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  { 
    title: "Data Architecture", 
    desc: "Engineering secure, high-speed knowledge bases and retrieval systems for enterprise-scale applications.", 
    icon: <Database className="w-7 h-7" />,
    gradient: "from-amber-500/20 to-orange-500/20"
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">About <span className="text-gradient">Me</span></h2>
          <p className="text-white/40 text-lg leading-relaxed">
            Hi, I&apos;m Hemang Jain, and for me, engineering is as much about feeling and intuition as it is about logic. I live for that moment of clarity when complex chaos finally settles into an elegant, intelligent reality. My life is a process of relentless evolution; I&apos;m always updating my perspective and pushing my own boundaries to ensure I&apos;m never standing still.
          </p>
          <p className="text-white/40 text-lg leading-relaxed mt-5">
            I thrive in dynamic environments where I can blend high-level problem-solving with a deep focus on user experience. I take a user-centric approach to every project, ensuring that the systems I build, whether they are autonomous pipelines or intricate web applications, are not only performant and scalable but also intuitive and human.
          </p>
          <p className="text-white/40 text-lg leading-relaxed mt-5">
            To me, work should be so clean and undeniable that it speaks for itself, requiring no explanation.
          </p>
          <p className="text-white/50 text-lg leading-relaxed mt-8 italic">
            Feel free to reach out to me for collaborations, freelance work, or just to chat about tech! I&apos;d love to connect.
          </p>
        </div>

        {/* Special Skills - Animated Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 overflow-hidden relative"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-primary/30" />
            <span className="text-white/30 text-xs font-bold uppercase tracking-[0.3em]">Special Skills</span>
          </div>
          
          {/* Fade edges */}
          <div className="absolute left-0 top-8 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-8 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-3 animate-marquee">
            {[...specialSkills, ...specialSkills].map((skill, i) => (
              <span
                key={i}
                className="flex-shrink-0 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-sm font-semibold text-white/50 hover:text-primary hover:border-primary/40 transition-all duration-300 cursor-default whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-7 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-primary/30 transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-primary/60 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
        />
      </div>

      {/* Marquee keyframes injected via style tag */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
