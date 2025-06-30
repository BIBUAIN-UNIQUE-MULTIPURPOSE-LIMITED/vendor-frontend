type Overview = {
  Won: string;
  Lost: string;
  Status: string;
  TotalOpen: string;
  DisputeType: string;
  Badge: string;
};

export const overviews: Overview[] = [
  {
    Won: "18",
    Lost: "3",
    TotalOpen: "23",
    Status: "active",
    DisputeType: "payment disputes",
    Badge: "badge-red",
  },
  {
    Won: "12",
    Lost: "2",
    TotalOpen: "15",
    Status: "processing",
    DisputeType: "service disputes",
    Badge: "badge-yellow",
  },
  {
    Won: "-",
    Lost: "-",
    TotalOpen: "5",
    Status: "cancelled",
    DisputeType: "cancelled",
    Badge: "badge-green",
  },
  {
    Won: "-",
    Lost: "-",
    TotalOpen: "3",
    Status: "expired",
    DisputeType: "expired",
    Badge: "badge-blue",
  },
  {
    Won: "-",
    Lost: "-",
    TotalOpen: "7",
    Status: "warning",
    DisputeType: "warnings issued",
    Badge: "badge-yellow",
  },
];
