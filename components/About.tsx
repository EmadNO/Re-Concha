
import React from 'react';
import { useLanguage } from './LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className={`absolute -top-4 ${language === 'ar' ? '-right-4' : '-left-4'} w-24 h-24 bg-ocean/10 rounded-full -z-10`}></div>
            <div className={`absolute -bottom-4 ${language === 'ar' ? '-left-4' : '-right-4'} w-32 h-32 bg-sustainability/10 rounded-full -z-10`}></div>
            <img 
              src="https://picsum.photos/id/163/800/600" 
              className="rounded-3xl shadow-2xl relative z-10 w-full" 
              alt="Omani Coastline" 
            />
            <div className={`absolute bottom-6 ${language === 'ar' ? 'right-6' : 'left-6'} bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px]`}>
              <h4 className="font-bold text-ocean mb-1">{language === 'ar' ? 'فخر عماني' : 'Proudly Omani'}</h4>
              <p className="text-sm text-slate-600">
                {language === 'ar' ? 'مدفوعون بروح الابتكار والحفاظ على تراثنا.' : 'Driven by the spirit of innovation and the preservation of our heritage.'}
              </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-sustainability font-bold uppercase tracking-widest mb-2">{t.about.tag}</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">{t.about.title}</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {t.about.desc1}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t.about.desc2}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-shell rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">{t.about.vision}</h4>
                <p className="text-sm text-slate-600">{t.about.visionText}</p>
              </div>
              <div className="p-4 bg-shell rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">{t.about.mission}</h4>
                <p className="text-sm text-slate-600">{t.about.missionText}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-sustainability"></div>
              <span className="font-serif italic text-xl text-slate-800">{t.about.quote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
