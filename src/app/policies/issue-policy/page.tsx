import Hero from "@/components/layout/Hero";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import InfoBanner from "@/components/ui/InfoBanner";
import Tag from "@/components/ui/Tag";
import Chip from "@/components/ui/Chip";
import { Table, Th, Td, Tr } from "@/components/ui/Table";
import {
  PARTNER_OPTIONS,
  CHILD_PRODUCT_OPTIONS,
  CHECKS,
  EXPECTED_COLUMNS,
} from "@/lib/data/issuePolicy";

export const metadata = {
  title: "Issue Policy · EFU PAS",
};

export default function IssuePolicyPage() {
  const partner = PARTNER_OPTIONS[0];
  const childProduct = CHILD_PRODUCT_OPTIONS[0];

  return (
    <main className="px-(--layout-x) pb-(--layout-x)">
      <Hero
        crumbs={[{ label: "Policies" }, { label: "Enrollment" }, { label: "Issue policy" }]}
        title="Issue Policy"
        subtitle="Upload a member file, watch it validated row by row, then issue and dispatch to everyone who passed."
        actions={<Button variant="secondary">Download the template</Button>}
      />

      <Card className="mt-4">
        <div className="mb-4 flex flex-wrap items-baseline gap-2">
          <span className="font-(family-name:--font-ui) text-[13px] font-semibold text-(--color-ink)">
            Partner &amp; child product
          </span>
          <span className="font-(family-name:--font-ui) text-[12px] text-(--color-mute)">
            every upload is issued against one partner’s child product
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          <Select label="Partner" options={PARTNER_OPTIONS} defaultValue={partner.value} />
          <Select
            label="Child product"
            options={CHILD_PRODUCT_OPTIONS}
            defaultValue={childProduct.value}
          />
        </div>
        <div className="mt-4">
          <InfoBanner>
            Uploading against <b>{childProduct.label}</b>, derived from master{" "}
            <b>{childProduct.label}</b>.
          </InfoBanner>
        </div>
      </Card>

      <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
        <Card>
          <div className="flex flex-col items-center gap-4 rounded-(--radius-lg) border border-dashed border-(--color-border-dashed) px-6 py-10 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-(--radius-lg) bg-(--color-teal-tint) text-(--color-teal-deep)">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5m0 0-6 6m6-6 6 6" />
              </svg>
            </div>
            <div>
              <div className="font-(family-name:--font-ui) text-[15px] font-semibold text-(--color-ink)">
                Drop the member enrollment file here
              </div>
              <div className="mx-auto mt-1.5 max-w-[440px] font-(family-name:--font-ui) text-[12px] leading-relaxed text-(--color-mute)">
                .xlsx, .xls or .csv · one member per row · the header row is matched to the
                enrollment template, so column order and letter case do not matter.
              </div>
            </div>
            <Button variant="primary">Choose a file</Button>
          </div>
          <div className="mt-3 font-(family-name:--font-ui) text-[11.5px] text-(--color-mute)">
            Nothing leaves this browser — the file is parsed locally, and the numbers on the next
            screens are computed from your rows.
          </div>
        </Card>

        <Card>
          <div className="mb-3 font-(family-name:--font-ui) text-[13px] font-semibold text-(--color-ink)">
            What the checks will do
          </div>
          <ul className="flex flex-col gap-3.5">
            {CHECKS.map((check) => (
              <li key={check.title} className="flex gap-2.5">
                <span className="mt-[6px] h-[7px] w-[7px] flex-none rounded-full bg-(--color-green)" />
                <div>
                  <div className="font-(family-name:--font-ui) text-[12.5px] font-semibold text-(--color-ink)">
                    {check.title}
                  </div>
                  <div className="mt-0.5 font-(family-name:--font-ui) text-[11.5px] leading-relaxed text-(--color-mute)">
                    {check.description}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <Card className="mt-4">
        <div className="mb-3 flex flex-wrap items-baseline gap-2">
          <span className="font-(family-name:--font-ui) text-[13px] font-semibold text-(--color-ink)">
            Expected columns
          </span>
          <span className="font-(family-name:--font-ui) text-[12px] text-(--color-mute)">
            header matching is fuzzy — “Mobile No”, “phone number” and “MSISDN” all map to Mobile
          </span>
        </div>
        <Table>
          <thead>
            <tr>
              <Th>#</Th>
              <Th>Column</Th>
              <Th>Format</Th>
              <Th>Required</Th>
              <Th>Also accepted as</Th>
            </tr>
          </thead>
          <tbody>
            {EXPECTED_COLUMNS.map((c) => (
              <Tr key={c.index}>
                <Td mono>{c.index}</Td>
                <Td emphasis>{c.column}</Td>
                <Td mono>{c.format}</Td>
                <Td>
                  <Tag tone={c.required ? "err" : "neutral"}>
                    {c.required ? "Required" : "Optional"}
                  </Tag>
                </Td>
                <Td>
                  <div className="flex flex-wrap gap-1.5">
                    {c.alsoAcceptedAs.map((a) => (
                      <Chip key={a}>{a}</Chip>
                    ))}
                  </div>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </main>
  );
}
