import { ReactNode } from "react";

interface Crumb {
  label: string;
  href?: string;
}

interface HeroProps {
  crumbs: Crumb[];
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

export default function Hero({ crumbs, title, subtitle, actions }: HeroProps) {
  return (
    <div
      className="-mx-(--layout-x) flex flex-wrap items-end gap-4 px-(--layout-x) pb-[18px] pt-[22px]"
      style={{
        background:
          "linear-gradient(180deg, var(--tint), var(--color-canvas))",
      }}
    >
      <div>
        <div className="mb-1.5 font-(family-name:--font-ui) text-[11.5px] font-medium">
          {crumbs.map((c, i) => (
            <span key={c.label}>
              <span
                className={
                  i === crumbs.length - 1
                    ? "font-semibold text-(--accent-ink)"
                    : "text-(--accent)"
                }
              >
                {c.label}
              </span>
              {i < crumbs.length - 1 && (
                <span className="mx-[5px] text-(--color-arrow)">/</span>
              )}
            </span>
          ))}
        </div>
        <h1 className="font-(family-name:--font-ui) text-[26px] font-semibold leading-[1.15] tracking-[-.02em] text-(--accent-ink)">
          {title}
        </h1>
        {subtitle && (
          <div className="mt-[5px] font-(family-name:--font-ui) text-[13px] text-(--accent) opacity-85">
            {subtitle}
          </div>
        )}
      </div>
      {actions && (
        <div className="ml-auto flex flex-wrap items-center gap-2.5 pb-0.5">
          {actions}
        </div>
      )}
    </div>
  );
}
