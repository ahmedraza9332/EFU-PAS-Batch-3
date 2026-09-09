import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import Hero from "@/components/layout/Hero";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatCard from "@/components/ui/StatCard";
import Tag from "@/components/ui/Tag";
import { Table, Th, Td, Tr } from "@/components/ui/Table";
import { getPartnerProfile } from "@/lib/data/partnerProfiles";
import { ComplianceStatus } from "@/lib/types";

const complianceTone: Record<ComplianceStatus, "ok" | "warn" | "err"> = {
  clear: "ok",
  review: "warn",
  flagged: "err",
};

const complianceLabel: Record<ComplianceStatus, string> = {
  clear: "Clear",
  review: "Review",
  flagged: "Flagged",
};

function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 font-(family-name:--font-ui) text-[13px] font-semibold text-(--color-ink)">
      {children}
    </div>
  );
}

function DetailGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">{children}</div>;
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-(--color-hair) py-2.5 last:border-b-0">
      <span className="font-(family-name:--font-ui) text-[12.5px] text-(--color-mute)">{label}</span>
      <span className="font-(family-name:--font-mono) text-[12.5px] font-medium text-(--color-ink)">{value}</span>
    </div>
  );
}

export default async function PartnerProfilePage({ params }: PageProps<"/partners/[id]">) {
  const { id } = await params;
  const partner = getPartnerProfile(id);

  if (!partner) {
    notFound();
  }

  return (
    <main className="px-(--layout-x) pb-(--layout-x)">
      <Hero
        crumbs={[{ label: "Partners & Channels" }, { label: partner.name }, { label: "Partner profile" }]}
        title={partner.name}
        subtitle="Partner details, addresses and contacts."
        actions={
          <>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-(--radius-md) border border-(--color-border-input) bg-transparent px-4 py-[9.5px] font-(family-name:--font-ui) text-[12.5px] font-semibold text-(--color-body) transition-all duration-150 hover:border-(--color-gold) hover:bg-(--color-gold-tint)"
            >
              ← Back to list
            </Link>
            <Button variant="primary">Save partner</Button>
          </>
        }
      />

      <section className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Policies issued MTD" value={partner.metrics.policiesIssuedMtd} detail="this cycle" />
        <StatCard label="Premium collected" value={partner.metrics.premiumCollected} detail="this cycle" />
        <StatCard
          label="Claims SLA compliance"
          value={partner.metrics.claimsSlaCompliance}
          detail="rolling 90 days"
        />
        <StatCard
          label="Active schemes"
          value={String(partner.metrics.activeSchemes)}
          detail="linked to this partner"
        />
      </section>

      <Card className="mt-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-(family-name:--font-ui) text-[16px] font-semibold text-(--color-ink)">
                {partner.name}
              </span>
              <Tag tone="ok">{partner.type}</Tag>
            </div>
            <div className="mt-1 font-(family-name:--font-ui) text-[12px] text-(--color-mute)">
              {partner.primaryChannel} · {partner.environment} · onboarded {partner.onboardedDate}
            </div>
          </div>
          <Button variant="secondary" size="sm">
            Edit profile
          </Button>
        </div>
      </Card>

      <Card className="mt-4">
        <SectionHeader>Partner Details</SectionHeader>
        <DetailGrid>
          <DetailRow label="Partner Name" value={partner.name} />
          <DetailRow label="Incorporation / SECP Reg. No." value={partner.incorporationNo} />
          <DetailRow label="NTN Number" value={partner.ntnNumber} />
          <DetailRow label="Partner Channel" value={partner.type} />
        </DetailGrid>
      </Card>

      <Card className="mt-4">
        <SectionHeader>Partner Address</SectionHeader>
        <DetailGrid>
          <DetailRow label="Business Address" value={partner.businessAddress} />
          <DetailRow label="City" value={partner.city} />
          <DetailRow label="Registered Address" value={partner.registeredAddress} />
          <DetailRow label="Country" value={partner.country} />
        </DetailGrid>
        <div className="mt-0 border-t border-(--color-hair) pt-2.5">
          <DetailRow label="Correspondence Address" value={partner.correspondenceAddress} />
        </div>
      </Card>

      <Card className="mt-4">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <span className="font-(family-name:--font-ui) text-[13px] font-semibold text-(--color-ink)">
            Primary Contacts
          </span>
          <span className="font-(family-name:--font-ui) text-[12px] text-(--color-mute)">
            who to reach for enrollment, integration and settlement issues
          </span>
        </div>
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Role</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
            </tr>
          </thead>
          <tbody>
            {partner.contacts.map((contact) => (
              <Tr key={contact.email}>
                <Td emphasis>
                  <span className="inline-flex items-center gap-2">
                    {contact.name}
                    {contact.primary && <Tag tone="ok">Primary</Tag>}
                  </span>
                </Td>
                <Td>{contact.role}</Td>
                <Td mono>{contact.email}</Td>
                <Td mono>{contact.phone}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <Card className="mt-4">
        <SectionHeader>Settlement &amp; Banking</SectionHeader>
        <DetailGrid>
          <DetailRow label="Bank Name" value={partner.settlement.bankName} />
          <DetailRow label="Account Title" value={partner.settlement.accountTitle} />
          <DetailRow label="Account Number" value={partner.settlement.accountNumber} />
          <DetailRow label="IBAN" value={partner.settlement.iban} />
        </DetailGrid>
        <div className="mt-0 border-t border-(--color-hair) pt-2.5">
          <DetailRow label="Settlement Cycle" value={partner.settlement.settlementCycle} />
        </div>
      </Card>

      <Card className="mt-4">
        <SectionHeader>Compliance &amp; Risk</SectionHeader>
        <ul className="flex flex-col gap-3.5">
          {partner.compliance.map((item) => (
            <li key={item.label} className="flex items-start justify-between gap-3">
              <div>
                <div className="font-(family-name:--font-ui) text-[12.5px] font-semibold text-(--color-ink)">
                  {item.label}
                </div>
                <div className="mt-0.5 font-(family-name:--font-ui) text-[11.5px] text-(--color-mute)">
                  {item.detail}
                </div>
              </div>
              <Tag tone={complianceTone[item.status]}>{complianceLabel[item.status]}</Tag>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="mt-4">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <span className="font-(family-name:--font-ui) text-[13px] font-semibold text-(--color-ink)">
            Recent Activity
          </span>
          <Link
            href={`/partners/${partner.id}/audit-log`}
            className="font-(family-name:--font-ui) text-[11.5px] font-semibold text-(--accent) hover:text-(--accent-ink) hover:underline"
          >
            View all →
          </Link>
        </div>
        <ul className="flex flex-col gap-3.5">
          {partner.recentActivity.map((entry) => (
            <li key={`${entry.date}-${entry.action}`} className="flex gap-2.5">
              <span className="mt-[6px] h-[7px] w-[7px] flex-none rounded-full bg-(--color-teal)" />
              <div className="min-w-0">
                <div className="font-(family-name:--font-ui) text-[12.5px] font-semibold text-(--color-ink)">
                  {entry.action}
                </div>
                <div className="mt-0.5 font-(family-name:--font-mono) text-[11px] text-(--color-mute)">
                  {entry.date} · {entry.actor}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </main>
  );
}
