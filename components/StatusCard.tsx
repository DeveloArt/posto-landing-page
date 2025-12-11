import React from 'react';
import { Icon } from './Icon';

export const StatusCard: React.FC = () => {
  return (
    <div className="bg-white rounded-[2rem] p-4 shadow-2xl shadow-green-900/10 border border-gray-100 w-full relative z-20">
      <div className="bg-gray-50 rounded-[1.5rem] p-6 border border-gray-100 relative overflow-hidden">
        
        {/* Card Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
              Current Fast
            </p>
            <h3 className="text-xl font-bold text-gray-900">
              16:8 Intermittent
            </h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-primary shadow-sm">
            <Icon name="bolt" className="text-lg" filled />
          </div>
        </div>

        {/* Circular Progress Indicator */}
        <div className="flex justify-center my-6">
          <div className="w-48 h-48 rounded-full border-[10px] border-gray-200 relative flex items-center justify-center bg-white shadow-inner">
            {/* Progress Arc */}
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-[10px] border-primary border-t-transparent border-l-transparent rotate-45 transform -translate-0.5"></div>
            
            <div className="text-center relative z-10">
              <span className="block text-4xl font-bold text-gray-900 tracking-tighter">
                14:20
              </span>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Elapsed</span>
            </div>
          </div>
        </div>

        {/* Times */}
        <div className="flex justify-between text-center mt-8 px-2">
          <div>
            <p className="text-xs text-gray-400 font-medium mb-1">Started</p>
            <p className="text-base font-bold text-gray-700">8:00 PM</p>
          </div>
          <div className="h-8 w-px bg-gray-200"></div>
          <div>
            <p className="text-xs text-gray-400 font-medium mb-1">Goal</p>
            <p className="text-base font-bold text-gray-700">12:00 PM</p>
          </div>
        </div>
      </div>

      {/* Verification Badge */}
      <div className="mt-5 flex items-center justify-center space-x-2 text-xs font-medium text-gray-500 bg-gray-50 py-2 rounded-xl">
        <Icon name="verified" className="text-primary text-base" filled />
        <span>Scientifically proven method</span>
      </div>
    </div>
  );
};