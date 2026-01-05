import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import logo from '../assets/images/icon.png';

export const Footer: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="w-full px-6 py-16 lg:py-20 mx-auto">
        
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center border-b border-gray-800 pb-16 mb-12 lg:ml-5 lg:mr-5">
          <div className="mb-10 lg:mb-0 max-w-xl lg:ml-5 lg:mr-5">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to transform your life?</h2>
            <p className="text-gray-400 text-lg">
              Join the community and start your journey to a healthier you today.
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end shrink-0">
            <button onClick={handleClick} className="w-full lg:w-auto bg-green-400 hover:bg-green-500 text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-green-900/50 flex items-center justify-center transition-all transform hover:-translate-y-1 mb-3 cursor-pointer">
              Get Started For Free
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
             <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
             <Link to="/contact-support" className="hover:text-white transition-colors">Contact Support</Link>
          </div>
          
          <div className="flex space-x-6 mr-5">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.06 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <polygon fill="currentColor" points="41,6 9.929,42 6.215,42 37.287,6"></polygon><polygon fill="gray-500" points="31.143,41 7.82,7 16.777,7 40.1,41" clipRule="evenodd"></polygon><path fill="currentColor" d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};