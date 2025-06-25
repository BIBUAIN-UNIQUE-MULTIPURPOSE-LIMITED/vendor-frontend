export type RecoveryStatus =
  | "Not Recovered"
  | "Partially Recovered"
  | "Recovered";

export interface OverpaymentEntry {
  date: string; // ISO or YYYY-MM-DD
  amount: number;
  sellerUsername: string;
  sellerAccountNumber: string;
  tradeCount: number;
  tag: string;
  status: RecoveryStatus;
  flagged: boolean;
  accountHolderName?: string; // for follow-up form
}

export const discrepancyTableHeaders: {
  key: keyof OverpaymentEntry | "action";
  label: string;
}[] = [
  { key: "date", label: "Date" },
  { key: "amount", label: "Amount (₦)" },
  { key: "sellerUsername", label: "Seller Username" },
  { key: "sellerAccountNumber", label: "Sellers Acc Number" },
  { key: "tradeCount", label: "Trade Count" },
  { key: "tag", label: "Tag" },
  { key: "status", label: "Status" },
  { key: "flagged", label: "Flagged" },
  { key: "action", label: "Action" },
];

export const overpaymentData: OverpaymentEntry[] = [
  {
    date: "2024-01-15",
    amount: 25000,
    sellerUsername: "crypto_trader_01",
    sellerAccountNumber: "1234567890",
    tradeCount: 12,
    tag: "overpayment",
    status: "Not Recovered",
    flagged: true,
  },
  {
    date: "2024-01-14",
    amount: 15000,
    sellerUsername: "bitcoin_seller",
    sellerAccountNumber: "0123456789",
    tradeCount: 8,
    tag: "system error",
    status: "Partially Recovered",
    flagged: false,
  },
  {
    date: "2024-01-13",
    amount: 50000,
    sellerUsername: "eth_master",
    sellerAccountNumber: "9012345678",
    tradeCount: 25,
    tag: "double payment",
    status: "Recovered",
    flagged: false,
  },
  {
    date: "2024-01-12",
    amount: 8000,
    sellerUsername: "quick_trader",
    sellerAccountNumber: "8901234567",
    tradeCount: 3,
    tag: "invalid",
    status: "Not Recovered",
    flagged: true,
  },
];
