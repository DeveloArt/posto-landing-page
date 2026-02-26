import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useTranslation } from 'react-i18next';

export const ContactSupport: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = (window as any).grecaptcha?.getResponse?.();

    if (!token) {
      alert(t("contact.form.captchaRequired"));
      return;
    }

    const subject = encodeURIComponent(`${formData.subject}: ${formData.name}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:posto@develoart.pl?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    (window as any).grecaptcha?.reset?.();

    alert(t("contact.thanks"));
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          {t("contact.back")}
        </Link>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">{t("contact.title")}</h1>
        <p className="text-gray-600 text-lg mb-12">
          {t("contact.desc")}
        </p>
        
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-lg w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                {t("contact.form.subject")}
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              >
                <option value="">{t("contact.form.selectSubject")}</option>
                <option value="technical">{t("contact.form.technical")}</option>
                <option value="feature">{t("contact.form.feature")}</option>
                <option value="privacy">{t("contact.form.privacy")}</option>
                <option value="other">{t("contact.form.other")}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
                placeholder={t("contact.form.send2")}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-green-200 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("contact.form.send")}
            </button>
            {recaptchaSiteKey ? (
              <div
                className="g-recaptcha"
                data-sitekey={recaptchaSiteKey}
              />
            ) : (
              <p className="text-sm text-red-600">{t("contact.form.captchaMissing")}</p>
            )}
          </form>
        </div>

        <div className="mt-12 p-8 bg-green-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("contact.form.alt")}</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>{t("contact.form.email2")}:</strong> posto@develoart.pl</p>
            <p><strong>{t("contact.form.response")}:</strong> {t("contact.form.response2")}</p>
            <p className="text-sm text-gray-600">
              {t("contact.form.urgent")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
