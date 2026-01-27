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
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.1.title")}</h2>
            <p>
              {t("terms.1.desc")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.2.title")}</h2>
            <p>
              {t("terms.2.desc")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.3.title")}</h2>
            <p>{t("terms.3.desc")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("terms.3.list.1")}</li>
              <li>{t("terms.3.list.2")}</li>
              <li>{t("terms.3.list.3")}</li>
              <li>{t("terms.3.list.4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.4.title")}</h2>
            <p>
              {t("terms.4.desc")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.5.title")}</h2>
            <p>
              {t("terms.5.desc")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.6.title")}</h2>
            <p>
              {t("terms.6.desc")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.7.title")}</h2>
            <p>
              {t("terms.7.desc")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.8.title")}</h2>
            <p>
              {t("terms.8.desc")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("terms.9.title")}</h2>
            <p>
              {t("terms.9.desc")}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

