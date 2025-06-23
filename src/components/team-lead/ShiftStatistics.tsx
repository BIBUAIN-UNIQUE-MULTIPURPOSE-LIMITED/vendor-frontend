import { Usages } from "@/components/team-lead/ShiftStatisticsUsage";
import { Summary } from "@/components/team-lead/ShiftStatisticsSummary";

export function Statistics() {
  return (
    <section className="space-y-5">
      <Summary />
      <Usages />
    </section>
  );
}
