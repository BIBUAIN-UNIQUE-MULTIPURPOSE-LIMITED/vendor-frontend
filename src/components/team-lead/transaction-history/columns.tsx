"use client";

import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utilities/formatCurrency";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

export type Transaction = {
  date: string;
  platform: string;
  coin: string;
  type: string;
  filled: string;
  rate: number;
  charges: number;
  valueNGN: number;
  totalUSD: number;
  orderNumber: string;
  status: number;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "platform",
    header: "Platform",
    cell: ({ row }) => (
      <Badge className="capitalize rounded-full">
        {row.getValue("platform")}
      </Badge>
    ),
  },
  {
    accessorKey: "coin",
    header: "Coin",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <p
        className={cn("capitalize text-xs ", {
          "text-green-500": row.getValue("type") === "Buy",
          "text-red-500": row.getValue("type") === "Sell",
        })}
      >
        {row.getValue("type")}
      </p>
    ),
  },
  {
    accessorKey: "filled",
    header: "Filled",
  },
  {
    accessorKey: "rate",
    header: "Rate",
    cell: ({ row }) => (
      <p className={cn("capitalize text-xs ", {})}>
        {formatCurrency(row.getValue("rate"), "USD")}
      </p>
    ),
  },
  {
    accessorKey: "charges",
    header: "Charges",
    cell: ({ row }) => (
      <p className={cn("capitalize text-xs ", {})}>
        {formatCurrency(row.getValue("charges"), "USD")}
      </p>
    ),
  },
  {
    accessorKey: "valueNGN",
    header: "Value (N)",
    cell: ({ row }) => (
      <p className={cn("capitalize text-xs ", {})}>
        {formatCurrency(row.getValue("valueNGN"), "NGN")}
      </p>
    ),
  },
  {
    accessorKey: "totalUSD",
    header: "Total ($)",
    cell: ({ row }) => (
      <p className={cn("capitalize text-xs ", {})}>
        {formatCurrency(row.getValue("totalUSD"), "USD")}
      </p>
    ),
  },
  {
    accessorKey: "orderNumber",
    header: "Order Number",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        className={cn("capitalize rounded-full")}
        variant={
          row.getValue("status") === 0
            ? "destructive"
            : row.getValue("status") === 1
              ? "success"
              : "pending"
        }
      >
        {row.getValue("status") === 0
          ? "Failed"
          : row.getValue("status") === 1
            ? "Success"
            : "Pending"}
      </Badge>
    ),
  },
];
