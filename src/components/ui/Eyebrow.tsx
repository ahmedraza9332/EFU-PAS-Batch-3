import { ReactNode } from "react";

export default function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-(family-name:--font-mono) text-[10px] font-semibold uppercase tracking-[.13em] text-(--color-faint) ${className}`}
    >
      {children}
    </span>
  );
}
