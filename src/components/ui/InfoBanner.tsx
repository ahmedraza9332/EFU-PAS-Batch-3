import { ReactNode } from "react";

export default function InfoBanner({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-(--radius-md) bg-(--tint) px-4 py-3 font-(family-name:--font-ui) text-[12.5px] text-(--color-ink)">
      {children}
    </div>
  );
}
