import Link from "next/link";
import { workflowPipeline } from "@/lib/mock-data";
import { Inbox, FileText, ClipboardCheck, ClipboardList, ShieldCheck, BadgeCheck } from "lucide-react";

const icons = [Inbox, FileText, ClipboardCheck, ClipboardList, ShieldCheck, BadgeCheck];

export default function WorkflowPipeline() {
  return (
    <div className="bg-[var(--white)] rounded-xl border border-[var(--line)] p-4 font-sans">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)] mb-3.5">
        Claims Workflow (MTD)
      </p>
      <div className="flex items-start">
        {workflowPipeline.map(({ label, value, pct, href }, i) => {
          const Icon = icons[i];
          const isLast = i === workflowPipeline.length - 1;
          return (
            <div key={label} className="flex items-start flex-1">
              {/* Stage */}
              <Link href={href} className="flex flex-col items-center gap-1.5 flex-1 group">
                {/* Icon box */}
                <div className="w-[38px] h-[38px] rounded-lg border border-[var(--line)] flex items-center justify-center bg-[var(--canvas)] group-hover:border-[var(--teal)] group-hover:bg-[var(--teal-tint)] transition-all">
                  <Icon size={18} className="text-[var(--mute)] group-hover:text-[var(--teal)] transition-colors" strokeWidth={1.6} />
                </div>
                {/* Label */}
                <p className="text-[11.5px] text-[var(--body)] text-center leading-tight px-1 font-medium">{label}</p>
                {/* Value */}
                <p className="text-[20px] font-semibold text-[var(--ink)] tracking-tight leading-none">{value}</p>
                {/* Pass-through % */}
                {pct ? (
                  <span className="font-mono text-[10px] font-semibold text-[var(--mute)] mt-0.5">{pct}</span>
                ) : (
                  <span className="font-mono text-[10px] text-transparent select-none mt-0.5">—</span>
                )}
              </Link>

              {/* Separator */}
              {!isLast && (
                <div className="flex items-center pt-3 mx-0.5">
                  <span className="text-[var(--faint)] text-sm font-light">—</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-[11.5px] text-[var(--mute)] mt-3 pt-2 border-t border-[var(--hair)]">
        Conversion rate shown below each stage represents pass-through to the next stage.
      </p>
    </div>
  );
}
