import { IconName } from "lucide-react/dynamic";

export type SummaryMetrics = {
  title: string;
  amount: string;
  subtitle: string;
  iconName: IconName;
};

export const summaryMetrics: SummaryMetrics[] = [
  {
    amount: "156",
    title: "total trades",
    subtitle: "this shift",
    iconName: "trending-up",
  },
  {
    amount: "8",
    title: "cancelled / expired",
    subtitle: "5.1% of total",
    iconName: "info",
  },
  {
    amount: "1",
    title: "declared vs accurate",
    subtitle: "accurate rate",
    iconName: "check-circle",
  },
  {
    amount: "#12,500",
    title: "binance charges",
    subtitle: "good record",
    iconName: "circle-dollar-sign",
  },
];
