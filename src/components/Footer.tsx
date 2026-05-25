import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-white/70 pt-16 md:pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-12 mb-16 md:mb-20">
          
          {/* Col 1: Brand (Takes up 4 cols on large screens) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 pr-4"
          >
            <div className="mb-6 inline-block">
              <Logo variant="footer" theme="dark" />
            </div>
            <p className="text-[15px] mb-8 leading-relaxed text-white/60">
              Bangladesh's most trusted AI-powered digital growth agency. We help ambitious businesses scale online through premium design, targeted marketing, and data-driven strategies.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="https://facebook.com/solutionpointpro" aria-label="Facebook" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary-blue hover:text-white hover:scale-110 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/solutionpointpro" aria-label="Instagram" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary-blue hover:text-white hover:scale-110 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/company/solutionpointpro" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary-blue hover:text-white hover:scale-110 transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com/@solutionpointpro" aria-label="YouTube" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary-blue hover:text-white hover:scale-110 transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </motion.div>

          {/* Col 2: Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">Services</h4>
            <ul className="space-y-4 text-[15px]">
              <li><Link to="/services/website-design" className="hover:text-cyan-accent transition-colors flex items-center gap-2"><span className="text-primary-blue">›</span> Website Design</Link></li>
              <li><Link to="/services/seo" className="hover:text-cyan-accent transition-colors flex items-center gap-2"><span className="text-primary-blue">›</span> SEO Services</Link></li>
              <li><Link to="/services/branding" className="hover:text-cyan-accent transition-colors flex items-center gap-2"><span className="text-primary-blue">›</span> Logo & Branding</Link></li>
              <li><Link to="/services/social-media" className="hover:text-cyan-accent transition-colors flex items-center gap-2"><span className="text-primary-blue">›</span> Social Media</Link></li>
              <li><Link to="/services/facebook-ads" className="hover:text-cyan-accent transition-colors flex items-center gap-2"><span className="text-primary-blue">›</span> Facebook Ads</Link></li>
              <li><Link to="/services/business-consultation" className="hover:text-cyan-accent transition-colors flex items-center gap-2"><span className="text-primary-blue">›</span> IT Consulting</Link></li>
              <li><Link to="/services/graphic-design" className="hover:text-cyan-accent transition-colors flex items-center gap-2"><span className="text-primary-blue">›</span> Graphic Design</Link></li>
            </ul>
          </motion.div>

          {/* Col 3: Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">Company</h4>
            <ul className="space-y-4 text-[15px]">
              <li><Link to="/" className="hover:text-cyan-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyan-accent transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-cyan-accent transition-colors">Our Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-cyan-accent transition-colors">Pricing Options</Link></li>
              <li><Link to="/blog" className="hover:text-cyan-accent transition-colors">Blog & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/free-consultation" className="hover:text-cyan-accent transition-colors text-accent-green font-bold">Free Consultation</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-cyan-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-cyan-accent transition-colors">Terms & Conditions</Link></li>
            </ul>
          </motion.div>

          {/* Col 4: Contact & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">Get In Touch</h4>
            <ul className="space-y-5 text-[15px] mb-8">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-cyan-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">333, 12/Dha, Pallabi,<br/>Dhaka-1216, Bangladesh</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-cyan-accent flex-shrink-0" />
                <a href="tel:+8801741516454" className="hover:text-white transition-colors group">
                  +88 017 4151 6454 <span className="text-xs text-white/40 ml-2 group-hover:text-white/80 transition-colors">(Available 24/7)</span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-cyan-accent flex-shrink-0" />
                <a href="mailto:info@solutionpointpro.com" className="hover:text-white transition-colors">info@solutionpointpro.com</a>
              </li>
            </ul>

            <a
              href="https://wa.me/8801741516454?text=Hi%2C+I'm+interested+in+your+services!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-accent-green hover:bg-accent-green/90 text-dark-navy px-6 py-3.5 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(0,184,148,0.2)] hover:shadow-[0_0_25px_rgba(0,184,148,0.4)] hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              <span className="font-bangla tracking-wide">WhatsApp করুন</span>
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm">© {new Date().getFullYear()} Solution Point Pro. All rights reserved.</p>
          
          <div className="flex items-center gap-3">
             <div className="text-xs text-white/40 mr-2 uppercase tracking-widest font-semibold">Accepted Payments</div>
             <div className="px-2.5 py-1 bg-[#e2136e] text-white rounded text-xs font-bold shadow-sm">bKash</div>
             <div className="px-2.5 py-1 bg-[#f37021] text-white rounded text-xs font-bold shadow-sm">Nagad</div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
