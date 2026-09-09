"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RailGroup } from "@/lib/types";

interface RailProps {
  title: string;
  groups: RailGroup[];
}

export default function Rail({ title, groups }: RailProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`flex-none overflow-hidden border-r border-(--color-line) bg-(--color-surface) transition-[width] duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        collapsed ? "w-[44px] px-1.5 py-4" : "w-[248px] px-3.5 py-4"
      }`}
    >
      <div className={`flex items-center pb-2.5 ${collapsed ? "justify-center" : "justify-between"}`}>
        {!collapsed && (
          <span className="font-(family-name:--font-ui) text-[15px] font-semibold text-(--color-ink)">
            {title}
          </span>
        )}
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="grid h-[26px] w-[26px] flex-none place-items-center rounded-full border border-(--color-line) text-(--color-mute) transition-colors hover:border-(--accent) hover:text-(--accent-ink)"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-3.5 w-3.5 transition-transform duration-[280ms] ${collapsed ? "rotate-180" : ""}`}
            fill="currentColor"
          >
            <path d="M15 6l-6 6 6 6V6z" />
          </svg>
        </button>
      </div>

      {!collapsed && (
        <nav className="flex flex-col">
          {groups.map((group) => (
            <div key={group.label} className="mb-1">
              <div className="mb-1.5 mt-3 px-1 font-(family-name:--font-mono) text-[10px] font-semibold uppercase tracking-[.13em] text-(--color-faint)">
                {group.label}
              </div>
              {group.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 rounded-(--radius-md) border-l-[3px] px-2.5 py-2 font-(family-name:--font-ui) text-[13.5px] transition-colors ${
                      active
                        ? "border-(--accent) bg-(--tint) font-semibold text-(--accent-ink)"
                        : "border-transparent text-(--color-body) hover:bg-(--color-row-hover)"
                    }`}
                  >
                    <span className="flex-1 truncate">{item.label}</span>
                    {item.count &&
                      (item.countTone === "amber" ? (
                        <span className="rounded-(--radius-pill) bg-(--color-amber-tint) px-2 py-[1px] font-(family-name:--font-mono) text-[10.5px] font-medium text-(--color-amber-ink)">
                          {item.count}
                        </span>
                      ) : (
                        <span className="font-(family-name:--font-mono) text-[10.5px] font-medium text-(--color-mute)">
                          {item.count}
                        </span>
                      ))}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      )}
    </aside>
  );
}
