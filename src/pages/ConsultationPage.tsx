import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ContactSection from '../components/ContactSection';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import WhatsAppCTA from '../components/WhatsAppCTA';
import TrustBar from '../components/TrustBar';
import GuaranteeSection from '../components/GuaranteeSection';
import { Target, TrendingUp, Search, Clock, ArrowRight, ShieldCheck, CheckCircle2, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary-blue selection:text-white bg-bg-light overflow-hidden">
      <SEO 
        title="Free Digital Growth Consultation | Solution Point Pro" 
        description="Book a free 1-on-1 strategy session with Solution Point Pro. Get a customized digital growth roadmap for your business in Bangladesh."
        keywords="free consultation digital marketing, business growth strategy dhaka, web design consultation bangladesh"
        canonical="https://solutionpointpro.com/free-consultation"
      />

      <main>
        
        {/* Landing Page Hero */}
        <section className="relative py-20 pt-32 md:py-32 lg:pt-40 bg-dark-navy overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-blue/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-green/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/20 text-accent-green text-sm font-bold tracking-widest uppercase mb-8 border border-accent-green/30 backdrop-blur-sm animate-pulse">
                <Clock size={16} /> Limited Availability: 5 Spots / Week
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
                Stop Guessing.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-accent-green">Start Growing.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 leading-relaxed max-w-3xl mx-auto">
                Get a custom step-by-step digital roadmap to scale your Bangladesh-based business. No fluff, no obligations—just actionable strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#booking-form" className="bg-primary-blue hover:opacity-90 text-white px-8 py-5 rounded-2xl font-bold transition-all shadow-[0_0_25px_rgba(0,86,179,0.5)] hover:-translate-y-1 w-full sm:w-auto text-lg flex items-center justify-center gap-2">
                  Claim Your Free Session <ArrowRight size={20} />
                </a>
                <a href="https://wa.me/8801741516454?text=Hi%2C+I'd+like+to+schedule+my+free+strategy+session!" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-5 rounded-2xl font-bold transition-all w-full sm:w-auto text-lg flex items-center justify-center gap-2 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-accent-green animate-ping absolute ml-[-12px]"></span>
                  <span className="w-2 h-2 rounded-full bg-accent-green mr-2"></span>
                  Book via WhatsApp
                </a>
              </div>
              
              <p className="text-sm text-white/50 mt-6 flex items-center justify-center gap-2">
                <ShieldCheck size={16} /> 100% Free. No pushy sales pitches.
              </p>
            </motion.div>
          </div>
        </section>

        <TrustBar />

        {/* Benefits Section */}
        <section className="py-20 md:py-32 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 text-primary-blue text-sm font-bold tracking-widest uppercase">
                  The Deliverables
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-text-dark leading-tight">
                  What You Get on the <span className="text-accent-green">Strategy Call</span>
                </h2>
                <p className="text-lg text-text-dark/70 leading-relaxed mb-4">
                  We don't use this call to read you a brochure. We use it to tear down your current digital presence and rebuild a scalable pipeline.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-blue/10 text-primary-blue flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-text-dark/80 text-lg">Detailed Website UX & Conversion Audit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-blue/10 text-primary-blue flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-text-dark/80 text-lg">Competitor Gap Analysis in the BD Market</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-blue/10 text-primary-blue flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-text-dark/80 text-lg">Actionable Paid Ads & SEO Roadmap</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-7"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-bg-light p-8 lg:p-12 border border-slate-100 shadow-sm rounded-3xl">
                    <Search className="w-10 h-10 text-primary-blue mb-4" />
                    <h3 className="text-xl font-bold text-text-dark mb-2">Identify Bottlenecks</h3>
                    <p className="text-text-dark/70">Find out exactly why your current traffic isn't converting into paying customers.</p>
                  </div>
                  <div className="bg-bg-light p-8 lg:p-12 border border-slate-100 shadow-sm rounded-3xl translate-y-0 sm:translate-y-8">
                    <Target className="w-10 h-10 text-cyan-accent mb-4" />
                    <h3 className="text-xl font-bold text-text-dark mb-2">Targeting Clarity</h3>
                    <p className="text-text-dark/70">Discover which platforms your ideal high-paying clients are actually using.</p>
                  </div>
                  <div className="bg-bg-light p-8 lg:p-12 border border-slate-100 shadow-sm rounded-3xl">
                    <TrendingUp className="w-10 h-10 text-accent-green mb-4" />
                    <h3 className="text-xl font-bold text-text-dark mb-2">Scale Profitably</h3>
                    <p className="text-text-dark/70">Learn the exact metrics and funnels you need to scale revenue without burning cash.</p>
                  </div>
                  <div className="bg-bg-light p-8 lg:p-12 border border-slate-100 shadow-sm rounded-3xl translate-y-0 sm:translate-y-8">
                    <Video className="w-10 h-10 text-primary-blue mb-4" />
                    <h3 className="text-xl font-bold text-text-dark mb-2">Live Tear-downs</h3>
                    <p className="text-text-dark/70">We share our screen and physically show you what to fix right immediately.</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Client Transformation / Before & After */}
        <section className="py-20 md:py-32 ">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[100px] pointer-events-none" />
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">The Real Transformation</h2>
              <p className="text-lg text-text-dark/70">See what happens when you stop doing random marketing and start executing a proven strategy.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              
              <div className="bg-bg-light p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm relative">
                <div className="absolute top-0 right-0 bg-slate-200 text-text-dark/70 font-bold uppercase tracking-widest text-xs px-4 py-1 rounded-bl-xl rounded-tr-[2rem]">Before Us</div>
                <h3 className="text-2xl font-bold text-text-dark mb-6 mt-4">The "Hustle" Phase</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">✕</span>
                    <span className="text-text-dark/80">Wasting money on boosting Facebook posts without tracking ROI.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">✕</span>
                    <span className="text-text-dark/80">A website that acts like a digital brochure, generating zero leads.</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">✕</span>
                    <span className="text-text-dark/80">Competing only on price because your brand looks like everyone else.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">✕</span>
                    <span className="text-text-dark/80">Inconsistent sales pipeline, relying purely on word of mouth.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary-blue to-cyan-accent p-8 md:p-10 rounded-[2rem] shadow-xl relative">
                <div className="absolute top-0 right-0 bg-white text-primary-blue font-bold uppercase tracking-widest text-xs px-4 py-1 rounded-bl-xl rounded-tr-[2rem]">After Strategy</div>
                <h3 className="text-2xl font-bold text-white mb-6 mt-4">The "Scale" Phase</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-green font-bold flex-shrink-0 mt-1"><CheckCircle2 size={20}/></span>
                    <span className="text-white/90">Predictable lead generation system using highly targeted Meta & Google Ads.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-green font-bold flex-shrink-0 mt-1"><CheckCircle2 size={20}/></span>
                    <span className="text-white/90">A high-converting website that acts as a 24/7 sales representative.</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <span className="text-accent-green font-bold flex-shrink-0 mt-1"><CheckCircle2 size={20}/></span>
                    <span className="text-white/90">Premium brand positioning allowing you to charge higher prices easily.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-green font-bold flex-shrink-0 mt-1"><CheckCircle2 size={20}/></span>
                    <span className="text-white/90">Clear visibility into which marketing channels produce the most revenue.</span>
                  </li>
                </ul>
              </div>

            </div>
           </div>
        </section>

        {/* Process Flow */}
        <section className="py-20 md:py-32 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">How It Works</h2>
              <p className="text-lg text-text-dark/70">Three simple steps to secure your roadmap to success.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="bg-white p-8 lg:p-12  text-center relative border border-slate-100 shadow-md">
                <div className="w-16 h-16 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-6">1</div>
                <h3 className="text-2xl font-bold text-text-dark mb-3">Apply Below</h3>
                <p className="text-text-dark/70">Fill out our quick form or message us on WhatsApp with basic details about your business.</p>
              </div>

              <div className="bg-white p-8 lg:p-12  text-center relative border border-slate-100 shadow-md">
                <div className="w-16 h-16 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-6">2</div>
                <h3 className="text-2xl font-bold text-text-dark mb-3">We Research</h3>
                <p className="text-text-dark/70">Before the call, our experts will quietly audit your current website and digital footprint.</p>
              </div>

              <div className="bg-white p-8 lg:p-12  text-center relative border border-slate-100 shadow-md">
                <div className="w-16 h-16 bg-accent-green/10 text-accent-green rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-6">3</div>
                <h3 className="text-2xl font-bold text-text-dark mb-3">The Strategy Call</h3>
                <p className="text-text-dark/70">We hop on a 30-minute Zoom call (or phone call) to hand over your personalized growth roadmap.</p>
              </div>
            </div>
          </div>
        </section>

        <GuaranteeSection />

        {/* The Form Section */}
        <div id="booking-form" className="scroll-mt-24">
          <ContactSection />
        </div>

        {/* Social Proof / Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQ 
          title="Consultation FAQs"
          subtitle="Common questions about our strategy sessions."
          faqs={[
            {
              q: "Is the strategy session really free?",
              a: "Yes! Our initial 30-minute discovery and strategy session is 100% free with no obligation. It's a chance to see if we're a good fit for your business."
            },
            {
              q: "How should I prepare for the consultation?",
              a: "To get the most out of our call, please be ready to share your current business goals, biggest challenges, and details about any past digital marketing efforts or current website."
            },
            {
              q: "Will you execute the roadmap for me?",
              a: "Absolutely. After the consultation, we provide a customized proposal. If you choose to work with us, our in-house experts in Dhaka will implement the entire strategy."
            },
            {
              q: "Who maps out the strategy?",
              a: "You'll be speaking directly with our lead growth strategists who have deep experience scaling businesses across Bangladesh using targeted SEO, Meta Ads, and web design."
            },
            {
              q: "How long until I see results after implementing a strategy?",
              a: "Timelines depend on the services required. Web design takes weeks, Meta Ads can show ROI in days, while SEO is a long-term play requiring 3-6 months for significant impact."
            }
          ]}
        />

      </main>

      {/* Floating CTA overrides */}
      <WhatsAppCTA />
      
    </div>
  );
}
