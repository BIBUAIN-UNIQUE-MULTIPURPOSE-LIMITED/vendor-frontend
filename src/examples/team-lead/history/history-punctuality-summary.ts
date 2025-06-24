import { IconName } from "lucide-react/dynamic";

export type Metric = {
  title: string;
  amount: string;
  subtitle: string;
  colorVar: string;
  iconName: IconName;
};

export const metrics: Metric[] = [
  {
    amount: "45%",
    title: "present",
    subtitle: "good record",
    iconName: "alarm-clock",
    colorVar: "--color-blue-600",
  },
  {
    amount: "45%",
    subtitle: "absent",
    title: "bad record",
    iconName: "alarm-clock",
    colorVar: "--color-red-600",
  },
  {
    amount: "45%",
    title: "leave",
    subtitle: "good record",
    iconName: "alarm-clock",
    colorVar: "--color-blue-600",
  },
  {
    amount: "45%",
    title: "punctual",
    subtitle: "good record",
    iconName: "alarm-clock",
    colorVar: "--color-blue-600",
  },
  {
    amount: "45%",
    title: "late",
    subtitle: "bad record",
    iconName: "alarm-clock",
    colorVar: "--color-red-600",
  },
];
