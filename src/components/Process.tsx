import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code,
  Highlighter,
  Search,
  Target,
  Share2,
  Palette,
  Lightbulb,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const servicesProcess = [
  {
    id: 'web',
    title: 'Website Development',
    icon: <Code className="w-5 h-5" />,
    steps: [
      { title: 'Discovery & Strategy', desc: 'Understanding your business goals, target audience, and website requirements.' },
      { title: 'UI/UX Design', desc: 'Creating wireframes and premium visual designs tailored to your brand identity.' },
      { title: 'Front-End Build', desc: 'Building responsive, pixel-perfect interfaces using modern React & Tailwind.' },
      { title: 'Back-End & CMS', desc: 'Setting up robust databases, CMS, and necessary API integrations.' },
      { title: 'QA & Optimization', desc: 'Rigorous testing for speed, security, and on-page SEO optimization.' },
      { title: 'Launch & Support', desc: 'Smooth deployment with ongoing support to ensure zero downtime.' }
    ]
  },
  {
    id: 'branding',
    title: 'Branding',
    icon: <Highlighter className="w-5 h-5" />,
    steps: [
      { title: 'Brand Audit', desc: 'Evaluating your current brand positioning and market competition.' },
      { title: 'Strategy & Identity', desc: 'Defining your brand voice, mission, and distinct value proposition.' },
      { title: 'Logo Design', desc: 'Designing a versatile, memorable logo and complete corporate identity.' },
      { title: 'Color & Typography', desc: 'Establishing a premium color palette and typographic hierarchy.' },
      { title: 'Brand Guidelines', desc: 'Creating a comprehensive rulebook for consistent visual communication.' },
      { title: 'Execution & Rollout', desc: 'Applying new brand assets across all digital and physical touchpoints.' }
    ]
  },
  {
    id: 'seo',
    title: 'SEO Services',
    icon: <Search className="w-5 h-5" />,
    steps: [
      { title: 'Comprehensive Audit', desc: 'Deep analysis of your existing website architecture and performance.' },
      { title: 'Keyword Research', desc: 'Identifying high-intent search terms to drive qualified traffic.' },
      { title: 'On-Page SEO', desc: 'Enhancing content, meta tags, and internal linking structures.' },
      { title: 'Technical SEO', desc: 'Improving site speed, mobile-friendliness, and crawlability.' },
      { title: 'Authority Building', desc: 'Strategic link-building to increase domain authority and trust.' },
      { title: 'Tracking & Analytics', desc: 'Transparent analytics monitoring to measure rank improvements.' }
    ]
  },
  {
    id: 'fb',
    title: 'Facebook Ads',
    icon: <Target className="w-5 h-5" />,
    steps: [
      { title: 'Audience Research', desc: 'Pinpointing ideal customers based on demographics and behavior.' },
      { title: 'Campaign Strategy', desc: 'Defining campaign objectives, funnels, and optimal budget allocation.' },
      { title: 'Ad Creative & Copy', desc: 'Crafting compelling visuals and persuasive ad copy that converts.' },
      { title: 'Precision Targeting', desc: 'Setting up custom and lookalike audiences for maximum relevance.' },
      { title: 'A/B Testing', desc: 'Experimenting with different ad variations to find the lowest CPA.' },
      { title: 'Scale & Optimize', desc: 'Reallocating budget to winning ads for sustainable ROI growth.' }
    ]
  },
  {
    id: 'social',
    title: 'Social Media Management',
    icon: <Share2 className="w-5 h-5" />,
    steps: [
      { title: 'Platform Strategy', desc: 'Selecting the right channels and content mix for your audience.' },
      { title: 'Profile Setup', desc: 'Enhancing your profiles for maximum discoverability and trust.' },
      { title: 'Content Creation', desc: 'Producing engaging posts, reels, and stories that resonate.' },
      { title: 'Community Engagement', desc: 'Active interaction with followers to build brand loyalty.' },
      { title: 'Growth Tactics', desc: 'Implementing organic strategies to expand your follower base.' },
      { title: 'Performance Reports', desc: 'Monthly reports analyzing reach, engagement, and conversions.' }
    ]
  },
  {
    id: 'graphic',
    title: 'Graphic Design',
    icon: <Palette className="w-5 h-5" />,
    steps: [
      { title: 'Creative Briefing', desc: 'Understanding the visual requirements and objectives of your project.' },
      { title: 'Concept Development', desc: 'Brainstorming and sketching out initial design directions.' },
      { title: 'Digital Drafting', desc: 'Creating high-fidelity designs using industry-standard tools.' },
      { title: 'Review & Refine', desc: 'Collaborative review sessions to perfect the design elements.' },
      { title: 'Final Polish', desc: 'Ensuring impeccable detailing and adherence to brand standards.' },
      { title: 'Asset Delivery', desc: 'Providing print-ready and web-optimized files in all formats.' }
    ]
  },
  {
    id: 'consulting',
    title: 'Business Consultation',
    icon: <Lightbulb className="w-5 h-5" />,
    steps: [
      { title: 'Initial Assessment', desc: 'Deep dive into your current business model and operational challenges.' },
      { title: 'Goal Setting', desc: 'Defining clear, measurable objectives for digital transformation.' },
      { title: 'Data Analysis', desc: 'Reviewing market trends, customer data, and competitive landscapes.' },
      { title: 'Strategy Formulation', desc: 'Developing an actionable, step-by-step digital growth roadmap.' },
      { title: 'Implementation', desc: 'Guiding your team through the execution of the strategic plan.' },
      { title: 'Review & Pivot', desc: 'Continuous monitoring of outcomes and adjusting tactics as needed.' }
    ]
  }
];

export default function Process() {
  const [activeTab, setActiveTab] = useState(servicesProcess[0].id);

  const activeService = servicesProcess.find(s => s.id === activeTab) || servicesProcess[0];

  return (
    <section className="py-20 md:py-32 bg-dark-navy text-white relative overflow-hidden" id="process">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
            <span className="text-sm font-bold tracking-widest uppercase text-white/80">Our Proven Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            How We Deliver <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-cyan-accent">
              World-Class Results
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
            A transparent, step-by-step workflow designed to take your business from vision to market-dominating realization.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            <div className="overflow-x-auto lg:overflow-visible flex lg:flex-col gap-2 pb-4 lg:pb-0 custom-scrollbar hide-scrollbar-on-mobile snap-x snap-mandatory">
              {servicesProcess.map((service) => {
                const isActive = activeTab === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`snap-start whitespace-nowrap lg:whitespace-normal flex items-center justify-between px-5 py-4 rounded-xl font-bold transition-all duration-300 border text-left flex-shrink-0 lg:flex-shrink-auto min-w-[240px] lg:min-w-0 ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary-blue/20 to-transparent border-primary-blue/50 text-white shadow-[0_0_20px_rgba(0,86,179,0.15)] ring-1 ring-primary-blue/50' 
                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${isActive ? 'text-cyan-accent' : 'text-white/40'}`}>
                        {service.icon}
                      </div>
                      <span className="text-[15px] sm:text-base">{service.title}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 hidden lg:block ${isActive ? 'opacity-100 translate-x-0 text-cyan-accent' : 'opacity-0 -translate-x-4'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Steps Display */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm shadow-xl"
              >
                <div className="mb-8 border-b border-white/10 pb-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                      {activeService.title} Workflow
                    </span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  {activeService.steps.map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="relative pl-6 sm:pl-8 group"
                    >
                      {/* Step Number Badge */}
                      <div className="absolute left-0 top-0 w-8 h-8 -ml-4 rounded-full bg-dark-navy border-2 border-white/10 flex items-center justify-center font-bold text-xs sm:text-sm text-white/50 group-hover:border-accent-green group-hover:text-accent-green group-hover:shadow-[0_0_15px_rgba(0,184,148,0.4)] transition-all duration-300 z-10">
                        {index + 1}
                      </div>

                      {/* Connecting Line */}
                      {index !== activeService.steps.length - 1 && (
                        <div className="absolute left-0 top-8 bottom-[-24px] w-px bg-white/10 sm:hidden"></div>
                      )}
                      {(index !== activeService.steps.length - 1 && index !== activeService.steps.length - 2) && (
                        <div className="absolute left-0 top-8 bottom-[-32px] w-px bg-white/10 hidden sm:block"></div>
                      )}

                      <div className="pt-1">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-accent transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-sm sm:text-base text-white/60 leading-relaxed font-medium">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

