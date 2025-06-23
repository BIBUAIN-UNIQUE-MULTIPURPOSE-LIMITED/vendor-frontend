import { Summary } from "@/components/team-lead/KPISummary";
import { Tabination } from "@/components/team-lead/KPITabination";

export function KPI() {
  return (
    <section className="space-y-5">
      <Summary />
      <Tabination />
    </section>
  );
}
