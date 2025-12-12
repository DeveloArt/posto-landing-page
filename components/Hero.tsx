import React from 'react';
import { Icon } from './Icon';

export const Hero: React.FC = () => {
  return (
    <div className="text-center lg:text-left pt-8 lg:pt-0">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-primary text-xs font-bold uppercase tracking-wide mb-6">
        <span className="mr-2">✨</span> New v2.0 Released
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
        Master Your Body <br className="hidden lg:block" />
        <span className="text-primary">Through Fasting</span>
      </h1>
      
      <p className="text-gray-600 mb-8 text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
        Simple, effective, and natural. Join millions improving their health
        with our intuitive fasting tracker. No diets, just timing.
      </p>

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
        <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-green-200 flex items-center justify-center transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
          <Icon name="ios" className="mr-2" />
          <span>App Store</span>
        </button>
        <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg flex items-center justify-center transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
          <Icon name="android" className="mr-2" />
          <span>Google Play</span>
        </button>
      </div>
      
      <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-500">
        <div className="flex -space-x-2">
           {[1,2,3,4].map(i => (
             <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
             </div>
           ))}
        </div>
        <p>Trusted by 2M+ users</p>
      </div>
    </div>
  );
};