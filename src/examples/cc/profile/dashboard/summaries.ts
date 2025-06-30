import { IconName } from "lucide-react/dynamic";

type Summary = {
  name: string;
  value: string;
  iconName: IconName;
  tag: {
    value: string;
    color: string;
  };
};

export const summaries: Summary[] = [
  {
    name: "attendance",
    iconName: "target",
    value: "42%",
    tag: {
      color: "#3B82F6",
      value: "good performance",
    },
  },
  {
    name: "punctuality",
    iconName: "alarm-clock",
    value: "45%",
    tag: {
      color: "#3B82F6",
      value: "good record",
    },
  },
  {
    name: "average response time",
    iconName: "alarm-clock",
    value: "2.5 mins",
    tag: {
      color: "#3B82F6",
      value: "excellent speed",
    },
  },
  {
    name: "open tickets",
    iconName: "users",
    value: "12",
    tag: {
      color: "#DC2626",
      value: "active cases",
    },
  },
];
