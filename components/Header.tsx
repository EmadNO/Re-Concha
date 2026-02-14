
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.technology, href: '#technology' },
    { label: t.nav.applications, href: '#applications' },
    { label: t.nav.impact, href: '#impact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="flex flex-col -gap-1">
            <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase transition-colors duration-300 ${isScrolled ? 'text-ocean' : 'text-white'}`}>
              Re-Concha
            </span>
            <span className={`text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${isScrolled ? 'text-slate-500' : 'text-slate-200'}`}>
              Project
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className={`font-semibold text-lg hover:text-sustainability transition-all hover:scale-105 ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className={`font-bold border-2 px-4 py-1.5 rounded-xl transition-all hover:scale-105 ${isScrolled ? 'text-ocean border-ocean hover:bg-ocean hover:text-white' : 'text-white border-white hover:bg-white hover:text-ocean'}`}
          >
            {language === 'en' ? 'AR' : 'EN'}
          </button>

          <a 
            href="#contact" 
            className="bg-sustainability text-white px-7 py-3 rounded-full font-bold text-lg hover:bg-sustainability-dark transition-all shadow-xl shadow-sustainability/30 hover:shadow-sustainability/50 transform hover:-translate-y-1"
          >
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className={`font-bold border-2 px-3 py-1 text-sm rounded-lg ${isScrolled ? 'text-ocean border-ocean' : 'text-white border-white'}`}
          >
            {language === 'en' ? 'AR' : 'EN'}
          </button>
          <button 
            className={`${isScrolled ? 'text-ocean' : 'text-white'} p-2`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-6 px-6 flex flex-col gap-5 animate-fade-in shadow-2xl">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-slate-800 font-bold text-xl py-3 border-b border-slate-50 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-sustainability text-white px-5 py-4 rounded-2xl font-bold text-xl text-center mt-4 shadow-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.contact}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
