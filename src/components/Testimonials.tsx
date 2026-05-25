import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const reviews = [
    {
      text: "SPP built our restaurant website and within 3 months our online orders doubled! Highly recommended for any BD business looking to grow.",
      name: "Rahim Chowdhury",
      title: "Restaurant Owner, Dhaka",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "Our Facebook ads ROI increased 4× after SPP took over our digital marketing. They understand the local market better than anyone else.",
      name: "Nasrin Akhter",
      title: "E-commerce Founder",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "Very professional team. They designed our startup logo and brand guidelines perfectly. Fast delivery and excellent communication via WhatsApp.",
      name: "Faisal Ahmed",
      title: "Tech Startup CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-20">
          <h4 className="text-primary-blue font-bold tracking-widest text-xs mb-4 uppercase">Testimonials</h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-dark mb-6 leading-tight">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-text-dark/60 max-w-2xl mx-auto font-medium">Don't just take our word for it. Here's what business owners across Bangladesh have to say about working with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-10 lg:p-10 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 hover:border-primary-blue/20 transition-all duration-300 relative overflow-hidden group flex flex-col h-full"
            >
              {/* Left accent border that expands downwards on hover */}
              <div className="absolute left-0 top-0 w-1.5 h-0 bg-gradient-to-b from-primary-blue to-cyan-accent group-hover:h-full transition-all duration-500 rounded-bl-xl rounded-tl-xl"></div>
              
              <div className="flex gap-1.5 mb-8">
                {[1,2,3,4,5].map(star => (
                   <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <p className="text-text-dark/80 italic mb-10 leading-relaxed text-[15px] flex-grow font-medium">"{review.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-text-dark text-base">{review.name}</h4>
                  <p className="text-[13px] text-text-dark/60 font-medium">{review.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
           <a href="#google-reviews" className="inline-flex items-center text-primary-blue font-bold tracking-wide hover:text-cyan-accent transition-colors group text-sm border-b-2 border-primary-blue/30 hover:border-cyan-accent pb-1">
             Read all reviews on Google 
             <span className="ml-1.5 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
           </a>
        </motion.div>

      </div>
    </section>
  );
}
