import { SelectHTMLAttributes } from "react";
import { SelectOption } from "@/lib/types";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
}

export default function Select({ label, options, className = "", ...rest }: SelectProps) {
  return (
    <label className="flex min-w-0 flex-1 flex-col gap-[5px]">
      <span className="font-(family-name:--font-mono) text-[10px] font-semibold uppercase tracking-[.13em] text-(--color-faint)">
        {label}
      </span>
      <select
        className={`select-caret w-full cursor-pointer rounded-(--radius-md) border border-(--color-border-input) bg-(--color-surface) px-[11px] py-2 pr-7 font-(family-name:--font-ui) text-[12.5px] text-(--color-ink) transition-colors focus-visible:border-(--accent) ${className}`}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
