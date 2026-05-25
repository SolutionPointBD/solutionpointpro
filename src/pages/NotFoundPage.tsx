import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-dark-navy selection:bg-cyan-accent selection:text-white">
      <SEO 
        title="Page Not Found | Solution Point Pro" 
        description="The page you are looking for does not exist on Solution Point Pro."
      />
      
      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/20 rounded-full blur-[120px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full text-center relative z-10"
        >
          <div className="text-[150px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-cyan-accent mb-6 select-none drop-shadow-2xl">
            404
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Page Not Found</h1>
          <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-lg mx-auto">
            We couldn't find the page you're looking for. It might have been moved, renamed, or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-primary-blue hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_4px_20px_rgba(0,86,179,0.4)] hover:-translate-y-1 w-full sm:w-auto"
            >
              <Home className="w-5 h-5" /> Return Home
            </Link>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm w-full sm:w-auto"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </main>

    </div>
  );
}
