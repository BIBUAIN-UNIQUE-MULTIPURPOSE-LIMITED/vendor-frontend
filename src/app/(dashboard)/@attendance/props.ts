import { Attendance } from "./@attendance";
import { Punctuality } from "./@puctuality";

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
