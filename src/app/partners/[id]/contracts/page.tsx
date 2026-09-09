import { notFound } from "next/navigation";
import Hero from "@/components/layout/Hero";
import Card from "@/components/ui/Card";
import ContractsWorkflow from "@/components/partners/ContractsWorkflow";
import Tag from "@/components/ui/Tag";
import { Table, Th, Td, Tr } from "@/components/ui/Table";
import { getPartnerProfile } from "@/lib/data/partnerProfiles";
import { LinkedSchemeStatus } from "@/lib/types";

const schemeTone: Record<LinkedSchemeStatus, "ok" | "neutral"> = {
  active: "ok",
  paused: "neutral",
};

export default async function PartnerContractsPage({ params }: PageProps<"/partners/[id]/contracts">) {
  const { id } = await params;
  const partner = getPartnerProfile(id);

  if (!partner) {
    notFound();
  }

  return (
    <main className="px-(--layout-x) pb-(--layout-x)">
      <Hero
        crumbs={[{ label: "Partners & Channels" }, { label: partner.name }, { label: "Contracts & commission" }]}
        title="Contracts & Commission"
        subtitle="Upload the contract documents, then set commission by channel."
      />

      <Card className="mt-4">
        <div className="mb-3 font-(family-name:--font-ui) text-[13px] font-semibold text-(--color-ink)">
          Linked Schemes
        </div>
        <Table>
          <thead>
            <tr>
              <Th>Scheme</Th>
              <Th>Product</Th>
              <Th>Status</Th>
              <Th>Lives Covered</Th>
            </tr>
          </thead>
          <tbody>
            {partner.linkedSchemes.map((scheme) => (
              <Tr key={scheme.name}>
                <Td emphasis>{scheme.name}</Td>
                <Td>{scheme.product}</Td>
                <Td>
                  <Tag tone={schemeTone[scheme.status]}>
                    {scheme.status === "active" ? "Active" : "Paused"}
                  </Tag>
                </Td>
                <Td mono>{scheme.livesCovered}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <ContractsWorkflow partnerName={partner.name} partnerType={partner.type} />
    </main>
  );
}
