export type PartnerStatus = "live" | "pending" | "suspended";
export type HealthTone = "ok" | "warn";

export interface Partner {
  id: string;
  name: string;
  type: string;
  primaryChannel: string;
  status: PartnerStatus;
  healthTone: HealthTone;
  healthDetail: string;
  policiesIssuedMtd: string;
  premiumCollected: string;
  claimsSlaCompliance: string;
  activeSchemes: number;
  note: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export type RailCountTone = "amber" | "muted" | "green";

export interface RailItem {
  label: string;
  href: string;
  count?: string;
  countTone?: RailCountTone;
  disabled?: boolean;
}

export interface RailGroup {
  label: string;
  items: RailItem[];
}

export interface CheckItem {
  title: string;
  description: string;
}

export interface ExpectedColumn {
  index: string;
  column: string;
  format: string;
  required: boolean;
  alsoAcceptedAs: string[];
}

export type PolicyStatTone = "muted" | "amber" | "red";

export interface PolicyStat {
  label: string;
  value: string;
  detail: string;
  tone?: PolicyStatTone;
}

export type PolicyRowStatus = "Active" | "Pending";

export interface PolicyBookRow {
  policy: string;
  member: string;
  product: string;
  cover: string;
  premium: string;
  status: PolicyRowStatus;
}

export interface PartnerContact {
  name: string;
  role: string;
  email: string;
  phone: string;
  primary?: boolean;
}

export interface PartnerSettlement {
  bankName: string;
  accountTitle: string;
  accountNumber: string;
  iban: string;
  settlementCycle: string;
}

export type ComplianceStatus = "clear" | "review" | "flagged";

export interface ComplianceItem {
  label: string;
  status: ComplianceStatus;
  detail: string;
}

export type LinkedSchemeStatus = "active" | "paused";

export interface LinkedScheme {
  name: string;
  product: string;
  status: LinkedSchemeStatus;
  livesCovered: string;
}

export interface PartnerActivityEntry {
  date: string;
  actor: string;
  action: string;
}

export interface PartnerMetrics {
  policiesIssuedMtd: string;
  premiumCollected: string;
  claimsSlaCompliance: string;
  activeSchemes: number;
}

export interface UploadedContractDocument {
  id: string;
  documentType: string;
  fileName: string;
  uploadedAt: string;
}

export interface PartnerProfile {
  id: string;
  name: string;
  type: string;
  environment: string;
  primaryChannel: string;
  onboardedDate: string;
  incorporationNo: string;
  ntnNumber: string;
  businessAddress: string;
  registeredAddress: string;
  correspondenceAddress: string;
  city: string;
  country: string;
  contacts: PartnerContact[];
  settlement: PartnerSettlement;
  compliance: ComplianceItem[];
  linkedSchemes: LinkedScheme[];
  recentActivity: PartnerActivityEntry[];
  metrics: PartnerMetrics;
}
