import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useTranslation } from 'react-i18next';

export const TermsOfService: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          {t("terms.back")}
        </Link>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">{t("terms.title")}</h1>
        
        <p className="text-lg text-gray-600 mb-8">
          {t('terms.effectiveDate')} | {t('terms.owner')}
        </p>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.1.title")}</h2>
            <p>{t("terms.1.desc")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.2.title")}</h2>
            <p>{t("terms.2.desc")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.3.title")}</h2>
            <p className="text-red-600 font-semibold">{t("terms.3.desc")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.4.title")}</h2>
            <p>{t("terms.4.desc")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.5.title")}</h2>
            <p className="mb-4">{t("terms.5.desc")}</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>12:12</strong> - {t("terms.5.list.1")}</li>
              <li><strong>14:10</strong> - {t("terms.5.list.2")}</li>
              <li><strong>16:8</strong> - {t("terms.5.list.3")}</li>
              <li><strong>18:6</strong> - {t("terms.5.list.4")}</li>
              <li><strong>20:4</strong> - {t("terms.5.list.5")}</li>
              <li><strong>23:1</strong> - {t("terms.5.list.6")}</li>
            </ul>
            <p className="font-semibold mt-4">{t("terms.5.examples.title")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("terms.5.examples.1")}</li>
              <li>{t("terms.5.examples.2")}</li>
              <li>{t("terms.5.examples.3")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.6.title")}</h2>
            <p className="text-red-600 font-semibold mb-2">{t("terms.6.desc")}</p>
            <p className="mb-2">{t("terms.6.sideEffects")}</p>
            <p className="text-red-600 font-bold">{t("terms.6.stop")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.7.title")}</h2>
            <p>{t("terms.7.desc")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.8.title")}</h2>
            <p>{t("terms.8.desc")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.9.title")}</h2>
            <p>{t("terms.9.desc")}</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
