"use client";

import { Badge } from "@/components/ui/badge";
import { TradeRow } from "@/examples/temporary/dummy-data/rate-analysis";
import { formatCurrency } from "@/lib/utilities/formatCurrency";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TradeRow>[] = [
  {
    accessorKey: "tradeId",
    header: "Trade ID",
  },
  {
    accessorKey: "platform",
    header: "Platform",
  },
  {
    accessorKey: "coinType",
    header: "Coin Type",
  },
  {
    accessorKey: "coinAmount",
    header: "Coin Amount",
  },
  {
    accessorKey: "ngnSellingPrice",
    header: "NGN Selling Price",
    cell: ({ row }) => (
      <p className={cn("capitalize text-xs ", {})}>
        {formatCurrency(row.getValue("ngnSellingPrice"), "NGN")}
      </p>
    ),
  },
  {
    accessorKey: "ngnCostPrice",
    header: "NGN Cost Price",
    cell: ({ row }) => (
      <p className={cn("capitalize text-xs ", {})}>
        {formatCurrency(row.getValue("ngnCostPrice"), "NGN")}
      </p>
    ),
  },
  {
    accessorKey: "usdCostPrice",
    header: "USD Cost Price",
    cell: ({ row }) => (
      <p className={cn("capitalize text-xs ", {})}>
        {formatCurrency(row.getValue("usdCostPrice"), "USD")}
      </p>
    ),
  },
  {
    accessorKey: "margin",
    header: "Margin (N)",
    cell: ({ row }) => (
      <Badge
        variant="success"
        className={cn("capitalize text-xs rounded-full", {})}
      >
        {formatCurrency(row.getValue("margin"), "NGN")}
      </Badge>
    ),
  },
  {
    accessorKey: "platformUsdRate",
    header: "Platform USD Rate",
    cell: ({ row }) => (
      <p className={cn("capitalize text-xs ", {})}>
        {formatCurrency(row.getValue("platformUsdRate"), "USD")}
      </p>
    ),
  },
  {
    accessorKey: "paidAt",
    header: "Paid At",
  },
];
