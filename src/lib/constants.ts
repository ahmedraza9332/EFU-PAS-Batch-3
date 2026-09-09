export type ModuleId =
  | "dashboard"
  | "partners"
  | "products"
  | "policies"
  | "claims"
  | "billing"
  | "annuity"
  | "audit"
  | "reports";

export interface ModuleNavItem {
  id: ModuleId;
  label: string;
  href: string;
}

// Mirrors the top module band in the reference EFU PAS design system.
export const MODULE_NAV: ModuleNavItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/" },
  { id: "partners", label: "Partners", href: "/partners" },
  { id: "products", label: "Products", href: "/products" },
  { id: "policies", label: "Policies", href: "/policies" },
  { id: "claims", label: "Claims", href: "/claims" },
  { id: "billing", label: "Billing & Reconciliation", href: "/billing" },
  { id: "annuity", label: "Annuity & Payouts", href: "/annuity" },
  { id: "audit", label: "Audit", href: "/audit" },
  { id: "reports", label: "Reports", href: "/reports" },
];
