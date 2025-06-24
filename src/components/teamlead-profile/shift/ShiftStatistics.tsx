import { Usages } from "@/components/teamlead-profile/shift/ShiftStatisticsUsage";
import { Summary } from "@/components/teamlead-profile/shift/ShiftStatisticsSummary";

export function Statistics() {
  return (
    <section className="space-y-5">
      <Summary />
      <Usages />
    </section>
  );
}
