import React from 'react';
import { Globe2, Shield, Smartphone, Clock } from 'lucide-react';

const features = [
  {
    name: 'Global Access',
    description: 'Available in over 150 countries. We accept users from almost everywhere.',
    icon: Globe2,
  },
  {
    name: 'Secure Platform',
    description: 'Your data is protected with industry-standard encryption.',
    icon: Shield,
  },
  {
    name: 'Mobile Friendly',
    description: 'Complete tasks on the go from your smartphone or tablet.',
    icon: Smartphone,
  },
  {
    name: '24/7 Availability',
    description: 'Tasks are available around the clock. Work whenever you want.',
    icon: Clock,
  },
];

export const Features: React.FC = () => {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why choose us?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We provide a transparent and reliable way to discover new apps, services, and products while getting rewarded for your time.
            </p>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white mb-4">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};