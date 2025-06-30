type Performance = {
  title: string;
  value: string;
  progress: number;
};

export const performances: Performance[] = [
  {
    value: "2.5 minutes",
    title: "average response time",
    progress: 55,
  },
  {
    value: "15 minutes",
    title: "average resolution time",
    progress: 65,
  },
  {
    value: "92%",
    title: "resolution rate",
    progress: 87,
  },
  {
    value: "96%",
    title: "accuracy",
    progress: 15,
  },
];
