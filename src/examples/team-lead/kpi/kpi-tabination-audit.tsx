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

export type Profit = {
  status: string;
  charges: number;
  platform: string;
  amount_naira: number;
  amount_spent: number;
};

export const data: Datum[] = [
  {
    currency: "NGN",
    title: "amount spent (Naira)",
    total: (
      <p className="text-base font-bold">
        <span className="capitalize">
          {Number("2847500").toLocaleString("en-NG", {
            currency: "NGN",
            style: "currency",
          })}
        </span>
      </p>
    ),
    breakdown: [
      {
        name: "platform breakdown",
        transactions: [
          {
            amount: 1_245_000,
            desc: "paxful spent (Naira)",
          },
          {
            amount: 785_500,
            desc: "noones spent (Naira)",
          },
          {
            amount: 567_000,
            desc: "binance spent (Naira)",
          },
          {
            amount: 250_000,
            desc: "byBit spent (Naira)",
          },
        ],
      },
    ],
  },
  {
    currency: "NGN",
    title: "amount spent (Trade)",
    total: (
      <p className="text-base font-bold">
        <span className="capitalize">
          {Number("2774100").toLocaleString("en-NG", {
            currency: "NGN",
            style: "currency",
          })}
        </span>
      </p>
    ),
    breakdown: [
      {
        name: "platform breakdown",
        transactions: [
          {
            amount: 1_215_750,
            desc: "paxful spent (Trade)",
          },
          {
            amount: 766_645,
            desc: "noones spent (Trade)",
          },
          {
            amount: 553_165,
            desc: "binance spent (Trade)",
          },
          {
            amount: 238_540,
            desc: "byBit spent (Trade)",
          },
        ],
      },
    ],
  },
  {
    currency: "NGN",
    title: "charges",
    total: (
      <p className="text-base font-bold">
        <span className="capitalize text-destructive">
          {Number("73400").toLocaleString("en-NG", {
            currency: "NGN",
            style: "currency",
          })}
        </span>
      </p>
    ),
    breakdown: [
      {
        name: "platform breakdown",
        transactions: [
          {
            amount: 29_250,
            desc: "paxful charges",
          },
          {
            amount: 18_855,
            desc: "noones charges",
          },
          {
            amount: 13_835,
            desc: "binance charges",
          },
          {
            amount: 11_460,
            desc: "byBit charges",
          },
        ],
      },
    ],
  },
];

export const profits: Profit[] = [
  {
    charges: 29_250,
    status: "balanced",
    platform: "paxful",
    amount_naira: 1_245_000,
    amount_spent: 1_215_750,
  },
  {
    charges: 18_855,
    status: "balanced",
    platform: "noones",
    amount_naira: 766_645,
    amount_spent: 785_550,
  },
  {
    charges: 13_835,
    status: "balanced",
    platform: "binance",
    amount_naira: 567_000,
    amount_spent: 553_165,
  },
  {
    charges: 11_460,
    status: "balanced",
    platform: "byBit",
    amount_naira: 250_000,
    amount_spent: 238_540,
  },
];
