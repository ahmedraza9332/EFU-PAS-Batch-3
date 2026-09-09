"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { sidenavData } from "@/lib/mock-data";

export default function ClaimsSubNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-11 bottom-0 w-[200px] overflow-y-auto border-r border-[var(--line)] flex flex-col z-40 bg-[var(--white)] font-sans">
      {/* Claims header */}
      <div className="flex items-center justify-between px-3 py-3 border-b border-[var(--hair)]">
        <span className="text-[15px] font-semibold text-[var(--ink)] tracking-tight">Claims</span>
        <button className="w-6 h-6 rounded-full border border-[var(--line)] bg-[var(--white)] text-[var(--mute)] hover:text-[var(--ink)] flex items-center justify-center transition-colors">
          <ChevronLeft size={13} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-2 px-1">
        {/* WORKFLOW */}
        <p className="px-3 pt-2 pb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)]">
          Workflow
        </p>
        {sidenavData.workflow.map(({ label, badge, badgeColor, href }) => {
          const isActive = pathname === href || (href !== "/claims" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-[13.5px] ${
                isActive
                  ? "bg-[var(--teal)] text-white font-semibold shadow-sm"
                  : "text-[var(--body)] hover:bg-[var(--canvas)] hover:text-[var(--ink)]"
              }`}
            >
              <span>{label}</span>
              <span
                className={`font-mono text-[12px] font-medium px-1.5 py-0.5 rounded ${
                  isActive
                    ? "bg-white/20 text-white"
                    : badgeColor === "red"
                    ? "bg-[var(--red)] text-white"
                    : "bg-[var(--hair)] text-[var(--mute)]"
                }`}
              >
                {badge}
              </span>
            </Link>
          );
        })}

        {/* CONTROLS */}
        <p className="px-3 pt-3 pb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)]">
          Controls
        </p>
        {sidenavData.controls.map(({ label, value, color }) => (
          <div key={label} className="flex items-center justify-between px-3 py-2 text-[13.5px]">
            <span className="text-[var(--body)]">{label}</span>
            <span className={`font-mono text-[12px] font-semibold ${color === "red" ? "text-[var(--red)]" : "text-[var(--mute)]"}`}>
              {value}
            </span>
          </div>
        ))}

        {/* CLAIM STATUS */}
        <p className="px-3 pt-3 pb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)]">
          Claim Status
        </p>
        {sidenavData.claimStatus.map(({ label, value, href, highlight }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--canvas)] transition-colors text-[13.5px]"
          >
            <span className="text-[var(--body)]">{label}</span>
            <span className={`font-mono text-[12px] font-semibold ${highlight ? "text-[var(--red)]" : "text-[var(--teal)]"}`}>
              {value}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
