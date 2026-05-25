import React from 'react';
import { motion } from 'motion/react';
import { Layout, Search, Palette, Share2, Megaphone, Lightbulb, CheckCircle, ArrowRight, Star } from 'lucide-react';
import WhatsAppCTA from '../components/WhatsAppCTA';
import FAQ from '../components/FAQ';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const detailedServices = [
    {
      id: "website-design",
      title: 'Premium Website Design',
      icon: <Layout size={32} />,
      desc: 'High-converting, ultra-fast websites designed to build trust and capture leads. Perfect for businesses in Bangladesh looking to establish a dominant online presence.',
      features: ['Custom UI/UX Design', 'Mobile-First Responsive', 'Speed Optimization (90+ Score)', 'SEO-Ready Architecture', 'Lead Capture Forms', '1-Year Free Maintenance'],
      startingPrice: '৳25,000',
      popular: true
    },
    {
      id: "seo",
      title: 'Local & Global SEO',
      icon: <Search size={32} />,
      desc: 'Dominate Google search rankings in Bangladesh or internationally. We drive high-intent organic traffic that converts into paying customers predictably.',
      features: ['Local SEO (Google My Business)', 'In-depth Keyword Research', 'Technical SEO Audit', 'Premium Link Building', 'Content Strategy Alignment', 'Monthly Reporting'],
      startingPrice: '৳15,000/mo',
      popular: false
    },
    {
      id: "branding",
      title: 'Brand Identity & Logo',
      icon: <Palette size={32} />,
      desc: 'Professional brand identity that immediately establishes trust, looks premium, and stands out from cheap competitors in the market.',
      features: ['Custom Logo Design', 'Brand Color Palette', 'Typography Selection', 'Social Media Assets', 'Business Card Design', 'Complete Brand Guidelines'],
      startingPrice: '৳10,000',
      popular: false
    },
    {
      id: "social-media",
      title: 'Social Media Management',
      icon: <Share2 size={32} />,
      desc: 'Engaging content and active community management across Facebook, Instagram, and LinkedIn to build a loyal local audience.',
      features: ['Visual Content Creation', '15-30 Posts / Month', 'Engaging Copywriting', 'Community Engagement', 'Page Optimization', 'Growth Strategy'],
      startingPrice: '৳12,000/mo',
      popular: false
    },
    {
      id: "facebook-ads",
      title: 'Facebook Ads Expert',
      icon: <Megaphone size={32} />,
      desc: 'ROI-focused digital ad campaigns designed to generate WhatsApp leads, phone calls, and direct sales with highly precise targeting.',
      features: ['Pixel Tracking Setup', 'Audience Research', 'A/B Testing Creatives', 'Retargeting Funnels', 'Ad Copywriting', 'Weekly Performance Reviews'],
      startingPrice: '৳10,000/mo',
      popular: true
    },
    {
      id: "business-consultation",
      title: 'Digital Growth Consultation',
      icon: <Lightbulb size={32} />,
      desc: 'Expert 1-on-1 advice on digital transformation, adopting modern AI tools, and scaling your business locally in Bangladesh.',
      features: ['Current Strategy Audit', 'Competitor Analysis', 'AI Integration Roadmap', 'Marketing Funnel Design', 'Actionable Steps', '1-Hour Strategy Session'],
      startingPrice: 'Free 30-min Call',
      popular: false
    },
    {
      id: "graphic-design",
      title: 'Graphic Design Services',
      icon: <Palette size={32} />,
      desc: 'High-end visual assets that elevate your marketing and persuade buyers. From social media distinct creatives to print documents.',
      features: ['Ad Creatives', 'Social Media Graphics', 'Print Design & Packaging', 'Pitch Decks', 'Unlimited Revisions', 'Fast Delivery'],
      startingPrice: '৳5,000/mo',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-primary-blue selection:text-white bg-bg-light">
      <SEO 
        title="Digital Marketing & Website Services" 
        description="Explore our premium digital services including Custom Website Design, Local/Global SEO, Meta Ads Management, and Brand Identity Design tailored for Bangladesh."
        keywords="digital marketing services, professional web design dhaka, seo experts bangladesh, facebook marketing pricing"
        canonical="https://solutionpointpro.com/services"
      />
      
      <main>
        {/* Services Hero */}
        <section className="bg-dark-navy text-white pt-32 pb-24 lg:pt-40 relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-accent/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-blue/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] pointer-events-none opacity-60" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-cyan-accent font-bold tracking-widest text-xs mb-4 uppercase">Our Solutions</h4>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold text-white mb-6 leading-tight tracking-tight">
                Premium Digital Services <br className="hidden md:block"/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-primary-blue">For Growing Brands</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                From high-performing websites to lead-generating ad campaigns, we provide the ultimate digital arsenal to scale your business in Bangladesh and beyond.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="py-20 md:py-32 relative z-20 -mt-10 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {detailedServices.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary-blue/10 transition-all duration-500 relative overflow-hidden group flex flex-col"
                >
                  {service.popular && (
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-accent-green to-accent-green text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-accent-green/30">
                      Most Popular
                    </div>
                  )}

                  <div className="w-16 h-16 rounded-2xl bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center text-primary-blue mb-8 group-hover:scale-110 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500 shadow-sm">
                    {service.icon}
                  </div>

                  <h2 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-primary-blue transition-colors duration-300">
                    {service.title}
                  </h2>
                  
                  <p className="text-text-dark/70 mb-8 leading-relaxed text-[15px]">
                    {service.desc}
                  </p>

                  <div className="border-t border-slate-100 pt-8 mb-8 flex-grow">
                    <h4 className="text-sm font-bold text-text-dark mb-4 uppercase tracking-wider">What's Included:</h4>
                    <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-[14px] text-text-dark/70 font-medium">
                          <CheckCircle className="w-5 h-5 text-accent-green mr-2.5 flex-shrink-0" />
                          <span className="mt-0.5">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-100 gap-6 mt-auto">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Starting From</p>
                      <p className="text-2xl font-extrabold text-text-dark">{service.startingPrice}</p>
                    </div>
                    <Link 
                      to={`/services/${service.id}`}
                      className="w-full sm:w-auto text-center bg-primary-blue hover:opacity-90 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,86,179,0.3)] hover:-translate-y-1"
                    >
                      View Packages
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section (Reused) */}
        <Process />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section (Reused) */}
        <div className="pt-10">
          <FAQ
            title="Service FAQs"
            subtitle="Understand our capabilities and processes."
            faqs={[
              {
                q: "What types of websites do you develop?",
                a: "We specialize in modern WordPress websites, custom e-commerce stores (WooCommerce/Shopify), corporate portals, and high-converting landing pages tailored to your brand identity."
              },
              {
                q: "How does your local SEO service help me?",
                a: "Our local SEO optimizes your Google Business Profile and website so that when customers in Bangladesh search for your services, you appear at the top of local maps and organic results."
              },
              {
                q: "Do you create the content and graphics for social media?",
                a: "Yes! Our brand identity and social media teams handle everything—from ad copywriting and graphic design to video editing and daily posting schedules."
              },
              {
                q: "Can I bundle multiple services together?",
                a: "Absolutely. Most of our clients combine Web Design, SEO, and Meta Ads for a comprehensive 'Growth Stack' package at a more competitive blended rate."
              }
            ]}
          />
        </div>

        {/* CTA Banner Reused */}
        <WhatsAppCTA />
      </main>

    </div>
  );
}
