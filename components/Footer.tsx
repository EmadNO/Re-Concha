
import React from 'react';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16 text-start">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-2xl font-black text-white tracking-tight uppercase">Re-Concha</span>
              <span className="text-[9px] font-bold tracking-[0.4em] text-slate-500 uppercase">Project</span>
            </div>
            <p className="text-base leading-relaxed mb-8 text-slate-400">
              {language === 'ar' ? 'نقود التحول نحو اقتصاد ساحلي دائري في عمان من خلال تقنية تحويل النفايات إلى معادن المبتكرة.' : 'Leading the transition towards a circular coastal economy in Oman through innovative waste-to-mineral technology.'}
            </p>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl inline-flex">
              <span className="text-white font-bold text-sm tracking-widest">{language === 'ar' ? 'رؤية عمان ٢٠٤٠' : 'OMAN VISION 2040'}</span>
              <div className="flex gap-1.5">
                <div className="w-6 h-4 bg-red-600 rounded-sm shadow-sm"></div>
                <div className="w-6 h-4 bg-white rounded-sm shadow-sm"></div>
                <div className="w-6 h-4 bg-green-600 rounded-sm shadow-sm"></div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">{language === 'ar' ? 'الشركة' : 'Company'}</h4>
            <ul className="space-y-5 text-base">
              <li><a href="#about" className="hover:text-sustainability transition-colors">{t.nav.about}</a></li>
              <li><a href="#" className="hover:text-sustainability transition-colors">{language === 'ar' ? 'فريقنا' : 'Our Team'}</a></li>
              <li><a href="#" className="hover:text-sustainability transition-colors">{language === 'ar' ? 'تقرير الاستدامة' : 'Sustainability Report'}</a></li>
              <li><a href="#" className="hover:text-sustainability transition-colors">{language === 'ar' ? 'الوظائف' : 'Careers'}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">{language === 'ar' ? 'التقنية' : 'Technology'}</h4>
            <ul className="space-y-5 text-base">
              <li><a href="#technology" className="hover:text-sustainability transition-colors">{t.tech.tag}</a></li>
              <li><a href="#applications" className="hover:text-sustainability transition-colors">{t.apps.tag}</a></li>
              <li><a href="#" className="hover:text-sustainability transition-colors">{language === 'ar' ? 'نتائج المختبر' : 'Lab Results'}</a></li>
              <li><a href="#" className="hover:text-sustainability transition-colors">{language === 'ar' ? 'خارطة البحث' : 'R&D Roadmap'}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">{language === 'ar' ? 'قانوني' : 'Legal'}</h4>
            <ul className="space-y-5 text-base">
              <li><a href="#" className="hover:text-sustainability transition-colors">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a></li>
              <li><a href="#" className="hover:text-sustainability transition-colors">{language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}</a></li>
              <li><a href="#" className="hover:text-sustainability transition-colors">{language === 'ar' ? 'الامتثال' : 'Compliance'}</a></li>
              <li><a href="#" className="hover:text-sustainability transition-colors">{language === 'ar' ? 'الشهادات' : 'Certifications'}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-medium">
            {language === 'ar' ? '© ٢٠٢٤ ري-كونشا ش.م.م. جميع الحقوق محفوظة. صلالة، عمان.' : `© ${new Date().getFullYear()} Re-Concha LLC. All Rights Reserved. Salalah, Oman.`}
          </p>
          <div className="flex gap-10">
            <a 
              href="https://www.instagram.com/re.concha?igsh=cjJrbHJsZGQxMWph" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-bold hover:text-white transition-colors tracking-widest uppercase"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
