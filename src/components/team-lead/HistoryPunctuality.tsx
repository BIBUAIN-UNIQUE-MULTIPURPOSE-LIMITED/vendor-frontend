import { Summary } from "@/components/team-lead/HistoryPunctualitySummary";
import { History } from "@/components/team-lead/HistoryPunctualityHistory";

export function Punctuality() {
  return (
    <section className="space-y-5">
      <Summary />
      <History />
    </section>
  );
}
