import { RailGroup } from "@/lib/types";

export const POLICIES_RAIL: RailGroup[] = [
  {
    label: "Enrollment",
    items: [{ label: "Issue policy", href: "/policies/issue-policy" }],
  },
  {
    label: "Book",
    items: [
      { label: "Active policies", href: "/policies/active" },
      {
        label: "Pending issuance",
        href: "/policies/pending",
        count: "86",
        countTone: "amber",
      },
      {
        label: "Lapsed",
        href: "/policies/lapsed",
        count: "1,204",
        countTone: "muted",
      },
    ],
  },
];
