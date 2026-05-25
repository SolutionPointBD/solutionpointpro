import React from 'react';
import Hero from '../components/Hero';
import ConsultationCTAStrip from '../components/ConsultationCTAStrip';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import GuaranteeSection from '../components/GuaranteeSection';
import WhatsAppCTA from '../components/WhatsAppCTA';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import TrustBar from '../components/TrustBar';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import SEO from '../components/SEO';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary-blue selection:text-white bg-bg-light">
      <SEO 
        title="Best Digital Agency for Website & SEO" 
        description="Accelerate your business growth with Solution Point Pro. Get premium website design, local SEO, and ROI-focused digital marketing in Bangladesh."
        keywords="digital growth agency, website design bangladesh, seo services bangladesh, facebook ads agency dhaka, brand identity"
        canonical="https://solutionpointpro.com/"
      />
      <main>
        <Hero />
        <ConsultationCTAStrip />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <Process />
        <GuaranteeSection />
        <Portfolio />
        <Pricing />
        <WhatsAppCTA />
        <Testimonials />
        <ContactSection />
        <FAQ />
      </main>
    </div>
  );
}
