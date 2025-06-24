import { IconName } from "lucide-react/dynamic";

export type Metric = {
  title: string;
  amount: string;
  subtitle: string;
  colorVar: string;
  iconName: IconName;
};

export const summaryMetrics: Metric[] = [
  {
    amount: "18/20",
    title: "days present",
    subtitle: "good record",
    iconName: "alarm-clock",
    colorVar: "--color-blue-600",
  },
  {
    amount: "2",
    subtitle: "days absent",
    title: "good record",
    iconName: "alarm-clock",
    colorVar: "--color-blue-600",
  },
  {
    amount: "1",
    title: "late arrivals",
    subtitle: "good record",
    iconName: "alarm-clock",
    colorVar: "--color-blue-600",
  },
  {
    amount: "90%",
    title: "attendance rate",
    subtitle: "good record",
    iconName: "alarm-clock",
    colorVar: "--color-blue-600",
  },
];
