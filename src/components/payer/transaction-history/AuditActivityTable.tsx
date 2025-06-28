"use client";

import { DataTable } from "@/components/ui/data-table";

import { ColumnDef } from "@tanstack/react-table";

import {
  data,
  Datum,
} from "@/examples/payer/transaction-history/audit-activity";
import { Badge } from "@/components/ui/badge";

const columns: ColumnDef<Datum>[] = [
  // {
  //   id: "select",
  //   enableHiding: false,
  //   enableSorting: false,
  //   header: function({ table }) {
  //     return (
  //       <Checkbox
  //         checked={
  //           table.getIsAllPageRowsSelected() ||
  //           (table.getIsSomePageRowsSelected() && "indeterminate")
  //         }
  //         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //         aria-label="Select all"
  //       />
  //     );
  //   },
  //   cell: function({ row }) {
  //     return (
  //       <Checkbox
  //         checked={row.getIsSelected()}
  //         onCheckedChange={(value) => row.toggleSelected(!!value)}
  //         aria-label="Select row"
  //       />
  //     );
  //   },
  // },
  {
    header: "Payer",
    accessorKey: "Payer",
  },
  {
    header: "Paying Bank",
    accessorKey: "PayingBank",
  },
  {
    header: "Platform",
    accessorKey: "Platform",
  },
  {
    header: "Account Used",
    accessorKey: "AccountUsed",
  },
  {
    header: "Trade Hash",
    accessorKey: "TradeHash",
  },
  {
    header: "Seller",
    accessorKey: "Seller",
  },
  {
    header: "Coin Type",
    accessorKey: "CoinType",
  },
  {
    header: "Coin Amount",
    accessorKey: "CoinAmount",
  },
  {
    header: "NGN paid",
    accessorKey: "NGNPaid",
    cell: function ({ row }) {
      return (
        <span className="capitalize">
          {Number(row.getValue("NGNPaid")).toLocaleString("en-NG", {
            currency: "NGN",
            style: "currency",
            minimumFractionDigits: 0,
          })}
        </span>
      );
    },
  },
  {
    header: "Opened At",
    accessorKey: "OpenedAt",
    cell: function ({ row }) {
      return (
        <span className="capitalize">
          {new Date(row.getValue("OpenedAt")).toDateString()}
        </span>
      );
    },
  },
  {
    header: "Paid At",
    accessorKey: "PaidAt",
    cell: function ({ row }) {
      return (
        <span className="capitalize">
          {new Date(row.getValue("PaidAt")).toDateString()}
        </span>
      );
    },
  },
  {
    header: "Speed (sec)",
    accessorKey: "SpeedSec",
    cell: function ({ row }) {
      const colors = ["red", "green", "yellow"];
      const index = Math.ceil(Math.random() * 10) % colors.length;
      const selectedColor = colors[index];

      return (
        <Badge
          suppressHydrationWarning
          style={{
            color: `rgb(var(--badge-${selectedColor}-text))`,
            background: `rgb(var(--badge-${selectedColor}-bg))`,
          }}
        >
          <span>{row.getValue("SpeedSec")}</span>
        </Badge>
      );
    },
  },
];

export function AuditActivity() {
  return <DataTable data={data} columns={columns} />;
}
