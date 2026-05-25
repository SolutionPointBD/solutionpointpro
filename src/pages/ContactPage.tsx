import React, { useState } from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import WhatsAppCTA from '../components/WhatsAppCTA';
import ContactSection from '../components/ContactSection';
import FAQ from '../components/FAQ';
import Logo from '../components/Logo';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary-blue selection:text-white bg-bg-light overflow-hidden">
      <SEO 
        title="Contact Us | Solution Point Pro Bangladesh" 
        description="Get in touch with Solution Point Pro for a free digital growth consultation. We help businesses in Dhaka and across Bangladesh scale online."
        keywords="contact solution point pro, digital agency dhaka contact, web design agency phone number, hire seo expert bangladesh"
        canonical="https://solutionpointpro.com/contact"
      />

      <main className="pt-24 lg:pt-32 pb-20">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 text-primary-blue text-sm font-bold tracking-widest uppercase mb-6">
              Let's Connect
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-dark mb-6 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-green">Dominate</span> Your Market?
            </h1>
            <p className="text-lg text-text-dark/70">
              Whether you need to build a new website from scratch or want to scale your existing business with AI-driven marketing, we are here to help.
            </p>
          </motion.div>
        </div>

        {/* Quick Contact Info Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 lg:p-12 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary-blue/10 text-primary-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-2">Call & WhatsApp</h3>
              <p className="text-text-dark/70 mb-4">Chat with our experts directly for immediate assistance.</p>
              <a href="tel:+8801741516454" className="text-lg font-bold text-text-dark hover:text-primary-blue block">+880 17 4151 6454</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 lg:p-12 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-cyan-accent/10 text-cyan-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-accent group-hover:text-dark-navy transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-2">Email Us</h3>
              <p className="text-text-dark/70 mb-4">Send us your project details and we will reply within 24 hours.</p>
              <a href="mailto:hello@solutionpointpro.com" className="text-lg font-bold text-text-dark hover:text-primary-blue block">hello@solutionpointpro.com</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 lg:p-12 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-accent-green/10 text-accent-green rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-green group-hover:text-dark-navy transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-2">Visit Our Office</h3>
              <p className="text-text-dark/70 mb-4">We are based in the heart of Bangladesh.</p>
              <address className="text-lg font-bold text-text-dark not-italic block">Dhaka, Bangladesh</address>
            </motion.div>
          </div>
        </div>

        {/* Global Contact Form Section */}
        <div className="mb-20">
          <ContactSection />
        </div>

        {/* Map & Office Hours */}
        <section className="py-20 md:py-32 bg-dark-navy text-white relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover bg-center"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Business Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Headquarters</h2>
                  <p className="text-lg text-white/70">
                    We serve clients all over Bangladesh and globally using modern, remote, agile processes. However, our main operations run from Dhaka.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
                  <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm">
                    <Clock className="w-8 h-8 text-cyan-accent mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Business Hours</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex justify-between"><span>Sunday - Thursday:</span> <span>10:00 AM - 7:00 PM</span></li>
                      <li className="flex justify-between"><span>Friday - Saturday:</span> <span>Closed</span></li>
                      <li className="flex justify-between text-accent-green font-medium mt-2 pt-2 border-t border-white/10 w-full text-center"><span>24/7 Support for Enterprise Clients</span></li>
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-white mb-4">Connect With Us</h4>
                    <p className="text-white/70 mb-6">Follow us for digital growth tips and daily insights.</p>
                    <div className="flex gap-4">
                      <a href="https://facebook.com/solutionpointpro" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-primary-blue flex items-center justify-center text-white hover:bg-cyan-accent transition-colors shadow-lg shadow-primary-blue/30 hover:shadow-cyan-accent/30"><Facebook className="w-5 h-5" /></a>
                      <a href="https://facebook.com/solutionpointpro" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-primary-blue flex items-center justify-center text-white hover:bg-cyan-accent transition-colors shadow-lg shadow-primary-blue/30 hover:shadow-cyan-accent/30"><Instagram className="w-5 h-5" /></a>
                      <a href="https://facebook.com/solutionpointpro" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-primary-blue flex items-center justify-center text-white hover:bg-cyan-accent transition-colors shadow-lg shadow-primary-blue/30 hover:shadow-cyan-accent/30"><Linkedin className="w-5 h-5" /></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal Map (Dummy/Visual) */}
              <div className="relative h-[400px] lg:h-[500px] w-full bg-dark-navy/90 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.927440906189!2d90.36745677592907!3d23.821179086054222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12e0a3b1263%3A0xa691fc3705506742!2sSolution%20Point%20Pro!5e0!3m2!1sen!2sbd!4v1779737968416!5m2!1sen!2sbd" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={false} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="w-full h-full"
                 ></iframe>
                 <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none"></div>
                 
                 {/* Map Overlay Card */}
                 <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-dark-navy/90 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl">
                    <div className="mb-4 w-fit">
                      <Logo theme="dark" className="scale-90 origin-left" />
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-4 h-4 bg-accent-green rounded-full animate-pulse shadow-[0_0_15px_rgba(37,211,102,0.8)]"></div>
                       <h4 className="text-white font-bold text-lg">Solution Point Pro HQ</h4>
                    </div>
                    <p className="text-white/70 text-sm mt-2">Available for high-impact strategy meetings by appointment.</p>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global FAQ Section */}
        <FAQ
          title="General Inquiries"
          subtitle="Quick answers before you reach out."
          faqs={[
            {
              q: "Where is your office located?",
              a: "We are based in Pallabi, Dhaka, Bangladesh. We serve clients nationwide and internationally via digital communication channels."
            },
            {
              q: "How fast do you respond to inquiries?",
              a: "We pride ourselves on rapid communication. You can expect a response within 2-4 business hours for direct messages and emails during standard working days."
            },
            {
              q: "What is the best way to contact you for urgent tasks?",
              a: "For urgent inquiries, using our WhatsApp number directly is the fastest method to get in touch with our team."
            },
            {
              q: "Do you offer custom service packages?",
              a: "Yes! If our standard pricing plans don't perfectly fit your needs, send us a detailed message. We'll craft a customized digital strategy tailored to your exact requirements and budget."
            },
            {
              q: "Can we schedule an in-person meeting?",
              a: "We currently operate as a highly optimized remote-first agency to keep costs competitive, managing all client relationships seamlessly via Zoom, Google Meet, and WhatsApp."
            }
          ]}
        />

        {/* WhatsApp Final CTA */}
        <WhatsAppCTA />
      </main>

    </div>
  );
}
