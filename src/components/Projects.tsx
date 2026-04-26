"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Trophy, Code, Play } from "lucide-react";

const projects = [
  {
    title: "TruthLens",
    award: "Won Google GenAI Hackathon",
    category: "NLP • Knowledge Graphs",
    description: "A relentless multimodal fact-verification system designed to combat misinformation by cross-referencing claims against structured Knowledge Graphs. Utilizes BERT-NLI to achieve 95%+ precision in under 15 seconds, analyzing social networks and fact-checking APIs.",
    tags: ["Knowledge Graphs", "BERT-NLI", "Multimodal RAG", "NLP", "React.js", "Flask", "DigitalOcean"],
    link: "https://github.com/vansh2101/news-verfication",
    github: "https://github.com/vansh2101/news-verfication",
    youtube: "https://www.youtube.com/watch?v=_xJIaqa86m8",
    image: "/projects/truthlens.png"
  },
  {
    title: "Real-time AD Bidding",
    award: "Won Adobe Devcraft",
    category: "Machine Learning • Algorithms",
    description: "Designed a high-speed CTR and Bid Price prediction engine utilizing LightGBM, optimized for extreme performance with a sub-2ms execution time. Engineered region-city weighted features and device mapping to reduce memory usage by over 80% within a strict 512KB space constraint.",
    tags: ["Machine Learning", "LightGBM", "Parallel Execution", "Performance Tuning", "Feature Engineering"],
    link: "https://github.com/vishrutgrover/bidding-devcraft",
    github: "https://github.com/vishrutgrover/bidding-devcraft",
    image: "/projects/bidding.png"
  },
  {
    title: "StockXpert - BSE Insights",
    award: "Won brAInwave",
    category: "NLP • RAG",
    description: "A RAG-driven financial intelligence platform that executes real-time sentiment extraction from BSE news and filings. Features an autonomous \"Trading Buddy\" with asynchronous scraping for live updates and real-time WhatsApp alerts delivered via Twilio bots.",
    tags: ["Temporal RAG", "LlamaIndex", "Sentiment Analysis", "Selenium", "Twilio API", "Vector Databases"],
    link: "https://github.com/soodaryan/StockXpert",
    github: "https://github.com/soodaryan/StockXpert",
    youtube: "https://www.youtube.com/watch?v=l5WIgulmZfo",
    image: "/projects/stockxpert.png"
  },
  {
    title: "Meta-RL GTM Strategy Optimizer",
    award: "HF Scalar Hack Finalist",
    category: "Reinforcement Learning",
    description: "A reinforcement learning–driven GTM simulation environment where agents learn to dynamically optimize budget allocation, targeting, messaging, and pricing under uncertainty—balancing short-term revenue with long-term brand growth through adaptive, self-evolving strategies.",
    tags: ["Reinforcement Learning", "OpenEnv", "Hugging Face Spaces", "Multi-Agent"],
    link: "https://github.com/vishrutgrover/meta-rl",
    github: "https://github.com/vishrutgrover/meta-rl",
    image: "/projects/sarva.png"
  },
  {
    title: "SARVA - SAR Vision Agent",
    category: "Computer Vision • Research",
    description: "Engineered a state-of-the-art architecture for satellite imagery, specifically focusing on the despeckling (Dual-Attention Residual Auto-Encoder) and colorization (Modified PiggyBack GAN) of Synthetic Aperture Radar (SAR) data. Achieved a SOTA PSNR of 27.68 and developed an agentic framework demonstrating humanly impossible task solving with 85.64% segmentation accuracy.",
    tags: ["Dual-Attention Auto-Encoders", "PiggyBack GANs", "PyTorch", "CV", "AI Agents"],
    link: "https://github.com/soodaryan/SARVA",
    github: "https://github.com/soodaryan/SARVA",
    image: "/projects/sarva.png"
  },
  {
    title: "Watcher AI",
    category: "AI-Powered CCTV Intelligence",
    description: "Developed an advanced AI-powered CCTV intelligence platform designed to convert raw surveillance footage into actionable insights through real-time scene understanding. Features unified Person of Interest (POI) tracking across disparate feeds (CCTV, drones, body cams) and a multimodal search engine for natural language queries. Integrates crowd intelligence for real-time density estimation and emergency routing.",
    tags: ["VLMs", "Multimodal RAG", "LangGraph", "FastFlowNet", "DeepSort"],
    link: "https://github.com/DeveloperAkansh26/AWS-ImpactX-IITB-OpenSeeWe",
    github: "https://github.com/DeveloperAkansh26/AWS-ImpactX-IITB-OpenSeeWe",
    youtube: "https://www.youtube.com/watch?v=xfSzAvPHYDs",
    image: "/projects/truthlens.png"
  }
];

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
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 bg-primary text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5 md:gap-2 shadow-2xl z-20">
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
      </div>
    </section>
  );
}
