import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '../components/SEO';
import WhatsAppCTA from '../components/WhatsAppCTA';
import FAQ from '../components/FAQ';
import ConsultationCTAStrip from '../components/ConsultationCTAStrip';
import { servicesData } from '../data/servicesData';
import { CheckCircle2, Shield, Target, Zap, ArrowRight, Check, Minus, Package, Star } from 'lucide-react';

const coreServices = [
  "website-design",
  "seo",
  "branding",
  "social-media",
  "facebook-ads"
];

const comboOffers = [
  {
    name: "Startup Combo Offer",
    description: "Perfect for new businesses needing a complete digital foundation fast.",
    price: "25,000",
    period: "BDT / one-time",
    services: [
      "Website Design (Starter Package)",
      "Logo & Brand Identity (Startup Package)",
      "1 Month Facebook Page Setup & Content"
    ],
    originalPrice: "30,000",
    save: "5,000",
    isFeatured: false,
    badge: "🔥 Launch Offer"
  },
  {
    name: "Business Growth Combo",
    description: "Aggressive lead generation system for established BD businesses.",
    price: "45,000",
    period: "BDT / month",
    services: [
      "Website Maintenance & Speed Optimization",
      "Local SEO (Growth Package)",
      "Facebook Ads Management (Starter Package)",
      "Social Media Management (Maintain Package)"
    ],
    originalPrice: "53,000",
    save: "8,000",
    isFeatured: true,
    badge: "Maximum ROI"
  },
  {
    name: "Digital Domination Combo",
    description: "Complete hands-off digital marketing department for serious enterprises.",
    price: "85,000",
    period: "BDT / month",
    services: [
      "Enterprise SEO (National Reach)",
      "Advanced FB Ads (Growth E-Com Package)",
      "Social Media Management (Engage Package)",
      "Unlimited Graphic Design VIP",
      "Executive Business Consultation"
    ],
    originalPrice: "110,000",
    save: "25,000",
    isFeatured: false,
    badge: "👑 Enterprise Choice"
  }
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState(coreServices[0]);
  const activeService = servicesData[activeTab];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-primary-blue selection:text-white bg-bg-light overflow-hidden">
      <SEO 
        title="Pricing & Packages | Solution Point Pro Bangladesh" 
        description="Transparent, ROI-focused pricing for website design, SEO, Facebook ads, and digital marketing services in Bangladesh."
        keywords="solution point pro pricing, digital marketing cost bangladesh, website design price dhaka, seo packages bd"
        canonical="https://solutionpointpro.com/pricing"
      />
      <div className="pt-20">
        <ConsultationCTAStrip />
      </div>

      <main className="pt-12 lg:pt-16 pb-20">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold tracking-widest uppercase">
              🔥 Launch Campaign 2026
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold tracking-widest uppercase">
              💎 Founding Client Offer
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold tracking-widest uppercase">
              ⏳ Limited Slots Available
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 text-primary-blue text-sm font-bold tracking-widest uppercase mb-6">
              Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-dark mb-6 leading-tight">
              Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-green">Digital Assets</span> That Pay  You Back.
            </h1>
            <p className="text-lg text-text-dark/70 mb-8">
              No hidden fees. No complicated contracts. Just premium, ROI-driven digital solutions priced for the Bangladesh market.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-text-dark/80">
               <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-accent-green" /> Secure Payments</span>
               <span className="flex items-center gap-2"><Target className="w-4 h-4 text-primary-blue" /> Results Focused</span>
               <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-amber-500" /> Fast Execution</span>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Services Pricing Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          
          {/* Tabs Navigation */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 mb-12 pb-4 justify-start lg:justify-center border-b border-slate-200">
             {coreServices.map((serviceId) => (
                <button
                  key={serviceId}
                  onClick={() => setActiveTab(serviceId)}
                  className={`px-6 py-4 font-bold text-sm md:text-base whitespace-nowrap transition-all border-b-2 ${
                    activeTab === serviceId 
                    ? 'border-primary-blue text-primary-blue' 
                    : 'border-transparent text-text-dark/60 hover:text-text-dark'
                  }`}
                >
                  {servicesData[serviceId].title.replace(" Services", "").replace(" Management", "")}
                </button>
             ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold text-text-dark mb-4">{activeService.title} Plans</h2>
                 <p className="text-text-dark/70 max-w-2xl mx-auto">{activeService.subtitle}</p>
              </div>

              {/* Pricing Cards */}
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16 md:mb-20">
                {activeService.pricing.map((tier, idx) => (
                  <div 
                    key={idx}
                    className={`relative bg-white rounded-[2rem] border ${tier.isFeatured ? 'border-primary-blue shadow-2xl scale-100 lg:scale-[1.02] z-10' : 'border-slate-200 shadow-md hover:shadow-xl transition-shadow'} p-8 flex flex-col`}
                  >
                    {tier.badge && (
                      <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${tier.isFeatured ? 'bg-primary-blue text-white shadow-lg' : 'bg-dark-navy/90 text-white'}`}>
                        {tier.badge}
                      </div>
                    )}

                    <div className="mb-8 mt-2">
                      <h3 className="text-2xl font-bold text-text-dark mb-2">{tier.name}</h3>
                      <p className="text-text-dark/60 text-sm h-10">{tier.description}</p>
                    </div>
                    
                    <div className="mb-8 pb-8 border-b border-slate-100 text-center">
                      <div className="flex items-end justify-center gap-1 mb-1">
                        <span className="text-lg font-bold text-slate-400 mb-1">৳</span>
                        <span className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tight">{tier.price}</span>
                      </div>
                      {tier.period && <span className="text-text-dark/60 font-medium text-sm block mt-2">{tier.period}</span>}
                    </div>

                    <div className="flex-1">
                      <ul className="space-y-4 mb-8">
                        {tier.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start gap-3 text-text-dark/80">
                            <CheckCircle2 className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                            <span className="font-medium">{feature}</span>
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
                      href={`https://wa.me/8801741516454?text=Hi%2C+I+am+interested+in+the+${tier.name}+package+for+${activeService.title}.`}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-center transition-all ${
                        tier.isFeatured 
                        ? 'bg-primary-blue hover:opacity-90 text-white shadow-lg shadow-primary-blue/30 hover:-translate-y-1' 
                        : 'bg-bg-light border border-slate-200 hover:bg-slate-100 text-text-dark hover:-translate-y-0.5'
                      }`}
                    >
                      Choose {tier.name} <ArrowRight className="w-5 h-5 flex-shrink-0" />
                    </a>
                  </div>
                ))}
              </div>

              {/* Comparison Table */}
              <div className="max-w-6xl mx-auto mt-20">
                <h3 className="text-2xl font-bold text-center mb-10 text-text-dark">Feature Comparison</h3>
                <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-sm bg-white p-2 custom-scrollbar">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-bg-light border-b border-slate-100 text-sm uppercase tracking-wider">
                        <th className="p-5 rounded-tl-2xl font-bold text-text-dark/60 w-1/3">Feature Included</th>
                        <th className="p-5 font-bold text-text-dark text-center">{activeService.pricing[0]?.name}</th>
                        <th className="p-5 font-bold text-primary-blue text-center bg-primary-blue/5 border-l border-r border-primary-blue/10">
                          {activeService.pricing[1]?.name}
                        </th>
                        <th className="p-5 rounded-tr-2xl font-bold text-text-dark text-center">{activeService.pricing[2]?.name}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {activeService.comparisonTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-bg-light/50 transition-colors">
                          <td className="p-5 text-text-dark font-semibold">{row.feature}</td>
                          
                          <td className="p-5 text-center">
                            {typeof row.starter === 'boolean' ? (
                              row.starter ? <Check className="w-5 h-5 text-accent-green mx-auto" /> : <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                            ) : (
                              <span className="text-text-dark/70 font-medium text-sm">{row.starter}</span>
                            )}
                          </td>
                          
                          <td className="p-5 text-center bg-primary-blue/5 border-l border-r border-primary-blue/10">
                            {typeof row.standard === 'boolean' ? (
                              row.standard ? <Check className="w-5 h-5 text-primary-blue mx-auto" /> : <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                            ) : (
                              <span className="text-primary-blue font-bold text-sm tracking-wide">{row.standard}</span>
                            )}
                          </td>
                          
                          <td className="p-5 text-center">
                            {typeof row.premium === 'boolean' ? (
                              row.premium ? <Check className="w-5 h-5 text-text-dark mx-auto font-bold" /> : <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                            ) : (
                              <span className="text-text-dark font-bold text-sm tracking-wide">{row.premium}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Special Combo Offers */}
        <section className="py-20 md:py-32 bg-dark-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-blue/5"></div>
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/20 text-accent-green text-sm font-bold uppercase tracking-wider mb-4 border border-accent-green/30">
                <Star size={16} /> Exclusive Bundles
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Combo Growth Packages</h2>
              <p className="text-lg text-white/70">Bundle our top services together and save massively while supercharging your digital growth.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {comboOffers.map((combo, idx) => (
                <div 
                  key={idx}
                  className={`bg-white/5 border ${combo.isFeatured ? 'border-primary-blue shadow-[0_0_30px_rgba(0,86,179,0.3)] transform lg:-translate-y-4' : 'border-white/10'} p-8 rounded-3xl backdrop-blur-sm relative flex flex-col h-full`}
                >
                   {combo.badge && (
                      <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg ${combo.isFeatured ? 'bg-gradient-to-r from-primary-blue to-cyan-accent text-white' : 'bg-white text-text-dark border border-slate-200'}`}>
                        {combo.badge}
                      </div>
                   )}
                   
                   <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{combo.name}</h3>
                      <p className="text-white/60 text-sm">{combo.description}</p>
                   </div>
                   
                   <div className="mb-8">
                     <span className="text-white/40 line-through block text-sm font-medium mb-1">Value: ৳{combo.originalPrice}</span>
                     <div className="flex items-end gap-1">
                        <span className="text-3xl md:text-4xl font-extrabold text-accent-green">৳{combo.price}</span>
                        <span className="text-white/60 font-medium text-sm mb-1">{combo.period}</span>
                     </div>
                     <p className="text-accent-green text-sm font-bold mt-2 py-1 px-3 bg-accent-green/10 inline-block rounded-lg border border-accent-green/20">
                       Save ৳{combo.save}
                     </p>
                   </div>
                   
                   <div className="flex-1 mb-8">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4 pb-2 border-b border-white/10">What's Included</h4>
                      <ul className="space-y-3">
                        {combo.services.map((serviceItem, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3">
                            <Package className="w-5 h-5 text-cyan-accent shrink-0" />
                            <span className="text-white/80 font-medium leading-tight">{serviceItem}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                   
                   <a 
                      href={`https://wa.me/8801741516454?text=Hi%2C+I+am+interested+in+the+${combo.name}+Combo+Package.`}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                        combo.isFeatured 
                        ? 'bg-primary-blue hover:opacity-90 text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      Book This Bundle
                    </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Help CTA */}
        <section className="py-20 md:py-32 ">
           <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">Not sure which package fits your business?</h2>
              <p className="text-lg text-text-dark/70 mb-10">Don't guess. Let our experts analyze your digital footprint and recommend the exact services you need for maximum ROI.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <a href="/free-consultation" className="bg-dark-navy hover:bg-dark-navy/90 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-transform hover:-translate-y-1 w-full sm:w-auto text-center shrink-0">
                   Get A Custom Quote
                 </a>
                 <a href="https://wa.me/8801741516454?text=I+need+help+choosing+a+service+package." target="_blank" rel="noreferrer" className="bg-accent-green hover:opacity-90 text-dark-navy px-8 py-4 rounded-xl font-bold shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-transform hover:-translate-y-1 w-full sm:w-auto text-center shrink-0 flex items-center justify-center gap-2">
                   Chat on WhatsApp <ArrowRight size={18} />
                 </a>
              </div>
           </div>
        </section>

        {/* Global FAQ */}
        <div className="bg-bg-light pt-20 pb-12">
          <FAQ
            title="Pricing FAQs"
            subtitle="Clear answers about our plans and billing."
            faqs={[
              {
                q: "Are there any hidden fees?",
                a: "Absolutely not. Our pricing structure is 100% transparent. What you see on our proposal is exactly what you pay for the specified deliverables."
              },
              {
                q: "What payment methods do you accept?",
                a: "For clients in Bangladesh, we accept bKash, Nagad, and direct bank transfers. For international clients, we accept major cards and standard wire transfers."
              },
              {
                q: "Do you offer refunds?",
                a: "Because our services involve thousands of hours of manual, intellectual labor (designing, writing code, executing ad campaigns), we generally do not offer refunds once work has commenced. We guarantee quality and revisions as per the contract."
              },
              {
                q: "Can I upgrade or downgrade my monthly plan?",
                a: "Yes. For monthly retainers (like SEO or social media management), you can scale up or down at the end of any billing cycle with a 15-day notice."
              },
              {
                q: "Why are your prices competitive?",
                a: "Operating in Dhaka allows us to leverage incredible local talent with optimized overhead. You get international-grade marketing and development at market-appropriate rates."
              }
            ]}
          />
        </div>

      </main>

      <WhatsAppCTA />
    </div>
  );
}
