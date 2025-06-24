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
    currency: "NGN",
    title: "total declaration",
    total: (
      <p className="text-base font-bold">
        <span className="capitalize">10</span>
      </p>
    ),
  },
  {
    currency: "NGN",
    title: "amount purchased",
    total: (
      <p className="text-base font-bold">
        <span className="capitalize">
          {Number(2_000_000).toLocaleString("en-US", {
            currency: "USD",
            style: "currency",
          })}{" "}
          (2 BTC)
        </span>
      </p>
    ),
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
