type Feedback = {
  type: "positive" | "negative";
  value: number;
  title: string;
  progress: number;
  description: string;
};

export const feedbacks: Feedback[] = [
  {
    type: "positive",
    value: 156,
    title: "this month",
    progress: Math.ceil(Math.random() * 100),
    description: "87% satisfaction rate",
  },
  {
    type: "negative",
    value: 23,
    title: "this month",
    progress: Math.ceil(Math.random() * 100),
    description: "13% dissatisfaction rate",
  },
];
