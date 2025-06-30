type Trade = {
  name: string;
  amount: {
    value: number;
    color?: string;
  };
};

export const trades: Trade[] = [
  {
    name: "total trade handled",
    amount: {
      value: 28,
    },
  },
  {
    name: "total successful",
    amount: {
      value: 24,
      color: "text-green-600",
    },
  },
  {
    name: "total escalated",
    amount: {
      value: 3,
      color: "text-yellow-600",
    },
  },
  {
    name: "paid reversal",
    amount: {
      value: 2,
      color: "text-green-600",
    },
  },
  {
    name: "average speed (secs)",
    amount: {
      value: 42.5,
    },
  },
];
