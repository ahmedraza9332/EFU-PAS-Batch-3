import Link from "next/link";
import Hero from "@/components/layout/Hero";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { Table, Th, Td, Tr } from "@/components/ui/Table";
import PartnerPerformanceCard from "@/components/partners/PartnerPerformanceCard";
import { PARTNERS, PERFORMANCE_CYCLE, PERFORMANCE_AS_OF } from "@/lib/data/partners";

export const metadata = {
  title: "Partner Profiles · EFU PAS",
};

export default function PartnersPage() {
  return (
    <main className="a-teal min-h-[calc(100vh-97px)] px-(--layout-x) pb-(--layout-x)">
      <Hero
        crumbs={[{ label: "Partners & Channels" }, { label: "Partner Profiles" }]}
        title="Partner Profiles"
        subtitle={`${PARTNERS.length} onboarded partners`}
        actions={
          <Link
            href="/partners/new"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-(--radius-md) border-[1.5px] border-(--color-gold) bg-transparent px-4 py-[9.5px] font-(family-name:--font-ui) text-[12.5px] font-semibold text-(--color-ink) transition-all duration-150 hover:bg-(--color-gold)"
          >
            + Add Partner
          </Link>
        }
      />

      <section className="mt-4">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <span className="font-(family-name:--font-ui) text-[14px] font-semibold text-(--color-ink)">
            Partner performance — {PERFORMANCE_CYCLE}
          </span>
          <span className="font-(family-name:--font-ui) text-[11.5px] text-(--color-mute)">
            Snapshot updates with the billing cycle · figures as of {PERFORMANCE_AS_OF}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {PARTNERS.map((p) => (
            <Link
              key={p.id}
              href={`/partners/${p.id}`}
              className="block rounded-(--radius-card) transition-shadow duration-150 hover:shadow-(--shadow-md)"
            >
              <PartnerPerformanceCard partner={p} />
            </Link>
          ))}
        </div>
      </section>

      <Card className="mt-4">
        <div className="mb-3 font-(family-name:--font-ui) text-[13px] font-semibold text-(--color-ink)">
          Partner Profiles
        </div>
        <Table>
          <thead>
            <tr>
              <Th>Partner</Th>
              <Th>Type</Th>
              <Th>Primary Channel</Th>
              <Th>Status</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {PARTNERS.map((p) => (
              <Tr key={p.id}>
                <Td emphasis>{p.name}</Td>
                <Td mono>{p.type}</Td>
                <Td>{p.primaryChannel}</Td>
                <Td>
                  <Tag tone="ok">Live</Tag>
                </Td>
                <Td align="right">
                  <Link
                    href={`/partners/${p.id}`}
                    className="inline-flex items-center gap-1 whitespace-nowrap font-(family-name:--font-ui) text-[11.5px] font-semibold text-(--accent) hover:text-(--accent-ink) hover:underline"
                  >
                    View →
                  </Link>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </main>
  );
}
