import Link from "next/link";
import { ChevronRight, Upload } from "lucide-react";
import KPICards from "@/components/claims/KPICards";
import WorkflowPipeline from "@/components/claims/WorkflowPipeline";
import ClaimsPaidSection from "@/components/claims/ClaimsPaidSection";
import HumanReviewPanel from "@/components/claims/HumanReviewPanel";

export const metadata = {
  title: "Claims | Unified Policy Administration System",
};

export default function ClaimsPage() {
  return (
    <div className="p-6 space-y-4 font-sans bg-[var(--canvas)] min-h-[calc(100vh-44px)]">

      {/* ── Page Header (Hero style) ───────────────────────────────────────────── */}
      <div className="flex items-start justify-between bg-gradient-to-b from-[var(--tint)] to-[var(--canvas)] border-b border-[var(--line)] -mx-6 -mt-6 p-6 mb-2">
        <div>
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[11.5px] text-[var(--mute)] mb-1.5">
            <Link href="/claims" className="hover:text-[var(--teal)] transition-colors">Claims</Link>
            <ChevronRight size={11} className="text-[var(--faint)]" />
            <span>Workflow</span>
            <ChevronRight size={11} className="text-[var(--faint)]" />
            <span className="text-[var(--teal-deep)] font-semibold">Registered</span>
          </div>
          <h1 className="text-[26px] font-semibold text-[var(--teal-deep)] tracking-tight leading-snug">
            Claims Intake &amp; Registration
          </h1>
          <p className="text-[13.5px] text-[var(--body)] leading-relaxed mt-0.5">
            Bulk claims file intake and the registered claims queue.{" "}
            <span className="font-semibold text-[var(--ink)]">412 claims registered this cycle.</span>
          </p>
        </div>

        <button className="ref-btn flex items-center gap-2 flex-shrink-0 mt-1 shadow-sm">
          <Upload size={14} />
          Upload Claims
        </button>
      </div>

      {/* ── 4 KPI Cards ───────────────────────────────────────────── */}
      <KPICards />

      {/* ── Claims Workflow Pipeline ───────────────────────────────── */}
      <WorkflowPipeline />

      {/* ── Two-column: Claims Paid Section (left) + Human Review (right) */}
      <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 340px" }}>
        <ClaimsPaidSection />
        <HumanReviewPanel />
      </div>

    </div>
  );
}
