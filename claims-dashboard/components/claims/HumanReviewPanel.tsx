import Link from "next/link";
import { exceptionsList, humanReviewData } from "@/lib/mock-data";
import { ArrowRight } from "lucide-react";

export default function HumanReviewPanel() {
  return (
    <div className="bg-[var(--white)] rounded-xl border border-[var(--line)] p-4 flex flex-col h-full font-sans">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
        <div>
          <h3 className="text-[15px] font-semibold text-[var(--ink)] tracking-tight">Human Review Needed</h3>
          <div className="flex items-center gap-3 mt-1">
            <span className="font-mono text-[11.5px] text-[var(--mute)]">
              All{" "}
              <span className="font-semibold text-[var(--ink)]">{humanReviewData.all}</span>
            </span>
            <span className="font-mono text-[11.5px] text-[var(--mute)]">
              Overdue{" "}
              <span className="font-semibold text-[var(--ink)]">{humanReviewData.overdue}</span>
            </span>
            <span className="font-mono text-[11.5px] text-[var(--mute)]">
              Today{" "}
              <span className="font-semibold text-[var(--ink)]">{humanReviewData.today}</span>
            </span>
          </div>
        </div>
        <span className="text-[22px] font-bold font-mono text-[var(--red)] tracking-tight">{humanReviewData.total}</span>
      </div>

      {/* Exceptions list */}
      <div className="flex-1 overflow-y-auto divide-y divide-[var(--hair)] my-1">
        {exceptionsList.map((item) => (
          <div key={item.title} className="py-3 px-1 flex items-start gap-2.5 hover:bg-[var(--canvas)] transition-colors rounded-lg">
            {/* Red indicator dot */}
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--red)] flex-shrink-0 mt-1" />

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[12.5px] font-semibold text-[var(--ink)]">{item.title}</span>
                <span className="font-mono text-[11.5px] font-bold text-[var(--red)]">{item.count}</span>
              </div>
              <p className="text-[11px] text-[var(--body)] leading-relaxed mb-1">{item.description}</p>
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[11.5px] font-semibold text-[var(--ink)]">{item.amount}</span>
                <span className="font-mono text-[10px] text-[var(--mute)]">Oldest {item.oldest}</span>
              </div>
            </div>

            {/* Review link */}
            <Link
              href="/claims/exceptions"
              className="border border-[var(--line)] bg-[var(--white)] hover:bg-[var(--teal-tint)] hover:border-[var(--teal)] text-[var(--teal)] text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 flex-shrink-0 transition-all mt-0.5"
            >
              Review <ArrowRight size={10} />
            </Link>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[var(--line)] mt-auto">
        <Link
          href="/claims/exceptions"
          className="text-[11.5px] text-[var(--teal)] hover:text-[var(--teal-deep)] font-semibold hover:underline flex items-center gap-1.5"
        >
          View all exceptions <ArrowRight size={11} />
        </Link>
      </div>
    </div>
  );
}
