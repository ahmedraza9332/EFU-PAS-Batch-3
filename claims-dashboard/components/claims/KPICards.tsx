import { kpiCards } from "@/lib/mock-data";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function KPICards() {
  return (
    <div className="grid grid-cols-4 gap-3.5 font-sans">
      {kpiCards.map(({ label, value, subValue, change, baseline, baseDate, up }) => (
        <div
          key={label}
          className="bg-[var(--white)] rounded-xl border border-[var(--line)] p-4 flex flex-col gap-1.5 transition-shadow hover:shadow-sm"
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)] leading-tight">
            {label}
          </p>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <p className="text-[26px] font-semibold text-[var(--ink)] tracking-tight leading-none">{value}</p>
            {subValue && (
              <span className="text-[14px] font-semibold text-[var(--mute)]">{subValue}</span>
            )}
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            {up ? (
              <TrendingUp size={12} className="text-[var(--green)] flex-shrink-0" />
            ) : (
              <TrendingDown size={12} className="text-[var(--red)] flex-shrink-0" />
            )}
            <span className={`font-mono text-[11px] font-semibold ${up ? "text-[var(--green)]" : "text-[var(--red)]"}`}>
              {change}
            </span>
            <span className="text-[11.5px] text-[var(--mute)] truncate">
              vs {baseDate} ({baseline})
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
