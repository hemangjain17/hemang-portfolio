"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Supabase", slug: "supabase" },
  { name: "GCP", slug: "googlecloud" },
  { name: "Python", slug: "python" },
  { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
  { name: "C++", slug: "cplusplus" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Docker", slug: "docker" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Git", slug: "git" },
  { name: "Flask", slug: "flask" },
  { name: "PyTorch", slug: "pytorch" },
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "OpenCV", slug: "opencv" },
  { name: "LangChain", slug: "langchain" },
  { name: "Hugging Face", slug: "huggingface" },
  { name: "Vercel", slug: "vercel" },
  { name: "Firebase", slug: "firebase" },
  { name: "Redis", slug: "redis" },
  { name: "Linux", slug: "linux" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "GraphQL", slug: "graphql" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-gradient">Technical</span> Arsenal</h2>
          <p className="text-white/40 max-w-4xl mx-auto text-base">A comprehensive overview of the technologies and tools I use to build scalable AI and web solutions.</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-8 md:gap-12">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative flex flex-col items-center justify-center gap-4"
            >
              <div className="relative w-12 h-12 md:w-20 md:h-20 flex items-center justify-center glass rounded-2xl border border-white/5 group-hover:border-primary/50 transition-all duration-500 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  style={skill.color ? { background: `linear-gradient(to bottom right, ${skill.color}20, transparent)` } : {}}
                />
                
                <motion.img 
                  src={`https://cdn.simpleicons.org/${skill.slug}`} 
                  alt={skill.name}
                  className="w-6 h-6 md:w-10 md:h-10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  style={skill.color ? { 
                    filter: `drop-shadow(0 0 8px ${skill.color}50)`,
                  } : {}}
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/0 group-hover:text-white/40 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
