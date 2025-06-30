type Breakdown = {
  Type: "positive" | "negative";
  Category: string;
  Positive: number;
  Negative: number;
  NetScore: number;
};

export const breakdowns: Breakdown[] = [
  {
    Type: "positive",
    Category: "response time",
    Positive: 89,
    Negative: 11,
    NetScore: 78,
  },
  {
    Type: "positive",
    Category: "problem resolution",
    Positive: 67,
    Negative: 12,
    NetScore: 55,
  },
  {
    Type: "positive",
    Category: "communication",
    Positive: 92,
    Negative: 8,
    NetScore: 84,
  },
  {
    Type: "positive",
    Category: "overall experience",
    Positive: 78,
    Negative: 15,
    NetScore: 63,
  },
];
