// ─── Mock Data for Claims Dashboard ──────────────────────────────────────────

export const kpiCards = [
  {
    label: "Claims Paid (MTD)",
    value: "PKR 612.4M",
    change: "+14.6%",
    baseline: "PKR 534.7M",
    baseDate: "25 Jul 2026",
    up: true,
  },
  {
    label: "Outstanding Reserve (Open Claims)",
    value: "PKR 284.6M",
    change: "+5.6%",
    baseline: "PKR 269.6M",
    baseDate: "25 Jul 2026",
    up: true,
  },
  {
    label: "Claims Registered (MTD)",
    value: "1,842",
    change: "+9.8%",
    baseline: "1678",
    baseDate: "25 Jul 2026",
    up: true,
  },
  {
    label: "Settled Within TAT (MTD)",
    value: "1,558",
    subValue: "(84.6%)",
    change: "+3.1 pts",
    baseline: "81.5%",
    baseDate: "25 Jul 2026",
    up: true,
  },
];

export const workflowPipeline = [
  { label: "In Queue", value: "1,842", pct: null, href: "/claims/in-queue" },
  { label: "Documents Received", value: "1,640", pct: null, href: "/claims/documents-received" },
  { label: "Assessed", value: "1,390", pct: "89.0%", href: "/claims/assessed" },
  { label: "Decision", value: "1,244", pct: "84.8%", href: "/claims/decision" },
  { label: "Approved", value: "1,102", pct: "88.6%", href: "/claims/approved" },
  { label: "Paid", value: "1,024", pct: "92.5%", href: "/claims/paid" },
];

export const claimsPaidTable = [
  { type: "Hospitalization", claimsPaid: "1,580", pctShare: "53.1%", vsJul: "+12.4%", up: true },
  { type: "OPD", claimsPaid: "688", pctShare: "23.1%", vsJul: "+8.1%", up: true },
  { type: "Maternity", claimsPaid: "305", pctShare: "10.3%", vsJul: "+15.6%", up: true },
  { type: "Critical Illness", claimsPaid: "235", pctShare: "7.9%", vsJul: "-3.2%", up: false },
  { type: "Accidental", claimsPaid: "165", pctShare: "5.6%", vsJul: "+18.9%", up: true },
];

export const chartData = [
  { date: "27 Aug", Hospitalization: 215, OPD: 95, Maternity: 42, CriticalIllness: 33, Accidental: 20 },
  { date: "28 Aug", Hospitalization: 235, OPD: 100, Maternity: 45, CriticalIllness: 30, Accidental: 18 },
  { date: "29 Aug", Hospitalization: 195, OPD: 82, Maternity: 37, CriticalIllness: 36, Accidental: 16 },
  { date: "30 Aug", Hospitalization: 255, OPD: 110, Maternity: 49, CriticalIllness: 29, Accidental: 22 },
  { date: "31 Aug", Hospitalization: 280, OPD: 118, Maternity: 54, CriticalIllness: 27, Accidental: 25 },
  { date: "01 Sep", Hospitalization: 305, OPD: 128, Maternity: 58, CriticalIllness: 31, Accidental: 28 },
  { date: "02 Sep", Hospitalization: 325, OPD: 136, Maternity: 62, CriticalIllness: 34, Accidental: 30 },
];

export const humanReviewData = {
  total: 156,
  all: 156,
  overdue: 74,
  today: 42,
};

export const exceptionsList = [
  {
    title: "Overdue Claim TAT",
    count: 27,
    description: "Claims beyond turnaround time commitment",
    amount: "PKR 15.2M",
    oldest: "18 Aug 2026",
  },
  {
    title: "Medical Review Pending",
    count: 41,
    description: "Awaiting medical officer decision",
    amount: "PKR 270M",
    oldest: "22 Aug 2026",
  },
  {
    title: "Missing Documents",
    count: 32,
    description: "Claim documents not yet received from provider",
    amount: "PKR 18.7M",
    oldest: "20 Aug 2026",
  },
  {
    title: "TPA Rejected Claim",
    count: 28,
    description: "Rejected by TPA, action required",
    amount: "PKR 9.3M",
    oldest: "21 Aug 2026",
  },
  {
    title: "Payment Failed",
    count: 19,
    description: "Invalid bank details on file",
    amount: "PKR 4.1M",
    oldest: "17 Aug 2026",
  },
  {
    title: "Fraud Review Flagged",
    count: 9,
    description: "Flagged for fraud investigation",
    amount: "PKR 6.8M",
    oldest: "23 Aug 2026",
  },
];

export const sidenavData = {
  workflow: [
    { label: "Registered", badge: "412", badgeColor: "teal", active: false, href: "/claims" },
    { label: "Documents pending", badge: "318", badgeColor: "red", active: false, href: "/claims/documents-pending" },
    { label: "Human Review", badge: "236", badgeColor: "default", active: false, href: "/claims/human-review" },
    { label: "Payment", badge: "130", badgeColor: "default", active: false, href: "/claims/payment" },
  ],
  controls: [
    { label: "SLA breaches", value: "27", color: "red" },
    { label: "Fraud review", value: "9", color: "gray" },
  ],
  claimStatus: [
    { label: "In Queue", value: "1,842", href: "/claims/in-queue" },
    { label: "Documents Received", value: "1,640", href: "/claims/documents-received" },
    { label: "Assessed", value: "1,390", href: "/claims/assessed" },
    { label: "Decision", value: "188", href: "/claims/decision", highlight: false },
    { label: "Approved", value: "1,102", href: "/claims/approved" },
    { label: "Paid", value: "1,024", href: "/claims/paid" },
  ],
};

// ─── Documents Pending Mock Data ────────────────────────────────────────────

export const docsPendingKPIs = [
  {
    label: "Pending documents",
    value: "318",
    sub: "of 1,394 pending",
  },
  {
    label: "Reminded today",
    value: "84",
    sub: "SMS + email",
  },
  {
    label: "Avg wait",
    value: "3.2 days",
    sub: "Longest 7 days",
  },
  {
    label: "Past SLA",
    value: "27",
    sub: "escalated",
  },
  {
    label: "Most missing",
    value: "CNIC",
    sub: "Hospital Invoice: 41%",
  },
];

export const missingDocTypes = [
  { label: "Hospital Invoice",        count: 111, max: 111 },
  { label: "Discharge summary",       count: 88,  max: 111 },
  { label: "Prescription / Diagnosis",count: 51,  max: 111 },
  { label: "CNIC Copy",               count: 20,  max: 111 },
  { label: "Bank details for payout", count: 12,  max: 111 },
];

export const delayBreakdown = [
  { label: "Waiting on claimant",        count: 266 },
  { label: "Waiting on hospital",         count: 66 },
  { label: "Waiting on partner",          count: 18 },
  { label: "Reminders sent, no response", count: 68 },
  { label: "Auto-closed after 30 days",   count: 6 },
];

export const chaseListRows = [
  {
    id: "CLM-2476-08509",
    member: "Kamil Butt",
    amount: "Rs. 64,944",
    pending: ["Hospital Invoice"],
    waiting: "6 days",
    lastReminder: "04 Aug 2026",
    overdue: false,
  },
  {
    id: "CLM 2016 00307",
    member: "Tariq Azeem",
    amount: "Rs. 161,111",
    pending: ["Discharge summary"],
    waiting: "1 days",
    lastReminder: "05 Aug 2026",
    overdue: false,
  },
  {
    id: "CLM-2476-06514",
    member: "Hamza Siddiqui",
    amount: "Rs. 347,282",
    pending: ["Hospital Invoice", "Discharge summary"],
    waiting: "3 days",
    lastReminder: "05 Aug 2026",
    overdue: false,
  },
  {
    id: "CLM-2476-09321",
    member: "Junaid Hussain",
    amount: "Rs. 198,522",
    pending: ["CNIC copy"],
    waiting: "9 days",
    lastReminder: "09 Aug 2026",
    overdue: true,
  },
  {
    id: "CLM 2016 02520",
    member: "Hina Chaudhry",
    amount: "Rs. 222,236",
    pending: ["Prescription / Diagnosis"],
    waiting: "1 days",
    lastReminder: "—",
    overdue: false,
  },
  {
    id: "CLM-2476-08515",
    member: "Fatima Butt",
    amount: "Rs. 334,187",
    pending: ["Bank details for payout"],
    waiting: "2 days",
    lastReminder: "—",
    overdue: false,
  },
  {
    id: "CLM-2476-07832",
    member: "Sana Malik",
    amount: "Rs. 88,400",
    pending: ["Hospital Invoice", "CNIC copy"],
    waiting: "5 days",
    lastReminder: "07 Aug 2026",
    overdue: false,
  },
  {
    id: "CLM 2016 04119",
    member: "Ali Hassan",
    amount: "Rs. 512,900",
    pending: ["Discharge summary"],
    waiting: "4 days",
    lastReminder: "06 Aug 2026",
    overdue: false,
  },
  {
    id: "CLM-2476-11042",
    member: "Usman Ghani",
    amount: "Rs. 145,000",
    pending: ["Hospital Invoice", "Prescription / Diagnosis"],
    waiting: "12 days",
    lastReminder: "02 Aug 2026",
    overdue: true,
  },
  {
    id: "CLM 2016 08912",
    member: "Zainab Bibi",
    amount: "Rs. 78,300",
    pending: ["Bank details for payout"],
    waiting: "10 days",
    lastReminder: "—",
    overdue: true,
  },
  {
    id: "CLM-2476-12005",
    member: "Bilal Ahmed",
    amount: "Rs. 430,600",
    pending: ["CNIC copy"],
    waiting: "8 days",
    lastReminder: "01 Aug 2026",
    overdue: true,
  },
  {
    id: "CLM 2016 05431",
    member: "Ayesha Khan",
    amount: "Rs. 95,200",
    pending: ["Hospital Invoice"],
    waiting: "2 days",
    lastReminder: "—",
    overdue: false,
  },
];

// ─── Human Review Queue & Details Mock Data ─────────────────────────────────

export interface HumanReviewItem {
  id: string;
  member: string;
  policy: string;
  hospital: string;
  amount: string;
  coverage: string;
  availableBalance: string;
  received: string;
  referredBecause: string;
  aiRecommendation: {
    recommendation: string;
    why: string;
    whatsNeeded: string;
  };
  documents: {
    document: string;
    submittedBy: string;
    received: string;
    status: string;
  }[];
}

export const humanReviewQueue: HumanReviewItem[] = [
  {
    id: "CLM-000145",
    member: "Ahmed Khan",
    policy: "HP-2026-000145",
    hospital: "ABC Hospital",
    amount: "Rs. 185,000",
    coverage: "Rs. 500,000",
    availableBalance: "Rs. 420,000",
    received: "29 Aug 2026",
    referredBecause: "Medical necessity — diagnosis and treatment code combination outside auto-clearance rules.",
    aiRecommendation: {
      recommendation: "RECOMMEND: HUMAN REVIEW",
      why: "Medical necessity — diagnosis and treatment code combination outside auto-clearance rules.",
      whatsNeeded: "A medical officer should check the diagnosis against the treatment and length of stay, then approve, query the hospital for more detail, or reject if not justified.",
    },
    documents: [
      { document: "Hospital Invoice", submittedBy: "ABC Hospital", received: "29 Aug 2026", status: "Verified" },
      { document: "Discharge Summary", submittedBy: "ABC Hospital", received: "29 Aug 2026", status: "Verified" },
      { document: "Prescription / Diagnostics", submittedBy: "ABC Hospital", received: "30 Aug 2026", status: "Verified" },
      { document: "CNIC Copy", submittedBy: "Ahmed Khan", received: "28 Aug 2026", status: "Verified" },
      { document: "Bank Details for Payout", submittedBy: "Ahmed Khan", received: "28 Aug 2026", status: "Verified" },
    ],
  },
  {
    id: "CLM-000151",
    member: "Nadia Qureshi",
    policy: "HP-2026-000151",
    hospital: "City Care Hospital",
    amount: "Rs. 96,500",
    coverage: "Rs. 350,000",
    availableBalance: "Rs. 253,500",
    received: "30 Aug 2026",
    referredBecause: "Length of stay is three days longer than the norm for the billed procedure.",
    aiRecommendation: {
      recommendation: "RECOMMEND: HUMAN REVIEW",
      why: "Length of stay is three days longer than the norm for the billed procedure.",
      whatsNeeded: "Medical officer should review hospital stay duration vs standard procedure guidelines.",
    },
    documents: [
      { document: "Hospital Invoice", submittedBy: "City Care Hospital", received: "30 Aug 2026", status: "Verified" },
      { document: "Discharge Summary", submittedBy: "City Care Hospital", received: "30 Aug 2026", status: "Verified" },
      { document: "CNIC Copy", submittedBy: "Nadia Qureshi", received: "29 Aug 2026", status: "Verified" },
    ],
  },
  {
    id: "CLM-000158",
    member: "Imran Sheikh",
    policy: "HP-2026-000158",
    hospital: "Shifa Medical Centre",
    amount: "Rs. 412,000",
    coverage: "Rs. 1,000,000",
    availableBalance: "Rs. 588,000",
    received: "31 Aug 2026",
    referredBecause: "Claim value is above the auto-approval ceiling for this benefit.",
    aiRecommendation: {
      recommendation: "RECOMMEND: HUMAN REVIEW",
      why: "Claim value exceeds auto-approval limit of Rs. 300,000.",
      whatsNeeded: "High value claim requires senior medical officer sign-off.",
    },
    documents: [
      { document: "Hospital Invoice", submittedBy: "Shifa Medical Centre", received: "31 Aug 2026", status: "Verified" },
      { document: "Discharge Summary", submittedBy: "Shifa Medical Centre", received: "31 Aug 2026", status: "Verified" },
      { document: "Prescription / Diagnostics", submittedBy: "Shifa Medical Centre", received: "31 Aug 2026", status: "Verified" },
    ],
  },
  {
    id: "CLM-000163",
    member: "Sana Iqbal",
    policy: "HP-2026-000163",
    hospital: "Al Noor Hospital",
    amount: "Rs. 74,000",
    coverage: "Rs. 250,000",
    availableBalance: "Rs. 176,000",
    received: "01 Sep 2026",
    referredBecause: "Third admission within 90 days at the same hospital.",
    aiRecommendation: {
      recommendation: "RECOMMEND: HUMAN REVIEW",
      why: "Frequent re-admission pattern detected (3rd visit in 90 days).",
      whatsNeeded: "Evaluate medical history to confirm non-chronic or recurring condition limits.",
    },
    documents: [
      { document: "Hospital Invoice", submittedBy: "Al Noor Hospital", received: "01 Sep 2026", status: "Verified" },
      { document: "CNIC Copy", submittedBy: "Sana Iqbal", received: "01 Sep 2026", status: "Verified" },
    ],
  },
  {
    id: "CLM-000170",
    member: "Faisal Mehmood",
    policy: "HP-2026-000170",
    hospital: "Green Star Hospital",
    amount: "Rs. 138,500",
    coverage: "Rs. 400,000",
    availableBalance: "Rs. 261,500",
    received: "01 Sep 2026",
    referredBecause: "Diagnosis sits inside a waiting-period exclusion window by four days.",
    aiRecommendation: {
      recommendation: "RECOMMEND: HUMAN REVIEW",
      why: "Diagnosis sits inside a waiting-period exclusion window by four days.",
      whatsNeeded: "Check inception date of policy against onset date in medical report.",
    },
    documents: [
      { document: "Hospital Invoice", submittedBy: "Green Star Hospital", received: "01 Sep 2026", status: "Verified" },
      { document: "Discharge Summary", submittedBy: "Green Star Hospital", received: "01 Sep 2026", status: "Verified" },
    ],
  },
];

