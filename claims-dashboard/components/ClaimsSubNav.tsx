"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  Menu,
  FileText,
  Clock,
  UserCheck,
  CreditCard,
  AlertTriangle,
  ShieldAlert,
  Inbox,
  CheckCircle2,
  FileCheck,
  Send,
  DollarSign,
  Circle,
} from "lucide-react";
import { sidenavData } from "@/lib/mock-data";

interface ClaimsSubNavProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function ClaimsSubNav({ isCollapsed, onToggle }: ClaimsSubNavProps) {
  const pathname = usePathname();

  // Helper icons for collapsed view (Image 2 reference)
  const getItemIcon = (label: string, isActive: boolean) => {
    const l = label.toLowerCase();
    if (l.includes("registered")) {
      return (
        <span className="flex items-center justify-center w-5 h-5">
          <span className="w-2 h-2 rounded-full bg-[#0d5c46]" />
        </span>
      );
    }
    if (l.includes("documents pending")) {
      return <FileText size={16} className="text-[#374151]" />;
    }
    if (l.includes("human review")) {
      return (
        <span className="flex items-center justify-center w-5 h-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9ca3af]" />
        </span>
      );
    }
    if (l.includes("payment")) {
      return (
        <span className="flex items-center justify-center w-5 h-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9ca3af]" />
        </span>
      );
    }
    if (l.includes("sla breaches")) {
      return (
        <span className="flex items-center justify-center w-5 h-5">
          <span className="w-2 h-2 rounded-full bg-[#c81e1e]" />
        </span>
      );
    }
    if (l.includes("fraud review")) {
      return (
        <span className="flex items-center justify-center w-5 h-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9ca3af]" />
        </span>
      );
    }
    if (l.includes("in queue")) {
      return <FileText size={16} className="text-[#374151]" />;
    }
    return (
      <span className="flex items-center justify-center w-5 h-5">
        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#0d5c46]" : "bg-[#9ca3af]"}`} />
      </span>
    );
  };

  return (
    <aside
      className={`fixed left-0 top-11 bottom-0 z-40 bg-[var(--white)] font-sans border-r border-[var(--line)] flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-[56px]" : "w-[240px]"
      }`}
    >
      {/* ── Sidebar Header ─────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--hair)] min-h-[57px]">
        {!isCollapsed ? (
          <>
            <span className="text-[18px] font-semibold text-[var(--ink)] tracking-tight">
              Claims
            </span>
            <button
              onClick={onToggle}
              className="w-7 h-7 rounded-full border border-[var(--line)] bg-[var(--white)] text-[var(--mute)] hover:text-[var(--ink)] hover:border-[var(--mute)] flex items-center justify-center transition-colors shadow-xs"
              title="Close sidebar"
            >
              <ChevronLeft size={14} />
            </button>
          </>
        ) : (
          <div className="w-full flex justify-center">
            <button
              onClick={onToggle}
              className="w-8 h-8 rounded-lg hover:bg-[var(--canvas)] text-[var(--mute)] hover:text-[var(--ink)] flex items-center justify-center transition-colors"
              title="Open sidebar"
            >
              <Menu size={18} />
            </button>
          </div>
        )}
      </div>

      {/* ── Sidebar Scrollable Body ───────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-3 px-2 custom-sidebar-scrollbar">
        {!isCollapsed ? (
          /* EXPANDED VIEW (Image 1 reference) */
          <div className="space-y-5 px-1">
            {/* WORKFLOW */}
            <div>
              <p className="px-3 pb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9ca3af]">
                WORKFLOW
              </p>
              <div className="space-y-1">
                {sidenavData.workflow.map(({ label, badge, badgeColor, href }) => {
                  const isActive =
                    pathname === href || (href !== "/claims" && pathname.startsWith(href));
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center justify-between px-3 py-2.5 transition-all text-[13.5px] ${
                        isActive
                          ? "bg-[#edf7f4] text-[#0d5c46] font-semibold border-l-[3.5px] border-[#0d5c46] rounded-r-xl rounded-l-xs"
                          : "text-[#374151] hover:bg-[var(--canvas)] hover:text-[var(--ink)] rounded-xl"
                      }`}
                    >
                      <span>{label}</span>
                      {badgeColor === "red" ? (
                        <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#fde8e8] text-[#c81e1e]">
                          {badge}
                        </span>
                      ) : (
                        <span
                          className={`font-mono text-[12.5px] ${
                            isActive ? "text-[#0d5c46] font-medium" : "text-[#6b7280]"
                          }`}
                        >
                          {badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CONTROLS */}
            <div>
              <p className="px-3 pb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9ca3af]">
                CONTROLS
              </p>
              <div className="space-y-1">
                {sidenavData.controls.map(({ label, value, color }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[var(--canvas)] transition-colors text-[13.5px] cursor-pointer"
                  >
                    <span className="text-[#374151]">{label}</span>
                    {color === "red" ? (
                      <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#fde8e8] text-[#c81e1e]">
                        {value}
                      </span>
                    ) : (
                      <span className="font-mono text-[12.5px] text-[#6b7280]">
                        {value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CLAIM STATUS */}
            <div>
              <p className="px-3 pb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9ca3af]">
                CLAIM STATUS
              </p>
              <div className="space-y-1">
                {sidenavData.claimStatus.map(({ label, value, href }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center justify-between px-3 py-2.5 transition-all text-[13.5px] ${
                        isActive
                          ? "bg-[#edf7f4] text-[#0d5c46] font-semibold border-l-[3.5px] border-[#0d5c46] rounded-r-xl rounded-l-xs"
                          : "text-[#374151] hover:bg-[var(--canvas)] hover:text-[var(--ink)] rounded-xl"
                      }`}
                    >
                      <span>{label}</span>
                      <span className="font-mono text-[12.5px] text-[#6b7280]">
                        {value}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* COLLAPSED VIEW (Image 2 reference) */
          <div className="flex flex-col items-center gap-2.5 py-1">
            {/* Workflow icons */}
            {sidenavData.workflow.map(({ label, href }) => {
              const isActive =
                pathname === href || (href !== "/claims" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  title={label}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-[#edf7f4] border-l-2 border-[#0d5c46]"
                      : "hover:bg-[var(--canvas)]"
                  }`}
                >
                  {getItemIcon(label, isActive)}
                </Link>
              );
            })}

            <div className="w-6 h-px bg-[var(--hair)] my-1" />

            {/* Controls icons */}
            {sidenavData.controls.map(({ label }) => (
              <div
                key={label}
                title={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-[var(--canvas)] transition-colors cursor-pointer"
              >
                {getItemIcon(label, false)}
              </div>
            ))}

            <div className="w-6 h-px bg-[var(--hair)] my-1" />

            {/* Claim status icons */}
            {sidenavData.claimStatus.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  title={label}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-[#edf7f4] border-l-2 border-[#0d5c46]"
                      : "hover:bg-[var(--canvas)]"
                  }`}
                >
                  {getItemIcon(label, isActive)}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
