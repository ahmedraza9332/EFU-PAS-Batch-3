import Hero from "@/components/layout/Hero";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatCard from "@/components/ui/StatCard";
import Tag from "@/components/ui/Tag";
import { Table, Th, Td, Tr } from "@/components/ui/Table";
import { ACTIVE_POLICIES_STATS, ACTIVE_POLICIES_SUBTITLE, BOOK_SAMPLE } from "@/lib/data/activePolicies";

export const metadata = {
  title: "Active Policies · EFU PAS",
};

export default function ActivePoliciesPage() {
  return (
    <main className="px-(--layout-x) pb-(--layout-x)">
      <Hero
        crumbs={[{ label: "Policies" }, { label: "Book" }, { label: "Active policies" }]}
        title="Active Policies"
        subtitle={ACTIVE_POLICIES_SUBTITLE}
      />

      <div className="mt-4 flex flex-wrap gap-2.5">
        <Button variant="primary">Issue policies</Button>
        <Button variant="secondary">Export book</Button>
      </div>

      <section className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {ACTIVE_POLICIES_STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <Card className="mt-4">
        <div className="mb-3 font-(family-name:--font-ui) text-[13px] font-semibold text-(--color-ink)">
          Book sample
        </div>
        <Table>
          <thead>
            <tr>
              <Th>Policy</Th>
              <Th>Member</Th>
              <Th>Product</Th>
              <Th>Cover</Th>
              <Th>Premium</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {BOOK_SAMPLE.map((row) => (
              <Tr key={row.policy}>
                <Td mono emphasis>
                  {row.policy}
                </Td>
                <Td emphasis>{row.member}</Td>
                <Td>{row.product}</Td>
                <Td mono>{row.cover}</Td>
                <Td mono>{row.premium}</Td>
                <Td>
                  <Tag tone={row.status === "Active" ? "ok" : "warn"}>{row.status}</Tag>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </main>
  );
}
