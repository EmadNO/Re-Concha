
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: t.apps.agriculture,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', industry: t.apps.agriculture, message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-shell relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[48px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* Sidebar */}
          <div className="lg:w-1/3 bg-ocean p-12 text-white flex flex-col justify-between text-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-serif mb-6 leading-tight">{t.contact.title}</h2>
              <p className="text-ocean-light mb-12 text-lg opacity-90 leading-relaxed">
                {t.contact.subtitle}
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-ocean-light font-bold mb-1 opacity-60">Location</span>
                    <span className="text-lg font-medium">{language === 'ar' ? 'صلالة، سلطنة عمان' : 'Salalah, Sultanate of Oman'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-12">
              <span className="block text-xs uppercase tracking-widest text-ocean-light font-bold mb-4 opacity-60">Follow Re-Concha</span>
              <a 
                href="https://www.instagram.com/re.concha?igsh=cjJrbHJsZGQxMWph" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-ocean transition-all duration-500 group active:scale-95"
                title="Follow us on Instagram"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Form Content */}
          <div className="lg:w-2/3 p-12 text-start relative">
            {isSuccess && (
              <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md flex items-center justify-center p-12 text-center animate-fade-in">
                <div className="max-w-md animate-scale-in">
                  <div className="w-24 h-24 bg-sustainability/10 rounded-full flex items-center justify-center mx-auto mb-8 text-sustainability">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-3xl font-serif text-slate-900 mb-4">{language === 'ar' ? 'شكراً لتواصلك!' : 'Thank you for reaching out!'}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {language === 'ar' ? 'لقد تلقينا استفسارك وسيقوم أحد خبرائنا الفنيين بالتواصل معك قريباً لمناقشة احتياجاتك من كربونات الكالسيوم.' : 'We have received your inquiry. One of our technical experts will reach out to you shortly to discuss your CaCO₃ requirements.'}
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="bg-ocean text-white font-bold px-10 py-4 rounded-2xl hover:bg-ocean-dark transition-all active:scale-95 shadow-lg shadow-ocean/20"
                  >
                    {language === 'ar' ? 'إرسال استفسار آخر' : 'Send Another Inquiry'}
                  </button>
                </div>
              </div>
            )}

            <h3 className="text-2xl font-bold text-slate-900 mb-8">{t.contact.inquiryTitle}</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-bold text-slate-700 mb-2 transition-colors group-focus-within:text-ocean">{t.contact.name}</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ocean/20 focus:border-ocean transition-all" 
                    placeholder={language === 'ar' ? 'الاسم بالكامل' : 'John Doe'} 
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-slate-700 mb-2 transition-colors group-focus-within:text-ocean">{t.contact.email}</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ocean/20 focus:border-ocean transition-all" 
                    placeholder="john@company.com" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-bold text-slate-700 mb-2 transition-colors group-focus-within:text-ocean">{t.contact.company}</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ocean/20 focus:border-ocean transition-all" 
                    placeholder={language === 'ar' ? 'اسم الشركة' : 'Acme Corp'} 
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-slate-700 mb-2 transition-colors group-focus-within:text-ocean">{t.contact.industry}</label>
                  <select 
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ocean/20 focus:border-ocean transition-all appearance-none"
                  >
                    <option>{t.apps.agriculture}</option>
                    <option>{t.apps.animalFeed}</option>
                    <option>{t.apps.construction}</option>
                    <option>{t.apps.water}</option>
                    <option>{language === 'ar' ? 'أخرى' : 'Other'}</option>
                  </select>
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-bold text-slate-700 mb-2 transition-colors group-focus-within:text-ocean">{t.contact.message}</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ocean/20 focus:border-ocean transition-all resize-none" 
                  placeholder={language === 'ar' ? 'أخبرنا عن متطلباتك...' : 'Tell us about your requirements...'}
                ></textarea>
              </div>
              
              <button 
                disabled={isSubmitting}
                className={`group relative overflow-hidden bg-sustainability hover:bg-sustainability-dark text-white font-black py-5 px-12 rounded-[24px] transition-all shadow-xl hover:shadow-sustainability/30 w-full md:w-auto active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{language === 'ar' ? 'جاري المعالجة...' : 'Processing...'}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span>{t.contact.submit}</span>
                    <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
