import React from 'react';
import { CheckCircle, Globe, Zap } from 'lucide-react';
import { CtaButton } from './CtaButton';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-4 border border-brand-100">
                <Globe className="w-4 h-4 mr-2" />
                Available in 150+ Countries
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Turn your spare time</span>{' '}
                <span className="block text-brand-600 xl:inline">into real rewards.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Join thousands of users worldwide who are earning rewards by completing simple online steps. No experience required. Secure, fast, and free to start.
              </p>
              
              <div className="mt-6 space-y-2 sm:space-y-0 sm:flex sm:justify-center lg:justify-start gap-4 text-gray-600 mb-8">
                 <div className="flex items-center">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                    <span>Instant Access</span>
                 </div>
                 <div className="flex items-center">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                    <span>No Fees</span>
                 </div>
                 <div className="flex items-center">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                    <span>Verified Tasks</span>
                 </div>
              </div>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <CtaButton size="xl" animate={true} />
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-400 sm:mt-4">
                By clicking "Start Now", you agree to our Terms of Service.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
          src="https://picsum.photos/800/600?grayscale&blur=2"
          alt="Person using mobile device"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent lg:via-white/0"></div>
      </div>
    </div>
  );
};