import Card from "@/components/ui/Card";
import InfoBanner from "@/components/ui/InfoBanner";

export default function ComingSoon({ area }: { area: string }) {
  return (
    <Card className="mt-4">
      <InfoBanner>{area} isn&apos;t wired up yet — reserved for the next build pass.</InfoBanner>
    </Card>
  );
}
