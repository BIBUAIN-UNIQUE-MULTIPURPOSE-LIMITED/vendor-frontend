export type Metric = {
  date: string;
  color: string;
  description: string;
};

export const metrics: Metric[] = [
  {
    date: "jan 20",
    color: "--chart-4",
    description: "medical leave (approved)",
  },
  {
    date: "jan 10",
    color: "--chart-4",
    description: "late arrival (5 minutes)",
  },
];
