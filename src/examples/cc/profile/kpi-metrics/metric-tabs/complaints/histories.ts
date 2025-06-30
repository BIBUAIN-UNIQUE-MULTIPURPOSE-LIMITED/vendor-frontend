type History = {
  count: string;
  metric: string;
  status: string;
  percentage: string;
  badge: string;
};

export const histories: History[] = [
  {
    count: "45",
    metric: "open tickets",
    status: "active",
    percentage: "26%",
    badge: "badge-red",
  },
  {
    count: "128",
    metric: "resolved tickets",
    status: "completed",
    percentage: "74%",
    badge: "badge-blue",
  },
  {
    count: "12",
    metric: "unresolved tickets",
    status: "active",
    percentage: "7%",
    badge: "badge-green",
  },
  {
    count: "2.5mins",
    metric: "average response time",
    status: "active",
    percentage: "-",
    badge: "badge-yellow",
  },
  {
    count: "91%",
    metric: "resolution rate",
    status: "good",
    percentage: "-",
    badge: "badge-blue",
  },
  {
    count: "15mins",
    metric: "average response time",
    status: "good",
    percentage: "-",
    badge: "badge-green",
  },
  {
    count: "8",
    metric: "escalated tickets",
    status: "attention",
    percentage: "9%",
    badge: "badge-yellow",
  },
  {
    count: "173",
    metric: "total complaints",
    status: "total",
    percentage: "100%",
    badge: "badge-blue",
  },
  {
    count: "15",
    metric: "reassigned tickets",
    status: "transferred",
    percentage: "9%",
    badge: "badge-green",
  },
];
