export default function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-(--radius-sm) bg-(--color-chip) px-2 py-[3px] font-(family-name:--font-ui) text-[10.5px] text-(--color-mute)">
      {children}
    </span>
  );
}
