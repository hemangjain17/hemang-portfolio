"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Zap, Shield, BarChart3, Globe, Layers } from "lucide-react";

const products = [
  {
    title: "EcoFlow Pro",
    tagline: "Sustainable Energy Management",
    description: "An AI-driven dashboard for real-time energy consumption tracking and optimization. Helps households reduce their carbon footprint by up to 30%.",
    features: ["Smart Grid Integration", "Predictive Analytics", "Mobile App Control"],
    icon: <Zap className="w-6 h-6" />,
    color: "from-white/10 to-transparent",
    borderColor: "group-hover:border-white/50"
  },
  {
    title: "SecureVault",
    tagline: "Next-Gen Data Encryption",
    description: "Enterprise-grade security platform using post-quantum cryptography to protect sensitive financial data. Zero-knowledge architecture for total privacy.",
    features: ["Quantum-Resistant", "Biometric Auth", "Auto-Compliance"],
    icon: <Shield className="w-6 h-6" />,
    color: "from-white/10 to-transparent",
    borderColor: "group-hover:border-white/50"
  },
  {
    title: "MarketMind",
    tagline: "Algorithmic Trading Platform",
    description: "High-frequency trading interface with built-in sentiment analysis and automated risk management for retail traders and small hedge funds.",
    features: ["Low Latency Execution", "Sentiment Engine", "Strategy Builder"],
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-white/10 to-transparent",
    borderColor: "group-hover:border-white/50"
  }
];

export default function Product() {
  return (
    <section id="products" className="py-28 px-6 relative overflow-hidden bg-white/[0.01]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Shipped Products</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Built for <span className="text-gradient">Performance</span></h2>
          <p className="text-white/40 max-w-2xl text-lg">
            Beyond experiments, I build scalable products designed for high-impact enterprise and consumer environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-8 glass rounded-[2rem] border border-white/5 ${product.borderColor} transition-all duration-500 flex flex-col`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                
                <span className="text-primary/60 text-xs font-bold uppercase tracking-wider mb-2 block">{product.tagline}</span>
                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 rounded-xl border border-white/10 text-white font-semibold text-sm hover:bg-primary hover:border-primary transition-all flex items-center justify-center gap-2">
                  View Demo <Globe className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-12 glass rounded-[3rem] border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4">Want a custom solution?</h3>
              <p className="text-white/50">I offer specialized consulting for AI infrastructure, high-performance web apps, and enterprise security architectures.</p>
            </div>
            <a href="/#contact" className="px-8 py-4 bg-primary text-black font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-primary/20 whitespace-nowrap">
              Start a Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
