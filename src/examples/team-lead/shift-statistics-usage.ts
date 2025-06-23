export type Metric = {
  bank: string;
  percentage: string;
  description: string;
};

export const metrics: Metric[] = [
  {
    bank: "GTBank",
    percentage: "28.8%",
    description: "45 trades",
  },
  {
    bank: "Access Bank",
    percentage: "24.4%",
    description: "38 trades",
  },
  {
    bank: "First Bank",
    percentage: "20.5%",
    description: "32 trades",
  },
  {
    bank: "UBA",
    percentage: "17.9%",
    description: "28 trades",
  },
  {
    bank: "Zenith Bank",
    percentage: "8.3%",
    description: "13 trades",
  },
];
