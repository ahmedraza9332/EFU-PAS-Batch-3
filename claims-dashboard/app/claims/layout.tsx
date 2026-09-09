"use client";

import { useState } from "react";
import ClaimsSubNav from "@/components/ClaimsSubNav";

export default function ClaimsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-44px)] bg-[var(--canvas)]">
      {/* Left sub-nav rail */}
      <ClaimsSubNav
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
      />
      {/* Main content offset by sub-nav width */}
      <main
        className={`flex-1 transition-all duration-300 min-w-0 overflow-x-hidden ${
          isCollapsed ? "ml-[56px]" : "ml-[240px]"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
