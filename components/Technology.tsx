
import React from 'react';
import { ShellIcon, FlaskIcon } from './Icons';
import { useLanguage } from './LanguageContext';

const Technology: React.FC = () => {
  const { t } = useLanguage();
  
  const steps = [
    { num: "01", title: t.tech.step1, desc: t.tech.step1Desc },
    { num: "02", title: t.tech.step2, desc: t.tech.step2Desc },
    { num: "03", title: t.tech.step3, desc: t.tech.step3Desc },
    { num: "04", title: t.tech.step4, desc: t.tech.step4Desc }
  ];

  return (
    <section id="technology" className="py-24 bg-ocean-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-ocean/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sustainability/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-sustainability font-bold uppercase tracking-widest mb-2">{t.tech.tag}</h3>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.tech.title}</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            {t.tech.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-sustainability/40 group-hover:text-sustainability transition-colors">{step.num}</span>
                <div className="h-px w-full bg-slate-700"></div>
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:translate-x-2 transition-transform">{step.title}</h4>
              <p className="text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block p-3 bg-sustainability/20 rounded-2xl mb-6">
                <FlaskIcon />
              </div>
              <h3 className="text-3xl font-serif mb-4">{t.tech.innovTitle}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {t.tech.innovDesc}
              </p>
              <ul className="space-y-3">
                {t.tech.innovStats.map((stat: string, i: number) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sustainability rounded-full"></div>
                    <span className="text-slate-200">{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/id/155/400/400" className="rounded-2xl w-full h-48 object-cover shadow-lg" alt="Lab Work" />
              <img src="https://picsum.photos/id/175/400/400" className="rounded-2xl w-full h-48 object-cover shadow-lg mt-8" alt="Pure Powder" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
