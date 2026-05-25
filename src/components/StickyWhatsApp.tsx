import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function StickyWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 200 }}
      href="https://wa.me/8801741516454?text=Hi%2C+I'm+looking+for+a+digital+growth+partner!"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent-green hover:opacity-90 text-dark-navy p-4 sm:p-5 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-1.5 group flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white w-8 h-8 sm:w-9 sm:h-9" />
      
      {/* Tooltip */}
      <span className="absolute top-1/2 -translate-y-1/2 right-full mr-4 bg-white text-text-dark text-sm sm:text-base font-bold py-2 sm:py-2.5 px-4 sm:px-5 rounded-xl shadow-xl shadow-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-max flex items-center gap-2 border border-slate-100">
        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-accent-green"></span>
        </span>
        We reply in 5 mins! 👋
      </span>
    </motion.a>
  );
}
