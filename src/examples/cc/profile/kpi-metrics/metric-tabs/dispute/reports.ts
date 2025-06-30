type Report = {
  Count: string;
  Badge: string;
  Metric: string;
  Status: string;
  Percentage: `${string}%`;
};

export const reports: Report[] = [
  {
    Metric: "total opened disputes",
    Count: "53",
    Percentage: "100%",
    Status: "total",
    Badge: "badge-red",
  },
  {
    Metric: "won disputes",
    Count: "30",
    Percentage: "57%",
    Status: "won",
    Badge: "badge-blue",
  },
  {
    Metric: "lost disputes",
    Count: "5",
    Percentage: "9%",
    Status: "lost",
    Badge: "badge-red",
  },
  {
    Metric: "cancel trades",
    Count: "5",
    Percentage: "9%",
    Status: "cancelled",
    Badge: "badge-red",
  },
  {
    Metric: "expired",
    Count: "3",
    Percentage: "6%",
    Status: "expired",
    Badge: "badge-blue",
  },
  {
    Metric: "warning",
    Count: "7",
    Percentage: "13%",
    Status: "warning",
    Badge: "badge-green",
  },
  {
    Metric: "RWP (release without pay)",
    Count: "12",
    Percentage: "23%",
    Status: "RWP",
    Badge: "badge-yellow",
  },
];
