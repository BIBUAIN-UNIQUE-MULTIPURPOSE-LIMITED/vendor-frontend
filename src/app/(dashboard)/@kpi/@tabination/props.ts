import { Rate } from "./@rate";
import { Coin } from "./@coin";
import { Audit } from "./@audit";
import { Profit } from "./@profit";

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
