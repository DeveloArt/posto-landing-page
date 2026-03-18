import React from 'react';
import { Icon } from './Icon';
import { useTranslation } from 'react-i18next';

export const StatusCard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-4xl p-4 shadow-2xl shadow-green-900/10 border border-gray-100 w-full relative z-20">
      <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 relative overflow-hidden">

        <div className="flex justify-center my-6">
          <div className="w-48 h-48 rounded-full border-10 border-gray-200 relative flex items-center justify-center bg-white shadow-inner">
            <div className="absolute -top-2.5 left-20  rounded-full bg-cyan-500 w-2.5 h-2.5"></div>
            
            <div className="text-center flex flex-col items-center justify-center gap-3 relative z-10">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mt-1">{t("card.fasting")}</span>
              <span className="block text-4xl font-bold text-gray-900 tracking-wide">
                0:00:02
              </span>
              <span className="text-[10px] font-medium text-gray-500 tracking-wide mt-1">{t("card.endTime")}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-3 text-center mt-8 px-2">
          <div className="flex flex-1 flex-row items-center justify-center bg-blue-500 shadow-md rounded-xl py-2 px-3 gap-3 whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-stop-icon lucide-circle-stop"><circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>
            <p className="text-md text-white font-medium text-center">{t("card.endFast")}</p>
          </div>
          <div className="flex flex-1 flex-row items-center justify-center bg-white border border-gray-200 rounded-xl py-2 px-3 gap-3 whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
            <p className="text-md text-black font-medium text-center">{t("card.edit")}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center space-x-5 text-xs font-medium text-gray-500 bg-gray-50 py-2 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="lightgreen" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check-icon lucide-badge-check stroke-green-600"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
        <span>{t("card.method")}</span>
      </div>
    </div>
  );
};