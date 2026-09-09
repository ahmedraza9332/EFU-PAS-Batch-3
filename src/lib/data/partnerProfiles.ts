import { PartnerProfile, RailGroup } from "@/lib/types";

export const PARTNER_PROFILES: Record<string, PartnerProfile> = {
  mobilink: {
    id: "mobilink",
    name: "Mobilink",
    type: "TELCO",
    environment: "Production",
    primaryChannel: "Real-time API",
    onboardedDate: "12 Mar 2026",
    incorporationNo: "0053491",
    ntnNumber: "1043491-4",
    businessAddress: "26-C, I.I. Chundrigar Road, Karachi",
    registeredAddress: "Registered office, Karachi",
    correspondenceAddress: "Same as business address",
    city: "Karachi",
    country: "Pakistan",
    contacts: [
      {
        name: "Sana Aftab",
        role: "Partnership Manager",
        email: "sana.aftab@mobilink.com.pk",
        phone: "+92 300 1234567",
        primary: true,
      },
      {
        name: "Bilal Rana",
        role: "Technical Integration Lead",
        email: "bilal.rana@mobilink.com.pk",
        phone: "+92 321 7654321",
      },
    ],
    settlement: {
      bankName: "Habib Bank Limited",
      accountTitle: "Mobilink Microfinance Bank Ltd",
      accountNumber: "0011-0490123-01",
      iban: "PK36 HABB 0000 0110 4901 2301",
      settlementCycle: "Weekly, every Monday",
    },
    compliance: [
      { label: "SECP registration", status: "clear", detail: "Verified · 0053491" },
      { label: "Tax status (NTN)", status: "clear", detail: "Active filer · 1043491-4" },
      { label: "AML / KYC screening", status: "clear", detail: "Last screened 02 Sep 2026" },
      { label: "Annual compliance review", status: "review", detail: "Due 30 Sep 2026" },
    ],
    linkedSchemes: [
      { name: "Sehat+ Mass Health", product: "Sehat+", status: "active", livesCovered: "48,210" },
      { name: "Life Shield Plus", product: "Life Shield Plus", status: "active", livesCovered: "12,404" },
    ],
    recentActivity: [
      { date: "08 Sep 2026, 17:20", actor: "Sana Aftab", action: "Updated correspondence contact details" },
      { date: "01 Sep 2026, 09:05", actor: "System", action: "Weekly settlement of Rs. 19.80M processed" },
      { date: "22 Aug 2026, 14:40", actor: "Compliance", action: "AML screening completed — no flags" },
    ],
    metrics: {
      policiesIssuedMtd: "4,610",
      premiumCollected: "Rs. 19.80M",
      claimsSlaCompliance: "98.3%",
      activeSchemes: 4,
    },
  },
  jazz: {
    id: "jazz",
    name: "Jazz",
    type: "TELCO",
    environment: "Production",
    primaryChannel: "Mobile App",
    onboardedDate: "04 Jan 2026",
    incorporationNo: "0041207",
    ntnNumber: "0987654-3",
    businessAddress: "Jazz House, Block 6, PECHS, Karachi",
    registeredAddress: "Registered office, Islamabad",
    correspondenceAddress: "Jazz House, Block 6, PECHS, Karachi",
    city: "Karachi",
    country: "Pakistan",
    contacts: [
      {
        name: "Omer Farooq",
        role: "Partnership Manager",
        email: "omer.farooq@jazz.com.pk",
        phone: "+92 300 9988776",
        primary: true,
      },
      {
        name: "Hina Wasim",
        role: "App Integration Lead",
        email: "hina.wasim@jazz.com.pk",
        phone: "+92 333 4455667",
      },
    ],
    settlement: {
      bankName: "United Bank Limited",
      accountTitle: "Jazz Financial Services",
      accountNumber: "0209-1187654-02",
      iban: "PK14 UNIL 0002 0911 8765 4002",
      settlementCycle: "Weekly, every Monday",
    },
    compliance: [
      { label: "SECP registration", status: "clear", detail: "Verified · 0041207" },
      { label: "Tax status (NTN)", status: "clear", detail: "Active filer · 0987654-3" },
      { label: "AML / KYC screening", status: "clear", detail: "Last screened 28 Aug 2026" },
      { label: "Annual compliance review", status: "clear", detail: "Completed 14 Jul 2026" },
    ],
    linkedSchemes: [
      { name: "Sehat+ Mass Health", product: "Sehat+", status: "active", livesCovered: "81,050" },
      { name: "Life Shield Plus", product: "Life Shield Plus", status: "active", livesCovered: "19,860" },
      { name: "Personal Accident Cover", product: "Personal Accident Cover", status: "active", livesCovered: "6,340" },
      { name: "Family Health Protection", product: "Family Health Protection", status: "paused", livesCovered: "0" },
    ],
    recentActivity: [
      { date: "07 Sep 2026, 11:12", actor: "Hina Wasim", action: "Rotated production API credentials" },
      { date: "01 Sep 2026, 09:05", actor: "System", action: "Weekly settlement of Rs. 37.20M processed" },
      { date: "19 Aug 2026, 16:02", actor: "Omer Farooq", action: "Paused Family Health Protection enrollment" },
    ],
    metrics: {
      policiesIssuedMtd: "8,105",
      premiumCollected: "Rs. 37.20M",
      claimsSlaCompliance: "97.9%",
      activeSchemes: 4,
    },
  },
  zong: {
    id: "zong",
    name: "Zong",
    type: "TELCO",
    environment: "Production",
    primaryChannel: "Batch",
    onboardedDate: "19 Jun 2026",
    incorporationNo: "0062883",
    ntnNumber: "1122334-5",
    businessAddress: "Zong Tower, F-8 Markaz, Islamabad",
    registeredAddress: "Registered office, Islamabad",
    correspondenceAddress: "Same as business address",
    city: "Islamabad",
    country: "Pakistan",
    contacts: [
      {
        name: "Ayesha Noor",
        role: "Partnership Manager",
        email: "ayesha.noor@zong.com.pk",
        phone: "+92 315 2233445",
        primary: true,
      },
      {
        name: "Faizan Sheikh",
        role: "Batch Operations Lead",
        email: "faizan.sheikh@zong.com.pk",
        phone: "+92 342 6677889",
      },
    ],
    settlement: {
      bankName: "Allied Bank Limited",
      accountTitle: "China Mobile Pakistan (Zong)",
      accountNumber: "0117-0026883-07",
      iban: "PK52 ABPA 0001 1700 2688 3007",
      settlementCycle: "Bi-weekly, alternate Mondays",
    },
    compliance: [
      { label: "SECP registration", status: "clear", detail: "Verified · 0062883" },
      { label: "Tax status (NTN)", status: "clear", detail: "Active filer · 1122334-5" },
      { label: "AML / KYC screening", status: "review", detail: "Rescreen due 15 Sep 2026" },
      { label: "Annual compliance review", status: "flagged", detail: "Batch SLA breach under review" },
    ],
    linkedSchemes: [
      { name: "Sehat+ Mass Health", product: "Sehat+", status: "active", livesCovered: "22,390" },
      { name: "Life Shield Plus", product: "Life Shield Plus", status: "paused", livesCovered: "0" },
    ],
    recentActivity: [
      { date: "08 Sep 2026, 08:30", actor: "System", action: "Batch file running 40 min late" },
      { date: "25 Aug 2026, 13:15", actor: "Faizan Sheikh", action: "Escalated SLA breach to compliance" },
      { date: "18 Aug 2026, 10:00", actor: "Ayesha Noor", action: "Requested AML rescreen for renewal" },
    ],
    metrics: {
      policiesIssuedMtd: "4,605",
      premiumCollected: "Rs. 21.20M",
      claimsSlaCompliance: "97.8%",
      activeSchemes: 2,
    },
  },
};

export function getPartnerProfile(id: string): PartnerProfile | undefined {
  return PARTNER_PROFILES[id];
}

export function buildPartnerRail(profile: PartnerProfile): RailGroup[] {
  const base = `/partners/${profile.id}`;

  return [
    {
      label: "Setup",
      items: [
        { label: "Partner profile", href: base },
        {
          label: "Channels",
          href: `${base}/channels`,
          count: "1",
          countTone: "muted",
        },
        {
          label: "Contracts & commission",
          href: `${base}/contracts`,
          count: "2",
          countTone: "muted",
        },
      ],
    },
    {
      label: "Partner data connectivity",
      items: [
        {
          label: "API credentials",
          href: `${base}/api-credentials`,
          count: "LIVE",
          countTone: "green",
        },
        {
          label: "Webhooks",
          href: `${base}/webhooks`,
          count: "3",
          countTone: "muted",
        },
        {
          label: "SFTP",
          href: `${base}/sftp`,
          count: "—",
          countTone: "muted",
        },
      ],
    },
    {
      label: "Operations",
      items: [
        {
          label: "Linked schemes",
          href: `${base}/linked-schemes`,
          count: String(profile.linkedSchemes.length),
          countTone: "muted",
        },
        {
          label: "Audit log",
          href: `${base}/audit-log`,
          count: "—",
          countTone: "muted",
        },
      ],
    },
  ];
}
