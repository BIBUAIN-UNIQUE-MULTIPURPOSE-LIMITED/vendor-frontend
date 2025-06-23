import { KPI } from "./@kpi";
import { Shift } from "./@shift";
import { Profile } from "./@profile";
import { Attendance } from "./@attendance";

export type Tab = {
  name: string;
  Component: React.FC;
};

export const tabs: Tab[] = [
  {
    name: "profile",
    Component: Profile,
  },
  {
    name: "KPI metrics",
    Component: KPI,
  },
  {
    name: "attendance & history",
    Component: Attendance,
  },
  {
    name: "shift report",
    Component: Shift,
  },
];
