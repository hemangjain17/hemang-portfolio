"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Crafting the Intelligence that Drives Tomorrow";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#030303]">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Open for collaboration</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] min-h-[1.1em]">
            {text}
            <span className="animate-pulse text-primary">|</span>
          </h1>
          
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Hemang Jain</h2>
            <p className="text-lg text-white/50 font-medium italic tracking-wide">
              &quot;No shortcuts. Just code, curiosity &amp; consistency&quot;.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <motion.a
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="group relative px-10 py-5 rounded-2xl bg-primary text-white font-bold flex items-center gap-3 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              Explore Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <div className="flex items-center gap-6">
               <motion.a
                 whileHover={{ y: -5, scale: 1.1 }}
                 href="https://github.com/hemangjain17"
                 target="_blank"
                 className="w-12 h-12 p-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/50 transition-all flex items-center justify-center"
               >
                 <img src="/github.png" alt="Github" className="w-full h-full object-contain filter invert" />
               </motion.a>
               <motion.a
                 whileHover={{ y: -5, scale: 1.1 }}
                 href="https://www.linkedin.com/in/jain-hemang/"
                 target="_blank"
                 className="w-12 h-12 p-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/50 transition-all flex items-center justify-center"
               >
                 <img src="/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain" />
               </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square max-w-[500px] ml-auto">
             {/* Dynamic Background Circles */}
             <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full relative"
                >
                  <div className="absolute inset-0 border-[2px] border-dashed border-primary/20 rounded-full" />
                  <div className="absolute inset-10 border-[1px] border-white/10 rounded-full" />
                </motion.div>
             </div>

             {/* Personal Image Container */}
             <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full rounded-full border-4 border-white/10 overflow-hidden relative group shadow-[0_0_60px_rgba(99,102,241,0.2)]">
                   <img 
                     src="/hj-formal.jpeg" 
                     alt="Hemang Jain" 
                     className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
             </div>

             {/* Floating Info Cards */}
             <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity }}
               className="absolute top-4 -right-4 p-6 glass rounded-3xl border border-white/10 shadow-2xl z-20"
             >
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-sm font-bold text-white/80">System Active</span>
               </div>
               <div className="mt-2 text-xs text-white/40 font-bold uppercase tracking-widest">AI Architect</div>
             </motion.div>

             <motion.div
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 7, repeat: Infinity, delay: 1 }}
               className="absolute bottom-10 -left-10 p-6 glass rounded-3xl border border-white/10 shadow-2xl z-20"
             >
                <div className="text-primary font-bold text-lg leading-none">99.9% Efficiency</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Driven by Curiosity</div>
             </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent opacity-30" />
      </motion.div>
    </section>
  );
}
