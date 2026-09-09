import { notFound } from "next/navigation";
import Hero from "@/components/layout/Hero";
import ComingSoon from "@/components/partners/ComingSoon";
import { getPartnerProfile } from "@/lib/data/partnerProfiles";

export default async function PartnerSftpPage({ params }: PageProps<"/partners/[id]/sftp">) {
  const { id } = await params;
  const partner = getPartnerProfile(id);

  if (!partner) {
    notFound();
  }

  return (
    <main className="px-(--layout-x) pb-(--layout-x)">
      <Hero
        crumbs={[{ label: "Partners & Channels" }, { label: partner.name }, { label: "SFTP" }]}
        title="SFTP"
        subtitle={`Batch file drop configuration for ${partner.name}.`}
      />
      <ComingSoon area="SFTP configuration" />
    </main>
  );
}
