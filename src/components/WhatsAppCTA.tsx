import React from 'react';
import { motion } from 'motion/react';

export default function WhatsAppCTA() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary-blue to-accent-green">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
           className="absolute w-[800px] h-[800px] bg-white/10 rounded-full -top-[400px] -right-[200px] blur-[80px]" 
          />
         <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
           className="absolute w-[600px] h-[600px] bg-dark-navy/10 rounded-full -bottom-[300px] -left-[100px] blur-[80px]" 
          />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <h4 className="text-white font-bold tracking-widest text-xs mb-4 md:mb-6 uppercase inline-block border border-white/20 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm">Start Growing Today</h4>
          
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
            Ready to Build Your <br className="hidden md:block"/> Business Online?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-5 max-w-2xl mx-auto font-medium">
            Get a FREE 30-minute Digital Strategy Session — No obligation, no pressure. Just real advice tailored for the Bangladesh market.
          </p>

          <p className="text-base text-white/80 font-bangla mb-10 pb-2">
            আজই WhatsApp করুন এবং আপনার ব্যবসার জন্য একটি বিনামূল্যে কৌশল পান!
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://wa.me/8801741516454?text=Hi%2C+I'd+like+to+get+a+free+digital+strategy+session!"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 bg-white text-dark-navy hover:bg-bg-light px-6 sm:px-10 py-5 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl transition-transform duration-300 hover:scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)]"
          >
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-accent-green" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              <span className="font-bangla pt-0.5 tracking-wide">WhatsApp Now</span>
            </div>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="text-dark-navy/80 sm:text-dark-navy">+88 017 4151 6454</span>
          </a>
          
          <p className="mt-6 text-sm text-white/60 font-medium">Average response time: Under 30 minutes</p>
        </motion.div>
      </div>
    </section>
  );
}
