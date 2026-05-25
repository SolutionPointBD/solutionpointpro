import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { Check, CheckCircle2, Minus, ChevronDown, ChevronUp, ArrowRight, Zap, Target, Star, Layout } from 'lucide-react';

export default function ServiceDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const service = id ? servicesData[id] : null;

  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter(i => i !== index));
    } else {
      setOpenFaqs([...openFaqs, index]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen font-sans selection:bg-primary-blue selection:text-white bg-bg-light overflow-hidden">
      <SEO 
        title={`${service.title} | Solution Point Pro`} 
        description={service.subtitle}
        keywords={`digital marketing, ${service.title.toLowerCase()}, solution point pro, bangladesh`}
        canonical={`https://solutionpointpro.com/services/${service.id}`}
      />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 pt-32 md:py-32 lg:pt-40 bg-dark-navy overflow-hidden">
          <div className="absolute inset-0">
             <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/20 text-cyan-accent text-sm font-bold tracking-widest uppercase mb-6 border border-primary-blue/30 backdrop-blur-sm">
                Premium Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 leading-relaxed">
                {service.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/pricing" className="bg-primary-blue hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,86,179,0.4)] hover:-translate-y-1 w-full sm:w-auto text-lg flex items-center justify-center gap-2">
                  View Pricing & Packages <ArrowRight size={20} />
                </Link>
                <a href={`https://wa.me/8801741516454?text=${encodeURIComponent('Hi, I want to know more about your ' + service.title + ' services.')}`} target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all w-full sm:w-auto text-lg text-center backdrop-blur-sm">
                  Consult an Expert
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Launch Offer Banner */}
        <section className="bg-gradient-to-r from-primary-blue to-cyan-accent py-4 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="bg-white text-primary-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              Launch Offer
            </span>
            <p className="text-white font-medium text-sm md:text-base">
              Get <span className="font-bold">20% OFF</span> on all {service.title} packages this month. Limited to new clients!
            </p>
          </div>
        </section>

        {/* Overview & Benefits */}
        <section className="py-20 md:py-32 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-5">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">Why Choose Our <span className="text-primary-blue">{service.title}</span>?</h2>
                  <p className="text-lg text-text-dark/70 leading-relaxed mb-8">
                    {service.overview}
                  </p>
                  <Link to="/pricing" className="inline-flex items-center gap-2 text-primary-blue font-bold group">
                    See our packages <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`bg-bg-light p-6 rounded-2xl border border-slate-100 ${idx === 2 ? 'sm:col-span-2' : ''}`}
                    >
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 text-primary-blue flex items-center justify-center mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold text-text-dark mb-2">{benefit.title}</h3>
                      <p className="text-text-dark/70">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Core Capabilities</h2>
              <p className="text-lg text-text-dark/70">Everything you need to succeed, built into our service offerings.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {service.features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 lg:p-12 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 bg-primary-blue/5 rounded-2xl text-primary-blue flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-3">{feature.title}</h3>
                  <p className="text-text-dark/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section id="pricing" className="py-20 md:py-32 ">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-accent/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 text-accent-green text-sm font-bold uppercase tracking-wider mb-4">
                Transparent Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Choose Your Growth Stage</h2>
              <p className="text-lg text-text-dark/70">Premium quality at competitive Bangladesh market rates.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {service.pricing.map((tier, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative bg-white rounded-[2rem] border ${tier.isFeatured ? 'border-primary-blue shadow-2xl scale-100 lg:scale-105 z-10' : 'border-slate-200 shadow-lg'} p-8 flex flex-col`}
                >
                  {tier.badge && (
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${tier.isFeatured ? 'bg-primary-blue text-white shadow-lg' : 'bg-dark-navy/90 text-white'}`}>
                      {tier.badge}
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-text-dark mb-2">{tier.name}</h3>
                    <p className="text-text-dark/60 text-sm h-10">{tier.description}</p>
                  </div>
                  
                  <div className="mb-8 pb-8 border-b border-slate-100">
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-4xl font-extrabold text-text-dark">৳{tier.price}</span>
                    </div>
                    {tier.period && <span className="text-text-dark/60 font-medium">{tier.period}</span>}
                  </div>

                  <div className="flex-1">
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3 text-text-dark/80">
                          <CheckCircle2 className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {tier.bonuses && (
                      <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 p-4 rounded-xl mb-8 border border-amber-200/50">
                        <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-1"><Target size={14} /> Bonuses Included</p>
                        <ul className="space-y-2">
                           {tier.bonuses.map((bonus, bidx) => (
                             <li key={bidx} className="flex items-start gap-2 text-amber-900 text-sm font-medium">
                               <span>🎁</span> {bonus}
                             </li>
                           ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <a 
                    href={`https://wa.me/8801741516454?text=${encodeURIComponent('Hi, I am interested in the ' + tier.name + ' package for ' + service.title + '.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-center transition-all duration-300 ${
                      tier.isFeatured 
                      ? 'bg-primary-blue hover:opacity-90 text-white shadow-lg shadow-primary-blue/30 hover:-translate-y-1' 
                      : 'bg-bg-light border border-slate-200 hover:bg-slate-100 text-text-dark hover:-translate-y-0.5'
                      }`}
                    >
                      Select {tier.name} <ArrowRight className="w-5 h-5 flex-shrink-0" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison Table */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-center mb-10 text-text-dark">Compare Package Features</h3>
            
            <div className="relative rounded-2xl border border-slate-200 shadow-sm bg-white overflow-hidden">
              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-bg-light border-b border-slate-200 text-sm uppercase tracking-wider">
                    <th className="p-4 font-bold text-text-dark/60 w-1/3">Feature</th>
                    <th className="p-4 font-bold text-text-dark text-center">{service.pricing[0]?.name || 'Starter'}</th>
                    <th className="p-4 font-bold text-primary-blue text-center bg-primary-blue/5 border-l border-r border-primary-blue/10">{service.pricing[1]?.name || 'Standard'}</th>
                    <th className="p-4 font-bold text-text-dark text-center">{service.pricing[2]?.name || 'Premium'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {service.comparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-bg-light/50 transition-colors">
                      <td className="p-4 text-text-dark/80 font-medium">{row.feature}</td>
                      
                      <td className="p-4 text-center">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? <Check className="w-5 h-5 text-accent-green mx-auto" /> : <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                        ) : (
                          <span className="text-text-dark/70 text-sm">{row.starter}</span>
                        )}
                      </td>
                      
                      <td className="p-4 text-center bg-primary-blue/5 border-l border-r border-primary-blue/10">
                        {typeof row.standard === 'boolean' ? (
                          row.standard ? <Check className="w-5 h-5 text-primary-blue mx-auto" /> : <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                        ) : (
                          <span className="text-text-dark font-medium text-sm">{row.standard}</span>
                        )}
                      </td>
                      
                      <td className="p-4 text-center">
                        {typeof row.premium === 'boolean' ? (
                          row.premium ? <Check className="w-5 h-5 text-accent-green mx-auto" /> : <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                        ) : (
                          <span className="text-text-dark/70 text-sm">{row.premium}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32 bg-dark-navy text-white relative overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-blue/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 md:mb-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                <span className="text-sm font-bold tracking-widest uppercase text-white/80">Our Proven Process</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                How We Deliver <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-cyan-accent">
                  World-Class Results
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
                A transparent, step-by-step workflow designed to take your business from vision to market-dominating realization.
              </p>
            </div>

            {/* Content Layout - Single Service Variation */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm shadow-xl">
                <div className="mb-8 border-b border-white/10 pb-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                      {service.title} Workflow
                    </span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  {service.process.map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="relative pl-6 sm:pl-8 group"
                    >
                      {/* Step Number Badge */}
                      <div className="absolute left-0 top-0 w-8 h-8 -ml-4 rounded-full bg-dark-navy border-2 border-white/10 flex items-center justify-center font-bold text-xs sm:text-sm text-white/50 group-hover:border-accent-green group-hover:text-accent-green group-hover:shadow-[0_0_15px_rgba(0,184,148,0.4)] transition-all duration-300 z-10">
                        {step.step.replace('0', '')}
                      </div>

                      {/* Connecting Line */}
                      {index !== service.process.length - 1 && (
                        <div className="absolute left-0 top-8 bottom-[-24px] w-px bg-white/10 sm:hidden"></div>
                      )}
                      {(index !== service.process.length - 1 && index !== service.process.length - 2) && (
                        <div className="absolute left-0 top-8 bottom-[-32px] w-px bg-white/10 hidden sm:block"></div>
                      )}

                      <div className="pt-1">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-accent transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-sm sm:text-base text-white/60 leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 md:py-32 ">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-cyan-accent/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
              ))}
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-text-dark leading-relaxed mb-10 italic"
            >
              "{service.testimonial?.quote || `Working with Solution Point Pro for our ${service.title.toLowerCase()} was a game changer. The return on investment was immediate, and their level of professionalism is unmatched in Bangladesh.`}"
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4"
            >
              <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img src={service.testimonial?.image || "https://solutionpointpro.com/wp-content/uploads/2024/11/Faisal-Mahmud-150x150.jpg"} alt="Client Testimonial" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <h4 className="font-extrabold text-text-dark text-lg">{service.testimonial?.name || "Rahim Uddin"}</h4>
                <p className="text-sm font-medium text-text-dark/60 uppercase tracking-widest">{service.testimonial?.title || "CEO, TechBD Solutions"}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-dark-navy text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-white/70 mb-8">Everything you need to know about our {service.title} services.</p>
              <button
                onClick={() => setOpenFaqs(openFaqs.length === service.faqs.length ? [] : service.faqs.map((_, i) => i))}
                className="text-sm font-semibold text-cyan-accent hover:text-white transition-colors border border-cyan-accent/20 hover:border-cyan-accent/50 px-4 py-2 rounded-full"
              >
                {openFaqs.length === service.faqs.length ? 'Close All' : 'Expand All'}
              </button>
            </motion.div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx} 
                  className="border border-white/10 bg-white/5 rounded-xl overflow-hidden transition-colors hover:bg-white/10"
                >
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  >
                    <span className="font-semibold text-[17px] pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openFaqs.includes(idx) ? 'rotate-180 text-cyan-accent' : 'text-white/50'}`} />
                  </button>
                  
                  <AnimatePresence>
                    {openFaqs.includes(idx) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 pt-0 text-white/70 leading-relaxed border-t border-white/5 mt-2 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 md:py-32 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-text-dark">Clients Also Explore</h2>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {Object.values(servicesData)
                .filter(s => s.id !== service.id)
                .slice(0, 3)
                .map((s, idx) => (
                  <Link key={idx} to={`/services/${s.id}`} className="block bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                    <div className="w-14 h-14 bg-primary-blue/5 rounded-2xl text-primary-blue flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                      <Layout className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-primary-blue transition-colors">{s.title}</h3>
                    <p className="text-text-dark/60 text-sm leading-relaxed mb-6 line-clamp-2">{s.subtitle}</p>
                    <span className="inline-flex items-center gap-2 text-primary-blue font-bold text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 md:py-32 ">
           <div className="absolute inset-0 bg-primary-blue/5"></div>
           <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">Ready to scale your business?</h2>
              <p className="text-lg text-text-dark/70 mb-10">Let's discuss how our {service.title} services can directly impact your bottom line.</p>
              <Link 
                to="/free-consultation" 
                className="inline-flex items-center gap-2 bg-accent-green hover:opacity-90 text-dark-navy px-8 py-4 rounded-xl font-bold text-lg shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-all hover:-translate-y-1"
              >
                Get Free Consultation Now
              </Link>
           </div>
        </section>
      </main>

      <WhatsAppCTA />
    </div>
  );
}
