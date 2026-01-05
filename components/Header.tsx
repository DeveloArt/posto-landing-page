import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/icon.png';

export const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="max-w-full min-w-full mx-auto px-6 lg:px-8 py-6 flex justify-between items-center relative z-20">
      <Link to="/" className="flex items-center space-x-2 cursor-pointer" id="nav">
        <div className="relative">
          <div className="absolute inset-0 bg-green-400 rounded-2xl blur-xl opacity-30"></div>
          <img src={logo} alt="Posto logo" className="h-16 w-16 rounded-2xl relative z-10" />
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900">
          Posto
        </span>
      </Link>
      
      {isHomePage && (
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 mr-0 sm:mr-6 md:mr-12">
          <a href="#features" className="text-gray-600 hover:text-green-500 font-medium transition-all hover:scale-110 text-sm sm:text-base">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-green-500 font-medium transition-all hover:scale-110 text-sm sm:text-base">Testimonials</a>
          <a href="#pricing" className="text-gray-600 hover:text-green-500 font-medium transition-all hover:scale-110 text-sm sm:text-base">Pricing</a>
        </div>
      )}
    </nav>
  );
};