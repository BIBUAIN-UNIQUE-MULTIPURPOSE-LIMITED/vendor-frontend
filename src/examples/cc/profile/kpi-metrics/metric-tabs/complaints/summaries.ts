type Summary = {
  title: string;
  value: string;
  progress: number;
};

export const summaries: Summary[] = [
  {
    value: "91%",
    title: "resolution rate",
    progress: Math.ceil(Math.random() * 100),
  },
  {
    value: "15m",
    title: "avg resolution time",
    progress: Math.ceil(Math.random() * 100),
  },
  {
    value: "2.5mins",
    title: "response time",
    progress: Math.ceil(Math.random() * 100),
  },
];
