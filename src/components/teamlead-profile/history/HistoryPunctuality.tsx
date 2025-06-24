import { Summary } from "@/components/teamlead-profile/history/HistoryPunctualitySummary";
import { History } from "@/components/teamlead-profile/history/HistoryPunctualityHistory";

export function Punctuality() {
  return (
    <section className="space-y-5">
      <Summary />
      <History />
    </section>
  );
}
