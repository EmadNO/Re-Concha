
import React from 'react';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-ocean-dark">
      {/* Dynamic Background Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1439396087961-99bc12bd8830?auto=format&fit=crop&q=80&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-${language === 'ar' ? 'l' : 'r'} from-ocean-dark via-ocean-dark/80 to-transparent`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-white text-center md:text-start">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-2xl animate-fade-in-up mx-auto lg:mx-0">
            <div className="flex items-center gap-4 mb-8 lg:hidden justify-center">
              <div className="h-8 w-1 bg-sustainability"></div>
              <div className="flex flex-col text-start">
                <span className="text-xl font-black tracking-widest uppercase">Re-Concha</span>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-300">Project</span>
              </div>
            </div>
            
            <h2 className="hidden lg:block text-sustainability font-bold tracking-widest uppercase mb-6 text-sm md:text-lg">
              {t.hero.tag}
            </h2>
            
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 drop-shadow-2xl">
              {t.hero.title} <span className="text-sustainability">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
              {t.hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a 
                href="#technology" 
                className="bg-sustainability hover:bg-sustainability-dark text-white px-10 py-5 rounded-full font-bold text-xl text-center transition-all transform hover:scale-105 shadow-2xl shadow-sustainability/40"
              >
                {t.hero.ctaTech}
              </a>
              <a 
                href="#applications" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-xl text-center transition-all hover:border-white"
              >
                {t.hero.ctaB2B}
              </a>
            </div>
            
            <div className="mt-14 flex items-center gap-6 justify-center lg:justify-start">
              <div className={`flex ${language === 'ar' ? 'space-x-reverse -space-x-4' : '-space-x-4'}`}>
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+20}/80/80`} className="w-12 h-12 rounded-full border-2 border-white/50 object-cover" alt="User" />
                ))}
              </div>
              <p className="text-sm md:text-base font-medium text-slate-200">
                {t.hero.trust}
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative group">
              <div className="absolute inset-0 bg-ocean/30 blur-[120px] rounded-full scale-150 group-hover:bg-sustainability/20 transition-colors duration-1000"></div>
              
              <div className="relative z-10 p-16 border border-white/10 bg-white/5 backdrop-blur-md rounded-[48px] shadow-inner transform transition-transform duration-700 hover:scale-105 flex flex-col items-center">
                <div className="text-center">
                  <div className="text-6xl font-black tracking-tighter text-white uppercase">Re-Concha</div>
                  <div className="text-sm font-bold tracking-[0.8em] text-slate-300 uppercase mt-4">Project</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Stats */}
      <div className="absolute bottom-10 left-0 right-0 z-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "95%+", label: t.hero.stats.purity, color: "text-sustainability" },
            { val: "100%", label: t.hero.stats.chemicalFree, color: "text-ocean-light" },
            { val: "Zero", label: t.hero.stats.waste, color: "text-sustainability" },
            { val: "2040", label: t.hero.stats.vision, color: "text-ocean-light" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl transform hover:scale-105 transition-all hover:bg-white/10">
              <div className={`text-4xl font-bold mb-1 font-serif ${stat.color}`}>{stat.val}</div>
              <div className="text-xs uppercase tracking-widest text-slate-300 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
