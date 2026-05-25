import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ConsultationCTAStrip() {
  return (
    <div className="bg-gradient-to-r from-primary-blue to-blue-900 text-white py-5 sm:py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <div className="flex w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-white/10 border border-white/20 items-center justify-center animate-pulse">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
          </div>
          <div>
            <h4 className="font-bold text-base sm:text-lg leading-tight mb-1">Limited Time Launch Offer!</h4>
            <p className="text-white/80 text-sm sm:text-base font-medium">Get a <strong className="text-white font-bold">Free 30-Min Digital Growth Consultation</strong> + Website Audit.</p>
          </div>
        </div>
        
        <Link 
          to="/free-consultation"
          className="bg-accent-green hover:bg-white text-dark-navy px-8 py-3.5 rounded-xl font-bold text-base shadow-xl shadow-accent-green/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 w-full md:w-auto flex-shrink-0"
        >
          Claim Your Free Session <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
