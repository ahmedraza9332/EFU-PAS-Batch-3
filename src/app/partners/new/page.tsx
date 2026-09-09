import Link from "next/link";
import { ReactNode } from "react";
import Hero from "@/components/layout/Hero";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SelectField from "@/components/ui/SelectField";
import TextField from "@/components/ui/TextField";
import { CHANNEL_TYPE_OPTIONS } from "@/lib/data/addPartner";

export const metadata = {
  title: "Add Partner · EFU PAS",
};

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-4 rounded-(--radius-lg) border border-(--color-line) p-5">
      <div className="mb-4 font-(family-name:--font-ui) text-[13px] font-semibold text-(--color-ink)">
        {title}
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

export default function AddPartnerPage() {
  return (
    <main className="px-(--layout-x) pb-(--layout-x)">
      <Hero
        crumbs={[{ label: "Partners & Channels" }, { label: "Add Partner" }, { label: "Partner profile" }]}
        title="Add Partner"
        subtitle="Enter the partner's details, addresses and contacts. Remaining sections open once the partner is saved."
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

      <Card className="mt-4">
        <div className="font-(family-name:--font-ui) text-[15px] font-semibold text-(--color-ink)">
          Add Partner
        </div>

        <Panel title="Partner Details">
          <TextField label="Partner Name" placeholder="Legal entity name" />
          <TextField label="NTN Number" placeholder="1234567-8" />
          <TextField label="Incorporation / SECP Reg. No." placeholder="0098765" />
          <SelectField label="Partner Channel" options={CHANNEL_TYPE_OPTIONS} defaultValue="telco" />
        </Panel>

        <Panel title="Partner Address">
          <TextField label="Business Address" placeholder="Head office address" />
          <TextField label="Registered Address" placeholder="As per SECP record" />
          <TextField label="Correspondence Address" placeholder="If different from business address" />
          <TextField label="City" placeholder="Karachi" />
          <TextField label="Country" placeholder="Pakistan" />
        </Panel>

        <Panel title="Partner Contacts">
          <TextField label="Primary Contact Name" placeholder="" />
          <TextField label="Designation" placeholder="Relationship Manager" />
          <TextField label="Email" placeholder="name@partner.com" type="email" />
          <TextField label="Mobile" placeholder="+92 300 0000000" />
          <TextField label="Operations Contact" placeholder="" />
          <TextField label="Operations Email" placeholder="" type="email" />
          <TextField label="Escalation Contact" placeholder="" />
          <TextField label="Escalation Email" placeholder="" type="email" />
        </Panel>

        <div className="mt-4 flex gap-2.5">
          <Button variant="primary">Save Partner</Button>
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-(--radius-md) border border-(--color-border-input) bg-transparent px-4 py-[9.5px] font-(family-name:--font-ui) text-[12.5px] font-semibold text-(--color-body) transition-all duration-150 hover:border-(--color-gold) hover:bg-(--color-gold-tint)"
          >
            Cancel
          </Link>
        </div>
      </Card>
    </main>
  );
}
