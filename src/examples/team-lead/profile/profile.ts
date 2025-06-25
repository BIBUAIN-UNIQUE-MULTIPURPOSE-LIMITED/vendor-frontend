import { KPI } from "../../../pages/teamlead-profile/KPI";
import { Shift } from "../../../pages/teamlead-profile/Shift";
import { Profile } from "../../../pages/teamlead-profile/Profile";
import { History } from "../../../pages/teamlead-profile/History";

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
