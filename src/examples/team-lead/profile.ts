import { KPI } from "@/components/team-lead/KPI";
import { Shift } from "@/components/team-lead/Shift";
import { Profile } from "@/components/team-lead/Profile";
import { History } from "@/components/team-lead/History";

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
    Component: History,
  },
  {
    name: "shift report",
    Component: Shift,
  },
];
