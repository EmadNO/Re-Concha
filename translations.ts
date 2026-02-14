
export type Language = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      team: 'Our Team',
      technology: 'Technology',
      applications: 'Applications',
      impact: 'Impact',
      contact: 'Contact B2B',
    },
    hero: {
      tag: 'Omani Innovation & Sustainability',
      title: 'Because nature deserves a',
      titleHighlight: 'second chance.',
      desc: 'Revolutionizing the circular economy by converting coastal shell waste into high-purity CaCO₃ (> 95%).',
      ctaTech: 'Explore Our Tech',
      ctaB2B: 'B2B Applications',
      trust: 'Trusted by 50+ partners across Oman.',
      stats: {
        purity: 'CaCO₃ Purity',
        chemicalFree: 'Chemical Free',
        waste: 'Zero Waste Policy',
        vision: 'Oman Vision Aligned'
      }
    },
    about: {
      tag: 'Our Story',
      title: 'Omani Heritage meets Modern Innovation.',
      desc1: 'Founded by a group of passionate Omani students, Re-Concha was born from a simple observation: our beautiful coasts are littered with shell waste that could be transformed into value.',
      desc2: 'We align our mission with Oman Vision 2040, focusing on environmental sustainability and the development of local industries.',
      vision: 'Our Vision',
      visionText: 'To be the leading provider of sustainable mineral solutions in the GCC region by 2030.',
      mission: 'Our Mission',
      missionText: 'Converting marine waste into premium raw materials through zero-chemical technology.',
      quote: '"Preserving Oman\'s coasts, one shell at a time."'
    },
    team: {
      tag: 'Our Leadership',
      title: 'The Visionaries Behind Re-Concha',
      subtitle: 'A dedicated group of Omani professionals leading the transition to a sustainable circular economy.',
      members: [
        { name: 'Saif Bait Fareed', role: 'CEO', quote: 'We are not just recycling shells; we are redefining sustainability in Oman to build a green future aligned with Vision 2040.' },
        { name: 'Mumin Al-Amri', role: 'R&D Manager', quote: 'Our goal is scientific innovation; we convert marine waste into calcium carbonate with purity exceeding 95% to meet high industrial standards.' },
        { name: 'Abdullah Shajnah', role: 'HR Manager', quote: 'We believe in the energy of Omani youth, and we work as one team with a spirit of innovation and responsibility toward our community and environment.' },
        { name: 'Mohammed Omar Zaman Khan', role: 'Finance Manager', quote: 'We believe environmental sustainability is a winning investment for the future, and we work on building a leading business model that supports the national economy.' },
        { name: 'Asaad Al-Maamari', role: 'Operations Manager', quote: 'Accuracy and quality are the pillars of our operations, from collecting shells from beaches to producing a final product with high laboratory purity.' },
        { name: 'Abdulaziz Al-Quraishi', role: 'PR Manager', quote: 'We seek to build bridges of cooperation with the community and partners to spread the culture of a circular economy and protect our coastal environment.' },
        { name: 'Hammad Barashid', role: 'Marketing Manager', quote: 'We are here to tell the story of Omani nature with a modern touch, offering the world sustainable products that combine beauty and practical value.' }
      ]
    },
    tech: {
      tag: 'The Process',
      title: 'Sustainable Refining Technology',
      subtitle: 'Our multi-stage refining process turns neglected waste into high-value mineral powder.',
      step1: 'Waste Collection',
      step1Desc: 'Ethical sourcing of waste shells from Omani fisheries and coastal communities.',
      step2: 'Eco-Purification',
      step2Desc: 'A proprietary, chemical-free cleaning process removing organics without harmful reagents.',
      step3: 'Precision Milling',
      step3Desc: 'Grinding purified shells into a micron-level fine powder for consistency.',
      step4: 'Quality Testing',
      step4Desc: 'Rigorous lab analysis to guarantee > 95% Calcium Carbonate purity.',
      innovTitle: 'Chemical-Free Innovation',
      innovDesc: 'Unlike traditional mining, our process requires no quarrying or harsh acid leaching. We preserve natural lattice structure.',
      innovStats: ['95.4% CaCO₃ Content', 'Zero CO₂ Mining Footprint', 'Water Recycling System']
    },
    apps: {
      tag: 'The 4 Pillars',
      title: 'Versatile Solutions for a Sustainable Market.',
      subtitle: 'Our high-purity powder is engineered to integrate seamlessly into diverse workflows.',
      agriculture: 'Agriculture',
      agriDesc: 'Premium soil conditioner for neutralizing acidity and enriching crops with vital calcium.',
      animalFeed: 'Animal Feed',
      feedDesc: 'Natural mineral supplement for poultry and livestock. Highly bio-available calcium.',
      construction: 'Construction',
      constDesc: 'Eco-friendly filler for sustainable concrete. Enhances durability and reduces footprint.',
      water: 'Water Treatment',
      waterDesc: 'Efficient filtration media for wastewater neutralization. A natural alternative to chemicals.',
      learnMore: 'Learn More'
    },
    impact: {
      tag: 'Our Impact',
      title: 'A Positive Cycle for Our Planet.',
      subtitle: 'Sustainability isn\'t just our goal; it\'s our core product. We measure success by the health of our coasts.',
      diverted: 'Coastal Waste Diverted',
      emissions: 'Carbon Emissions Saved',
      jobs: 'Community Jobs Created',
      support: 'Local Industry Support',
      protectTitle: 'Protecting Oman\'s Coastlines',
      protectDesc: 'Shell waste disruptions. By collecting and refining it, we provide a circular solution benefiting biodiversity.',
      diversion: 'Landfill Diversion',
      diversionText: 'Reducing organic waste in landfills by up to 25% in coastal regions.',
      ocean: 'Ocean Conservation',
      oceanText: 'Preventing decomposition of shells in sensitive tidal zones.',
      circular: 'Circular',
      economy: 'Economy',
      collection: 'Collection',
      distribution: 'Distribution',
      refinement: 'Refinement',
      product: 'Product'
    },
    contact: {
      title: 'Let\'s build a greener future.',
      subtitle: 'Interested in B2B partnerships or bulk orders? Our team is ready to provide technical specs.',
      inquiryTitle: 'Send an Inquiry',
      name: 'Full Name',
      email: 'Email Address',
      company: 'Company Name',
      industry: 'Application Industry',
      message: 'Message',
      submit: 'Submit Inquiry'
    },
    ai: {
      greeting: "Hello! I'm Re-Concha's Sustainability Assistant. How can I help you learn about our CaCO₃ products today?",
      placeholder: "Type your question...",
      title: "Re-Concha Assistant",
      subtitle: "Ask about CaCO₃ or Sustainability"
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      team: 'فريق العمل',
      technology: 'التقنية',
      applications: 'التطبيقات',
      impact: 'الأثر',
      contact: 'تواصل معنا B2B',
    },
    hero: {
      tag: 'ابتكار عماني واستدامة',
      title: 'لأن الطبيعة تستحق',
      titleHighlight: 'فرصة ثانية.',
      desc: 'نحدث ثورة في الاقتصاد الدائري عبر تحويل نفايات الأصداف الساحلية إلى كربونات كالسيوم عالية النقاء (> 95%).',
      ctaTech: 'استكشف تقنيتنا',
      ctaB2B: 'تطبيقات B2B',
      trust: 'موثوق من قبل أكثر من 50 شريكاً في جميع أنحاء عمان.',
      stats: {
        purity: 'نقاء CaCO₃',
        chemicalFree: 'خالٍ من الكيماويات',
        waste: 'سياسة صفر نفايات',
        vision: 'متوافق مع رؤية عمان'
      }
    },
    about: {
      tag: 'قصتنا',
      title: 'تراث عماني يلتقي بالابتكار الحديث.',
      desc1: 'تأسست ري-كونشا على يد مجموعة من الطلاب العمانيين الشغوفين، ولدت من ملاحظة بسيطة: سواحلنا الجميلة مليئة بنفايات الأصداف التي يمكن تحويلها إلى قيمة.',
      desc2: 'نحن نوائم مهمتنا مع رؤية عمان 2040، مع التركيز على الاستدامة البيئية وتطوير الصناعات المحلية.',
      vision: 'رؤيتنا',
      visionText: 'أن نكون المزود الرائد لحلول المعادن المستدامة في منطقة الخليج بحلول عام 2030.',
      mission: 'مهمتنا',
      missionText: 'تحويل النفايات البحرية إلى مواد خام ممتازة من خلال تقنية خالية من المواد الكيميائية.',
      quote: '"نحمي سواحل عمان، صدفة تلو الأخرى."'
    },
    team: {
      tag: 'قيادتنا',
      title: 'المبتكرون وراء ري-كونشا',
      subtitle: 'مجموعة مخلصة من المهنيين العمانيين الذين يقودون التحول نحو اقتصاد دائري مستدام.',
      members: [
        { name: 'سيف بيت فريد', role: 'المدير التنفيذي', quote: 'نحن لا نعيد تدوير الأصداف فحسب، بل نعيد صياغة مفهوم الاستدامة في عمان لنبني مستقبلاً أخضر يتماشى مع رؤية 2040.' },
        { name: 'مؤمن العمري', role: 'مدير البحث والتطوير', quote: 'هدفنا هو الابتكار العلمي؛ حيث نحول المخلفات البحرية إلى كربونات كالسيوم بنقاوة تتجاوز 95% لتلبية أعلى المعايير الصناعية.' },
        { name: 'عبدالله شجنعه', role: 'مدير الموارد البشرية', quote: 'نحن نؤمن بطاقات الشباب العماني، ونعمل كفريق واحد بروح الابتكار والمسؤولية تجاه مجتمعنا وبيئتنا.' },
        { name: 'محمد عمر زمان خان', role: 'مدير المالية', quote: 'نؤمن بأن الاستدامة البيئية هي استثمار رابح للمستقبل، ونعمل على بناء نموذج عمل ريادي يدعم الاقتصاد الوطني.' },
        { name: 'أسعد المعمري', role: 'مدير العمليات', quote: 'الدقة والجودة هما ركيزتا عملياتنا، من جمع الأصداف من الشواطئ وحتى وصول المنتج النهائي بنقاوة مختبرية عالية.' },
        { name: 'عبدالعزيز القريشي', role: 'مدير العلاقات العامة', quote: 'نسعى لبناء جسور من التعاون مع المجتمع والشركاء لنشر ثقافة الاقتصاد الدائري وحماية بيئتنا الساحلية.' },
        { name: 'حماد بارشيد', role: 'مدير التسويق', quote: 'نحن هنا لنحكي قصة الطبيعة العمانية بلمسة عصرية، ونقدم للعالم منتجات مستدامة تجمع بين الجمال والقيمة العملية.' }
      ]
    },
    tech: {
      tag: 'العملية',
      title: 'تقنية تكرير مستدامة',
      subtitle: 'عملية التكرير متعددة المراحل لدينا تحول النفايات المهملة إلى مسحوق معدني عالي القيمة.',
      step1: 'جمع النفايات',
      step1Desc: 'مصادر أخلاقية لنفايات الأصداف من المصائد العمانية والمجتمعات الساحلية.',
      step2: 'التنقية البيئية',
      step2Desc: 'عملية تنظيف مملوكة وخالية من الكيماويات تزيل المواد العضوية بدون كواشف ضارة.',
      step3: 'الطحن الدقيق',
      step3Desc: 'طحن الأصداف المنقاة إلى مسحوق ناعم بمستوى ميكروني لضمان الاتساق.',
      step4: 'اختبار الجودة',
      step4Desc: 'تحليل مخبري دقيق لضمان نقاء كربونات الكالسيوم بنسبة تزيد عن 95%.',
      innovTitle: 'ابتكار خالٍ من الكيماويات',
      innovDesc: 'على عكس التعدين التقليدي، لا تتطلب عمليتنا محاجر أو غسيلاً بالأحماض القاسية. نحن نحافظ على البنية الطبيعية.',
      innovStats: ['محتوى CaCO₃ بنسبة 95.4%', 'بصمة كربونية صفرية للتعدين', 'نظام إعادة تدوير المياه']
    },
    apps: {
      tag: 'الأركان الأربعة',
      title: 'حلول متعددة الاستخدامات لسوق مستدام.',
      subtitle: 'تم تصميم مسحوقنا عالي النقاء ليندمج بسلاسة في تدفقات العمل الصناعية المختلفة.',
      agriculture: 'الزراعة',
      agriDesc: 'محسن تربة ممتاز لمعادلة الحموضة وإثراء المحاصيل بالكالسيوم الحيوي.',
      animalFeed: 'أعلاف الحيوانات',
      feedDesc: 'مكمل معدني طبيعي للدواجن والمواشي. كالسيوم عالي الامتصاص الحيوي.',
      construction: 'البناء',
      constDesc: 'حشو صديق للبيئة لخرسانة مستدامة. يعزز المتانة ويقلل البصمة الكربونية.',
      water: 'معالجة المياه',
      waterDesc: 'وسط ترشيح فعال لمعادلة مياه الصرف الصحي. بديل طبيعي للكيماويات.',
      learnMore: 'اقرأ المزيد'
    },
    impact: {
      tag: 'أثرنا',
      title: 'دورة إيجابية لكوكبنا.',
      subtitle: 'الاستدامة ليست مجرد هدفنا؛ إنها منتجنا الأساسي. نقيس النجاح بصحة سواحلنا.',
      diverted: 'نفايات ساحلية محولة',
      emissions: 'توفير انبعاثات الكربون',
      jobs: 'وظائف مجتمعية مستحدثة',
      support: 'دعم الصناعة المحلية',
      protectTitle: 'حماية سواحل عمان',
      protectDesc: 'تؤدي نفايات الأصداف لاضطرابات بيئية. من خلال جمعها وتكريرها، نقدم حلاً دائرياً يفيد التنوع البيولوجي.',
      diversion: 'تحويل المكبات',
      diversionText: 'تقليل النفايات العضوية في المكبات بنسبة تصل إلى 25% في المناطق الساحلية.',
      ocean: 'حماية المحيطات',
      oceanText: 'منع تحلل الأصداف في المناطق المدية الحساسة.',
      circular: 'اقتصاد',
      economy: 'دائري',
      collection: 'الجمع',
      distribution: 'التوزيع',
      refinement: 'التكرير',
      product: 'المنتج'
    },
    contact: {
      title: 'لنبنِ مستقبلاً أكثر اخضراراً.',
      subtitle: 'هل تهتم بشراكات B2B أو الطلبات الكبيرة؟ فريقنا مستعد لتقديم المواصفات الفنية.',
      inquiryTitle: 'أرسل استفساراً',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      company: 'اسم الشركة',
      industry: 'قطاع التطبيق',
      message: 'الرسالة',
      submit: 'إرسال الاستفسار'
    },
    ai: {
      greeting: "أهلاً بك! أنا مساعد الاستدامة في ري-كونشا. كيف يمكنني مساعدتك في التعرف على منتجاتنا اليوم؟",
      placeholder: "اكتب سؤالك هنا...",
      title: "مساعد ري-كونشا",
      subtitle: "اسأل عن كربونات الكالسيوم أو الاستدامة"
    }
  }
};
