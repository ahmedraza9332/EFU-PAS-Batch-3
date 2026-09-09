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

export type RailCountTone = "amber" | "muted";

export interface RailItem {
  label: string;
  href: string;
  count?: string;
  countTone?: RailCountTone;
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
