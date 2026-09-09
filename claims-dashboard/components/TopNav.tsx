"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Partners", href: "/partners" },
  { label: "Products", href: "/products" },
  { label: "Policies", href: "/policies" },
  { label: "Claims", href: "/claims" },
  { label: "Billing & Reconciliation", href: "/billing" },
  { label: "Annuity & Payouts", href: "/annuity" },
  { label: "Audit", href: "/audit" },
  { label: "Reports", href: "/reports" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center h-11 px-4 border-b border-[var(--teal)] font-sans"
      style={{ background: "var(--teal-deep)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 mr-6 flex-shrink-0">
        <div
          className="w-7 h-7 rounded flex items-center justify-center text-white text-xs font-mono font-bold tracking-tight"
          style={{ background: "var(--teal)" }}
        >
          UP
        </div>
        <span className="text-white text-xs font-semibold tracking-tight whitespace-nowrap hidden lg:block">
          Unified Policy Administration System
        </span>
      </div>

      {/* Nav items */}
      <nav className="flex items-center gap-1 flex-1 overflow-x-auto">
        {navItems.map(({ label, href }) => {
          const isActive =
            href === "/claims"
              ? pathname.startsWith("/claims")
              : pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-white/20 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Avatar */}
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-mono font-semibold flex-shrink-0 ml-4 border border-white/20"
        style={{ background: "var(--teal)" }}
      >
        SA
      </div>
    </header>
  );
}
