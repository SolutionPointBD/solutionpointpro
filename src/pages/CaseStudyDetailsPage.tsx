import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, ChevronRight, BarChart3, TrendingUp, Users } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import SEO from '../components/SEO';
import WhatsAppCTA from '../components/WhatsAppCTA';

export default function CaseStudyDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-primary-blue selection:text-white">
      <SEO 
        title={`${project.title} - Case Study | Solution Point Pro`} 
        description={project.overview}
      />
      
      <main className="pt-24 lg:pt-32">
        {/* Navigation Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-text-dark/60 hover:text-primary-blue transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold tracking-widest uppercase mb-6">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-dark mb-6 leading-[1.1] tracking-tight">
                 {project.title}
              </h1>
              <p className="text-lg text-text-dark/70 mb-8 leading-relaxed">
                {project.overview}
              </p>
              
              <div className="grid grid-cols-2 gap-8 lg:gap-12 border-y border-slate-100 py-8">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">Client</p>
                  <p className="text-lg font-bold text-text-dark">{project.client}</p>
                </div>
                <div>
                   <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">Primary Result</p>
                   <p className="text-lg font-bold text-accent-green">{project.result}</p>
                </div>
              </div>
            </motion.div>

             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </motion.div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-dark-navy text-white py-16">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
               {project.stats.map((stat, idx) => (
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: idx * 0.1 }}
                   key={idx} 
                   className="text-center p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm"
                 >
                   <p className="text-4xl lg:text-5xl font-bold text-cyan-accent mb-2">{stat.value}</p>
                   <p className="text-sm uppercase tracking-widest text-white/60 font-bold">{stat.label}</p>
                 </motion.div>
               ))}
             </div>
           </div>
        </section>

        {/* The Challenge & Solution */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              
              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-text-dark mb-6 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xl">1</span>
                  The Challenge
                </h3>
                <p className="text-lg text-text-dark/70 leading-relaxed bg-bg-light p-8 rounded-3xl border border-slate-100">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.2 }}
              >
                 <h3 className="text-3xl font-bold text-text-dark mb-6 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center font-bold text-xl">2</span>
                  The Solution
                </h3>
                <p className="text-lg text-text-dark/70 leading-relaxed bg-primary-blue/5 p-8 rounded-3xl border border-primary-blue/10">
                  {project.solution}
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Before & After Transformation */}
        {(project.beforeImage && project.afterImage) && (
          <section className="py-20 md:py-32 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 md:mb-20">
               <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">The Transformation</h2>
               <p className="text-lg text-text-dark/70 max-w-2xl mx-auto">Visual proof of the digital upgrade we delivered for {project.client}.</p>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white group"
                 >
                   <div className="absolute top-4 left-4 bg-dark-navy text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest z-10 shadow-lg">Before</div>
                   <img src={project.beforeImage} alt={`${project.title} Before`} className="w-full h-auto aspect-video object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
                 </motion.div>

                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-blue group"
                 >
                   <div className="absolute top-4 left-4 bg-primary-blue text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest z-10 shadow-lg">After</div>
                   <img src={project.afterImage} alt={`${project.title} After`} className="w-full h-auto aspect-video object-cover" />
                 </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Project Gallery */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl font-bold text-text-dark mb-4">Project Gallery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.gallery.map((img, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="rounded-2xl overflow-hidden shadow-md aspect-square"
                >
                  <img src={img} alt={`${project.title} snippet`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="py-20 md:py-32 bg-primary-blue text-white relative overflow-hidden text-center rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80')] mix-blend-overlay opacity-10 bg-cover bg-center" />
          <div className="relative z-10 max-w-4xl mx-auto px-4">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Want similar results for your business?</h2>
             <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
               Stop losing customers to competitors with better digital presence. Let's build your growth engine.
             </p>
             <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-accent-green hover:opacity-90 text-text-dark font-bold px-8 py-4 rounded-full text-lg transition-transform hover:-translate-y-1 shadow-xl shadow-accent-green/30">
               Book Free Consultation <ArrowRight className="w-5 h-5" />
             </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
