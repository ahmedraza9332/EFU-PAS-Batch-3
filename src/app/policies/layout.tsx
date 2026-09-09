import Rail from "@/components/layout/Rail";
import { POLICIES_RAIL } from "@/lib/data/policiesNav";

export default function PoliciesLayout({ children }: LayoutProps<"/policies">) {
  return (
    <div className="a-teal flex min-h-[calc(100vh-97px)] items-stretch">
      <Rail title="Policies" groups={POLICIES_RAIL} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
