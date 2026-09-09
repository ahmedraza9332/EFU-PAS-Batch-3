import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function TextField({ label, className = "", ...rest }: TextFieldProps) {
  return (
    <label className="flex min-w-0 flex-1 flex-col gap-[6px]">
      <span className="font-(family-name:--font-ui) text-[12px] text-(--color-mute)">{label}</span>
      <input
        className={`w-full rounded-(--radius-md) border border-(--color-border-input) bg-(--color-surface) px-[11px] py-2 font-(family-name:--font-ui) text-[12.5px] text-(--color-ink) transition-colors placeholder:text-(--color-faint) focus-visible:border-(--accent) ${className}`}
        {...rest}
      />
    </label>
  );
}
