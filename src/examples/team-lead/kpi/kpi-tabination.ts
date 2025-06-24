import { Rate } from "@/components/teamlead-profile/kpi/KPITabinationRate";
import { Coin } from "@/components/teamlead-profile/kpi/KPITabinationCoin";
import { Audit } from "@/components/teamlead-profile/kpi/KPITabinationAudit";
import { Profit } from "@/components/teamlead-profile/kpi/KPITabinationProfit";

export type Tab = {
  name: string;
  Component: React.FC;
};

export const tabs: Tab[] = [
  {
    name: "rate report",
    Component: Rate,
  },
  {
    name: "coin exchange",
    Component: Coin,
  },
  {
    name: "profit declaration",
    Component: Profit,
  },
  {
    name: "audit",
    Component: Audit,
  },
];
