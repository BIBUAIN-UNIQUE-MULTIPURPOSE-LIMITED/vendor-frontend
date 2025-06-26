import { ShiftReport } from "@/components/teamlead-profile/Shift";

export type Tab = {
  name: string;
  Component: React.FC;
};

export const tabs: Tab[] = [
  {
    name: "shift report form",
    Component: ShiftReport,
  },
];
