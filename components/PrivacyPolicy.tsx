import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useTranslation } from 'react-i18next';

export const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToHome = () => {
    navigate('/', { state: { scrollFromBottom: true } });
  };

  return (
    <div className="w-full min-h-screen bg-white font-display antialiased text-gray-900">
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-4 pb-16 lg:pt-6 lg:pb-24">
        <Link 
          to="/" 
          onClick={(e) => {
            e.preventDefault();
            handleBackToHome();
          }}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors mb-12 text-base"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t('privacy.back')}
        </Link>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">{t('privacy.title')}</h1>
        
        <p className="text-lg text-gray-600 mb-8">
          {t('privacy.effectiveDate')} | {t('privacy.owner')}
        </p>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. {t('privacy.1.title')}</h2>
            <p>
              {t('privacy.1.desc')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. {t('privacy.2.title')}</h2>
            <p>
              {t('privacy.2.desc')}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('privacy.2.list.1')}</li>
              <li>{t('privacy.2.list.2')}</li>
              <li>{t('privacy.2.list.3')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. {t('privacy.3.title')}</h2>
            <p>
              {t('privacy.3.desc')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. {t('privacy.4.title')}</h2>
            <p>
              {t('privacy.4.desc')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. {t('privacy.5.title')}</h2>
            <p>
              {t('privacy.5.desc')}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('privacy.5.list.1')}</li>
              <li>{t('privacy.5.list.2')}</li>
              <li>{t('privacy.5.list.3')}</li>
              <li>{t('privacy.5.list.4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. {t('privacy.6.title')}</h2>
            <p>
              {t('privacy.6.desc')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. {t('privacy.7.title')}</h2>
            <p>
              {t('privacy.7.desc')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. {t('privacy.8.title')}</h2>
            <p>
              {t('privacy.8.desc')}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

