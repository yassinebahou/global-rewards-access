import React from 'react';
import { COMPANY_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
        <div className="mt-4 text-center text-xs text-gray-400 max-w-2xl mx-auto">
          <p>
            Disclaimer: This is an advertisement. Participation is voluntary. Results may vary. 
            We are not a financial institution. All tasks are subject to verification by third-party providers.
          </p>
        </div>
      </div>
    </footer>
  );
};