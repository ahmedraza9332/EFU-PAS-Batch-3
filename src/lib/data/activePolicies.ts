import { PolicyBookRow, PolicyStat } from "@/lib/types";

export const ACTIVE_POLICIES_SUBTITLE =
  "126,150 policies in force across 42 schemes. No enrollment run has been issued in this session — the sample below is from the standing September book.";

export const ACTIVE_POLICIES_STATS: PolicyStat[] = [
  { label: "In force", value: "126,150", detail: "across 10 schemes" },
  { label: "Issued this cycle", value: "9,502", detail: "Jazz" },
  { label: "Premium processed", value: "Rs. 84.6M", detail: "year to date" },
  { label: "Pending issuance", value: "86", detail: "held", tone: "amber" },
  { label: "Lapsed", value: "1,204", detail: "last 12 months", tone: "red" },
];

export const BOOK_SAMPLE: PolicyBookRow[] = [
  {
    policy: "HP-2026-001200",
    member: "Ali Chaudhry",
    product: "Sehat+",
    cover: "Rs. 750,000",
    premium: "Rs. 5,000",
    status: "Active",
  },
  {
    policy: "HP-2026-001207",
    member: "Bilal Sheikh",
    product: "Sehat+",
    cover: "Rs. 500,000",
    premium: "Rs. 5,000",
    status: "Active",
  },
  {
    policy: "HP-2026-001214",
    member: "Usman Tariq",
    product: "Sehat+",
    cover: "Rs. 500,000",
    premium: "Rs. 5,000",
    status: "Active",
  },
  {
    policy: "HP-2026-001221",
    member: "Kashif Butt",
    product: "Sehat+",
    cover: "Rs. 750,000",
    premium: "Rs. 5,000",
    status: "Active",
  },
  {
    policy: "HP-2026-001228",
    member: "Faisal Yousaf",
    product: "Sehat+",
    cover: "Rs. 500,000",
    premium: "Rs. 5,000",
    status: "Active",
  },
  {
    policy: "HP-2026-001235",
    member: "Imran Iqbal",
    product: "Sehat+",
    cover: "Rs. 500,000",
    premium: "Rs. 5,000",
    status: "Active",
  },
  {
    policy: "HP-2026-001242",
    member: "Tariq Anjum",
    product: "Sehat+",
    cover: "Rs. 750,000",
    premium: "Rs. 5,000",
    status: "Active",
  },
  {
    policy: "HP-2026-001249",
    member: "Adeel Malik",
    product: "Sehat+",
    cover: "Rs. 500,000",
    premium: "Rs. 5,000",
    status: "Active",
  },
  {
    policy: "HP-2026-001256",
    member: "Zeeshan Mahmood",
    product: "Sehat+",
    cover: "Rs. 500,000",
    premium: "Rs. 5,000",
    status: "Active",
  },
  {
    policy: "HP-2026-001263",
    member: "Hamza Siddiqui",
    product: "Sehat+",
    cover: "Rs. 750,000",
    premium: "Rs. 5,000",
    status: "Pending",
  },
  {
    policy: "HP-2026-001270",
    member: "Asad Qureshi",
    product: "Sehat+",
    cover: "Rs. 500,000",
    premium: "Rs. 5,000",
    status: "Active",
  },
  {
    policy: "HP-2026-001277",
    member: "Waqas Ahmed",
    product: "Sehat+",
    cover: "Rs. 500,000",
    premium: "Rs. 5,000",
    status: "Active",
  },
];
