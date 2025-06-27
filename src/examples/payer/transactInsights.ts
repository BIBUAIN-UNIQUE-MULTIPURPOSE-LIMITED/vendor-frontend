type TransactInsight = {
  name: string;
  amount: {
    value: number;
    color?: string;
    currency?: Intl.NumberFormatOptions["currency"];
  };
};

export const transactInsights: TransactInsight[] = [
  {
    name: "Total Banks Used",
    amount: {
      value: 3,
    },
  },
  {
    name: "Opening Balance",
    amount: {
      value: 5000000,
      currency: "NGN",
    },
  },
  {
    name: "Closing Balance",
    amount: {
      value: 1324092,
      currency: "NGN",
    },
  },
  {
    name: "Total Inflow",
    amount: {
      value: 500000.0,
      currency: "NGN",
      color: "text-green-600",
    },
  },
  {
    name: "Paid Reversal",
    amount: {
      value: 200000.0,
      currency: "NGN",
      color: "text-green-600",
    },
  },
  {
    name: "Amount Spent (₦)",
    amount: {
      value: 4175907.5,
      currency: "NGN",
      color: "text-red-600",
    },
  },
  {
    name: "Charges",
    amount: {
      value: 25000,
      currency: "NGN",
    },
  },
];
