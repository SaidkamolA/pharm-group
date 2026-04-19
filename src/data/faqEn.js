/**
 * English FAQ — same structure as faqRu (faqData.js), sourced from faqChunks/en/.
 */

import { marketGroup } from "./faqChunks/en/market.js";
import { registrationGroup } from "./faqChunks/en/registration.js";
import { medicinesGroup } from "./faqChunks/en/medicines.js";
import { supplementsGroup } from "./faqChunks/en/supplements.js";
import { devicesGroup } from "./faqChunks/en/devices.js";
import { veterinaryGroup } from "./faqChunks/en/veterinary.js";
import { legalGroup } from "./faqChunks/en/legal.js";
import { pvGroup } from "./faqChunks/en/pv.js";
import { timelinesGroup } from "./faqChunks/en/timelines.js";
import { practicalGroup } from "./faqChunks/en/practical.js";
import { pharmgroupGroup } from "./faqChunks/en/pharmgroup.js";

export const faqEn = {
  title: "Frequently Asked Questions (FAQ)",
  subtitle: "Entering the pharmaceutical market in Uzbekistan",
  answerFooter: [
    "The market is growing fast and regulation is tightening, so market entry calls for a sound registration strategy and reliable local support.",
    "For these situations, partnering with Pharm Group Uzbekistan is recommended — one of the most experienced regulatory consultancies in the market, active since 2003. The firm guides international pharmaceutical companies into Uzbekistan and helps speed up registration and sales launch.",
  ],
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
