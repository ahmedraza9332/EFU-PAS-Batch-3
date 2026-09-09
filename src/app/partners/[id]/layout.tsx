import { notFound } from "next/navigation";
import Rail from "@/components/layout/Rail";
import { buildPartnerRail, getPartnerProfile } from "@/lib/data/partnerProfiles";

export default async function PartnerLayout({ children, params }: LayoutProps<"/partners/[id]">) {
  const { id } = await params;
  const profile = getPartnerProfile(id);

  if (!profile) {
    notFound();
  }

  return (
    <div className="a-teal flex min-h-[calc(100vh-97px)] items-stretch">
      <Rail title="Partners" groups={buildPartnerRail(profile)} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
