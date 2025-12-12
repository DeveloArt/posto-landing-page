import React from 'react';
import { Icon } from './Icon';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    icon: 'timer',
    title: 'Smart Timer',
    description: 'Customizable timers for 16:8, 18:6, 20:4, or custom fasting windows tailored to your daily schedule.',
    colorClass: 'text-primary',
    iconBgClass: 'bg-green-100',
  },
  {
    icon: 'monitoring',
    title: 'Detailed Insights',
    description: 'Visualize your progress with beautiful weekly charts, weight tracking, and key health markers.',
    colorClass: 'text-blue-600',
    iconBgClass: 'bg-blue-100',
  },
  {
    icon: 'restaurant_menu',
    title: 'Meal Plans',
    description: 'Access thousands of expert-approved recipes and meal suggestions perfect for your eating window.',
    colorClass: 'text-orange-600',
    iconBgClass: 'bg-orange-100',
  },
];

export const Features: React.FC = () => {
  return (
    <section className="px-6 py-20 lg:py-28 bg-white max-w-full mx-auto">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-primary font-bold text-xs uppercase tracking-widest bg-green-50 px-4 py-1.5 rounded-full">
          Why Posto?
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-6 leading-tight">
          Everything you need to reach your health goals
        </h2>
        <p className="text-gray-500 mt-4 text-lg">We provide the tools, you provide the dedication.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-8 rounded-3xl bg-gray-50 hover:bg-green-50/50 hover:shadow-lg transition-all duration-300 group"
          >
            <div
              className={`w-14 h-14 rounded-2xl ${feature.iconBgClass} ${feature.colorClass} flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 transition-transform`}
            >
              <Icon name={feature.icon} className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};