export type Datum = {
  title: string;

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

export const data: Datum[] = [
  {
    currency: "NGN",
    title: "total coin purchased",
    total: (
      <p className="text-base font-bold">
        <span className="capitalize">3.2M USDT</span>
      </p>
    ),
    breakdown: [
      {
        name: "platform breakdown",
        transactions: [
          {
            amount: "1.4M USDT",
            desc: "paxful purchased",
          },
          {
            amount: "0.9M USDT",
            desc: "noones purchased",
          },
          {
            amount: "0.6M USDT",
            desc: "binance purchased",
          },
          {
            amount: "0.3M USDT",
            desc: "byBit purchased",
          },
        ],
      },
    ],
  },
  {
    currency: "NGN",
    title: "total coin exchange",
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
            desc: "paxful exchanged",
          },
          {
            amount: "0.8M USDT",
            desc: "noones exchanged",
          },
          {
            amount: "0.55M USDT",
            desc: "binance exchanged",
          },
          {
            amount: "0.25M USDT",
            desc: "byBit exchanged",
          },
        ],
      },
    ],
  },
  {
    currency: "NGN",
    title: "average selling price",
    total: (
      <p className="text-base font-bold">
        <span className="capitalize">
          {Number("1025.50").toLocaleString("en-NG", {
            currency: "NGN",
            style: "currency",
          })}
        </span>
      </p>
    ),
  },
  {
    currency: "NGN",
    title: "charges (Exchange)",
    total: (
      <p className="text-base font-bold">
        <span className="capitalize text-destructive">
          {Number("28400").toLocaleString("en-NG", {
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
            amount: 12_200,
            color: "text-destructive",
            desc: "paxful exchange charges",
          },
          {
            amount: 8_100,
            color: "text-destructive",
            desc: "noones exchange charges",
          },
          {
            amount: 5_600,
            color: "text-destructive",
            desc: "binance exchange charges",
          },
          {
            amount: 2_500,
            color: "text-destructive",
            desc: "byBit exchange charges",
          },
        ],
      },
    ],
  },
];
