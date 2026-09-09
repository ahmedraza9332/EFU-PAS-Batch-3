import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "danger";
type Size = "md" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "border-[1.5px] border-(--color-gold) bg-transparent text-(--color-ink) hover:bg-(--color-gold)",
  secondary:
    "border border-(--color-border-input) bg-transparent text-(--color-body) hover:bg-(--color-gold-tint) hover:border-(--color-gold)",
  danger:
    "border-[1.5px] border-(--color-red) bg-transparent text-(--color-red-ink) hover:bg-(--color-red) hover:text-white",
};

const sizeClasses: Record<Size, string> = {
  md: "px-4 py-[9.5px] text-[12.5px]",
  sm: "px-3 py-[6.5px] text-[11.5px]",
};

export default function Button({
  variant = "secondary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-(--radius-md) font-(family-name:--font-ui) font-semibold transition-all duration-150 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
