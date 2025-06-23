import { Attendance } from "@/components/team-lead/HistoryAttendance";
import { Punctuality } from "@/components/team-lead/HistoryPunctuality";

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
