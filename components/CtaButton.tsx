import React from 'react';
import { ArrowRight } from 'lucide-react';
import { OFFER_LINK } from '../constants';

interface CtaButtonProps {
  className?: string;
  fullWidth?: boolean;
  size?: 'md' | 'lg' | 'xl';
  animate?: boolean;
}

export const CtaButton: React.FC<CtaButtonProps> = ({ 
  className = '', 
  fullWidth = false, 
  size = 'lg',
  animate = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-300";
  
  const sizeStyles = {
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  const widthStyles = fullWidth ? "w-full" : "";
  
  const animationStyles = animate ? "animate-pulse-slow" : "";

  return (
    <a
      href={OFFER_LINK}
      className={`${baseStyles} ${sizeStyles[size]} ${widthStyles} ${animationStyles} bg-brand-600 hover:bg-brand-500 text-white ${className}`}
      role="button"
    >
      Start Now
      <ArrowRight className="ml-2 w-5 h-5" />
    </a>
  );
};