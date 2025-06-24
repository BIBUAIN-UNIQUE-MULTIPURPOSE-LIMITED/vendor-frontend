import { HistoryAttendance } from "@/components/teamlead-profile/History";
import { HistoryPunctuality } from "@/components/teamlead-profile/History";

export type Tab = {
  name: string;
  Component: React.FC;
};

export const tabs: Tab[] = [
  {
    name: "punctuality",
    Component: HistoryPunctuality,
  },
  {
    name: "attendance",
    Component: HistoryAttendance,
  },
];
