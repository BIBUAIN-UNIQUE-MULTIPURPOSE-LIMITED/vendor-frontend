export type TicketStatus = "Escalated" | "Paid" | "Dispute";
export type TicketLabel = "Urgent" | "Warning" | "Info";

export interface TicketT {
  user: string;
  platform: string;
  amount: number;
  status: TicketStatus;
  label: TicketLabel;
  messages: number;
}

export const tickets: TicketT[] = [
  {
    user: "PaxfulAgent001",
    platform: "Paxful",
    amount: 1850000,
    status: "Paid",
    label: "Urgent",
    messages: 5,
  },
  {
    user: "SpeedyPay",
    platform: "Paxful",
    amount: 750000,
    status: "Paid",
    label: "Warning",
    messages: 5,
  },
  {
    user: "CryptoExchange",
    platform: "CryptoEx",
    amount: 2500000,
    status: "Paid",
    label: "Info",
    messages: 3,
  },
  {
    user: "QuickTrade",
    platform: "QuickTrade",
    amount: 920000,
    status: "Paid",
    label: "Warning",
    messages: 1,
  },
  {
    user: "PaxfulAgent001",
    platform: "Paxful",
    amount: 3200000,
    status: "Paid",
    label: "Urgent",
    messages: 8,
  },
  {
    user: "Binance",
    platform: "Binance",
    amount: 5850000,
    status: "Paid",
    label: "Urgent",
    messages: 6,
  },
];
