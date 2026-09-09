import { notFound } from "next/navigation";
import Hero from "@/components/layout/Hero";
import ComingSoon from "@/components/partners/ComingSoon";
import { getPartnerProfile } from "@/lib/data/partnerProfiles";

export default async function PartnerWebhooksPage({ params }: PageProps<"/partners/[id]/webhooks">) {
  const { id } = await params;
  const partner = getPartnerProfile(id);

  if (!partner) {
    notFound();
  }

  return (
    <main className="px-(--layout-x) pb-(--layout-x)">
      <Hero
        crumbs={[{ label: "Partners & Channels" }, { label: partner.name }, { label: "Webhooks" }]}
        title="Webhooks"
        subtitle={`Event subscriptions delivered to ${partner.name}.`}
      />
      <ComingSoon area="Webhook subscriptions" />
    </main>
  );
}
