import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { Target, Lightbulb, Rocket, Users, Shield, TrendingUp, CheckCircle2, Award } from 'lucide-react';

const timeline = [
  {
    year: "2019",
    title: "The Beginning",
    description: "Started as a small web design consultancy helping local businesses in Dhaka establish their online presence."
  },
  {
    year: "2021",
    title: "Service Expansion",
    description: "Expanded our services to include comprehensive SEO and Data-Driven Meta Ads due to high client demand."
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Integrated AI-powered tools into our workflow, reducing delivery times by 40% and multiplying ROI for clients."
  },
  {
    year: "2025",
    title: "Industry Leaders",
    description: "Recognized as a leading AI-powered digital growth agency in Bangladesh, serving 150+ happy clients."
  }
];

const values = [
  {
    icon: <Target className="w-6 h-6 text-primary-blue" />,
    title: "Result-Oriented",
    description: "We don't just build websites; we build scalable lead-generation machines."
  },
  {
    icon: <Users className="w-6 h-6 text-primary-blue" />,
    title: "Bangladesh Focused",
    description: "Deep understanding of the local market psychology and consumer behavior."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-primary-blue" />,
    title: "AI-Powered Strategy",
    description: "Leveraging the latest artificial intelligence for faster, smarter growth."
  },
  {
    icon: <Shield className="w-6 h-6 text-primary-blue" />,
    title: "Absolute Transparency",
    description: "Clear reporting, honest communication, and no hidden fees."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary-blue selection:text-white bg-bg-light overflow-hidden">
      <SEO 
        title="About Us | Bangladesh's Premium Digital Agency" 
        description="Learn about Solution Point Pro, our mission, vision, and why we are the trusted digital growth partner for businesses in Bangladesh."
        keywords="about solution point pro, digital agency bangladesh, web design company dhaka, digital marketing experts bd"
        canonical="https://solutionpointpro.com/about"
      />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 pt-32 md:py-32 lg:pt-40 bg-dark-navy overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                More Than Just An Agency.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-accent-green">We Are Your Growth Partners.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-medium mb-10">
                Driven by AI, fueled by strategy, and dedicated to helping Bangladesh's businesses dominate the digital landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy & Story */}
        <section className="py-20 md:py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 text-primary-blue text-sm font-bold tracking-widest uppercase">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark leading-tight">
                  Bridging the Gap Between <span className="text-primary-blue">Local Businesses</span> and <span className="text-accent-green">Global Standards</span>
                </h2>
                <div className="space-y-4 text-text-dark/70 text-lg leading-relaxed">
                  <p>
                    In the rapidly evolving digital landscape of Bangladesh, many businesses struggle to establish a professional online presence that actually converts. Solution Point Pro was born out of a simple observation: beautiful websites are useless if they don't generate revenue.
                  </p>
                  <p>
                    We realized that local entrepreneurs needed more than just a vendor—they needed a strategic partner. Someone who understands the nuances of the Bangladeshi market, the mentality of local consumers, and the power of international design standards.
                  </p>
                  <p>
                    Today, we combine cutting-edge AI technology with deep psychological marketing to build digital growth engines for startups, service providers, and established brands across the country.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue to-cyan-accent rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
                <img 
                  src="https://solutionpointpro.com/wp-content/uploads/2024/11/women-in-creative-agency-planning-on-tablet-compu-2022-12-10-00-16-14-utc-1024x650.webp" 
                  alt="Team collaboration" 
                  className="rounded-3xl relative z-10 shadow-2xl object-cover h-[500px] w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-32 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-6 text-primary-blue">
                  <Rocket size={32} />
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-4">Our Mission</h3>
                <p className="text-text-dark/70 text-lg leading-relaxed">
                  To empower Bangladeshi businesses by providing premium, AI-driven digital solutions that guarantee measurable growth, increased brand authority, and automated lead generation.
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mb-6 text-accent-green">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-4">Our Vision</h3>
                <p className="text-text-dark/70 text-lg leading-relaxed">
                  To be the benchmark of digital excellence in South Asia, transforming local enterprises into global brands through innovative design, strategic marketing, and cutting-edge technology.
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI-Powered Workflow */}
        <section className="py-20 md:py-32 bg-dark-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InRvcG8iIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMjAgMTAgTSAxMCAwIEwgMTAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3RvcG8pIi8+PC9zdmc+')] opacity-20" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-blue/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/20 text-cyan-accent text-sm font-bold tracking-widest uppercase mb-6">
                Our Secret Weapon
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-accent-green">AI-Powered</span> Workflow
              </h2>
              <p className="text-lg text-white/70">
                We don't just use standard tools. We integrate advanced Artificial Intelligence at every stage of your project to deliver faster, smarter, and more profitable results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 bg-primary-blue/20 rounded-2xl flex items-center justify-center text-cyan-accent mb-6">
                  <span className="font-bold text-xl block">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Market Research</h3>
                <p className="text-white/60 leading-relaxed">
                  We use AI to analyze your local and international competitors, uncovering hidden gaps in the market and identifying the exact keywords and strategies that drive revenue in Bangladesh.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors relative"
              >
                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-blue to-cyan-accent px-4 py-1 flex items-center justify-center rounded-full text-xs font-bold shadow-lg">
                  Fastest Execution
                </div>
                <div className="w-14 h-14 bg-primary-blue/20 rounded-2xl flex items-center justify-center text-cyan-accent mb-6">
                  <span className="font-bold text-xl block">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Rapid Prototyping</h3>
                <p className="text-white/60 leading-relaxed">
                  Our development workflow uses AI assistance to write clean, secure code 50% faster than traditional agencies. You get a premium, bug-free website in weeks, not months.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 bg-primary-blue/20 rounded-2xl flex items-center justify-center text-cyan-accent mb-6">
                   <span className="font-bold text-xl block">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Predictive Marketing</h3>
                <p className="text-white/60 leading-relaxed">
                  For SEO and Social Media Ads, we use machine learning models algorithm to predict what creatives and copy will convert best for the Bangladeshi audience before spending a single taka.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values / Why Choose Us */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">Our Core Values</h2>
              <p className="text-lg text-text-dark/70">The principles that guide our work, our decisions, and our relationships with clients.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {values.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-bg-light p-8 lg:p-12 border border-slate-100 hover:border-primary-blue/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-3">{item.title}</h3>
                  <p className="text-text-dark/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-32 bg-dark-navy text-white relative flex justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary-blue/5" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">From a small local agency to a premium digital growth partner. Here is how we evolved.</p>
            </div>

            <div className="relative">
              {/* Vertical line connecting nodes */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-blue via-cyan-accent to-transparent md:-translate-x-1/2" />
              
              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 lg:gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Empty div for layout on desktop */}
                    <div className="hidden md:block flex-1" />
                    
                    {/* Node */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent-green shadow-[0_0_15px_rgba(0,184,148,0.6)] md:-translate-x-1/2 mt-1.5 md:mt-2 z-10 border-4 border-dark-navy" />
                    
                    {/* Content */}
                    <div className="flex-1 ml-12 md:ml-0 bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                      <span className="inline-block px-3 py-1 bg-primary-blue/20 text-cyan-accent rounded-lg text-sm font-bold tracking-wider mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-white/70 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder / Trust Section */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-cyan-accent/5 rounded-l-full blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-bg-light rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Award size={200} />
              </div>
              
              <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-blue rounded-3xl translate-x-3 translate-y-3 opacity-20"></div>
                    <img 
                      src="https://solutionpointpro.com/wp-content/uploads/2024/11/Md_Sayed_Al_Fardosh_Photo.webp" 
                      alt="Al Fardosh - Founder" 
                      className="rounded-3xl relative z-10 w-full object-cover aspect-[4/5] shadow-lg object-top"
                    />
                  </div>
                </div>
                
                <div className="lg:col-span-8 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 text-accent-green text-sm font-bold tracking-widest uppercase">
                    Leadership
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-text-dark leading-tight">
                    "We don't build simple websites. We build <span className="text-primary-blue">digital assets</span> that work for you 24/7."
                  </h2>
                  <p className="text-xl text-text-dark/70 font-medium italic border-l-4 border-primary-blue pl-6 my-8">
                    My goal is simple: Help local businesses leverage international-standard digital strategies to dominate their niche in Bangladesh and beyond.
                  </p>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-text-dark">Al Fardosh</h4>
                    <p className="text-primary-blue font-medium text-lg">Founder & CEO, Solution Point Pro</p>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                       <CheckCircle2 className="text-accent-green w-5 h-5" />
                       <span className="font-semibold text-text-dark/80">Digital Strategist</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <CheckCircle2 className="text-accent-green w-5 h-5" />
                       <span className="font-semibold text-text-dark/80">SEO Expert</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <CheckCircle2 className="text-accent-green w-5 h-5" />
                       <span className="font-semibold text-text-dark/80">Brand Consultant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team / Culture Section */}
        <section className="py-20 md:py-32 bg-bg-light border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">Our Extended Team</h2>
              <p className="text-lg text-text-dark/70">
                Behind every successful campaign and stunning website is our dedicated team of remote developers, designers, and marketers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
               <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-text-dark">A Modern, Remote-First Agency</h3>
                <p className="text-text-dark/70 text-lg leading-relaxed">
                  We operate as a lean, highly efficient network of specialists. Instead of maintaining a massive physical office with huge overhead, we invest our resources into the best talent and the most advanced AI tools.
                </p>
                <p className="text-text-dark/70 text-lg leading-relaxed">
                  This agility allows us to adapt to market changes faster than traditional agencies, while keeping our pricing highly competitive for the Bangladeshi market without ever compromising on premium quality.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent-green flex-shrink-0" />
                    <span className="text-text-dark/80 font-medium">Top-tier React & Tailwind Developers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent-green flex-shrink-0" />
                    <span className="text-text-dark/80 font-medium">Data-Driven Media Buyers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent-green flex-shrink-0" />
                    <span className="text-text-dark/80 font-medium">Conversion-Focused UI/UX Designers</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <img src="https://solutionpointpro.com/wp-content/uploads/2024/11/news-phone-or-manager-reading-or-coaching-a-worke-2023-03-01-19-56-03-utc-1024x687.webp" alt="Team meeting" className="rounded-2xl w-full h-full object-cover transform translate-y-8 shadow-lg" />
                <img src="https://solutionpointpro.com/wp-content/uploads/2024/11/successful-handsome-businessman-sitting-at-desk-in-2022-12-16-07-48-48-utc-2-1024x993.webp" alt="Strategic planning" className="rounded-2xl w-full h-full object-cover shadow-lg" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <WhatsAppCTA />
      </main>

    </div>
  );
}
