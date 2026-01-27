import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Hero } from './Hero';
import { StatusCard } from './StatusCard';
import { Features } from './Features';
import { Testimonials } from './Testimonials';
import { Footer } from './Footer';
import { Pricing } from './Pricing';

export const Home: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollFromBottom) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'auto' });
      setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.state]);
  return (
    <div className="w-full min-h-screen bg-white font-display antialiased text-gray-900 overflow-x-hidden">
      <div className="relative bg-background-light overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-green-200 opacity-30 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-blue-100 opacity-40 blur-2xl pointer-events-none"></div>
        <Header />
        <div className="w-full mx-auto px-6 lg:px-8 pb-12 lg:pb-24 lg:pt-8 lg:flex lg:items-center lg:justify-between relative z-10">
          <div className="lg:w-1/2 lg:pr-12 lg:ml-28"><Hero /></div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-center lg:pl-16 perspective-1000">
            <div className="w-full max-w-sm transform transition-transform lg:hover:scale-105 duration-500"><StatusCard /></div>
          </div>
        </div>
      </div>
      <Features />
      {/*<div className="bg-green-50/50"><Testimonials /></div>*/}
      <Pricing />
      <Footer />
    </div>
  );
};
