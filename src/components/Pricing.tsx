import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      badge: 'Launch Offer',
      price: '15,000',
      description: 'Perfect for small businesses starting their digital journey.',
      features: [
        '5-Page WordPress Website',
        'Mobile Responsive Design',
        'Basic On-Page SEO',
        'Contact Form Integration',
        'Social Media Links',
        '1 Month Free Support'
      ],
      notIncluded: [
        'E-commerce Functionality',
        'Custom Logo Design',
        'Advanced SEO Setup'
      ],
      ctaText: 'Start with Starter',
      featured: false
    },
    {
      name: 'Standard',
      badge: 'Most Popular',
      price: '25,000',
      description: 'The complete package to establish authority and generate leads.',
      features: [
        'Premium 10-Page Website',
        'Advanced SEO Optimization',
        'Custom Logo Design',
        'Speed Optimization (90+)',
        'WhatsApp Chat Integration',
        'Google My Business Setup',
        'Business Email Setup',
        '3 Months Free Support'
      ],
      notIncluded: [],
      ctaText: 'Get the Standard',
      featured: true
    },
    {
      name: 'Premium',
      badge: 'Growth Focused',
      price: '45,000',
      description: 'An aggressive digital strategy for established brands scaling up.',
      features: [
        'Full E-Commerce / Custom App',
        'Advanced Technical SEO Audit',
        'Premium Brand Identity Kit',
        '1 Month Facebook Ads Setup',
        'Payment Gateway Integration',
        'Conversion Rate Optimization',
        'Priority 24/7 Support',
        '6 Months Free Maintenance'
      ],
      notIncluded: [],
      ctaText: 'Scale with Premium',
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/5 rounded-l-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-accent/5 rounded-tr-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h4 className="text-primary-blue font-bold tracking-widest text-xs mb-4 uppercase">Transparent Pricing</h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-dark mb-6 leading-[1.15]">
            Simple Pricing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-cyan-accent">No Surprises.</span>
          </h2>
          <p className="text-lg text-text-dark/70 font-medium">
            Invest in your business's future. Choose a package that fits your goals and let us build your digital empire.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative bg-white rounded-3xl p-8 md:p-10 lg:p-10 border transition-all duration-500 flex flex-col h-full ${
                tier.featured 
                  ? 'border-primary-blue/50 shadow-2xl shadow-primary-blue/20 lg:-mt-8 lg:mb-8 z-10 scale-100 lg:scale-105' 
                  : 'border-slate-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-blue to-cyan-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-max shadow-lg flex items-center gap-1.5">
                  <Star size={14} className="fill-white" />
                  {tier.badge}
                </div>
              )}

              {!tier.featured && tier.badge && (
                <div className="absolute top-6 right-6 bg-accent-green/10 text-accent-green border border-accent-green/20 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                  {tier.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-text-dark mb-2">{tier.name}</h3>
                <p className="text-sm text-text-dark/60 mb-6 h-10">{tier.description}</p>
                <div className="flex items-baseline gap-1 text-text-dark">
                  <span className="text-3xl font-extrabold">৳</span>
                  <span className="text-5xl font-black tracking-tight">{tier.price}</span>
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-sm font-bold text-text-dark mb-4 uppercase tracking-wider">Included Features</p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-accent-green stroke-[3]" />
                      </div>
                      <span className="text-[15px] font-medium text-text-dark/70">{feature}</span>
                    </li>
                  ))}
                  {tier.notIncluded.map((feature, i) => (
                    <li key={`not-${i}`} className="flex items-start gap-3 opacity-50">
                      <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-0.5 bg-slate-400 rounded-full" />
                      </div>
                      <span className="text-[15px] font-medium text-text-dark/60 line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/8801741516454?text=Hi%2C+I'm+interested+in+the+${tier.name}+Package.`}
                target="_blank"
                rel="noreferrer"
                className={`w-full mt-auto flex items-center justify-center gap-2 text-center font-bold py-4 px-6 rounded-xl transition-all duration-300 ${
                  tier.featured
                    ? 'bg-primary-blue hover:opacity-90 text-white shadow-lg shadow-primary-blue/30 hover:-translate-y-1'
                    : 'bg-bg-light border border-slate-200 hover:bg-slate-100 text-text-dark hover:-translate-y-0.5'
                }`}
              >
                {tier.ctaText} <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="w-12 h-12 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
            <Info size={24} />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-text-dark">Need a custom solution?</h4>
            <p className="text-sm text-text-dark/60">We offer custom enterprise packages. Let's discuss your exact requirements.</p>
          </div>
          <a
            href="https://wa.me/8801741516454?text=Hi%2C+I+need+a+custom+digital+marketing+solution."
            target="_blank"
            rel="noreferrer"
            className="sm:ml-auto w-full sm:w-auto bg-white border border-slate-300 hover:border-primary-blue hover:text-primary-blue text-text-dark/80 font-bold py-2.5 px-6 rounded-lg text-sm transition-colors mt-2 sm:mt-0"
          >
            Contact Sales
          </a>
        </motion.div>
      </div>
    </section>
  );
}
