import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyWhatsApp from './StickyWhatsApp';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-grow flex flex-col"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
