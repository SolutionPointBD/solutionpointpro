import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-bg-light relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h4 className="text-primary-blue font-bold tracking-widest text-xs mb-4 uppercase">Our Portfolio</h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-dark mb-6 leading-tight">Our Work Speaks for Itself</h2>
          <p className="text-lg md:text-xl text-text-dark/60 max-w-2xl mx-auto font-medium">Explore some of the premium high-converting experiences we've delivered for our clients.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 md:mb-20">
           {[
             {
               id: 1,
               category: "Web Development",
               title: "Apex E-Commerce Platform",
               client: "Apex Brands BD",
               image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
             },
             {
               id: 2,
               category: "UI/UX Design",
               title: "Real Estate App Design",
               client: "Luxury Homes BD",
               image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
             },
             {
               id: 3,
               category: "Web Application",
               title: "SaaS Dashboard Interface",
               client: "FinTech Solutions",
               image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
             },
             {
               id: 4,
               category: "Brand Identity",
               title: "Creative Agency Branding",
               client: "Studio Nova",
               image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
             },
             {
               id: 5,
               category: "Custom Software",
               title: "Healthcare Portal",
               client: "MedLife Care",
               image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
             },
             {
               id: 6,
               category: "E-Commerce",
               title: "Organic Food Store",
               client: "Nature's Bounty",
               image: "https://images.unsplash.com/photo-1498837167922-41c543210940?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
             }
           ].map((project, i) => (
             <motion.div 
               key={project.id} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: i * 0.1, duration: 0.5 }}
               className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary-blue/20 transition-all duration-500 border border-slate-100"
             >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                   <p className="text-cyan-accent text-[11px] font-bold tracking-widest mb-1.5 uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</p>
                   <h3 className="text-white text-2xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                   <p className="text-white/70 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.client}</p>
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                     <Link to="/portfolio" className="inline-flex items-center gap-2 border border-white/20 hover:bg-white text-white hover:text-primary-blue text-xs font-bold px-4 py-2 rounded-xl transition-colors">
                       View Case Study <span className="text-lg leading-none">→</span>
                     </Link>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
           <Link to="/portfolio" className="inline-flex items-center text-primary-blue font-bold tracking-wide hover:text-cyan-accent border-b-2 border-primary-blue/30 hover:border-cyan-accent pb-1 transition-colors group text-[15px]">
             View Our Full Portfolio
             <span className="ml-1.5 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
