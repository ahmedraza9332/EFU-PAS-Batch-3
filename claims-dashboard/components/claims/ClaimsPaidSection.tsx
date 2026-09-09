"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";
import { chartData, claimsPaidTable } from "@/lib/mock-data";

const SERIES = [
  { key: "Hospitalization", color: "#017683", label: "Hospitalization" },
  { key: "OPD", color: "#04525c", label: "OPD" },
  { key: "Maternity", color: "#1e7b52", label: "Maternity" },
  { key: "CriticalIllness", color: "#b0322b", label: "Critical Illness" },
  { key: "Accidental", color: "#7b8a8c", label: "Accidental" },
];

type Tab = "MTD" | "QTD" | "YTD";

export default function ClaimsPaidSection() {
  const [activeTab, setActiveTab] = useState<Tab>("MTD");

  return (
    <div className="bg-[var(--white)] rounded-xl border border-[var(--line)] p-4 flex flex-col font-sans">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[var(--hair)]">
        <h3 className="text-[15px] font-semibold text-[var(--ink)] tracking-tight">Claims Paid by Type</h3>
        <div className="flex gap-0.5 bg-[var(--hair)] rounded-lg p-0.5">
          {(["MTD", "QTD", "YTD"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`text-[12.5px] px-3 py-1 rounded-md font-semibold transition-all ${
                activeTab === t
                  ? "bg-[var(--teal)] text-white shadow-sm"
                  : "text-[var(--mute)] hover:text-[var(--ink)]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3.5 py-3">
        {SERIES.map(({ key, color, label }) => (
          <div key={key} className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-sm inline-block flex-shrink-0"
              style={{ background: color }}
            />
            <span className="text-[11.5px] font-medium text-[var(--body)]">{label}</span>
          </div>
        ))}
      </div>

      {/* Stacked Bar Chart */}
      <div className="px-1" style={{ height: 210 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 4, right: 8, left: -10, bottom: 0 }}
            barSize={30}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--hair)" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: "#7b8a8c", fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 600]}
              ticks={[0, 100, 200, 300, 400, 500, 600]}
              tick={{ fontSize: 10, fill: "#7b8a8c", fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: "1px solid var(--line)",
                backgroundColor: "var(--white)",
                fontSize: 11.5,
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              }}
              cursor={{ fill: "rgba(0,0,0,0.02)" }}
            />
            {SERIES.map(({ key, color }) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="stack"
                fill={color}
                radius={key === "Accidental" ? [2, 2, 0, 0] : [0, 0, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="mt-2">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-t border-[var(--hair)]">
              <th className="px-3 py-2.5 font-mono text-[10px] font-semibold text-[var(--mute)] uppercase tracking-[0.14em]">
                Type
              </th>
              <th className="px-3 py-2.5 font-mono text-[10px] font-semibold text-[var(--mute)] uppercase tracking-[0.14em] text-right">
                Claims Paid
              </th>
              <th className="px-3 py-2.5 font-mono text-[10px] font-semibold text-[var(--mute)] uppercase tracking-[0.14em] text-right">
                % Share
              </th>
              <th className="px-3 py-2.5 font-mono text-[10px] font-semibold text-[var(--mute)] uppercase tracking-[0.14em] text-right">
                vs 25 Jul 2026
              </th>
            </tr>
          </thead>
          <tbody>
            {claimsPaidTable.map(({ type, claimsPaid, pctShare, vsJul, up }) => (
              <tr
                key={type}
                className="border-t border-[var(--hair)] hover:bg-[var(--canvas)] transition-colors"
              >
                <td className="px-3 py-2.5 text-[12.5px] text-[var(--ink)] font-medium">{type}</td>
                <td className="px-3 py-2.5 font-mono text-[12.5px] text-right text-[var(--ink)]">{claimsPaid}</td>
                <td className="px-3 py-2.5 font-mono text-[12.5px] text-right text-[var(--body)]">{pctShare}</td>
                <td className="px-3 py-2.5 font-mono text-[12.5px] text-right">
                  <span
                    className={`inline-flex items-center gap-0.5 font-semibold ${
                      up ? "text-[var(--green)]" : "text-[var(--red)]"
                    }`}
                  >
                    {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {vsJul}
                  </span>
                </td>
              </tr>
            ))}
            {/* Total row */}
            <tr className="border-t-2 border-[var(--line)] bg-[var(--canvas)]">
              <td className="px-3 py-2.5 text-[12.5px] font-bold text-[var(--ink)]">Total</td>
              <td className="px-3 py-2.5 font-mono text-[12.5px] font-bold text-right text-[var(--ink)]">2,973</td>
              <td className="px-3 py-2.5 font-mono text-[12.5px] font-bold text-right text-[var(--ink)]">100%</td>
              <td className="px-3 py-2.5 font-mono text-[12.5px] text-right">
                <span className="inline-flex items-center gap-0.5 font-bold text-[var(--green)]">
                  <TrendingUp size={12} />
                  +12.4%
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="px-3 pt-2.5 pb-1 font-mono text-[10px] text-[var(--mute)] border-t border-[var(--hair)] mt-2">
        All amounts in PKR | MTD as of 02 Sep 2026, 09:14 AM
      </p>
    </div>
  );
}
