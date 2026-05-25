import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, TrendingUp, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppCTA from '../components/WhatsAppCTA';
import SEO from '../components/SEO';
import { projectsData } from '../data/projectsData';

const categories = ['All Works', 'Website Design', 'Branding', 'Facebook Ads', 'SEO'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All Works');

  const filteredProjects = activeCategory === 'All Works' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen font-sans selection:bg-primary-blue selection:text-white bg-bg-light">
      <SEO 
        title="Our Digital Agency Portfolio & Case Studies" 
        description="See how Solution Point Pro helped complete brand transformations, drove 3x more traffic via SEO, and generated thousands of leads for businesses in Bangladesh."
        keywords="web design portfolio bangladesh, seo results, facebook ads case studies db, local business marketing"
        canonical="https://solutionpointpro.com/portfolio"
      />
      
      <main>
        {/* Portfolio Hero - Dark Aesthetic */}
        <section className="bg-dark-navy text-white pt-32 pb-28 lg:pt-40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-accent/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-cyan-accent font-bold tracking-widest text-xs mb-6 uppercase border border-cyan-accent/20 px-4 py-1.5 rounded-full inline-block bg-cyan-accent/5">Our Featured Work</h4>
              <h1 className="text-4xl md:text-5xl lg:text-[72px] font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Digital Experiences <br className="hidden md:block"/> 
                That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-primary-blue font-serif italic font-normal">Transform</span> Businesses
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                We blend award-winning design with data-driven strategy to build brands that stand out and scale up in the digital world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Project Filtering & Grid */}
        <section className="py-20 md:py-32 relative z-20 -mt-12 bg-white rounded-t-[3rem] border-t border-slate-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter System */}
            <div className="flex flex-wrap justify-center gap-3 mb-16 md:mb-20">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-primary-blue text-white shadow-lg shadow-primary-blue/20' 
                      : 'bg-slate-100 text-text-dark/70 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 gap-y-12 mb-20">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={project.id} 
                    className="group block"
                  >
                    <Link to={`/portfolio/${project.slug}`} className="block h-full relative cursor-pointer">
                      <div className="relative rounded-[2rem] overflow-hidden mb-6 aspect-[4/3] bg-slate-100 shadow-md">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-dark-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white text-primary-blue flex items-center justify-center transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                            <ArrowUpRight size={24} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="px-2">
                         <p className="text-cyan-accent text-xs font-bold tracking-widest uppercase mb-2">{project.category}</p>
                         <h3 className="text-2xl font-bold text-text-dark mb-2 group-hover:text-primary-blue transition-colors">{project.title}</h3>
                         <p className="text-text-dark/60 font-medium">Client: {project.client}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

        {/* Client Transformations - Dark Section */}
        <section className="py-20 md:py-32 bg-dark-navy text-white relative border-y border-white/5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] pointer-events-none opacity-40" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
               <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Real Results. <br className="md:hidden" /> Real Growth.</h2>
               <p className="text-lg text-white/60">We don't just design pretty websites; we build scalable digital engines that generate revenue and ROI.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
               <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-green to-accent-green"></div>
                 <TrendingUp className="w-10 h-10 text-accent-green mb-6" />
                 <h3 className="text-2xl font-bold mb-2">E-commerce Sales</h3>
                 <p className="text-white/60 mb-8">+310% increase in monthly revenue after complete website redesign and conversion optimization.</p>
                 <div className="flex justify-between items-end border-t border-white/10 pt-6">
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Before</p>
                      <p className="text-lg font-bold text-white/80">৳50k/mo</p>
                    </div>
                    <ArrowRight className="text-white/40 mb-1" />
                    <div className="text-right">
                      <p className="text-xs text-accent-green uppercase tracking-widest mb-1">After</p>
                      <p className="text-2xl font-bold text-accent-green">৳205k/mo</p>
                    </div>
                 </div>
               </div>

               <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-accent to-primary-blue"></div>
                 <BarChart3 className="w-10 h-10 text-cyan-accent mb-6" />
                 <h3 className="text-2xl font-bold mb-2">Organic Search Traffic</h3>
                 <p className="text-white/60 mb-8">Achieved first-page rankings for 20+ competitive industry keywords within 4 months.</p>
                 <div className="flex justify-between items-end border-t border-white/10 pt-6">
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Before</p>
                      <p className="text-lg font-bold text-white/80">300 visits</p>
                    </div>
                    <ArrowRight className="text-white/40 mb-1" />
                    <div className="text-right">
                      <p className="text-xs text-cyan-accent uppercase tracking-widest mb-1">After</p>
                      <p className="text-2xl font-bold text-cyan-accent">4.5k visits</p>
                    </div>
                 </div>
               </div>

               <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-cyan-accent"></div>
                 <Users className="w-10 h-10 text-primary-blue mb-6" />
                 <h3 className="text-2xl font-bold mb-2">Facebook Ads Leads</h3>
                 <p className="text-white/60 mb-8">Reduced cost per lead while quadrupling the daily lead volume for a real estate client.</p>
                 <div className="flex justify-between items-end border-t border-white/10 pt-6">
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">CPL Before</p>
                      <p className="text-lg font-bold text-white/80">৳450</p>
                    </div>
                    <ArrowRight className="text-white/40 mb-1" />
                    <div className="text-right">
                      <p className="text-xs text-primary-blue uppercase tracking-widest mb-1">CPL After</p>
                      <p className="text-2xl font-bold text-primary-blue">৳120</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* CTA Banner Reused */}
        <WhatsAppCTA />
      </main>

    </div>
  );
}
