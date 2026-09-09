"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MODULE_NAV } from "@/lib/constants";

export default function ModuleNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-14 z-40 flex gap-0.5 overflow-x-auto bg-(--color-teal) px-(--layout-x) [scrollbar-width:none]">
      {MODULE_NAV.map((m) => {
        const active =
          m.href === "/" ? pathname === "/" : pathname.startsWith(m.href);
        return (
          <Link
            key={m.id}
            href={m.href}
            className={`whitespace-nowrap border-b-2 px-3 pb-[9px] pt-[11px] font-(family-name:--font-ui) text-[12.5px] transition-colors ${
              active
                ? "border-white font-semibold text-white"
                : "border-transparent text-white/78 hover:bg-white/10 hover:text-white"
            }`}
          >
            {m.label}
          </Link>
        );
      })}
    </nav>
  );
}
