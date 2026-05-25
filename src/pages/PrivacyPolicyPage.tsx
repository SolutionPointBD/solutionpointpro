import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-light font-sans selection:bg-primary-blue selection:text-white">
      <SEO 
        title="Privacy Policy | Solution Point Pro" 
        description="Privacy policy and data protection guidelines for Solution Point Pro, a leading digital marketing agency in Bangladesh."
        canonical="https://solutionpointpro.com/privacy-policy"
      />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 lg:p-16"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-text-dark mb-8">Privacy Policy</h1>
            <p className="text-text-dark/60 mb-8 font-medium">Last Updated: May 2026</p>
            
            <div className="prose prose-slate max-w-none text-text-dark/80 space-y-6">
              <p>At Solution Point Pro, accessible from https://solutionpointpro.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Solution Point Pro and how we use it.</p>
              
              <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">1. Information We Collect</h2>
              <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
              
              <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect in various ways, including to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>

              <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">3. Log Files</h2>
              <p>Solution Point Pro follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

              <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">4. Cookies and Web Beacons</h2>
              <p>Like any other website, Solution Point Pro uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

              <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">5. Contact Information</h2>
              <p>If you have any questions or require more information about our Privacy Policy, do not hesitate to contact us at hello@solutionpointpro.com.</p>
            </div>
          </motion.div>
        </div>
      </main>

    </div>
  );
}
