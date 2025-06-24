import { Flow } from "@/components/teamlead-profile/shift/ShiftFlow";
import { Report } from "@/components/teamlead-profile/shift/ShiftReport";
import { Statistics } from "@/components/teamlead-profile/shift/ShiftStatistics";

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
  {
    name: "submit shift report",
    Component: () => null,
  },
];
