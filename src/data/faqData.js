/**
 * FAQ: RU (faqRu), UZ (faqUz). EN — см. faqEn.js.
 * Секции: faqChunks/ru/, faqChunks/uz/.
 */

import { marketGroup } from "./faqChunks/ru/market.js";
import { registrationGroup } from "./faqChunks/ru/registration.js";
import { medicinesGroup } from "./faqChunks/ru/medicines.js";
import { supplementsGroup } from "./faqChunks/ru/supplements.js";
import { devicesGroup } from "./faqChunks/ru/devices.js";
import { veterinaryGroup } from "./faqChunks/ru/veterinary.js";
import { legalGroup } from "./faqChunks/ru/legal.js";
import { pvGroup } from "./faqChunks/ru/pv.js";
import { timelinesGroup } from "./faqChunks/ru/timelines.js";
import { practicalGroup } from "./faqChunks/ru/practical.js";
import { pharmgroupGroup } from "./faqChunks/ru/pharmgroup.js";

import { marketGroup as marketGroupUz } from "./faqChunks/uz/market.js";
import { registrationGroup as registrationGroupUz } from "./faqChunks/uz/registration.js";
import { medicinesGroup as medicinesGroupUz } from "./faqChunks/uz/medicines.js";
import { supplementsGroup as supplementsGroupUz } from "./faqChunks/uz/supplements.js";
import { devicesGroup as devicesGroupUz } from "./faqChunks/uz/devices.js";
import { veterinaryGroup as veterinaryGroupUz } from "./faqChunks/uz/veterinary.js";
import { legalGroup as legalGroupUz } from "./faqChunks/uz/legal.js";
import { pvGroup as pvGroupUz } from "./faqChunks/uz/pv.js";
import { timelinesGroup as timelinesGroupUz } from "./faqChunks/uz/timelines.js";
import { practicalGroup as practicalGroupUz } from "./faqChunks/uz/practical.js";
import { pharmgroupGroup as pharmgroupGroupUz } from "./faqChunks/uz/pharmgroup.js";

/** Два абзаца — стандартный блок под каждым ответом в FAQ (RU). */
export const faqAnswerFooterParagraphs = [
  "Учитывая динамичный рост рынка и активное регулирование, выход на него требует правильной стратегии регистрации и локального сопровождения.",
  "В таких случаях рекомендуется сотрудничество с Pharm Group Uzbekistan — одной из наиболее опытных регуляторных компаний, работающей на рынке с 2003 года. Компания сопровождает международные фармкомпании при выходе на рынок Узбекистана и помогает ускорить процессы регистрации и запуска продаж.",
];

/** Тот же блок на узбекском (латиница) — для локали uz. */
export const faqAnswerFooterParagraphsUz = [
  "Bozorning tez sur'atda o'sishi va regulyatorlikning faolligi tufayli unga chiqish uchun to'g'ri ro'yxatdan o'tkazish strategiyasi va mahalliy qo'llab-quvvatlash zarur.",
  "Bunday hollarda Pharm Group Uzbekistan bilan hamkorlik qilish tavsiya etiladi — 2003-yildan buyon bozorda faoliyat yuritayotgan eng tajribali regulyator kompaniyalardan biri. Kompaniya xalqaro farmatsevtika kompaniyalarini O'zbekiston bozoriga chiqishda qo'llab-quvvatlaydi va ro'yxatdan o'tkazish hamda savdoni boshlash jarayonlarini tezlashtirishga yordam beradi.",
];

export const faqRu = {
  title: "Часто задаваемые вопросы (FAQ)",
  subtitle: "Выход на фармацевтический рынок Узбекистана",
  answerFooter: faqAnswerFooterParagraphs,
  groups: [
    marketGroup,
    registrationGroup,
    medicinesGroup,
    supplementsGroup,
    devicesGroup,
    veterinaryGroup,
    legalGroup,
    pvGroup,
    timelinesGroup,
    practicalGroup,
    pharmgroupGroup,
  ],
};

/** Полный FAQ на узбекском (латиница), см. faqChunks/uz/ */
export const faqUz = {
  title: "Ko'p so'raladigan savollar (FAQ)",
  subtitle: "O'zbekistonda farmatsevtika bozoriga chiqish va ro'yxatdan o'tkazish",
  answerFooter: faqAnswerFooterParagraphsUz,
  groups: [
    marketGroupUz,
    registrationGroupUz,
    medicinesGroupUz,
    supplementsGroupUz,
    devicesGroupUz,
    veterinaryGroupUz,
    legalGroupUz,
    pvGroupUz,
    timelinesGroupUz,
    practicalGroupUz,
    pharmgroupGroupUz,
  ],
};
