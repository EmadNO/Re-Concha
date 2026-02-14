
import React from 'react';
import { useLanguage } from './LanguageContext';

const Team: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-sustainability font-bold uppercase tracking-[0.3em] mb-4 text-sm">{t.team.tag}</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">{t.team.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed opacity-80">
            {t.team.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.team.members.map((member: any, index: number) => (
            <div 
              key={index} 
              className="group bg-shell-bone p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500 transform hover:-translate-y-2 text-start flex flex-col h-full relative"
            >
              {/* Verification badge moved to a subtle corner position */}
              <div className="absolute top-8 right-8 text-sustainability opacity-20 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>

              <div className="flex-grow">
                <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-ocean transition-colors">{member.name}</h4>
                <p className="text-ocean font-bold text-sm uppercase tracking-widest mb-8 pb-4 border-b border-slate-200/50">{member.role}</p>
                
                <div className="relative">
                  <svg className={`absolute -top-4 ${language === 'ar' ? '-right-2' : '-left-2'} w-10 h-10 text-ocean/5`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H16.017C14.9124 7 14.017 7.89543 14.017 9V14M3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C9.12157 16 10.017 15.1046 10.017 14V9C10.017 7.89543 9.12157 7 8.017 7H5.017C3.91243 7 3.017 7.89543 3.017 9V14" />
                  </svg>
                  <p className="text-slate-600 text-[15px] leading-relaxed italic relative z-10 pt-2 font-medium">
                    "{member.quote}"
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Verified Leadership</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-ocean/5 rounded-full blur-[100px] -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sustainability/5 rounded-full blur-[120px] translate-x-1/4"></div>
    </section>
  );
};

export default Team;
