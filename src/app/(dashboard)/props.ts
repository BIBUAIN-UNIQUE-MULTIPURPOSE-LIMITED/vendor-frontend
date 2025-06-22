import { Profile } from "./@profile";
import { Metrics } from "./@metrics";

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
    Component: Metrics,
  },
  {
    name: "attendance & history",
    Component: Profile,
  },
  {
    name: "shift report",
    Component: Profile,
  },
];
