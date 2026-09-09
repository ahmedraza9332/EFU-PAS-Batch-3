import { notFound } from "next/navigation";
import Hero from "@/components/layout/Hero";
import ComingSoon from "@/components/partners/ComingSoon";
import { getPartnerProfile } from "@/lib/data/partnerProfiles";

export default async function PartnerChannelsPage({ params }: PageProps<"/partners/[id]/channels">) {
  const { id } = await params;
  const partner = getPartnerProfile(id);

  if (!partner) {
    notFound();
  }

  return (
    <main className="px-(--layout-x) pb-(--layout-x)">
      <Hero
        crumbs={[{ label: "Partners & Channels" }, { label: partner.name }, { label: "Channels" }]}
        title="Channels"
        subtitle={`Integration channels ${partner.name} enrolls members through.`}
      />
      <ComingSoon area="Channel configuration" />
    </main>
  );
}
