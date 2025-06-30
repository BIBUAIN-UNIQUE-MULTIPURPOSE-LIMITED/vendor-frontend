import { IconName } from "lucide-react/dynamic";

type Summary = {
  title: string;
  value: string;
  iconName: IconName;
  description: {
    color: string;
    value: string;
  };
};

export const summaries: Summary[] = [
  {
    value: "45",
    title: "open tickets",
    iconName: "ticket-minus",
    description: {
      color: "#DC2626",
      value: "active cases",
    },
  },
  {
    value: "128",
    title: "resolved tickets",
    iconName: "circle-check",
    description: {
      color: "#16A34A",
      value: "this month",
    },
  },
  {
    value: "12",
    title: "unresolved tickets",
    iconName: "circle-x",
    description: {
      color: "#DC2626",
      value: "pending",
    },
  },
  {
    value: "2.5mins",
    title: "average response time",
    iconName: "alarm-clock",
    description: {
      color: "#3B82F6",
      value: "per ticket",
    },
  },
];
