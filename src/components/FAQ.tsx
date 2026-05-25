import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

export default function FAQ({ title, subtitle, faqs: customFaqs }: FAQProps) {
  const defaultFaqs = [
    {
      q: "How long does it take to build a website?",
      a: "Typically 7–21 days depending on complexity. A starter 5-page site takes about a week, while advanced e-commerce or custom functionality may take 3 weeks."
    },
    {
      q: "What is the cost of a professional website in Bangladesh?",
      a: "Our premium WordPress website packages start from BDT 15,000. We offer transparent pricing with no hidden fees."
    },
    {
      q: "Do you offer ongoing maintenance?",
      a: "Yes! We include 1-3 months of free support with our packages, and offer affordable monthly maintenance plans to keep your site secure and updated."
    },
    {
      q: "Can you help with Facebook advertising?",
      a: "Yes, we manage full Facebook & Instagram ad campaigns. We handle audience research, ad creative, testing, and optimization to maximize your ROI."
    },
    {
      q: "Do you work with businesses outside Dhaka?",
      a: "Absolutely. While we are based in Pallabi, Dhaka, we work with clients across all of Bangladesh and internationally. We handle all communication smoothly via WhatsApp and Zoom."
    },
    {
      q: "How do I get started?",
      a: "Simply click the WhatsApp button to send us a message. We'll set up a free 30-minute consultation to discuss your needs and propose a strategy."
    }
  ];

  const faqs = customFaqs || defaultFaqs;

  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-dark-navy text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title || "Frequently Asked Questions"}</h2>
          <p className="text-lg text-white/70 mb-8">{subtitle || "Got questions? We've got answers."}</p>
          <button
            onClick={() => setOpenIndices(openIndices.length === faqs.length ? [] : faqs.map((_, i) => i))}
            className="text-sm font-semibold text-cyan-accent hover:text-white transition-colors border border-cyan-accent/20 hover:border-cyan-accent/50 px-4 py-2 rounded-full"
          >
            {openIndices.length === faqs.length ? 'Close All' : 'Expand All'}
          </button>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="border border-white/10 bg-white/5 rounded-xl overflow-hidden transition-colors hover:bg-white/10"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-[17px] pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndices.includes(index) ? 'rotate-180 text-cyan-accent' : 'text-white/50'}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndices.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-white/70 leading-relaxed border-t border-white/5 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* FAQ Schema Script conceptually goes here in head for SEO */}
      </div>
    </section>
  );
}
