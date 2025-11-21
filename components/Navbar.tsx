import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { CtaButton } from './CtaButton';
import { COMPANY_NAME } from '../constants';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ShieldCheck className="h-8 w-8 text-brand-600" />
            <span className="ml-2 text-xl font-bold text-gray-900 tracking-tight hidden sm:block">
              {COMPANY_NAME}
            </span>
          </div>
          <div>
            <CtaButton size="md" className="bg-gray-900 hover:bg-gray-800" />
          </div>
        </div>
      </div>
    </nav>
  );
};