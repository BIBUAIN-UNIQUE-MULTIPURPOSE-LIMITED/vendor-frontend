import { Dashboard } from "@/components/cc/profile/dashboard";
import { KPIMetrics } from "@/components/cc/profile/kpi-metrics";
import { ShiftReport } from "@/components/cc/profile/shift-report";

type Tabb = {
  name: string;
  value: string;
  Component: React.FC;
};

export const tabbs: Tabb[] = [
  {
    name: "profile dashboard",
    value: "profile-dashboard",
    Component: Dashboard,
  },
  {
    name: "KPI metrics",
    value: "kpi-metrics",
    Component: KPIMetrics,
  },
  {
    name: "submit shift report",
    value: "submit-shift-report",
    Component: ShiftReport,
  },
];
