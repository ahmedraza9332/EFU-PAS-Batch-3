export default function TopBar({ initials = "SA" }: { initials?: string }) {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center gap-3 border-b border-(--color-line) bg-(--color-surface) px-(--layout-x)">
      <div className="grid h-[34px] w-[34px] flex-none place-items-center rounded-(--radius-mark) bg-(--color-teal) font-(family-name:--font-mono) text-[11px] font-bold tracking-[.04em] text-white">
        EFU
      </div>
      <div className="leading-tight">
        <b className="block font-(family-name:--font-ui) text-[15px] font-semibold text-(--color-ink)">
          EFU Life<span className="mx-1 text-(--color-brand-faint)">·</span>
          <span className="font-semibold text-(--color-ink)">Unified PAS</span>
        </b>
        <span className="text-[10.5px] text-(--color-brand-sub)">
          Unified Policy Administration System
        </span>
      </div>
      <button
        className="ml-auto grid h-8 w-8 flex-none place-items-center rounded-full bg-(--color-teal) font-(family-name:--font-mono) text-[11px] font-semibold text-white transition-shadow hover:shadow-(--shadow-xs)"
        title="Account"
      >
        {initials}
      </button>
    </header>
  );
}
