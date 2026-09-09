import { RailGroup, SelectOption } from "@/lib/types";

export const CHANNEL_TYPE_OPTIONS: SelectOption[] = [
  { label: "TELCO", value: "telco" },
  { label: "BANK", value: "bank" },
  { label: "MFI / MFB", value: "mfi" },
  { label: "OTHER", value: "other" },
];

export const NEW_PARTNER_RAIL: RailGroup[] = [
  {
    label: "Setup",
    items: [
      { label: "Partner profile", href: "/partners/new" },
      { label: "Channels", href: "#", count: "0", countTone: "muted", disabled: true },
      { label: "Contracts & commission", href: "#", count: "0", countTone: "muted", disabled: true },
    ],
  },
  {
    label: "Partner data connectivity",
    items: [
      { label: "API credentials", href: "#", count: "PENDING", countTone: "amber", disabled: true },
      { label: "Webhooks", href: "#", count: "0", countTone: "muted", disabled: true },
      { label: "SFTP", href: "#", count: "—", countTone: "muted", disabled: true },
    ],
  },
  {
    label: "Operations",
    items: [
      { label: "Linked schemes", href: "#", count: "0", countTone: "muted", disabled: true },
      { label: "Audit log", href: "#", count: "—", countTone: "muted", disabled: true },
    ],
  },
];
