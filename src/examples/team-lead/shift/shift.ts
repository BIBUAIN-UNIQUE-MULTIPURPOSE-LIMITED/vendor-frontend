import { ShiftFlow } from "@/components/teamlead-profile/Shift";
import { ShiftReport } from "@/components/teamlead-profile/Shift";
import { ShiftStatistics } from "@/components/teamlead-profile/Shift";

export type Tab = {
  name: string;
  Component: React.FC;
};

export const tabs: Tab[] = [
  {
    name: "shift report form",
    Component: ShiftReport,
  },
  {
    name: "team statistics",
    Component: ShiftStatistics,
  },
  {
    name: "submission flow",
    Component: ShiftFlow,
  },
  {
    name: "submit shift report",
    Component: () => null,
  },
];
