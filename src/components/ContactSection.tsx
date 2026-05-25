import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, PhoneCall, Mail, Zap, CheckCircle2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ContactSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^(\+?880|0)[1-9][0-9]{8}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid Bangladesh phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Please provide project details';
    else if (formData.message.trim().length < 10) newErrors.message = 'Please provide a bit more detail';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Optional: automatically navigate to thank-you page after success
      setTimeout(() => navigate('/thank-you'), 2500);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Text / Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 text-accent-green text-sm font-bold tracking-widest uppercase mb-6">
              <Zap size={16} className="fill-accent-green" />
              Limited Availability
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6 leading-tight">
              Let's Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-cyan-accent">Growth Engine</span>
            </h2>
            <p className="text-lg text-text-dark/70 mb-10 pb-6 border-b border-slate-200">
              Stop guessing and start growing. Request a free consultation today and we'll show you exactly how to scale your business online in Bangladesh.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-bg-light border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-blue/10 text-primary-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-dark/60 uppercase tracking-widest mb-1">Direct Line</h4>
                  <p className="text-text-dark font-bold text-xl">+88 017 4151 6454</p>
                  <p className="text-sm text-accent-green font-medium mt-1">Available on WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-bg-light border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan-accent/10 text-cyan-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-dark/60 uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-text-dark font-bold text-xl">hello@solutionpointpro.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-bg-light p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden"
          >
            <AnimatePresence>
              {isSubmitting && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-bg-light/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 md:p-10"
                >
                  <div className="w-16 h-16 border-4 border-slate-200 border-t-primary-blue rounded-full animate-spin mb-4"></div>
                  <h3 className="text-2xl font-bold text-text-dark mb-2">Sending Request...</h3>
                  <p className="text-text-dark/70 font-medium">Please wait while we process your information.</p>
                </motion.div>
              )}

              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-white z-30 flex flex-col items-center justify-center text-center p-8 md:p-10 border border-accent-green/20"
                >
                  <div className="w-20 h-20 bg-accent-green/10 text-accent-green rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-extrabold text-text-dark mb-4">Request Sent!</h3>
                  <p className="text-text-dark/70 text-lg mb-8 max-w-sm">
                    Thank you for reaching out. One of our digital strategists will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-text-dark/60 font-bold hover:text-primary-blue transition-colors"
                  >
                    Submit another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <h3 className="text-2xl font-bold text-text-dark mb-6">Request Free Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-text-dark/80">Full Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3.5 rounded-xl border ${errors.name ? 'border-red-400 bg-red-50 focus:ring-red-400/50' : 'border-slate-200 focus:ring-primary-blue/50 bg-white focus:bg-bg-light'} focus:outline-none focus:ring-2 transition-colors`} placeholder="John Doe" />
                  {errors.name && <AlertCircle className="absolute right-3 top-3.5 text-red-500 w-5 h-5 pointer-events-none" />}
                </div>
                {errors.name && <p className="text-red-500 text-xs font-semibold mt-1">{errors.name}</p>}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-text-dark/80">Phone <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-3.5 rounded-xl border ${errors.phone ? 'border-red-400 bg-red-50 focus:ring-red-400/50' : 'border-slate-200 focus:ring-primary-blue/50 bg-white focus:bg-bg-light'} focus:outline-none focus:ring-2 transition-colors`} placeholder="+880..." />
                    {errors.phone && <AlertCircle className="absolute right-3 top-3.5 text-red-500 w-5 h-5 pointer-events-none" />}
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs font-semibold mt-1">{errors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-text-dark/80">Email (Optional)</label>
                  <div className="relative">
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3.5 rounded-xl border ${errors.email ? 'border-red-400 bg-red-50 focus:ring-red-400/50' : 'border-slate-200 focus:ring-primary-blue/50 bg-white focus:bg-bg-light'} focus:outline-none focus:ring-2 transition-colors`} placeholder="john@example.com" />
                    {errors.email && <AlertCircle className="absolute right-3 top-3.5 text-red-500 w-5 h-5 pointer-events-none" />}
                  </div>
                  {errors.email && <p className="text-red-500 text-xs font-semibold mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-semibold text-text-dark/80">Interested In <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className={`w-full px-4 py-3.5 rounded-xl border appearance-none ${errors.service ? 'border-red-400 bg-red-50 focus:ring-red-400/50' : 'border-slate-200 focus:ring-primary-blue/50 bg-white focus:bg-bg-light'} focus:outline-none focus:ring-2 transition-colors`}>
                    <option value="" disabled>Select a service</option>
                    <option value="Website Design">Website Design</option>
                    <option value="SEO">SEO Optimization</option>
                    <option value="Facebook Ads">Facebook / Meta Ads</option>
                    <option value="Brand Identity">Brand Identity</option>
                    <option value="Full Digital Marketing">Full Digital Marketing</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-dark/50">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                {errors.service && <p className="text-red-500 text-xs font-semibold mt-1">{errors.service}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-text-dark/80">Project Details <span className="text-red-500">*</span></label>
                <div className="relative">
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`w-full px-4 py-3.5 rounded-xl border ${errors.message ? 'border-red-400 bg-red-50 focus:ring-red-400/50' : 'border-slate-200 focus:ring-primary-blue/50 bg-white focus:bg-bg-light'} focus:outline-none focus:ring-2 transition-colors resize-none`} placeholder="Tell us about your business goals..."></textarea>
                  {errors.message && <AlertCircle className="absolute right-3 top-3.5 text-red-500 w-5 h-5 pointer-events-none" />}
                </div>
                {errors.message && <p className="text-red-500 text-xs font-semibold mt-1">{errors.message}</p>}
              </div>

              <button disabled={isSubmitting} type="submit" className="w-full bg-primary-blue hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-lg shadow-primary-blue/30 hover:-translate-y-0.5 flex flex-wrap items-center justify-center gap-2 mt-6">
                <Send size={20} />
                Send Request Now
              </button>
              <p className="text-center text-xs font-medium text-text-dark/50 mt-4 flex items-center justify-center gap-1.5">
                <svg className="w-4 h-4 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Your information is 100% secure.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
