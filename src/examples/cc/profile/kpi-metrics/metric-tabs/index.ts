import { Dispute } from "@/components/cc/profile/kpi-metrics/metric-tabs/dispute";
import { Complaint } from "@/components/cc/profile/kpi-metrics/metric-tabs/complaint";
import { Reputation } from "@/components/cc/profile/kpi-metrics/metric-tabs/reputation";

type MetricTab = {
  name: string;
  value: string;
  Component: React.FC;
};

export const metricTabs: MetricTab[] = [
  {
    name: "complaint metrics",
    value: "complaint-metrics",
    Component: Complaint,
  },
  {
    name: "dispute metrics",
    value: "dispute-metrics",
    Component: Dispute,
  },
  {
    name: "reputation metrics",
    value: "reputation-metrics",
    Component: Reputation,
  },
];
