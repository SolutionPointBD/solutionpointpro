import React from 'react';
import { motion } from 'motion/react';
import { Bot, MapPin, BadgeDollarSign, LifeBuoy } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'AI-Powered Results',
      desc: 'We use cutting-edge AI tools to deliver faster, smarter, and more efficient outcomes for your campaigns.'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Bangladesh Experts',
      desc: 'Deep knowledge of the local BD market, language, and consumer buying behavior.'
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6" />,
      title: 'Transparent Pricing',
      desc: 'No hidden fees. Clear packages. You know exactly what you get for your investment from day one.'
    },
    {
      icon: <LifeBuoy className="w-6 h-6" />,
      title: 'Long-Term Support',
      desc: 'We don\'t disappear after delivery. We monitor, maintain, and help you grow continuously.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-primary-blue via-cyan-accent to-accent-green opacity-80"></div>
      
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-bg-light/50 pointer-events-none rounded-l-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          <div>
            <h4 className="text-primary-blue font-bold tracking-widest text-xs mb-4 uppercase">Why Solution Point Pro</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-dark mb-6 leading-[1.15]">
              Why 150+ Businesses Trust Us for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-cyan-accent">Growth</span>
            </h2>
            <p className="text-lg md:text-xl text-text-dark/60 mb-12 leading-relaxed">
              We combine international quality design with local market expertise. Our goal isn't just to build things—it's to grow your revenue.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {points.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 border border-primary-blue/20 text-primary-blue flex items-center justify-center shadow-sm group-hover:bg-primary-blue group-hover:text-white group-hover:shadow-md transition-all duration-300">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-dark mb-2.5 group-hover:text-primary-blue transition-colors duration-300">{point.title}</h3>
                    <p className="text-[15px] text-text-dark/60 leading-relaxed font-medium">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-10">
             <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
             >
                <img 
                  src="https://solutionpointpro.com/wp-content/uploads/2024/11/Md_Sayed_Al_Fardosh_Photo.webp" 
                  alt="Md. Sayed Al Fardosh - Founder & CEO" 
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5] transform hover:scale-105 transition-transform duration-700 object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent flex flex-col justify-end p-8 md:p-10">
                  <div className="text-white transform translate-y-0 transition-transform duration-300">
                    <p className="font-bold text-2xl mb-1.5">Md. Sayed Al Fardosh</p>
                    <p className="text-white/80 text-[15px] font-medium tracking-wide">Founder & CEO</p>
                  </div>
                </div>
             </motion.div>
             
             {/* Floating badge */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4, duration: 0.5 }}
               className="absolute -bottom-8 -left-4 md:-left-8 bg-white p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4 z-20"
             >
               <div className="bg-accent-green/10 p-3.5 rounded-xl text-accent-green flex-shrink-0">
                 <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                 </svg>
               </div>
               <div>
                 <p className="font-extrabold text-xl text-text-dark mb-0.5">100%</p>
                 <p className="text-sm font-semibold text-text-dark/60 uppercase tracking-wide">Client Satisfaction</p>
               </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
