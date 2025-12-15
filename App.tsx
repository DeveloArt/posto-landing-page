import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatusCard } from './components/StatusCard';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Pricing } from './components/Pricing';

function App() {
  return (
    <div className="w-full min-h-screen bg-white font-display antialiased text-gray-900 overflow-x-hidden">
      
      {/* Hero Section Wrapper with Background */}
      <div className="relative bg-background-light overflow-hidden">
        {/* Decorative Blobs - Larger on Desktop */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-green-200 opacity-30 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-blue-100 opacity-40 blur-2xl pointer-events-none"></div>

        <Header />

        {/* Hero Content Grid */}
        <div className="w-full mx-auto px-6 lg:px-8 pb-12 lg:pb-24 lg:pt-8 lg:flex lg:items-center lg:justify-between relative z-10">
          <div className="lg:w-1/2 lg:pr-12 lg:ml-28">
            <Hero />
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mr-28 lg:mt-0 flex justify-center lg:justify-end perspective-1000">
             <div className="w-full max-w-sm transform transition-transform lg:hover:scale-105 duration-500">
                <StatusCard />
             </div>
          </div>
        </div>
      </div>

      <Features />
      
      <div className="bg-green-50/50">
         <Testimonials />
      </div>

      <Pricing />

      <Footer />
    </div>
  );
}

export default App;