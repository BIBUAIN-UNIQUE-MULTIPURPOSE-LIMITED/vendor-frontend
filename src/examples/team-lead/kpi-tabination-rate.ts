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
    title: "total naira",
    breakdown: [
      {
        name: "platform breakdown",
        transactions: [
          {
            amount: 1_245_000,
            desc: "paxful naira used",
          },
          {
            amount: 785_000,
            desc: "noones naira used",
          },
          {
            amount: 785_000,
            desc: "binance naira used",
          },
          {
            amount: 785_000,
            desc: "byBit naira used",
          },
        ],
      },
    ],
  },
  {
    currency: "NGN",
    title: "total coin purchased",
    breakdown: [
      {
        name: "platform breakdown",
        transactions: [
          {
            amount: 1_200_000,
            desc: "paxful naira purchased",
          },
          {
            amount: 800_000,
            desc: "noones naira purchased",
          },
          {
            amount: 550_000,
            desc: "binance naira purchased",
          },
          {
            amount: 250_000,
            desc: "byBit naira purchased",
          },
        ],
      },
    ],
  },
  {
    currency: "NGN",
    total: 1_017.32,
    title: "total active cost price",
  },
  {
    currency: "NGN",
    title: "charges (Sendout + Bank)",
    breakdown: [
      {
        name: "sendout charges",
        transactions: [
          {
            amount: 12_450,
            desc: "paxful sendout",
          },
          {
            amount: 7_855,
            desc: "noones sendout",
          },
          {
            amount: 5_670,
            desc: "binance sendout",
          },
          {
            amount: 2_500,
            desc: "byBit sendout",
          },
        ],
      },
      {
        name: "exchange charges",
        transactions: [
          {
            amount: 6_225,
            desc: "paxful exchange",
          },
          {
            amount: 3_925,
            desc: "noones exchange",
          },
          {
            amount: 2_835,
            desc: "binance exchange",
          },
          {
            amount: 1_250,
            desc: "byBit exchange",
          },
        ],
      },
    ],
  },
  {
    total: 1_017.32,
    currency: "NGN",
    title: "markup",
  },
];
