import React from 'react';
import { Link } from 'react-router-dom';
const logoUrl = "https://solutionpointpro.com/wp-content/uploads/2024/11/1200x444_Trans.png";

interface LogoProps {
  variant?: 'navbar' | 'footer' | 'default';
  theme?: 'light' | 'dark';
  className?: string;
  hideText?: boolean;
}

export default function Logo({ variant = 'default', theme = 'light', className = '' }: LogoProps) {
  // Base sizing and spacing rules according to the brand system
  const baseClasses = 'block transition-transform hover:scale-105 duration-300';
  
  // Responsive sizing rules based on variant
  const variantClasses = {
    navbar: 'h-10 sm:h-12 md:h-14 w-auto object-contain',
    footer: 'h-12 sm:h-14 md:h-16 w-auto object-contain',
    default: 'h-12 md:h-14 lg:h-16 w-auto object-contain'
  };

  // Enhance readability on dark backgrounds using a soft drop shadow glow
  // if this logo is used on a dark theme since the text is dark blue.
  const themeClasses = theme === 'dark' 
    ? 'drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]' 
    : 'drop-shadow-sm';

  return (
    <Link to="/" className={`${baseClasses} ${className} inline-flex items-center justify-center`}>
      <img 
        src={logoUrl} 
        alt="Solution Point Pro" 
        className={`${variantClasses[variant]} ${themeClasses}`}
        loading={variant === 'footer' ? "lazy" : "eager"}
        style={{ background: 'transparent' }}
      />
    </Link>
  );
}
