import { MetricTabs } from "./metric-tabs";
import { Summary } from "./Summary";

export function KPIMetrics() {
  return (
    <section className="space-y-5">
      <Summary />
      <MetricTabs />
    </section>
  );
}
