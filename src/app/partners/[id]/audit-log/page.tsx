import { notFound } from "next/navigation";
import Hero from "@/components/layout/Hero";
import Card from "@/components/ui/Card";
import { Table, Th, Td, Tr } from "@/components/ui/Table";
import { getPartnerProfile } from "@/lib/data/partnerProfiles";

export default async function PartnerAuditLogPage({ params }: PageProps<"/partners/[id]/audit-log">) {
  const { id } = await params;
  const partner = getPartnerProfile(id);

  if (!partner) {
    notFound();
  }

  return (
    <main className="px-(--layout-x) pb-(--layout-x)">
      <Hero
        crumbs={[{ label: "Partners & Channels" }, { label: partner.name }, { label: "Audit log" }]}
        title="Audit Log"
        subtitle={`Changes and system events recorded against ${partner.name}.`}
      />
      <Card className="mt-4">
        <Table>
          <thead>
            <tr>
              <Th>Date</Th>
              <Th>Actor</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {partner.recentActivity.map((entry) => (
              <Tr key={`${entry.date}-${entry.action}`}>
                <Td mono>{entry.date}</Td>
                <Td emphasis>{entry.actor}</Td>
                <Td>{entry.action}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </main>
  );
}
