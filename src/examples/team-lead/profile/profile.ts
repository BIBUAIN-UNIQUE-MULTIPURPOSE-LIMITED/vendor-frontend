import { KPI } from "@/components/teamlead-profile/KPI";
import { Shift } from "@/components/teamlead-profile/Shift";
import { Profile } from "@/components/teamlead-profile/Profile";
import { History } from "@/components/teamlead-profile/History";

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
