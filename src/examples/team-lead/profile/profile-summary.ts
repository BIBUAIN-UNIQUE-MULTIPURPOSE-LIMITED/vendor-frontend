import { IconName } from "lucide-react/dynamic";

export type Metric = {
  title: string;
  amount: string;
  subtitle: string;
  iconName: IconName;
};

export const metrics: Metric[] = [
  {
    amount: "1,247",
    title: "total volume",
    subtitle: "total trades",
    iconName: "chart-network",
  },
  {
    amount:
      Number(2.8).toLocaleString("en-NG", {
        currency: "NGN",
        style: "currency",
        minimumFractionDigits: 0,
      }) + "M",
    subtitle: "this month",
    title: "coin purchased",
    iconName: "circle-dollar-sign",
  },
  {
    amount:
      Number(2.8).toLocaleString("en-NG", {
        currency: "NGN",
        style: "currency",
        minimumFractionDigits: 0,
      }) + "M",
    title: "amount spent",
    subtitle: "per trade",
    iconName: "chart-line",
  },
  {
    amount: "2.7min",
    iconName: "alarm-clock",
    subtitle: "total trades",
    title: "avg speed (all-time)",
  },
];
