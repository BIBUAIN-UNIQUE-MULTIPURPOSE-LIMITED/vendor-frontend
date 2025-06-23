export type Datum = {
  title: string;

  total?: number | React.ReactNode;
  currency?: string;
  breakdown?: Array<{
    name: string;
    transactions: Array<{
      desc: string;
      amount: number;
    }>;
  }>;
};

export const data: Datum[] = [
  {
    total: 10,
    currency: "NGN",
    title: "total declaration",
  },
  {
    currency: "NGN",
    title: "amount purchased",
    breakdown: [
      {
        name: "platform breakdown",
        transactions: [
          {
            amount: 1_240_000,
            desc: "09:54PM 2025/06/10",
          },
          {
            amount: 785_000,
            desc: "09:54PM 2025/06/10",
          },
          {
            amount: 567_000,
            desc: "09:54PM 2025/06/10",
          },
          {
            amount: 250_000,
            desc: "09:54PM 2025/06/10",
          },
        ],
      },
    ],
  },
];
