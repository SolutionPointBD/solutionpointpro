import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

export default function TermsAndConditionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-light font-sans selection:bg-primary-blue selection:text-white">
      <SEO 
        title="Terms and Conditions | Solution Point Pro" 
        description="Terms and conditions of using Solution Point Pro, your trusted digital marketing and web design agency in Bangladesh."
        canonical="https://solutionpointpro.com/terms-and-conditions"
      />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 lg:p-16"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-text-dark mb-8">Terms and Conditions</h1>
            <p className="text-text-dark/60 mb-8 font-medium">Last Updated: May 2026</p>
            
            <div className="prose prose-slate max-w-none text-text-dark/80 space-y-6">
              <p>Welcome to Solution Point Pro! These terms and conditions outline the rules and regulations for the use of Solution Point Pro's Website, located at https://solutionpointpro.com.</p>
              
              <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Solution Point Pro if you do not agree to take all of the terms and conditions stated on this page.</p>

              <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">2. Services and Deliverables</h2>
              <p>Solution Point Pro provides digital marketing, website design, SEO, branding, and related services. Specific deliverables, timelines, and costs will be detailed in a separate service agreement or project proposal agreed upon by both parties.</p>

              <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">3. Payments and Refunds</h2>
              <p>Payment terms will be outlined in your specific project agreement. Generally, we require an upfront deposit before commencing work. Due to the custom nature of our digital services, refunds are not provided once work has commenced unless explicitly stated otherwise in a written agreement.</p>

              <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">4. Intellectual Property Rights</h2>
              <p>Unless otherwise stated, Solution Point Pro and/or its licensors own the intellectual property rights for all material on Solution Point Pro. All intellectual property rights are reserved. You may access this from Solution Point Pro for your own personal use subjected to restrictions set in these terms and conditions.</p>

              <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">5. Limitation of Liability</h2>
              <p>In no event shall Solution Point Pro, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Solution Point Pro, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website or our services.</p>

              <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">6. Governing Law</h2>
              <p>These Terms will be governed by and interpreted in accordance with the laws of Bangladesh, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Bangladesh for the resolution of any disputes.</p>
            </div>
          </motion.div>
        </div>
      </main>

    </div>
  );
}
