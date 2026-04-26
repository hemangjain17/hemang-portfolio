"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden bg-[#030303]">
      {/* Cinematic Full-Length Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-primary/20 via-primary/5 to-transparent blur-[100px]" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[120%] h-[400px] bg-primary/20 rounded-[100%] blur-[120px]" />
        
        {/* Particle Effect */}
        {mounted && [...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Floating AWS Logo */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-[15%] opacity-20 hidden md:block"
        >
          <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" className="w-16 h-16 grayscale" alt="AWS" />
        </motion.div>

        {/* Floating GCP Logo */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-[15%] opacity-20 hidden md:block"
        >
          <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" className="w-16 h-16 grayscale" alt="GCP" />
        </motion.div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Ready to build the future of <span className="text-primary italic">intelligence?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
            Whether it&apos;s about a project, an opportunity, or just to say hello. <br></br>I&apos;d love to hear from you.
          </p>

          <div className="pt-4 flex flex-col items-center gap-4">
            <motion.a
              href="mailto:jain.hemang55@gmail.com"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-4 bg-white text-black font-bold rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all"
            >
              Reach out
            </motion.a>
            <span className="text-white/25 text-sm font-medium tracking-wide">jain.hemang55@gmail.com</span>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6">
             {[
               { icon: <Mail className="w-5 h-5" />, href: "mailto:jain.hemang55@gmail.com", label: "Email" },
               { icon: <img src="/github.png" className="w-5 h-5 filter invert" />, href: "https://github.com/hemangjain17", label: "GitHub" },
               { icon: <img src="/linkedin.png" className="w-5 h-5" />, href: "https://www.linkedin.com/in/jain-hemang/", label: "LinkedIn" }
             ].map((social, i) => (
               <motion.a
                 key={i}
                 href={social.href}
                 target="_blank"
                 whileHover={{ y: -5, scale: 1.05 }}
                 className="text-white/30 hover:text-white transition-all px-5 py-3 bg-white/5 rounded-xl border border-white/5 backdrop-blur-xl flex items-center gap-3 hover:border-primary/30"
               >
                 {social.icon}
                 <span className="text-sm font-medium">{social.label}</span>
               </motion.a>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
