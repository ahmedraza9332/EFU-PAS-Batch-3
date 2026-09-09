"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { humanReviewQueue, HumanReviewItem } from "@/lib/mock-data";

export default function HumanReviewDetailPage() {
  const params = useParams();
  const claimId = params?.id as string;

  const selectedClaim: HumanReviewItem | undefined = humanReviewQueue.find(
    (item) => item.id.toLowerCase() === claimId?.toLowerCase()
  ) || humanReviewQueue[0];

  return (
    <div className="min-h-screen bg-[var(--canvas)] font-sans">
      {/* ── Top Header Bar ────────────────────────────────────────────── */}
      <div className="bg-gradient-to-b from-[var(--teal-tint)] to-[var(--canvas)] border-b border-[var(--line)] px-6 py-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[11.5px] text-[var(--mute)] mb-2">
          <Link href="/claims" className="hover:text-[var(--teal)] transition-colors">
            Claims
          </Link>
          <ChevronRight size={11} className="text-[var(--faint)]" />
          <Link href="/claims/human-review" className="hover:text-[var(--teal)] transition-colors">
            Workflow
          </Link>
          <ChevronRight size={11} className="text-[var(--faint)]" />
          <span className="text-[var(--body)]">Human Review</span>
        </div>

        <h1 className="text-[26px] font-semibold text-[var(--teal-deep)] tracking-tight leading-snug mb-1">
          Human Review
        </h1>
        <p className="text-[13.5px] text-[var(--mute)] leading-relaxed">
          The adjudicator workspace. AI assists with findings; the decision stays with a human.
        </p>
      </div>

      <div className="px-6 py-6 space-y-5">
        {/* Context Sub-header */}
        <div className="flex items-center justify-between pb-1">
          <div>
            <h2 className="text-[16px] font-semibold text-[var(--ink)]">
              Claim {selectedClaim.id}
            </h2>
            <p className="text-[12.5px] text-[var(--mute)]">
              {selectedClaim.member} &bull; {selectedClaim.hospital} &bull; received {selectedClaim.received}
            </p>
          </div>
          <Link
            href="/claims/human-review"
            className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[var(--teal)] hover:underline"
          >
            &larr; Back to review queue
          </Link>
        </div>

        {/* Top Grid: Left Claim Details + Right AI Recommendation */}
        <div className="grid gap-5" style={{ gridTemplateColumns: "1fr 340px" }}>
          {/* Left Card: Claim Details */}
          <div className="bg-[var(--white)] rounded-xl border border-[var(--line)] p-5">
            <h3 className="text-[14px] font-semibold text-[var(--ink)] mb-4">
              Claim {selectedClaim.id}
            </h3>
            <div className="divide-y divide-[var(--hair)] text-[13px]">
              <div className="grid grid-cols-3 py-2.5">
                <span className="text-[var(--mute)]">Member</span>
                <span className="col-span-2 font-medium text-[var(--ink)]">
                  {selectedClaim.member}
                </span>
              </div>
              <div className="grid grid-cols-3 py-2.5">
                <span className="text-[var(--mute)]">Policy</span>
                <span className="col-span-2 font-mono text-[var(--ink)]">
                  {selectedClaim.policy}
                </span>
              </div>
              <div className="grid grid-cols-3 py-2.5">
                <span className="text-[var(--mute)]">Hospital</span>
                <span className="col-span-2 font-medium text-[var(--ink)]">
                  {selectedClaim.hospital}
                </span>
              </div>
              <div className="grid grid-cols-3 py-2.5">
                <span className="text-[var(--mute)]">Claim Amount</span>
                <span className="col-span-2 font-mono text-[var(--ink)]">
                  {selectedClaim.amount}
                </span>
              </div>
              <div className="grid grid-cols-3 py-2.5">
                <span className="text-[var(--mute)]">Coverage</span>
                <span className="col-span-2 font-mono text-[var(--ink)]">
                  {selectedClaim.coverage}
                </span>
              </div>
              <div className="grid grid-cols-3 py-2.5">
                <span className="text-[var(--mute)]">Available Balance</span>
                <span className="col-span-2 font-mono text-[var(--ink)]">
                  {selectedClaim.availableBalance}
                </span>
              </div>
            </div>
          </div>

          {/* Right Card: AI Recommendation */}
          <div className="bg-[#fffcf7] rounded-xl border border-[#fed7aa] p-5 flex flex-col justify-between">
            <div className="space-y-3">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#c2410c]">
                AI RECOMMENDATION
              </p>
              <p className="text-[13.5px] font-semibold text-[#9a3412]">
                {selectedClaim.aiRecommendation.recommendation}
              </p>
              <div className="text-[12.5px] leading-relaxed text-[#7c2d12] space-y-2">
                <p>
                  <strong className="font-semibold">Why: </strong>
                  {selectedClaim.aiRecommendation.why}
                </p>
                <p>
                  <strong className="font-semibold">What's needed: </strong>
                  {selectedClaim.aiRecommendation.whatsNeeded}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card: Documents Submitted */}
        <div className="bg-[var(--white)] rounded-xl border border-[var(--line)] p-5 space-y-4">
          <h3 className="text-[14px] font-semibold text-[var(--ink)]">
            Documents Submitted
          </h3>
          <table className="w-full border-collapse text-left text-[12.5px]">
            <thead>
              <tr className="border-b border-[var(--line)]">
                <th className="py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)]">
                  Document
                </th>
                <th className="py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)]">
                  Submitted by
                </th>
                <th className="py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)]">
                  Received
                </th>
                <th className="py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mute)]">
                  Status
                </th>
                <th className="py-2 text-right" />
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--hair)]">
              {selectedClaim.documents.map((doc, idx) => (
                <tr key={idx} className="hover:bg-[var(--canvas)] transition-colors">
                  <td className="py-2.5 font-medium text-[var(--ink)]">
                    {doc.document}
                  </td>
                  <td className="py-2.5 text-[var(--body)]">
                    {doc.submittedBy}
                  </td>
                  <td className="py-2.5 font-mono text-[var(--mute)]">
                    {doc.received}
                  </td>
                  <td className="py-2.5">
                    <span className="inline-flex items-center font-mono text-[11px] font-semibold text-[var(--teal)] bg-[var(--teal-tint)] px-2 py-0.5 rounded">
                      {doc.status}
                    </span>
                  </td>
                  <td className="py-2.5 text-right">
                    <button className="inline-flex items-center gap-1 font-semibold text-[var(--teal)] hover:underline">
                      View &rarr;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Action Bar */}
        <div className="flex items-center gap-3 pt-2">
          <Link
            href="/claims/human-review"
            className="bg-[var(--white)] hover:bg-[var(--teal-tint)] text-[var(--teal-deep)] border border-[var(--teal)] text-[12.5px] font-semibold px-5 py-2 rounded-lg transition-colors shadow-sm"
          >
            Accept
          </Link>
          <Link
            href="/claims/human-review"
            className="bg-[var(--white)] hover:bg-[var(--canvas)] text-[var(--ink)] border border-[var(--line)] text-[12.5px] font-semibold px-5 py-2 rounded-lg transition-colors shadow-sm"
          >
            Query
          </Link>
          <Link
            href="/claims/human-review"
            className="bg-[var(--white)] hover:bg-[var(--red-tint)] text-[var(--red)] border border-[var(--red)] text-[12.5px] font-semibold px-5 py-2 rounded-lg transition-colors shadow-sm"
          >
            Reject
          </Link>
        </div>
      </div>
    </div>
  );
}
