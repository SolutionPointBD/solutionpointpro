import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Zap } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-dark-navy rounded-[2.5rem] p-8 md:p-16 lg:p-20 border border-dark-navy/80 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-blue/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-green/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZG90cykiLz48L3N2Zz4=')] opacity-30" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent text-xs font-bold uppercase tracking-widest mb-6">
                <ShieldCheck className="w-4 h-4" /> Iron-Clad Guarantee
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                We Don't Just Talk. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-accent-green">We Deliver Results.</span>
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed font-medium">
                We know how hard it is to find a reliable digital agency in Bangladesh. That's why we focus purely on ROI, transparent reporting, and long-term business growth. No vanity metrics.
              </p>
              
              <div className="flex gap-4 items-center">
                <a href="https://wa.me/8801741516454?text=Hi%2C+I+want+to+know+more+about+your+guaranteed+growth+strategies!" target="_blank" rel="noreferrer" className="bg-accent-green hover:opacity-90 text-dark-navy px-8 py-4 rounded-xl font-bold shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-all hover:-translate-y-1">
                  Start Your Growth Journey
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-cyan-accent" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">ROI-Focused</h3>
                <p className="text-white/60 text-sm leading-relaxed">Every strategy we implement is designed to directly increase your revenue and generate high-quality leads.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm translate-y-0 sm:translate-y-6"
              >
                <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">100% Transparent</h3>
                <p className="text-white/60 text-sm leading-relaxed">Clear pricing, realistic timelines, and regular progress reports. We hide nothing from our clients.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-cyan-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-cyan-accent" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Fast Execution</h3>
                <p className="text-white/60 text-sm leading-relaxed">We work quickly without sacrificing quality. Your business moves fast, and so do we.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
