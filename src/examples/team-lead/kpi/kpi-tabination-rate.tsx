export type RateDatum = {
  title: string;

  color?: string;
  total?: number | React.ReactNode;
  currency?: string;
  breakdown?: Array<{
    name: string;
    transactions: Array<{
      desc: string;
      amount: string | number;

      color?: string;
    }>;
  }>;
};

export const rateData: RateDatum[] = [
  {
    currency: "NGN",
    title: "total naira",
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
    total: (
      <p className="text-base font-bold">
        <span className="capitalize">2.8M USDT</span>
      </p>
    ),
    breakdown: [
      {
        name: "platform breakdown",
        transactions: [
          {
            amount: "1.2M USDT",
            desc: "paxful naira purchased",
          },
          {
            amount: "0.8M USDT",
            desc: "noones naira purchased",
          },
          {
            amount: "0.55M USDT",
            desc: "binance naira purchased",
          },
          {
            amount: "0.25M USDT",
            desc: "byBit naira purchased",
          },
        ],
      },
    ],
  },
  {
    currency: "NGN",
    title: "total active cost price",
    total: (
      <p className="text-base font-bold">
        <span className="capitalize">
          {Number("1017.32").toLocaleString("en-NG", {
            currency: "NGN",
            style: "currency",
          })}
        </span>
      </p>
    ),
  },
  {
    currency: "NGN",
    title: "charges (Sendout + Bank)",
    total: (
      <p className="text-base font-bold">
        <span className="capitalize text-destructive">
          {Number("45200").toLocaleString("en-NG", {
            currency: "NGN",
            style: "currency",
          })}
        </span>
      </p>
    ),
    breakdown: [
      {
        name: "sendout charges",
        transactions: [
          {
            amount: 12_450,
            desc: "paxful sendout",
            color: "text-destructive",
          },
          {
            amount: 7_855,
            desc: "noones sendout",
            color: "text-destructive",
          },
          {
            amount: 5_670,
            desc: "binance sendout",
            color: "text-destructive",
          },
          {
            amount: 2_500,
            desc: "byBit sendout",
            color: "text-destructive",
          },
        ],
      },
      {
        name: "exchange charges",
        transactions: [
          {
            amount: 6_225,
            desc: "paxful exchange",
            color: "text-destructive",
          },
          {
            amount: 3_925,
            desc: "noones exchange",
            color: "text-destructive",
          },
          {
            amount: 2_835,
            desc: "binance exchange",
            color: "text-destructive",
          },
          {
            amount: 1_250,
            desc: "byBit exchange",
            color: "text-destructive",
          },
        ],
      },
    ],
  },
  {
    currency: "NGN",
    title: "markup",
    total: (
      <p className="text-base font-bold">
        <span className="capitalize text-green-600">
          {Number("127800").toLocaleString("en-NG", {
            currency: "NGN",
            style: "currency",
          })}
        </span>
      </p>
    ),
  },
];
