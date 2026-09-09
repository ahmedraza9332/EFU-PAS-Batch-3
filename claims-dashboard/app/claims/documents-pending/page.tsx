"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Bell, Download, ExternalLink } from "lucide-react";
import {
  docsPendingKPIs,
  missingDocTypes,
  delayBreakdown,
  chaseListRows,
} from "@/lib/mock-data";

type TabKey = "all" | "past-sla" | "within-sla" | "no-reminder";

const TABS: { key: TabKey; label: string; count?: number }[] = [
  { key: "all", label: "All", count: 121 },
  { key: "past-sla", label: "Past SLA" },
  { key: "within-sla", label: "Within SLA" },
  { key: "no-reminder", label: "No reminder sent" },
];

// Pending-doc pill colours keyed by doc type keyword
function docPillColor(doc: string) {
  const d = doc.toLowerCase();
  if (d.includes("hospital")) return "text-[var(--teal)] bg-[var(--teal-tint)]";
  if (d.includes("discharge")) return "text-[var(--indigo)] bg-[var(--indigo-tint)]";
  if (d.includes("cnic")) return "text-[var(--amber)] bg-[var(--amber-tint)]";
  if (d.includes("prescription") || d.includes("diagnosis")) return "text-[var(--violet)] bg-[var(--violet-tint)]";
  if (d.includes("bank") || d.includes("payout")) return "text-[var(--green)] bg-[var(--green-tint)]";
  return "text-[var(--body)] bg-[var(--hair)]";
}

export default function DocumentsPendingPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  const filteredRows = chaseListRows.filter((row) => {
    if (activeTab === "past-sla") return row.overdue;
    if (activeTab === "within-sla") return !row.overdue;
    if (activeTab === "no-reminder") return row.lastReminder === "—" || !row.lastReminder;
    return true;
  });

  const getTabCount = (key: TabKey) => {
    if (key === "all") return 318; // total overall pending claims count from KPI
    if (key === "past-sla") return chaseListRows.filter((r) => r.overdue).length;
    if (key === "within-sla") return chaseListRows.filter((r) => !r.overdue).length;
    if (key === "no-reminder") return chaseListRows.filter((r) => r.lastReminder === "—" || !r.lastReminder).length;
    return undefined;
  };

  return (
    <div className="min-h-screen bg-[var(--canvas)] font-sans">
      {/* ── Hero Header ─────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-b from-[var(--teal-tint)] to-[var(--canvas)] border-b border-[var(--line)] px-6 py-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[11.5px] text-[var(--mute)] mb-2">
          <Link href="/claims" className="hover:text-[var(--teal)] transition-colors">Claims</Link>
          <ChevronRight size={11} className="text-[var(--faint)]" />
          <span>Workflow</span>
          <ChevronRight size={11} className="text-[var(--faint)]" />
          <span className="text-[var(--body)]">Documents pending</span>
        </div>

        <h1 className="text-[26px] font-semibold text-[var(--teal-deep)] tracking-tight leading-snug mb-1.5">
          Documents Pending
        </h1>
        <p className="text-[13.5px] text-[var(--body)] leading-relaxed mb-4 max-w-2xl">
          <strong className="font-semibold text-[var(--ink)]">318</strong> claims are waiting on documents. Each reminder lists only what that claim is missing, so a claimant is never asked twice for the same paper.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-2 bg-[var(--teal)] hover:bg-[var(--teal-deep)] text-white text-[12.5px] font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm">
            <Bell size={13} />
            Send all reminders
          </button>
          <button className="flex items-center gap-2 bg-[var(--white)] hover:bg-[var(--canvas)] text-[var(--ink)] text-[12.5px] font-semibold px-4 py-2 rounded-lg border border-[var(--line)] transition-colors">
            <Download size={13} />
            Download chase list
          </button>
        </div>
      </div>

      <div className="px-6 py-5 space-y-5">
        {/* ── 5 KPI Cards ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-5 gap-3.5">
          {docsPendingKPIs.map(({ label, value, sub }) => (
            <div
              key={label}
              className="bg-[var(--white)] rounded-xl border border-[var(--line)] p-4 flex flex-col gap-1"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)] leading-tight">
                {label}
              </p>
              <p className="text-[22px] font-semibold text-[var(--ink)] tracking-tight leading-none mt-1">
                {value}
              </p>
              <p className="text-[11.5px] text-[var(--mute)] mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {/* ── Two-column: What's missing + Where delay sits ──────────────── */}
        <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 320px" }}>
          {/* What is missing */}
          <div className="bg-[var(--white)] rounded-xl border border-[var(--line)] p-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)] mb-4">
              What is missing
            </p>
            <div className="space-y-3">
              {missingDocTypes.map(({ label, count, max }) => {
                const pct = Math.round((count / max) * 100);
                return (
                  <div key={label} className="flex items-center gap-3">
                    <span className="text-[12.5px] text-[var(--body)] w-44 flex-shrink-0">{label}</span>
                    <div className="flex-1 h-4 bg-[var(--hair)] rounded-sm overflow-hidden">
                      <div
                        className="h-full rounded-sm bg-[var(--teal)] transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="font-mono text-[12px] font-semibold text-[var(--ink)] w-8 text-right flex-shrink-0">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Where the delay sits */}
          <div className="bg-[var(--white)] rounded-xl border border-[var(--line)] p-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)] mb-4">
              Where the delay sits
            </p>
            <div className="space-y-0">
              {delayBreakdown.map(({ label, count }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-2.5 border-b border-[var(--hair)] last:border-0"
                >
                  <span className="text-[13px] text-[var(--body)]">{label}</span>
                  <span className="font-mono text-[13px] font-semibold text-[var(--ink)]">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Chase List ─────────────────────────────────────────────────── */}
        <div className="bg-[var(--white)] rounded-xl border border-[var(--line)] overflow-hidden">
          {/* Tab header */}
          <div className="flex items-center justify-between px-5 pt-4 pb-0 border-b border-[var(--hair)]">
            <div className="flex items-end gap-0">
              {TABS.map(({ key, label }) => {
                const count = getTabCount(key);
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-4 py-2.5 text-[12.5px] font-semibold border-b-2 transition-colors -mb-px ${
                      activeTab === key
                        ? "border-[var(--teal)] text-[var(--teal)]"
                        : "border-transparent text-[var(--mute)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {label}
                    {count !== undefined && (
                      <span className="ml-1.5 font-mono text-[11px]">({count})</span>
                    )}
                  </button>
                );
              })}
            </div>
            <span className="text-[11.5px] text-[var(--mute)] pb-3">
              Chase list &middot; {filteredRows.length} showing
            </span>
          </div>

          {/* Table */}
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[var(--canvas)] border-b border-[var(--line)]">
                <th className="px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)]">
                  Claim
                </th>
                <th className="px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)]">
                  Member
                </th>
                <th className="px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)]">
                  Amount
                </th>
                <th className="px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)]">
                  Pending documents
                </th>
                <th className="px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)]">
                  Waiting
                </th>
                <th className="px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)]">
                  Last reminder
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--hair)]">
              {filteredRows.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-[13px] text-[var(--mute)]">
                    No claims found for this filter.
                  </td>
                </tr>
              ) : (
                filteredRows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-[var(--canvas)] transition-colors group"
                  >
                    <td className="px-5 py-3">
                      <span className="font-mono text-[12px] text-[var(--ink)] font-medium">
                        {row.id}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[13px] text-[var(--ink)]">{row.member}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-[12.5px] text-[var(--body)]">{row.amount}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1.5">
                        {row.pending.map((doc) => (
                          <span
                            key={doc}
                            className={`text-[11.5px] font-semibold px-2 py-0.5 rounded ${docPillColor(doc)}`}
                          >
                            {doc}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {row.overdue ? (
                        <span className="inline-flex items-center font-mono text-[12px] font-semibold text-[var(--red)] bg-[var(--red-tint)] px-2 py-0.5 rounded">
                          {row.waiting}
                        </span>
                      ) : (
                        <span className="font-mono text-[12.5px] text-[var(--body)]">
                          {row.waiting}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-[12px] text-[var(--mute)]">
                        {row.lastReminder}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 justify-end">
                        <button className="text-[11.5px] font-semibold text-[var(--teal)] bg-[var(--teal-tint)] hover:bg-[var(--teal)] hover:text-white px-3 py-1.5 rounded-md border border-[var(--teal)] transition-all">
                          Remind
                        </button>
                        <button className="text-[11.5px] font-semibold text-[var(--body)] bg-[var(--white)] hover:bg-[var(--canvas)] px-3 py-1.5 rounded-md border border-[var(--line)] transition-all flex items-center gap-1">
                          Open <ExternalLink size={10} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Table footer */}
          <div className="px-5 py-3 border-t border-[var(--hair)] flex items-center justify-between">
            <span className="font-mono text-[11px] text-[var(--mute)]">
              Showing {filteredRows.length} of {chaseListRows.length} claims in view
            </span>
            <button className="text-[11.5px] font-semibold text-[var(--teal)] hover:underline">
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
