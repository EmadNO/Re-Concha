
import React from 'react';
import { useLanguage } from './LanguageContext';

const Impact: React.FC = () => {
  const { t, language } = useLanguage();

  const stats = [
    { label: t.impact.diverted, value: language === 'ar' ? '250 طن' : '250 Tons', icon: "🌊" },
    { label: t.impact.emissions, value: "65%", icon: "🌱" },
    { label: t.impact.jobs, value: "+120", icon: "🤝" },
    { label: t.impact.support, value: language === 'ar' ? '500 ألف ر.ع' : 'OMR 500k', icon: "🇴🇲" }
  ];

  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h3 className="text-sustainability font-bold uppercase tracking-widest mb-2">{t.impact.tag}</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">{t.impact.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.impact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-shell p-8 rounded-3xl text-center border border-slate-50 shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform inline-block">{stat.icon}</div>
              <div className="text-4xl font-bold text-ocean font-serif mb-2">{stat.value}</div>
              <div className="text-slate-500 font-medium uppercase tracking-wider text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-8 md:p-16 bg-gradient-to-br from-ocean to-ocean-dark rounded-[40px] text-white flex flex-col lg:flex-row items-center gap-12 text-start">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-serif mb-6">{t.impact.protectTitle}</h3>
            <p className="text-ocean-light text-lg mb-8 leading-relaxed">
              {t.impact.protectDesc}
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sustainability rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.impact.diversion}</h4>
                  <p className="text-ocean-light text-sm">{t.impact.diversionText}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sustainability rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.impact.ocean}</h4>
                  <p className="text-ocean-light text-sm">{t.impact.oceanText}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="aspect-square relative flex items-center justify-center">
              <div className="absolute inset-0 border-4 border-dashed border-white/20 rounded-full animate-spin-slow"></div>
              <div className="relative z-10 text-center p-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <div className="text-5xl font-bold mb-2">{t.impact.circular}</div>
                <div className="text-sustainability font-bold text-xl uppercase tracking-widest">{t.impact.economy}</div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-ocean px-4 py-2 rounded-full font-bold shadow-lg">{t.impact.collection}</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-ocean px-4 py-2 rounded-full font-bold shadow-lg">{t.impact.distribution}</div>
              <div className={`absolute ${language === 'ar' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} top-1/2 -translate-y-1/2 bg-white text-ocean px-4 py-2 rounded-full font-bold shadow-lg`}>{t.impact.refinement}</div>
              <div className={`absolute ${language === 'ar' ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} top-1/2 -translate-y-1/2 bg-white text-ocean px-4 py-2 rounded-full font-bold shadow-lg`}>{t.impact.product}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
