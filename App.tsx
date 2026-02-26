import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { ContactSupport } from './components/ContactSupport';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

function App() {
  const {t,i18n} = useTranslation();
  useEffect(() => {
    document.title=t("title")
  }, [i18n.language,t]);

  return (
    <Router basename={import.meta.env.PROD ? "/posto" : "/"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact-support" element={<ContactSupport />} />
      </Routes>
    </Router>
  );
}

export default App;
