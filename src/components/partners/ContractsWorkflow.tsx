"use client";

import { useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import { Table, Th, Td, Tr } from "@/components/ui/Table";
import { CONTRACT_DOCUMENT_TYPES } from "@/lib/data/contracts";
import { UploadedContractDocument } from "@/lib/types";

function formatTimestamp(date: Date) {
  const datePart = date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  const timePart = date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  return `${datePart}, ${timePart}`;
}

interface ContractsWorkflowProps {
  partnerName: string;
  partnerType: string;
}

export default function ContractsWorkflow({ partnerName, partnerType }: ContractsWorkflowProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [docType, setDocType] = useState(CONTRACT_DOCUMENT_TYPES[0].value);
  const [fileName, setFileName] = useState<string | null>(null);
  const [docs, setDocs] = useState<UploadedContractDocument[]>([]);
  const [commissionRate, setCommissionRate] = useState("");
  const [savedRate, setSavedRate] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedDocLabel =
    CONTRACT_DOCUMENT_TYPES.find((o) => o.value === docType)?.label ?? CONTRACT_DOCUMENT_TYPES[0].label;

  function handleUpload() {
    if (!fileName) return;
    setDocs((prev) => [
      {
        id: crypto.randomUUID(),
        documentType: selectedDocLabel,
        fileName,
        uploadedAt: formatTimestamp(new Date()),
      },
      ...prev,
    ]);
    setFileName(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleSaveCommission() {
    if (!commissionRate) return;
    setSavedRate(commissionRate);
  }

  return (
    <>
      <Card className="mt-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="font-(family-name:--font-ui) text-[15px] font-semibold text-(--color-ink)">
              {step === 1 ? "Contract Documents" : "Commission by Channel"}
            </div>
            <div className="mt-1 max-w-[560px] font-(family-name:--font-ui) text-[12.5px] text-(--color-mute)">
              {step === 1
                ? `Select the document type, upload the file, and repeat until every required agreement is on file for ${partnerName}.`
                : `Set the commission ${partnerName} earns on each channel configured for it. The pricing engine reads these rates at quote time.`}
            </div>
          </div>
          <Button variant="secondary" size="sm" onClick={() => setStep(step === 1 ? 2 : 1)}>
            {step === 1 ? "Next: commission" : "Back to documents"}
          </Button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setStep(1)}
            className={`rounded-(--radius-pill) px-3 py-1.5 font-(family-name:--font-ui) text-[12px] font-medium transition-colors ${
              step === 1
                ? "bg-(--tint) font-semibold text-(--accent-ink)"
                : "bg-(--color-chip) text-(--color-mute)"
            }`}
          >
            1 · Contract documents
          </button>
          <button
            onClick={() => setStep(2)}
            className={`rounded-(--radius-pill) px-3 py-1.5 font-(family-name:--font-ui) text-[12px] font-medium transition-colors ${
              step === 2
                ? "bg-(--tint) font-semibold text-(--accent-ink)"
                : "bg-(--color-chip) text-(--color-mute)"
            }`}
          >
            2 · Commission by channel
          </button>
        </div>

        <div className="mt-4 border-t border-(--color-hair) pt-4">
          {step === 1 ? (
            <div>
              <div className="mb-3 font-(family-name:--font-ui) text-[13px] font-semibold text-(--color-ink)">
                Upload a document
              </div>
              <div className="flex flex-wrap gap-3">
                <Select
                  label="Document type"
                  options={CONTRACT_DOCUMENT_TYPES}
                  value={docType}
                  onChange={(e) => setDocType(e.target.value)}
                />
                <label className="flex min-w-0 flex-1 flex-col gap-[5px]">
                  <span className="font-(family-name:--font-mono) text-[10px] font-semibold uppercase tracking-[.13em] text-(--color-faint)">
                    File
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                    className="w-full cursor-pointer rounded-(--radius-md) border border-(--color-border-input) bg-(--color-surface) px-[11px] py-[7px] font-(family-name:--font-ui) text-[12.5px] text-(--color-ink) file:mr-3 file:cursor-pointer file:rounded-(--radius-sm) file:border file:border-(--color-border-input) file:bg-(--color-chip) file:px-2.5 file:py-1 file:font-(family-name:--font-ui) file:text-[11.5px] file:font-semibold file:text-(--color-body)"
                  />
                </label>
              </div>
              <Button
                variant="primary"
                className="mt-4 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={handleUpload}
                disabled={!fileName}
              >
                Upload document
              </Button>
            </div>
          ) : (
            <div>
              <div className="mb-3 font-(family-name:--font-ui) text-[13px] font-semibold text-(--color-ink)">
                Commission rates
              </div>
              <label className="flex max-w-[280px] flex-col gap-[5px]">
                <span className="font-(family-name:--font-mono) text-[10px] font-semibold uppercase tracking-[.13em] text-(--color-faint)">
                  {partnerType}
                </span>
                <input
                  type="text"
                  placeholder="e.g. 15%"
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(e.target.value)}
                  className="w-full rounded-(--radius-md) border border-(--color-border-input) bg-(--color-surface) px-[11px] py-2 font-(family-name:--font-ui) text-[12.5px] text-(--color-ink) focus-visible:border-(--accent)"
                />
              </label>
              {savedRate && (
                <div className="mt-3 font-(family-name:--font-ui) text-[11.5px] text-(--color-green-ink)">
                  Saved — {partnerType} commission set to {savedRate}.
                </div>
              )}
              <div className="mt-4 flex gap-2.5">
                <Button
                  variant="primary"
                  className="disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={handleSaveCommission}
                  disabled={!commissionRate}
                >
                  Save commission
                </Button>
                <Button variant="secondary" onClick={() => setStep(1)}>
                  Back
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>

      {step === 1 && (
        <Card className="mt-4">
          <div className="mb-3 font-(family-name:--font-ui) text-[13px] font-semibold text-(--color-ink)">
            Uploaded documents
          </div>
          {docs.length === 0 ? (
            <div className="rounded-(--radius-lg) border border-dashed border-(--color-border-dashed) py-10 text-center font-(family-name:--font-ui) text-[12.5px] text-(--color-mute)">
              No documents uploaded yet.
            </div>
          ) : (
            <Table>
              <thead>
                <tr>
                  <Th>Document Type</Th>
                  <Th>File</Th>
                  <Th>Uploaded</Th>
                </tr>
              </thead>
              <tbody>
                {docs.map((doc) => (
                  <Tr key={doc.id}>
                    <Td emphasis>{doc.documentType}</Td>
                    <Td mono>{doc.fileName}</Td>
                    <Td mono>{doc.uploadedAt}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card>
      )}
    </>
  );
}
