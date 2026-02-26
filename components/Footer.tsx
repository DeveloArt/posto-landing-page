import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import logo from '../assets/images/icon.png';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="w-full px-6 py-16 lg:py-20 mx-auto">
        
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center border-b border-gray-800 pb-16 mb-12 lg:ml-5 lg:mr-5">
          <div className="mb-10 lg:mb-0 max-w-xl lg:ml-5 lg:mr-5">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("footer.title")}</h2>
            <p className="text-gray-400 text-lg">
              {t("footer.desc")}
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end shrink-0">
            <button onClick={handleClick} className="w-full lg:w-auto bg-green-400 hover:bg-green-500 text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-green-900/50 flex items-center justify-center transition-all transform hover:-translate-y-1 mb-3 cursor-pointer">
              {t("footer.button")}
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 mb-6 md:mb-0 ml-5 hover:opacity-80 transition-opacity cursor-pointer"
          >
             <img src={logo} alt="Posto logo" className="h-12 w-12 rounded-2xl" />
             <span className="text-lg font-bold text-white">Posto</span>
          </Link>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
             <Link to="/privacy-policy" className="hover:text-white transition-colors">{t("footer.links.privacy")}</Link>
             <Link to="/terms-of-service" className="hover:text-white transition-colors">{t("footer.links.terms")}</Link>
             <Link to="/contact-support" className="hover:text-white transition-colors">{t("footer.links.contact")}</Link>
          </div>
          
          <div className="flex space-x-6 mr-5">
            <a href="https://www.facebook.com/profile.php?id=61587877926037" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};