
import React, { useState } from 'react';
import { LeafIcon, WavesIcon, BuildingIcon, ShellIcon } from './Icons';
import { useLanguage } from './LanguageContext';

const Applications: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedApp, setSelectedApp] = useState<number | null>(null);

  const pillars = [
    {
      title: t.apps.agriculture,
      desc: t.apps.agriDesc,
      icon: <LeafIcon />,
      color: "bg-green-50 text-green-600",
      accent: "border-green-200",
      details: language === 'ar' 
        ? "يحسن درجة حموضة التربة، ويزيد من توافر العناصر الغذائية، ويعزز بنية التربة للمحاصيل العمانية. منتجنا يساعد المزارعين على زيادة الإنتاجية مع تقليل الاعتماد على الأسمدة الكيماوية."
        : "Improves soil pH, increases nutrient availability, and enhances soil structure for Omani crops. Our product helps farmers increase yield while reducing dependence on chemical fertilizers."
    },
    {
      title: t.apps.animalFeed,
      desc: t.apps.feedDesc,
      icon: <ShellIcon />,
      color: "bg-amber-50 text-amber-600",
      accent: "border-amber-200",
      details: language === 'ar'
        ? "مصدر كالسيوم طبيعي بنسبة 100% للدواجن والماشية، مما يحسن جودة قشر البيض وصحة العظام. يتميز بامتصاص عالي للمساعدة في نمو الحيوانات بشكل صحي وطبيعي."
        : "100% natural calcium source for poultry and livestock, improving eggshell quality and bone health. Features high bio-availability to help animals grow healthily and naturally."
    },
    {
      title: t.apps.construction,
      desc: t.apps.constDesc,
      icon: <BuildingIcon />,
      color: "bg-blue-50 text-blue-600",
      accent: "border-blue-200",
      details: language === 'ar'
        ? "يستخدم كحشو عالي الأداء في الخرسانة والدهانات، مما يقلل من البصمة الكربونية للمشاريع الإنشائية. يعزز من متانة المواد البنائية ويوفر بديلاً مستداماً للمواد التقليدية."
        : "High-performance filler for concrete and paints, reducing the carbon footprint of construction projects. Enhances building material durability and provides a sustainable alternative to traditional materials."
    },
    {
      title: t.apps.water,
      desc: t.apps.waterDesc,
      icon: <WavesIcon />,
      color: "bg-cyan-50 text-cyan-600",
      accent: "border-cyan-200",
      details: language === 'ar'
        ? "وسط ترشيح طبيعي لمعالجة مياه الصرف الصحي الصناعية ومعادلة الأحماض بكفاءة عالية. يساهم في حماية الموارد المائية العمانية الثمينة من خلال تقنيات تصفية صديقة للبيئة."
        : "Natural filtration media for industrial wastewater treatment and highly efficient acid neutralization. Contributes to protecting Oman's precious water resources through eco-friendly filtration techniques."
    }
  ];

  return (
    <section id="applications" className="py-24 bg-shell relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-start">
            <h3 className="text-sustainability font-bold uppercase tracking-[0.3em] mb-4 text-sm">{t.apps.tag}</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">{t.apps.title}</h2>
          </div>
          <p className="text-slate-600 max-w-sm text-start opacity-80">
            {t.apps.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[40px] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col group h-full transform hover:-translate-y-2 text-start"
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6 ${pillar.color}`}>
                {pillar.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h4>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {pillar.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-slate-50">
                <button 
                  onClick={() => setSelectedApp(index)}
                  className="text-ocean font-bold flex items-center gap-2 hover:gap-4 transition-all group/btn active:scale-95"
                >
                  {t.apps.learnMore}
                  <svg className={`w-5 h-5 transition-transform group-hover/btn:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedApp !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedApp(null)}
          ></div>
          <div className="relative bg-white w-full max-w-xl rounded-[48px] overflow-hidden shadow-2xl animate-scale-in text-start">
            <div className="p-10 md:p-14">
              <button 
                onClick={() => setSelectedApp(null)}
                className="absolute top-8 right-8 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              
              <div className={`inline-flex items-center gap-4 px-6 py-3 rounded-2xl mb-8 ${pillars[selectedApp].color}`}>
                <div className="w-8 h-8">{pillars[selectedApp].icon}</div>
                <span className="text-sm font-bold uppercase tracking-widest">{pillars[selectedApp].title}</span>
              </div>
              
              <h3 className="text-3xl font-serif mb-6 text-slate-900">{pillars[selectedApp].title} {language === 'ar' ? 'بالتفصيل' : 'Details'}</h3>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  {pillars[selectedApp].details}
                </p>
              </div>
              
              <button 
                onClick={() => setSelectedApp(null)}
                className="w-full bg-ocean text-white font-bold py-5 rounded-2xl hover:bg-ocean-dark transition-colors active:scale-95 shadow-lg shadow-ocean/20 flex items-center justify-center gap-3"
              >
                {language === 'ar' ? 'إغلاق النافذة' : 'Close Details'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Applications;
