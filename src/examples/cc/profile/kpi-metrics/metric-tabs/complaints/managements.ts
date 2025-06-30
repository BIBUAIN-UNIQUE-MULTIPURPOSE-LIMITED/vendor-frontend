type Management = {
  count: number;
  badge: string;
  metric: string;
  status: string;
  complaint: string;
  percentage: string;
};

export const managements: Management[] = [
  {
    metric: "Open Tickets",
    complaint: "Service Issues",
    count: 45,
    percentage: "26%",
    status: "Active",
    badge: "badge-blue",
  },
  {
    metric: "Resolved Tickets",
    complaint: "Payment Problems",
    count: 128,
    percentage: "74%",
    status: "Completed",
    badge: "badge-red",
  },
  {
    metric: "Unresolved Tickets",
    complaint: "Technical Support",
    count: 12,
    percentage: "7%",
    status: "Pending",
    badge: "badge-yellow",
  },
  {
    metric: "Escalated Tickets",
    complaint: "Account Access",
    count: 8,
    percentage: "5%",
    status: "Escalated",
    badge: "badge-green",
  },
  {
    metric: "Reassigned Tickets",
    complaint: "Billing Disputes",
    count: 15,
    percentage: "9%",
    status: "Transferred",
    badge: "badge-yellow",
  },
];
