import { ReactNode, ThHTMLAttributes, TdHTMLAttributes } from "react";

export function Table({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-0 overflow-x-auto">
      <table className="w-full border-collapse">{children}</table>
    </div>
  );
}

export function Tr({ children }: { children: ReactNode }) {
  return (
    <tr className="border-b border-(--color-hair) transition-colors hover:bg-(--color-row-hover)">
      {children}
    </tr>
  );
}

interface ThProps extends ThHTMLAttributes<HTMLTableCellElement> {
  align?: "left" | "right";
}

export function Th({ children, align = "left", className = "", ...rest }: ThProps) {
  return (
    <th
      className={`whitespace-nowrap border-b border-(--color-line) px-2 py-1.5 font-(family-name:--font-mono) text-[10.5px] font-semibold uppercase tracking-[.08em] text-(--color-mute) ${
        align === "right" ? "text-right" : "text-left"
      } ${className}`}
      {...rest}
    >
      {children}
    </th>
  );
}

interface TdProps extends TdHTMLAttributes<HTMLTableCellElement> {
  align?: "left" | "right";
  mono?: boolean;
  emphasis?: boolean;
}

export function Td({
  children,
  align = "left",
  mono = false,
  emphasis = false,
  className = "",
  ...rest
}: TdProps) {
  return (
    <td
      className={`px-2 py-[7px] text-[12.5px] ${
        mono ? "font-(family-name:--font-mono) text-[12px]" : "font-(family-name:--font-ui)"
      } ${emphasis ? "font-medium text-(--color-ink)" : "text-(--color-body)"} ${
        align === "right" ? "text-right" : "text-left"
      } ${className}`}
      {...rest}
    >
      {children}
    </td>
  );
}
