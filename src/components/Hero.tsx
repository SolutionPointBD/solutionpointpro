import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Star, ShieldCheck, TrendingUp, Layout, Search, Megaphone, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] bg-dark-navy flex items-center overflow-hidden pt-24 pb-16 lg:pt-32">
      {/* Background Elements - Premium Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-accent/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-blue/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(0,184,148,0.1)]">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
                </span>
                Launch Offer: Free Strategy Session
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-extrabold text-white leading-[1.15] tracking-tight mb-6">
                We Build Digital <br className="hidden md:block"/>
                Experiences That <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent via-primary-blue/80 to-cyan-accent bg-300% animate-gradient">Grow Your Business</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl leading-relaxed font-medium">
                Bangladesh's Premier AI-Powered Digital Agency. Custom websites, SEO, branding & digital marketing that delivers undeniable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <a
                  href="https://wa.me/8801741516454?text=I'd+like+a+FREE+digital+strategy+session+please!"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-accent-green hover:bg-white text-dark-navy px-8 py-4 sm:py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_8px_25px_rgba(0,184,148,0.3)] hover:shadow-[0_15px_35px_rgba(0,184,148,0.4)] hover:-translate-y-1 group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 text-accent-green bg-dark-navy rounded-full p-1 group-hover:bg-accent-green group-hover:text-white" />
                  <span className="font-bangla tracking-wide">WhatsApp করুন</span>
                </a>
                <Link
                  to="/portfolio"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/15 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:border-white/30 group"
                >
                  <span className="font-bangla opacity-90">আমাদের কাজ দেখুন</span>
                  <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Premium Stats Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 pt-8 border-t border-white/10"
            >
              {[
                { num: '150+', label: 'Happy Clients' },
                { num: '200+', label: 'Projects Done' },
                { num: '5★', label: 'Google Rating' },
                { num: '5+', label: 'Years Exp.' }
              ].map((stat, i) => (
                <div key={i} className="relative">
                  <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1.5 tracking-tight">{stat.num}</div>
                  <div className="text-[11px] lg:text-xs text-cyan-accent uppercase tracking-widest font-semibold">{stat.label}</div>
                  {i !== 3 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10"></div>}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual - Refined Glassmorphism */}
          <div className="lg:col-span-5 hidden lg:block relative perspective-1000">
             <motion.div
                initial={{ opacity: 0, rotateY: 15, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
                className="relative z-10 w-full max-w-lg mx-auto"
             >
                {/* Main mockup card */}
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
                  {/* Inner glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary-blue/30 rounded-full blur-3xl pointer-events-none mix-blend-screen"></div>
                   
                   {/* Browser header */}
                   <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                     <div className="flex gap-1.5">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     </div>
                     <div className="text-xs text-white/30 font-medium tracking-wider bg-white/5 px-3 py-1 rounded-full">solutionpointpro.com</div>
                   </div>

                   {/* Mockup content */}
                   <div className="space-y-4 relative z-10">
                     <div className="grid grid-cols-2 gap-3 relative z-10">
                       <div className="bg-white/5 border border-white/10 p-4 lg:p-5 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm shadow-lg group">
                         <Layout className="w-7 h-7 text-cyan-accent mb-3 group-hover:scale-110 transition-transform" />
                         <h4 className="text-white text-sm font-bold mb-1">Web Design</h4>
                         <p className="text-white/50 text-[11px] leading-tight">High-converting sites</p>
                       </div>
                       <div className="bg-white/5 border border-white/10 p-4 lg:p-5 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm shadow-lg group">
                         <Search className="w-7 h-7 text-accent-green mb-3 group-hover:scale-110 transition-transform" />
                         <h4 className="text-white text-sm font-bold mb-1">Local SEO</h4>
                         <p className="text-white/50 text-[11px] leading-tight">Dominate search results</p>
                       </div>
                       <div className="bg-white/5 border border-white/10 p-4 lg:p-5 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm shadow-lg group">
                         <Megaphone className="w-7 h-7 text-primary-blue mb-3 group-hover:scale-110 transition-transform" />
                         <h4 className="text-white text-sm font-bold mb-1">Marketing</h4>
                         <p className="text-white/50 text-[11px] leading-tight">ROI-focused campaigns</p>
                       </div>
                       <div className="bg-white/5 border border-white/10 p-4 lg:p-5 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm shadow-lg group">
                         <PenTool className="w-7 h-7 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                         <h4 className="text-white text-sm font-bold mb-1">Brand Identity</h4>
                         <p className="text-white/50 text-[11px] leading-tight">Premium positioning</p>
                       </div>
                     </div>
                     <div className="h-14 w-full bg-accent-green/10 border border-accent-green/20 rounded-lg flex items-center justify-center gap-2 relative z-10 backdrop-blur-sm shadow-xl">
                        <TrendingUp className="w-4 h-4 text-accent-green" />
                        <span className="text-accent-green text-[13px] font-bold tracking-wide">Client Revenue Growing...</span>
                     </div>
                   </div>
                </div>

                {/* Floating Elements - Z-index fixed for better layering */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-10 -top-8 bg-dark-navy/90 backdrop-blur-xl border border-cyan-accent/20 px-5 py-4 rounded-xl shadow-2xl z-20"
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <div className="text-white text-sm font-bold tracking-wide">Top Rated BD Agency</div>
                </motion.div>

                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-12 bottom-12 bg-dark-navy/90 backdrop-blur-xl border border-primary-blue/30 px-5 py-4 rounded-xl shadow-2xl z-20 flex items-center gap-4"
                >
                   <div className="w-12 h-12 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center">
                     <ShieldCheck className="w-6 h-6 text-cyan-accent" />
                   </div>
                   <div>
                     <div className="text-white text-[15px] font-bold">Guaranteed Results</div>
                     <div className="text-white/60 text-[11px] font-medium tracking-wider uppercase mt-0.5">ROI Focused Focus</div>
                   </div>
                </motion.div>

             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
