import React from 'react';
import { Icon } from './Icon';
import logo from '../assets/images/icon.png'

export const Header: React.FC = () => {
  return (
    <nav className="max-w-full min-w-full mx-auto px-6 lg:px-8 py-6 flex justify-between items-center  relative z-20">
      <div className="flex items-center space-x-2 cursor-pointer">
        <Icon name="postoIcon" src={logo} className="text-primary text-3xl h-16 w-16" filled />
        <span className="text-xl font-bold tracking-tight text-gray-900">
          Posto
        </span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 mr-12">
        <a href="#" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">Features</a>
        <a href="#" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">Testimonials</a>
        <a href="#" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">Pricing</a>
      </div>
    </nav>
  );
};