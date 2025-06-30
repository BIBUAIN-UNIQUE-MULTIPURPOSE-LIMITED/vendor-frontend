type Breakdown = {
  day: string;
  description: string;
  percent: `${string}%`;
};

export const breakdowns: Breakdown[] = [
  {
    day: "mon",
    percent: "45%",
    description: "average",
  },
  {
    day: "tue",
    percent: "38%",
    description: "bad",
  },
  {
    day: "wed",
    percent: "42%",
    description: "average",
  },
  {
    day: "thur",
    percent: "51%",
    description: "good",
  },
  {
    day: "fri",
    percent: "39%",
    description: "bad",
  },
  {
    day: "sat",
    percent: "28%",
    description: "bad",
  },
  {
    day: "sun",
    percent: "0%",
    description: "very bad",
  },
];
