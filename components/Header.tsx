import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/icon.png';
import { useTranslation } from "react-i18next";
import {useState} from 'react';


export const Header: React.FC = () => {
  const { t,i18n } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const polandFlag = <img src="https://hatscripts.github.io/circle-flags/flags/pl.svg" alt="polish" width="35" />
  const enFlag = <img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" alt="english" width="35" />

  const handleLanguageChange = () => {
    if(i18n.language === 'pl'){
      i18n.changeLanguage('en');
    }else{
      i18n.changeLanguage('pl');
    }
  }
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
          <a href="#features" className="text-gray-600 hover:text-green-500 font-medium transition-all hover:scale-110 text-sm sm:text-base">{t('nav.features')}</a>
          {/*<a href="#testimonials" className="text-gray-600 hover:text-green-500 font-medium transition-all hover:scale-110 text-sm sm:text-base">{t('nav.testimonials')}</a>*/}
          <a href="#pricing" className="text-gray-600 hover:text-green-500 font-medium transition-all hover:scale-110 text-sm sm:text-base">{t('nav.pricing')}</a>
          <ul className="flex items-center gap-2">
            <li className="cursor-pointer"><button className={`bg-transparent cursor-pointer transition-all hover:scale-110 ${i18n.language === 'pl' ? 'border-2 border-green-500 rounded-full p-1' : ''}`} onClick={handleLanguageChange}>{polandFlag}</button></li>
            <li className="cursor-pointer"><button className={`bg-transparent cursor-pointer transition-all hover:scale-110 ${i18n.language === 'en' ? 'border-2 border-green-500 rounded-full p-1' : ''}`} onClick={handleLanguageChange}>{enFlag}</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};