import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Layout, Search, Palette, Share2, Megaphone, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: "website-design",
      title: 'Website Design',
      icon: <Layout size={28} />,
      desc: 'Custom, fast-loading, and mobile-responsive websites designed for conversion and brand authority.',
      features: ['Modern React/WordPress', 'Mobile Responsive', 'High Speed Setup']
    },
    {
      id: "seo",
      title: 'SEO Services',
      icon: <Search size={28} />,
      desc: 'Dominate Google search in Bangladesh and drive high-intent organic traffic predictably.',
      features: ['Local & National SEO', 'Technical Audits', 'Quality Link Building']
    },
    {
      id: "branding",
      title: 'Logo & Branding',
      icon: <Palette size={28} />,
      desc: 'Professional brand identity that immediately establishes trust and stands out from competitors.',
      features: ['Custom Logo Design', 'Brand Guidelines', 'Social Media Assets']
    },
    {
      id: "social-media",
      title: 'Social Media Management',
      icon: <Share2 size={28} />,
      desc: 'Engaging content and active community management across Facebook, Instagram, and LinkedIn.',
      features: ['Content Production', 'Daily Account Mgmt', 'Growth Strategy']
    },
    {
      id: "facebook-ads",
      title: 'Facebook Ads',
      icon: <Megaphone size={28} />,
      desc: 'ROI-focused ad campaigns to generate WhatsApp leads and sales with precise targeting.',
      features: ['Audience Targeting', 'A/B Testing', 'Retargeting Funnels']
    },
    {
      id: "business-consultation",
      title: 'Business Consultation',
      icon: <Lightbulb size={28} />,
      desc: 'Expert advice on digital transformation, AI adoption, and scaling your business locally.',
      features: ['Growth Strategy', 'AI Integration', 'Digital Automation']
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-bg-light relative overflow-hidden">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-accent/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h4 className="text-primary-blue font-bold tracking-widest text-xs mb-4 uppercase">Our Core Services</h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-dark mb-6 leading-tight">
            Everything Your Business Needs to Win Online
          </h2>
          <p className="text-lg md:text-xl text-text-dark/70">
            From website creation to full digital growth — we construct premium, ROI-driven solutions for ambitious brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-primary-blue/10 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Top accent beam that lights up on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-cyan-accent group-hover:via-primary-blue group-hover:to-cyan-accent transition-all duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-bg-light flex items-center justify-center text-primary-blue mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:rotate-3 relative z-10">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-primary-blue transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-text-dark/70 mb-8 leading-relaxed text-[15px]">
                {service.desc}
              </p>
              
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-text-dark/80 font-medium">
                    <CheckCircle className="w-5 h-5 text-accent-green mr-3 flex-shrink-0" />
                    <span className="mt-0.5">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to={`/services/${service.id}`} className="inline-flex items-center text-primary-blue font-bold text-sm tracking-wide mt-auto group-hover:text-cyan-accent transition-colors duration-300">
                DISCOVER MORE 
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
           <Link to="/services" className="inline-flex items-center justify-center border-2 border-slate-200 text-text-dark/80 hover:border-primary-blue hover:bg-primary-blue hover:text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              View All Our Packages
           </Link>
        </motion.div>

      </div>
    </section>
  );
}
