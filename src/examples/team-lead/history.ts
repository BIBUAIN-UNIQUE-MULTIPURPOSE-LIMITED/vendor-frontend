import { Attendance } from "@/components/teamlead-profile/history/HistoryAttendance";
import { Punctuality } from "@/components/teamlead-profile/history/HistoryPunctuality";

export type Tab = {
  name: string;
  Component: React.FC;
};

export const tabs: Tab[] = [
  {
    name: "punctuality",
    Component: Punctuality,
  },
  {
    name: "attendance",
    Component: Attendance,
  },
];
