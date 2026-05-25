import React from 'react';
import { motion } from 'motion/react';

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-slate-100 py-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-light/50 pointer-events-none rounded-l-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by growing businesses across Bangladesh</p>
        <div className="flex justify-center flex-wrap gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
           {['GlobalTech', 'FoodBazaar BD', 'Dhaka Traders', 'NextGen Startup', 'SmartEdu'].map((logo, i) => (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 0.5 }}
               key={i} 
               className="text-xl md:text-2xl font-bold font-heading text-text-dark hover:text-primary-blue hover:scale-105 transition-all duration-300 cursor-default"
             >
               {logo}
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
