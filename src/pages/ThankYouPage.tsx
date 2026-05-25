import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ThankYouPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-bg-light">
      <SEO 
        title="Thank You | Solution Point Pro" 
        description="Thank you for contacting Solution Point Pro. We will get back to you shortly."
        canonical="https://solutionpointpro.com/thank-you"
      />
      
      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-10 md:p-16 max-w-2xl w-full text-center shadow-xl border border-slate-100"
        >
          <div className="w-24 h-24 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-accent-green" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6">Thank You!</h1>
          <p className="text-lg text-text-dark/70 mb-10 leading-relaxed">
            Your message has been successfully received. A growth specialist from Solution Point Pro will review your request and get back to you within 24 hours. We look forward to helping you grow!
          </p>
          
          <Link 
            to="/"
            className="inline-flex items-center gap-2 bg-primary-blue hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </motion.div>
      </main>

    </div>
  );
}
