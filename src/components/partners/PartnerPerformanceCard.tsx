import Card from "@/components/ui/Card";
import { Partner } from "@/lib/types";

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="min-w-0">
      <div className="font-(family-name:--font-ui) text-[11.5px] text-(--color-mute)">{label}</div>
      <div className="mt-1 font-(family-name:--font-mono) text-[15px] font-semibold text-(--color-ink)">
        {value}
      </div>
    </div>
  );
}

export default function PartnerPerformanceCard({ partner }: { partner: Partner }) {
  const ok = partner.healthTone === "ok";

  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="font-(family-name:--font-ui) text-[14px] font-semibold text-(--color-ink)">
            {partner.name}
          </div>
          <div className="mt-0.5 whitespace-nowrap font-(family-name:--font-ui) text-[11.5px] text-(--color-mute)">
            {partner.type} · {partner.primaryChannel}
          </div>
        </div>
        <span
          className={`inline-flex flex-none items-center gap-1.5 whitespace-nowrap font-(family-name:--font-ui) text-[11.5px] font-medium ${
            ok ? "text-(--color-green-ink)" : "text-(--color-amber-ink)"
          }`}
        >
          <i
            className={`h-[7px] w-[7px] rounded-full ${ok ? "bg-(--color-green)" : "bg-(--color-amber)"}`}
          />
          Live <span className="font-normal text-(--color-mute)">· {partner.healthDetail}</span>
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
        <Stat label="Policies issued MTD" value={partner.policiesIssuedMtd} />
        <Stat label="Premium collected" value={partner.premiumCollected} />
        <Stat label="Claims SLA compliance" value={partner.claimsSlaCompliance} />
        <Stat label="Active schemes" value={partner.activeSchemes} />
      </div>

      <div className="mt-4 border-t border-(--color-hair) pt-3 font-(family-name:--font-ui) text-[11px] text-(--color-mute)">
        {partner.note}
      </div>
    </Card>
  );
}
