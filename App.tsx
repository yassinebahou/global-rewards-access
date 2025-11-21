import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Steps } from './components/Steps';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { StickyBottomCta } from './components/StickyBottomCta';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />
      <Steps />
      <Features />
      
      <div className="bg-brand-600 py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg leading-6 text-brand-100">
            It takes less than 2 minutes to set up your account and browse available tasks.
          </p>
          <div className="mt-8 w-full sm:w-auto inline-block">
            <a
              href="https://www.mobtrk.link/view.php?id=5542359&pub=3314347"
              className="block w-full px-8 py-4 bg-white border border-transparent rounded-full font-bold text-lg text-brand-600 hover:bg-gray-50 md:py-4 md:text-xl md:px-10 shadow-lg transition-transform transform hover:scale-105"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <StickyBottomCta />
    </div>
  );
};

export default App;