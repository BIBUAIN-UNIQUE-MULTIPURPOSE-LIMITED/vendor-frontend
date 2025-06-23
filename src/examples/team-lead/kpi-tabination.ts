import { Rate } from "@/components/team-lead/KPITabinationRate";
import { Coin } from "@/components/team-lead/KPITabinationCoin";
import { Audit } from "@/components/team-lead/KPITabinationAudit";
import { Profit } from "@/components/team-lead/KPITabinationProfit";

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
