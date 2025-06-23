export type Datum = {
  title: string;

  total?: number;
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
    title: "total coin purchased",
    breakdown: [
      {
        name: "platform breakdown",
        transactions: [
          {
            amount: 1_400_000,
            desc: "paxful purchased",
          },
          {
            amount: 900_000,
            desc: "noones purchased",
          },
          {
            amount: 600_000,
            desc: "binance purchased",
          },
          {
            amount: 900_000,
            desc: "byBit purchased",
          },
        ],
      },
    ],
  },
  {
    currency: "NGN",
    title: "total coin exchange",
    breakdown: [
      {
        name: "platform breakdown",
        transactions: [
          {
            amount: 1_200_000,
            desc: "paxful exchanged",
          },
          {
            amount: 800_000,
            desc: "noones exchanged",
          },
          {
            amount: 550_000,
            desc: "binance exchanged",
          },
          {
            amount: 250_000,
            desc: "byBit exchanged",
          },
        ],
      },
    ],
  },
  {
    currency: "NGN",
    total: 1_025.5,
    title: "average selling price",
  },
  {
    currency: "NGN",
    title: "charges (Exchange)",
    breakdown: [
      {
        name: "platform breakdown",
        transactions: [
          {
            amount: 12_200,
            desc: "paxful exchange charges",
          },
          {
            amount: 8_100,
            desc: "noones exchange charges",
          },
          {
            amount: 5_600,
            desc: "binance exchange charges",
          },
          {
            amount: 2_500,
            desc: "byBit exchange charges",
          },
        ],
      },
    ],
  },
];
