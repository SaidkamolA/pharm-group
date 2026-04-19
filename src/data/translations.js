// src/data/translations.js
import { faqRu, faqUz } from "./faqData.js";
import { faqEn } from "./faqEn.js";

const serviceCardsEn = {
  registration: {
    title: "Regulatory Registration",
    shortDescription: "Registration of pharmaceutical and healthcare products in Uzbekistan.",
    backTitle: "Registerable products:",
    items: ["Pharmaceutical products", "Medical devices & equipment", "Veterinary products", "Food supplements", "API"],
  },
  turnkey: {
    title: "Turnkey Registration Process",
    shortDescription: "Full support from dossier to certification.",
    backTitle: "Turnkey Registration Process:",
    items: ["Dossier preparation", "Translation", "Submission to authorities", "Regulatory support", "Import & certification", "GDP inspection support"],
  },
  marketing: {
    title: "Pharmaceutical Marketing",
    shortDescription: "Market entry and business development support.",
    backTitle: "Pharmaceutical Marketing:",
    items: ["Market research", "Competitor analysis", "Distributor connections", "Medical community engagement"],
  },
  pharmacovigilance: {
    title: "Pharmacovigilance",
    shortDescription: "Drug safety and compliance systems.",
    backTitle: "Pharmacovigilance:",
    items: ["Adverse event reporting", "Safety monitoring", "PSUR reports", "Signal management", "Pharmacovigilance representation"],
  },
  support: {
    title: "Additional Support Services",
    shortDescription: "Supporting regulatory and business processes.",
    backTitle: "Additional Support Services:",
    items: ["Translation services", "Staff recruitment", "Clinical studies support", "Regulatory consulting"],
  },
  strategy: {
    title: "Regulatory Strategy",
    shortDescription: "Strategic planning for efficient market entry and compliance.",
    backTitle: "Regulatory Strategy:",
    items: ["Regulatory pathway planning", "Market entry strategy", "Gap analysis", "Compliance consulting", "Authority communication support"],
  },
};

const serviceCardsRu = {
  registration: {
    title: "Регистрация в регуляторном порядке",
    shortDescription: "Регистрация лекарственных средств, медицинских изделий и смежной продукции в Узбекистане.",
    backTitle: "Что регистрируем:",
    items: [
      "Лекарственные средства",
      "Медицинские изделия и оборудование",
      "Ветеринарная продукция",
      "БАД",
      "Фармацевтическое сырьё (API)",
    ],
  },
  turnkey: {
    title: "Регистрация «под ключ»",
    shortDescription: "Сопровождение от подготовки досье до получения регистрационного удостоверения.",
    backTitle: "Процесс «под ключ»:",
    items: [
      "Подготовка досье",
      "Перевод",
      "Подача в органы",
      "Регуляторное сопровождение",
      "Импорт и сертификация",
      "Подготовка к инспекции GDP",
    ],
  },
  marketing: {
    title: "Фармацевтический маркетинг",
    shortDescription: "Вывод на рынок и развитие бизнеса.",
    backTitle: "Фармацевтический маркетинг:",
    items: [
      "Исследование рынка",
      "Анализ конкурентов",
      "Подбор дистрибьюторов",
      "Работа с медицинским сообществом",
    ],
  },
  pharmacovigilance: {
    title: "Фармаконадзор",
    shortDescription: "Безопасность препаратов и системы соответствия требованиям.",
    backTitle: "Фармаконадзор:",
    items: [
      "Учёт нежелательных реакций",
      "Мониторинг безопасности",
      "Отчёты PSUR",
      "Выявление сигналов",
      "Представительство по фармаконадзору",
    ],
  },
  support: {
    title: "Дополнительные услуги",
    shortDescription: "Поддержка регуляторных и операционных процессов.",
    backTitle: "Дополнительные услуги:",
    items: [
      "Переводы",
      "Подбор персонала",
      "Сопровождение клинических исследований",
      "Регуляторный консалтинг",
    ],
  },
  strategy: {
    title: "Регуляторная стратегия",
    shortDescription: "Стратегическое планирование выхода на рынок и соответствия нормам.",
    backTitle: "Регуляторная стратегия:",
    items: [
      "Планирование регуляторного пути",
      "Стратегия выхода на рынок",
      "Gap-анализ",
      "Консалтинг по комплаенсу",
      "Взаимодействие с органами",
    ],
  },
};

const serviceCardsUz = {
  registration: {
    title: "Regulyator ro'yxatdan o'tkazish",
    shortDescription: "O'zbekistonda dori vositalari, tibbiy buyumlar va bog'liq mahsulotlarni ro'yxatdan o'tkazish.",
    backTitle: "Ro'yxatdan o'tkaziladigan mahsulotlar:",
    items: [
      "Dori vositalari",
      "Tibbiy buyumlar va uskunalar",
      "Veterinariya mahsulotlari",
      "Parhez qo'shimchalari (БАД)",
      "API (farmatsevtika xom ashyosi)",
    ],
  },
  turnkey: {
    title: "Ro'yxatdan o'tkazish «kalit topshirish» asosida",
    shortDescription: "Dosyeni tayyorlashdan tortib sertifikat olishgacha to'liq qo'llab-quvvatlash.",
    backTitle: "«Kalit topshirish» jarayoni:",
    items: [
      "Dosyeni tayyorlash",
      "Tarjima",
      "Organlarga topshirish",
      "Regulyator qo'llab-quvvatlash",
      "Import va sertifikatlash",
      "GDP tekshiruviga tayyorlash",
    ],
  },
  marketing: {
    title: "Farmatsevtik marketing",
    shortDescription: "Bozorga chiqish va biznesni rivojlantirish bo'yicha yordam.",
    backTitle: "Farmatsevtik marketing:",
    items: [
      "Bozorni o'rganish",
      "Raqobatchilarni tahlil qilish",
      "Distribyutorlar bilan bog'lanish",
      "Tibbiyot jamoasi bilan ishlash",
    ],
  },
  pharmacovigilance: {
    title: "Farmakovigilans",
    shortDescription: "Dori xavfsizligi va talablarga muvofiqlik tizimlari.",
    backTitle: "Farmakovigilans:",
    items: [
      "Yomon tasirlar hisoboti",
      "Xavfsizlik monitoringi",
      "PSUR hisobotlari",
      "Signal aniqlash",
      "Farmakovigilans vakilligi",
    ],
  },
  support: {
    title: "Qo'shimcha qo'llab-quvvatlash xizmatlari",
    shortDescription: "Regulyator va operatsion jarayonlarni qo'llab-quvvatlash.",
    backTitle: "Qo'shimcha xizmatlar:",
    items: [
      "Tarjima xizmatlari",
      "Xodimlarni tanlash",
      "Klinik tadqiqotlarni qo'llab-quvvatlash",
      "Regulyator konsalting",
    ],
  },
  strategy: {
    title: "Regulyator strategiyasi",
    shortDescription: "Bozorga samarali chiqish va talablarga rioya qilish bo'yicha strategik rejalashtirish.",
    backTitle: "Regulyator strategiyasi:",
    items: [
      "Regulyator yo'lni rejalashtirish",
      "Bozorga chiqish strategiyasi",
      "Bo'shliqlar tahlili (gap)",
      "Muvofiqlik konsaltingi",
      "Organlar bilan muloqot",
    ],
  },
};

const sharedServiceDetails = {
  registration: {
    title: "Regulatory Registration",
    paragraphs: ["PASTE YOUR TEXT HERE"],
  },
  turnkey: {
    title: "Turnkey Registration Process",
    paragraphs: ["PASTE YOUR TEXT HERE"],
  },
  marketing: {
    title: "Pharmaceutical Marketing",
    paragraphs: ["PASTE YOUR TEXT HERE"],
  },
  pharmacovigilance: {
    title: "Pharmacovigilance Services in Uzbekistan",
    paragraphs: [
      "Ensure full regulatory compliance and patient safety with a trusted local partner in Uzbekistan.",
      "Pharm Group provides end-to-end pharmacovigilance solutions fully aligned with Ministry of Health requirements and international GVP guidelines and standards.",
    ],
    sections: [
      {
        title: "Pharmacovigilance services",
        items: [
          "Local Pharmacovigilance Representative in Uzbekistan",
          "Adverse Event Reporting (ICSR Management)",
          "PSUR / PBRER Preparation & Submission",
          "Signal Detection & Risk Management",
          "Regulatory Communication & Authority Liaison",
          "Local Literature Monitoring",
        ],
      },
      {
        title: "Why Choose Pharm Group",
        items: [
          "Strong understanding of Uzbekistan pharmacovigilance regulations",
          "Proven experience working with international pharmaceutical companies",
          "Fast response and local presence on the ground",
          "Full alignment with ICH, GVP, and global PV standards",
          "Reliable support during inspections and audits",
        ],
      },
    ],
  },
  support: {
    title: "Additional Support Services",
    paragraphs: ["PASTE YOUR TEXT HERE"],
  },
  strategy: {
    title: "Regulatory Strategy",
    paragraphs: ["PASTE YOUR TEXT HERE"],
  },
};

export const translations = {
  en: {
    meta: {
      logoAlt: "Pharm Group Uzbekistan regulatory consulting",
      htmlLang: "en",
      pageTitle: "Pharmaceutical Registration & Regulatory Affairs in Uzbekistan | Pharm Group",
      pageDescription:
        "Pharm Group (UBI Consulting LLC): drug and medical device registration, pharmacovigilance, and market entry support for pharmaceutical companies in Uzbekistan.",
<<<<<<< HEAD
      keywords:
        "Pharm Group, Pharm Group Uzbekistan, pharm Uzbekistan, pharmaceutical registration Uzbekistan, drug registration Uzbekistan, regulatory consulting Uzbekistan, pharmacovigilance Uzbekistan, medical device registration Uzbekistan, pharma market entry Uzbekistan, UBI Consulting LLC, pharm.ubi.uz",
=======
>>>>>>> a7e0216743e7ff0029e1c04002c658bac61faf80
      ogSiteName: "Pharm Group",
      ogUrl: "https://pharm.ubi.uz",
      ogImage: "https://pharm.ubi.uz/images/cover.png",
    },
    ui: {
      backToTop: "Back to top",
      mobileContact: "Contact",
      learnMore: "Learn more",
    },
    nav: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "faq", label: "FAQ" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      title: "Pharmaceutical Registration & Regulatory Affairs in Uzbekistan",
      subtitle: "Drug Registration, Pharmacovigilance & Market Entry Services",
      description:
        "Pharm Group project of UBI Consulting LLC (further Pharm Group) provides high-level regulatory consulting for pharmaceutical companies and medical device manufacturers. Pharm Group ensures compliance, accelerate product approvals, and streamline communication with health authorities in the territory of Uzbekistan.",
      primaryButton: "Contact Pharm Group",
      secondaryButton: "Pharm Group Services",
    },
    about: {
      title: "About Pharm Group",
      lead: "Regulatory Affairs & Market Entry Experts in Uzbekistan",
      paragraphs: [
        "Pharm Group is a specialized regulatory affairs consulting company and a project of UBI Consulting, focused on pharmaceutical products, medical devices, food supplements, and veterinary products registration in Uzbekistan.",
        "Pharm Group provides full-cycle regulatory support — from dossier preparation to obtaining registration certificates and interaction with health authorities.",
      ],
      highlights: ["✔ Faster market entry", "✔ Reduced regulatory risks", "✔ Full regulatory support"],
      imageAlt: "Pharmaceutical Team",
      stats: [
        { value: "1000+", label: "Dossiers Prepared" },
        { value: "20+", label: "Years Experience" },
        { value: "100+", label: "Clients" },
      ],
    },
    clients: {
      title: "Pharm Group clients",
      subtitle: "Trusted by pharmaceutical and healthcare companies",
    },
    services: {
      title: "Pharm Group services",
      subtitle:
        "Comprehensive regulatory support for international pharmaceutical and healthcare companies in Uzbekistan",
    },
    faq: {
      ...faqEn,
      pageTitle: "FAQ — Pharmaceutical Registration in Uzbekistan | Pharm Group",
      pageDescription:
        "FAQ on the pharmaceutical market, registration, pharmacovigilance, and compliance in Uzbekistan. Full English Q&A.",
    },
    serviceCards: serviceCardsEn,
    serviceDetails: sharedServiceDetails,
    contact: {
      title: "Contact Pharm Group",
      subtitle: "Get in touch with Pharm Group regulatory experts",
      infoTitle: "Contact Information",
      emailLabel: "Email:",
      phoneLabel: "Phone:",
      addressLabel: "Address:",
      mapTitle: "Pharm Group map location",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        submit: "Send Message",
        sending: "Sending…",
        success: "Thank you! Your message has been sent.",
        error: "Something went wrong. Please try again or email us directly.",
      },
    },
    footer: { copyright: "© Pharm Group project of UBI Consulting LLC" },
  },
  ru: {
    meta: {
      logoAlt: "Pharm Group Узбекистан, регуляторный консалтинг",
      htmlLang: "ru",
      pageTitle: "Регистрация лекарств и регуляторный консалтинг в Узбекистане | Pharm Group",
      pageDescription:
        "Pharm Group (UBI Consulting LLC): регистрация лекарств и медицинских изделий, фармаконадзор и поддержка выхода на рынок фармкомпаний в Узбекистане.",
<<<<<<< HEAD
      keywords:
        "Pharm Group, Pharm Group Узбекистан, регистрация лекарств Узбекистан, фармацевтика Узбекистан, регуляторный консалтинг, фармаконадзор, медицинские изделия регистрация, вывод препаратов на рынок, pharm.ubi.uz",
=======
>>>>>>> a7e0216743e7ff0029e1c04002c658bac61faf80
      ogSiteName: "Pharm Group",
      ogUrl: "https://pharm.ubi.uz",
      ogImage: "https://pharm.ubi.uz/images/cover.png",
    },
    ui: {
      backToTop: "Наверх",
      mobileContact: "Связаться",
      learnMore: "Подробнее",
    },
    nav: [
      { id: "home", label: "Главная" },
      { id: "about", label: "О нас" },
      { id: "services", label: "Услуги" },
      { id: "faq", label: "FAQ" },
      { id: "contact", label: "Контакты" },
    ],
    hero: {
      title: "Регистрация и регуляторные вопросы фармацевтики в Узбекистане",
      subtitle: "Регистрация препаратов, фармаконадзор и вывод на рынок",
      description:
        "Pharm Group проект UBI Consulting LLC предоставляет профессиональный регуляторный консалтинг для фармацевтических компаний и производителей медицинских изделий в Узбекистане.",
      primaryButton: "Связаться с Pharm Group",
      secondaryButton: "Услуги Pharm Group",
    },
    about: {
      title: "О Pharm Group",
      lead: "Эксперты по регуляторным вопросам и выходу на рынок",
      paragraphs: [
        "Pharm Group специализируется на регистрационных процедурах для лекарств, медицинских изделий, БАДов и ветеринарной продукции в Узбекистане.",
        "Мы обеспечиваем полный цикл поддержки: от подготовки досье до получения регистрационных сертификатов и взаимодействия с органами здравоохранения.",
      ],
      highlights: ["✔ Быстрый выход на рынок", "✔ Снижение регуляторных рисков", "✔ Полная регуляторная поддержка"],
      imageAlt: "Фармацевтическая команда",
      stats: [
        { value: "1000+", label: "Подготовленных досье" },
        { value: "20+", label: "Лет опыта" },
        { value: "100+", label: "Клиентов" },
      ],
    },
    clients: { title: "Клиенты Pharm Group", subtitle: "Нам доверяют фармацевтические и медицинские компании" },
    services: {
      title: "Услуги Pharm Group",
      subtitle:
        "Комплексная регуляторная поддержка для международных фармацевтических и медицинских компаний в Узбекистане",
    },
    faq: {
      ...faqRu,
      pageTitle: `${faqRu.title} | Pharm Group`,
      pageDescription: `${faqRu.subtitle} — Pharm Group, Узбекистан`,
    },
    serviceCards: serviceCardsRu,
    serviceDetails: sharedServiceDetails,
    contact: {
      title: "Связаться с Pharm Group",
      subtitle: "Свяжитесь с нашими регуляторными экспертами",
      infoTitle: "Контактная информация",
      emailLabel: "Email:",
      phoneLabel: "Телефон:",
      addressLabel: "Адрес:",
      mapTitle: "Локация Pharm Group",
      form: {
        name: "Ваше имя",
        email: "Ваш email",
        message: "Ваше сообщение",
        submit: "Отправить сообщение",
        sending: "Отправка…",
        success: "Спасибо! Сообщение отправлено.",
        error: "Не удалось отправить. Попробуйте ещё раз или напишите на email.",
      },
    },
    footer: { copyright: "© Pharm Group проект UBI Consulting LLC" },
  },
  uz: {
    meta: {
      logoAlt: "Pharm Group O'zbekiston regulyator konsaltingi",
      htmlLang: "uz",
      pageTitle: "O'zbekistonda farmatsevtik ro'yxatdan o'tkazish va regulyator xizmatlar | Pharm Group",
      pageDescription:
        "Pharm Group (UBI Consulting LLC): dori va tibbiy buyumlarni ro'yxatdan o'tkazish, farmakovigilans va xalqaro farmatsevtika kompaniyalari uchun bozorga chiqish yordami.",
<<<<<<< HEAD
      keywords:
        "Pharm Group, Pharm Group O'zbekiston, farmatsevtik ro'yxatdan o'tkazish, dori vositalari O'zbekiston, regulyator konsalting, farmakovigilans, tibbiy buyumlar, pharm.ubi.uz",
=======
>>>>>>> a7e0216743e7ff0029e1c04002c658bac61faf80
      ogSiteName: "Pharm Group",
      ogUrl: "https://pharm.ubi.uz",
      ogImage: "https://pharm.ubi.uz/images/cover.png",
    },
    ui: {
      backToTop: "Yuqoriga",
      mobileContact: "Aloqa",
      learnMore: "Batafsil",
    },
    nav: [
      { id: "home", label: "Bosh sahifa" },
      { id: "about", label: "Biz haqimizda" },
      { id: "services", label: "Xizmatlar" },
      { id: "faq", label: "FAQ" },
      { id: "contact", label: "Aloqa" },
    ],
    hero: {
      title: "O'zbekistonda farmatsevtik ro'yxatdan o'tkazish va regulyator xizmatlar",
      subtitle: "Dori ro'yxatdan o'tkazish, farmakovigilans va bozorga chiqish",
      description:
        "Pharm Group UBI Consulting LLC loyihasi bo'lib, farmatsevtika va tibbiy buyumlar ishlab chiqaruvchilari uchun yuqori darajadagi regulyator konsalting xizmatlarini ko'rsatadi.",
      primaryButton: "Pharm Group bilan bog'lanish",
      secondaryButton: "Pharm Group xizmatlari",
    },
    about: {
      title: "Pharm Group haqida",
      lead: "O'zbekistonda regulyator va bozorga kirish bo'yicha ekspertlar",
      paragraphs: [
        "Pharm Group dori vositalari, tibbiy buyumlar, parhez qo'shimchalari va veterinariya mahsulotlarini ro'yxatdan o'tkazishga ixtisoslashgan.",
        "Biz hujjat tayyorlashdan boshlab sertifikat olish va sog'liqni saqlash organlari bilan muloqotgacha to'liq qo'llab-quvvatlaymiz.",
      ],
      highlights: ["✔ Tez bozorga kirish", "✔ Regulyator xatarlarni kamaytirish", "✔ To'liq regulyator qo'llab-quvvatlash"],
      imageAlt: "Farmatsevtika jamoasi",
      stats: [
        { value: "1000+", label: "Tayyorlangan dosyelar" },
        { value: "20+", label: "Yillik tajriba" },
        { value: "100+", label: "Mijozlar" },
      ],
    },
    clients: { title: "Pharm Group mijozlari", subtitle: "Farmatsevtika va sog'liqni saqlash kompaniyalari ishonchi" },
    services: {
      title: "Pharm Group xizmatlari",
      subtitle:
        "O'zbekistonda xalqaro farmatsevtika va sog'liqni saqlash kompaniyalari uchun kompleks regulyator yordam",
    },
    faq: {
      ...faqUz,
      pageTitle: "FAQ — O'zbekistonda farmatsevtik ro'yxatdan o'tkazish | Pharm Group",
      pageDescription:
        "O'zbekiston farmatsevtika bozori, ro'yxatdan o'tkazish va regulyator masalalar bo'yicha savollar-javoblar.",
    },
    serviceCards: serviceCardsUz,
    serviceDetails: sharedServiceDetails,
    contact: {
      title: "Pharm Group bilan bog'lanish",
      subtitle: "Regulyator ekspertlarimiz bilan aloqaga chiqing",
      infoTitle: "Kontakt ma'lumotlari",
      emailLabel: "Email:",
      phoneLabel: "Telefon:",
      addressLabel: "Manzil:",
      mapTitle: "Pharm Group xaritasi",
      form: {
        name: "Ismingiz",
        email: "Email manzilingiz",
        message: "Xabaringiz",
        submit: "Xabar yuborish",
        sending: "Yuborilmoqda…",
        success: "Rahmat! Xabaringiz yuborildi.",
        error: "Xatolik yuz berdi. Qayta urinib ko'ring yoki to'g'ridan-to'g'ri email orqali yozing.",
      },
    },
    footer: { copyright: "© Pharm Group UBI Consulting LLC loyihasi" },
  },
};