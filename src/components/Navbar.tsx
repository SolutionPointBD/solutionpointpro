import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const services = [
    { name: 'Website Design', href: '/services/website-design' },
    { name: 'SEO Services', href: '/services/seo' },
    { name: 'Branding & Logo', href: '/services/branding' },
    { name: 'Facebook Ads', href: '/services/facebook-ads' },
    { name: 'Social Media', href: '/services/social-media' },
    { name: 'Business Consultation', href: '/services/business-consultation' },
    { name: 'Graphic Design', href: '/services/graphic-design' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-navy/95 backdrop-blur-md py-3 shadow-lg' 
          : isHome ? 'bg-transparent py-5' : 'bg-dark-navy py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="navbar" theme="dark" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link to="/" className="text-white/80 hover:text-cyan-accent text-sm font-medium transition-colors">Home</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link to="/services" className="text-white/80 group-hover:text-cyan-accent text-sm font-medium transition-colors flex items-center gap-1 py-2">
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden pt-2"
                  >
                    <div className="p-2">
                      {services.map((service, idx) => (
                        <Link 
                          key={idx} 
                          to={service.href}
                          className="block px-4 py-3 text-sm text-text-dark hover:bg-bg-light hover:text-primary-blue rounded-lg transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/portfolio" className="text-white/80 hover:text-cyan-accent text-sm font-medium transition-colors">Portfolio</Link>
            <Link to="/pricing" className="text-white/80 hover:text-cyan-accent text-sm font-medium transition-colors">Pricing</Link>
            <Link to="/about" className="text-white/80 hover:text-cyan-accent text-sm font-medium transition-colors">About</Link>
            <Link to="/blog" className="text-white/80 hover:text-cyan-accent text-sm font-medium transition-colors">Blog</Link>
            <Link to="/contact" className="text-white/80 hover:text-cyan-accent text-sm font-medium transition-colors">Contact</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://wa.me/8801741516454"
              target="_blank"
              rel="noreferrer"
              className="text-white flex items-center gap-2 hover:text-cyan-accent transition-colors text-sm font-medium"
            >
              <Phone size={16} />
              +88 017 4151 6454
            </a>
            <a 
              href="https://wa.me/8801741516454?text=Hi%2C+I'd+like+a+free+consultation!"
              target="_blank"
              rel="noreferrer"
              className="bg-accent-green hover:bg-accent-green/90 text-dark-navy px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,184,148,0.3)] hover:shadow-[0_0_25px_rgba(0,184,148,0.5)] hover:-translate-y-0.5 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              <span className="font-bangla">WhatsApp করুন</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-cyan-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-dark-navy border-t border-white/10 mt-3 absolute w-full shadow-2xl"
          >
            <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-white hover:bg-white/5">Home</Link>
              
              <div className="rounded-xl overflow-hidden">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-white hover:bg-white/5"
                >
                  Services
                  <ChevronDown size={18} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white/5"
                    >
                      {services.map((service, idx) => (
                        <Link 
                          key={idx} 
                          to={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-8 py-3 text-sm text-white/80 hover:text-cyan-accent border-l-2 border-transparent hover:border-cyan-accent"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-white hover:bg-white/5">Portfolio</Link>
              <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-white hover:bg-white/5">Pricing</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-white hover:bg-white/5">About</Link>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-white hover:bg-white/5">Blog</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-white hover:bg-white/5">Contact</Link>
              
              <div className="pt-6 pb-2 px-4 flex flex-col gap-4 border-t border-white/10">
                <a href="tel:+8801741516454" className="flex items-center justify-center gap-2 text-white py-2">
                  <Phone size={18} /> +88 017 4151 6454
                </a>
                <a
                  href="https://wa.me/8801741516454?text=Hi%2C+I'd+like+a+free+consultation!"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-accent-green hover:bg-accent-green/90 text-dark-navy text-center px-5 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,184,148,0.3)]"
                >
                  <MessageCircle size={20} />
                  <span className="font-bangla">WhatsApp করুন</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
