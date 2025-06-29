import {
  CircleArrowUpIcon,
  CircleDollarSignIcon,
  TrendingDownIcon,
} from "lucide-react";

export interface Monetary {
  value: number;
  currency: string;
}

// ---------------------- KPI CARDS ----------------------
export interface KpiCard {
  title: string;
  value: number | Monetary | string; // could be count, money, or time string
  caption?: string;
  icon: keyof typeof icons;
}

export const kpiCards: KpiCard[] = [
  {
    title: "Trade Volume",
    value: 1247,
    caption: "Total trades",
    icon: "trend",
  },
  {
    title: "Coin Purchased",
    value: { value: 2_800_000, currency: "NGN" },
    caption: "This month",
    icon: "coin",
  },
  {
    title: "Amount Spent",
    value: { value: 2_800_000, currency: "NGN" },
    caption: "Per trade",
    icon: "wallet",
  },
  {
    title: "Avg Speed (All‑Time)",
    value: "2.7 min",
    caption: "Per trade",
    icon: "clock",
  },
];

// ---------------------- NAIRA METRICS TABLE ----------------------
export interface BankMetricRow {
  bank: string;
  openingBalance: Monetary;
  inflow: Monetary;
  reversalPaid: Monetary;
  remove: {
    amount: Monetary;
    note: string; // e.g. "Removed"
  };
  discrepancies: string; // percentage string like "8%"
  closingAmount: Monetary;
  amountSpent: Monetary;
}

const commonBankAmounts: Monetary = { value: 103_456, currency: "NGN" };

export const nairaMetrics: BankMetricRow[] = [
  {
    bank: "First Bank",
    openingBalance: commonBankAmounts,
    inflow: commonBankAmounts,
    reversalPaid: commonBankAmounts,
    remove: { amount: commonBankAmounts, note: "Removed" },
    discrepancies: "8%",
    closingAmount: commonBankAmounts,
    amountSpent: commonBankAmounts,
  },
  {
    bank: "Zenith Bank",
    openingBalance: commonBankAmounts,
    inflow: commonBankAmounts,
    reversalPaid: commonBankAmounts,
    remove: { amount: commonBankAmounts, note: "Removed" },
    discrepancies: "8%",
    closingAmount: commonBankAmounts,
    amountSpent: commonBankAmounts,
  },
  {
    bank: "Fidelity Bank",
    openingBalance: commonBankAmounts,
    inflow: commonBankAmounts,
    reversalPaid: commonBankAmounts,
    remove: { amount: commonBankAmounts, note: "Removed" },
    discrepancies: "8%",
    closingAmount: commonBankAmounts,
    amountSpent: commonBankAmounts,
  },
];

export const tradeMetrics = [
  {
    totalCoinPurchased: commonBankAmounts,
    tradeCounts: 24,
    escalated: 7,
    returnedTrade: 10,
    totalTradeAmount: commonBankAmounts,
  },
];

// ---------------------- INTERNAL AUDIT TABLE ----------------------
export interface InternalAuditRow {
  amountSpent: Monetary;
  tradeTotal: number;
  charges: Monetary;
  accuracy: string; // e.g. "10%"
}

export const internalAudit: InternalAuditRow[] = [
  {
    amountSpent: commonBankAmounts,
    tradeTotal: 24,
    charges: commonBankAmounts,
    accuracy: "10%",
  },
  {
    amountSpent: commonBankAmounts,
    tradeTotal: 24,
    charges: commonBankAmounts,
    accuracy: "10%",
  },
];

// ---------------------- THEME TOKENS ----------------------
export const themes = [
  {
    name: "light",
    text: "text-gray-900",
    background: "bg-white",
    accent: "text-yellow-600",
    panel: "bg-gray-50",
    border: "border-gray-200",
  },
  {
    name: "dark",
    text: "text-gray-100",
    background: "bg-gray-900",
    accent: "text-yellow-500",
    panel: "bg-gray-800",
    border: "border-gray-700",
  },
] as const;

// ---------------------- ICON KEYS ----------------------
export const icons = {
  trend: TrendingDownIcon,
  coin: CircleDollarSignIcon,
  wallet: CircleArrowUpIcon,
  clock: CircleArrowUpIcon,
} as const;
