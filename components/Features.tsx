import React from 'react';
import { Icon } from './Icon';
import { FeatureItem } from '../types';
import { useTranslation } from 'react-i18next';

export const Features: React.FC = () => {
  const { t } = useTranslation();
  const features: FeatureItem[] = [
    {
      icon: 'timer',
      title: `${t("features.items.title1")}`,
      description: `${t("features.items.desc1")}`,
      colorClass: 'text-green-600',
      iconBgClass: 'bg-green-100',
    },
    {
      icon: 'monitoring',
      title: `${t("features.items.title2")}`,
      description: `${t("features.items.desc2")}`,
      colorClass: 'text-blue-600',
      iconBgClass: 'bg-blue-100',
    },
  ];
  return (
    <section className="px-6 py-20 lg:py-28 bg-white max-w-full mx-auto" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-green-100 px-4 py-1.5 rounded-full">
            {t("features.title")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-6 leading-tight">
            {t("features.desc1")}
          </h2>
          <p className="text-gray-500 mt-4 text-lg">{t("features.desc2")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-8 rounded-3xl bg-gray-50 hover:bg-green-50/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.iconBgClass} ${feature.colorClass} flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 transition-transform`}
              >
                <Icon name={feature.icon} className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
