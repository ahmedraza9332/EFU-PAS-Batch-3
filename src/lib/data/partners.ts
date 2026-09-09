import { Partner } from "@/lib/types";

export const PERFORMANCE_CYCLE = "September 2026 cycle";
export const PERFORMANCE_AS_OF = "01 Sep, 15:10";

export const PARTNERS: Partner[] = [
  {
    id: "mobilink",
    name: "Mobilink",
    type: "TELCO",
    primaryChannel: "Real-time API",
    status: "live",
    healthTone: "ok",
    healthDetail: "99.9% uptime",
    policiesIssuedMtd: "4,610",
    premiumCollected: "Rs. 19.80M",
    claimsSlaCompliance: "98.3%",
    activeSchemes: 4,
    note: "Fastest onboarding channel — same-day policy issuance via API.",
  },
  {
    id: "jazz",
    name: "Jazz",
    type: "TELCO",
    primaryChannel: "Mobile App",
    status: "live",
    healthTone: "ok",
    healthDetail: "99.6% uptime",
    policiesIssuedMtd: "8,105",
    premiumCollected: "Rs. 37.20M",
    claimsSlaCompliance: "97.9%",
    activeSchemes: 4,
    note: "Largest enrollment volume this cycle — 44% of total lives covered.",
  },
  {
    id: "zong",
    name: "Zong",
    type: "TELCO",
    primaryChannel: "Batch",
    status: "live",
    healthTone: "warn",
    healthDetail: "batch delayed 40 min",
    policiesIssuedMtd: "4,605",
    premiumCollected: "Rs. 21.20M",
    claimsSlaCompliance: "97.8%",
    activeSchemes: 2,
    note: "Batch file running late — next reconciliation window at 16:00.",
  },
];
