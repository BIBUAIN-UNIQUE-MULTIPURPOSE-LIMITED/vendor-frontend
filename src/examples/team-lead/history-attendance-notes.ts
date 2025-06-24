export type Metric = {
  date: string;
  color: string;
  description: string;
};

export const metrics: Metric[] = [
  {
    date: "jan 20",
    color: "#FEFCE8",
    description: "medical leave (approved)",
  },
  {
    date: "jan 10",
    color: "#FEF2F2",
    description: "late arrival (5 minutes)",
  },
];
