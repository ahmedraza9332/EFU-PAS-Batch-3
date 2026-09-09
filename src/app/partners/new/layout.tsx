import Rail from "@/components/layout/Rail";
import { NEW_PARTNER_RAIL } from "@/lib/data/addPartner";

export default function NewPartnerLayout({ children }: LayoutProps<"/partners/new">) {
  return (
    <div className="a-teal flex min-h-[calc(100vh-97px)] items-stretch">
      <Rail title="Partners" groups={NEW_PARTNER_RAIL} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
