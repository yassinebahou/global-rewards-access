import React from 'react';
import { UserPlus, MousePointerClick, Gift } from 'lucide-react';

const steps = [
  {
    title: '1. Register for Free',
    description: 'Create your account in seconds. Access is open globally.',
    icon: UserPlus,
  },
  {
    title: '2. Complete Simple Tasks',
    description: 'Follow easy instructions on your dashboard. Tasks are quick and verified instantly.',
    icon: MousePointerClick,
  },
  {
    title: '3. Receive Rewards',
    description: 'Get credited immediately upon completion. It really is that simple.',
    icon: Gift,
  },
];

export const Steps: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Three steps to success
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We've stripped away the complexity. Our platform connects you directly with advertisers looking for real user interaction.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center justify-center p-4 bg-brand-600 rounded-full shadow-lg">
                    <step.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-4 text-base text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};