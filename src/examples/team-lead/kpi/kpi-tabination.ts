import { KPITabinationRate } from "@/components/teamlead-profile/KPI";
import { KPITabinationCoin } from "@/components/teamlead-profile/KPI";
import { KPITabinationAudit } from "@/components/teamlead-profile/KPI";
import { KPITabinationProfit } from "@/components/teamlead-profile/KPI";

export type Tab = {
  name: string;
  Component: React.FC;
};

export const tabs: Tab[] = [
  {
    name: "rate report",
    Component: KPITabinationRate,
  },
  {
    name: "coin exchange",
    Component: KPITabinationCoin,
  },
  {
    name: "profit declaration",
    Component: KPITabinationProfit,
  },
  {
    name: "internal audit",
    Component: KPITabinationAudit,
  },
];
