import { Flow } from "./@flow";
import { Report } from "./@report";
import { Statistics } from "./@statistics";

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
];
