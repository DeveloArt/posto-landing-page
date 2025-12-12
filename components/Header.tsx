import React from 'react';
import { Icon } from './Icon';

export const Header: React.FC = () => {
  return (
    <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex justify-between items-center relative z-20">
      <div className="flex items-center space-x-2 cursor-pointer">
        <Icon name="postoIcon" src='./assets/images/icon.png' className="text-primary text-3xl h-16 w-16" filled />
        <span className="text-xl font-bold tracking-tight text-gray-900">
          Posto
        </span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">Features</a>
        <a href="#" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">Testimonials</a>
        <a href="#" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">Pricing</a>
        <button className="bg-white border border-gray-200 text-gray-900 hover:border-primary hover:text-primary px-5 py-2 rounded-xl font-medium shadow-sm transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
          Log in
        </button>
      </div>
    </nav>
  );
};