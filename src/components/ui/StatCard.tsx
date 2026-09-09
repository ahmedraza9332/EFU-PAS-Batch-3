import Card from "@/components/ui/Card";
import { PolicyStat, PolicyStatTone } from "@/lib/types";

const toneClasses: Record<PolicyStatTone, string> = {
  muted: "text-(--color-mute)",
  amber: "text-(--color-amber-ink)",
  red: "text-(--color-red-ink)",
};

export default function StatCard({ label, value, detail, tone = "muted" }: PolicyStat) {
  return (
    <Card>
      <div className="font-(family-name:--font-ui) text-[11.5px] text-(--color-mute)">
        {label}
      </div>
      <div className="mt-2 font-(family-name:--font-mono) text-[22px] font-semibold leading-none text-(--color-ink)">
        {value}
      </div>
      <div className={`mt-2 font-(family-name:--font-ui) text-[11px] ${toneClasses[tone]}`}>
        {detail}
      </div>
    </Card>
  );
}
