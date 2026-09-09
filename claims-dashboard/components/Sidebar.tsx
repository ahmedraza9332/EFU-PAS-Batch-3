"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Package,
  FileText,
  ClipboardList,
  CreditCard,
  TrendingUp,
  BookOpen,
  BarChart2,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  AlertTriangle,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Partners", href: "/partners", icon: Users },
  { label: "Products", href: "/products", icon: Package },
  { label: "Policies", href: "/policies", icon: FileText },
  { label: "Claims", href: "/claims", icon: ClipboardList },
  { label: "Billing & Reconciliation", href: "/billing", icon: CreditCard },
  { label: "Annuity & Payouts", href: "/annuity", icon: TrendingUp },
  { label: "Audit", href: "/audit", icon: BookOpen },
  { label: "Reports", href: "/reports", icon: BarChart2 },
];

const workflowItems = [
  { label: "Registered", href: "/claims", badge: "412" },
  { label: "Documents pending", href: "/claims/documents-pending", badge: "38", badgeColor: "bg-red-500" },
  { label: "Human Review", href: "/claims/human-review", badge: "236" },
  { label: "Payment", href: "/claims/payment", badge: "138" },
];

const statusItems = [
  { label: "In Queue", href: "/claims/in-queue", value: "1,642" },
  { label: "Documents Received", href: "/claims/documents-received", value: "1,648" },
  { label: "Assessed", href: "/claims/assessed", value: "1,390" },
  { label: "Decision", href: "/claims/decision", value: "185" },
  { label: "Approved", href: "/claims/approved", value: "1,162" },
  { label: "Paid", href: "/claims/paid", value: "1,024" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen w-60 flex flex-col overflow-y-auto z-30" style={{ background: "#0A1E3C" }}>
      {/* Logo / Brand */}
      <div className="px-4 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-teal-500 flex items-center justify-center text-white text-xs font-bold">UP</div>
          <span className="text-white text-xs font-semibold leading-tight">Unified Policy<br />Administration System</span>
        </div>
      </div>

      {/* Primary Nav */}
      <nav className="flex-1 px-2 py-3 space-y-0.5">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href || (href === "/claims" && pathname.startsWith("/claims"));
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                isActive
                  ? "bg-teal-600/80 text-white font-semibold"
                  : "text-blue-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={16} strokeWidth={1.8} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Claims Sub-nav – only shown when on /claims* */}
      <div className="border-t border-white/10 px-2 py-3">
        {/* WORKFLOW section */}
        <p className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">Workflow</p>
        {workflowItems.map(({ label, href, badge, badgeColor }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center justify-between px-3 py-1.5 rounded-md text-sm text-blue-200 hover:bg-white/10 hover:text-white transition-colors"
          >
            <span>{label}</span>
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${badgeColor ?? "bg-teal-600/80"} text-white`}>{badge}</span>
          </Link>
        ))}

        {/* CONTROLS */}
        <p className="px-3 py-1 mt-3 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">Controls</p>
        <div className="flex items-center gap-3 px-3 py-1.5">
          <AlertCircle size={14} className="text-red-400" />
          <span className="text-sm text-blue-200 flex-1">SLA breaches</span>
          <span className="text-xs font-bold text-red-400">27</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-1.5">
          <AlertTriangle size={14} className="text-yellow-400" />
          <span className="text-sm text-blue-200 flex-1">Fraud review</span>
          <span className="text-xs font-bold text-yellow-400">9</span>
        </div>

        {/* CLAIM STATUS */}
        <p className="px-3 py-1 mt-3 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">Claim Status</p>
        {statusItems.map(({ label, href, value }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center justify-between px-3 py-1.5 rounded-md text-sm text-blue-200 hover:bg-white/10 hover:text-white transition-colors"
          >
            <span>{label}</span>
            <span className="text-xs text-blue-300">{value}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
