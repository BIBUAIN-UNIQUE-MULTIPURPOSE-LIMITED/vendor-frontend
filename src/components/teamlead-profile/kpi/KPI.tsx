import { Summary } from "@/components/teamlead-profile/kpi/KPISummary";
import { Tabination } from "@/components/teamlead-profile/kpi/KPITabination";

export function KPI() {
  return (
    <section className="space-y-5">
      <Summary />
      <Tabination />
    </section>
  );
}
