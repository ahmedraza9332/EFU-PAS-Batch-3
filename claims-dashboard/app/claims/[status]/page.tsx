export default function ClaimStatusPage({ params }: { params: { status: string } }) {
  const title = params.status
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#0A1E3C] mb-2">Claims — {title}</h1>
        <p className="text-gray-400">Coming Soon</p>
      </div>
    </div>
  );
}
