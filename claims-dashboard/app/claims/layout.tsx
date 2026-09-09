import ClaimsSubNav from "@/components/ClaimsSubNav";

export default function ClaimsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-44px)] bg-[var(--canvas)]">
      {/* Left sub-nav rail (w-[200px]) */}
      <ClaimsSubNav />
      {/* Main content offset by sub-nav width */}
      <main className="flex-1 ml-[200px] min-w-0 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
