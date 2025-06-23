import { Flow } from "@/components/team-lead/ShiftFlow";
import { Report } from "@/components/team-lead/ShiftReport";
import { Statistics } from "@/components/team-lead/ShiftStatistics";

export type Tab = {
  name: string;
  Component: React.FC;
};

export const tabs: Tab[] = [
  {
    name: "shift report form",
    Component: Report,
  },
  {
    name: "team statistics",
    Component: Statistics,
  },
  {
    name: "submission flow",
    Component: Flow,
  },
];
