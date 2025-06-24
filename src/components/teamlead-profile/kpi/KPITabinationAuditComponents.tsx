"use client";

import { Fragment, useMemo } from "react";
import { ChevronsUpDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CollapsibleContent } from "@/components/ui/collapsible";
import { Table, TableRow, TableHeader } from "@/components/ui/table";
import { TableBody, TableCell, TableHead } from "@/components/ui/table";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";

import { Datum, Profit } from "@/examples/team-lead/kpi/kpi-tabination-audit";

interface ProfitTableProps {
  data: Profit[];
}

export function RateBreakDown({ title, total, currency, breakdown }: Datum) {
  const grandTotal =
    total ??
    breakdown?.reduce((sum, { transactions }) => {
      return (
        sum +
        transactions?.reduce((sum, { amount }) => {
          return sum + amount;
        }, 0)
      );
    }, 0);

  return (
    <div className="space-y-2">
      <Button
        disabled
        variant="outline"
        className="py-3 h-auto w-full text-left disabled:opacity-100"
      >
        <div className="flex-1">
          <h5 className="text-sm font-bold one-line">
            <span className="capitalize">{title}</span>
          </h5>
        </div>
        <div className="flex-none">
          {useMemo(() => {
            if (typeof grandTotal === "number") {
              return (
                <p className="text-sm font-bold">
                  <span className="capitalize">
                    {Number(grandTotal).toLocaleString("en-NG", {
                      currency,
                      style: "currency",
                    })}
                  </span>
                </p>
              );
            }

            return grandTotal;
          }, [currency, grandTotal])}
        </div>
      </Button>
      {breakdown?.map(({ name, transactions }, index) => (
        <Fragment key={index}>
          <Collapsible>
            <CollapsibleTrigger asChild className="w-full">
              <Button size="lg" variant="ghost" className="justify-start">
                <ChevronsUpDown />
                <p className="text-sm font-bold">
                  <span className="capitalize">{name}</span>
                </p>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-3 mt-3 ml-5 border-l-3">
              {transactions.map(({ desc, amount }, index) => (
                <Fragment key={index}>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="w-full justify-between"
                  >
                    <h5 className="text-sm font-semibold">
                      <span className="sentence text-muted-foreground">
                        {desc}
                      </span>
                    </h5>
                    <p className="text-sm font-bold">
                      <span className="sentence">
                        {Number(amount).toLocaleString("en-NG", {
                          currency,
                          style: "currency",
                        })}
                      </span>
                    </p>
                  </Button>
                </Fragment>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </Fragment>
      ))}
    </div>
  );
}

export function ProfitTable({ data }: ProfitTableProps) {
  return (
    <Table className="rounded-lg overflow-hidden">
      <TableHeader className="border rounded-t-lg">
        <TableRow className="h-14 bg-muted">
          <TableHead className="w-[100px]">Platform</TableHead>
          <TableHead>Amount Spent (Naira)</TableHead>
          <TableHead>Amount Spent (Trade)</TableHead>
          <TableHead>Charges</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border rounded-b-lg">
        {data.map(
          (
            { status, charges, platform, amount_naira, amount_spent },
            index,
          ) => (
            <Fragment key={index}>
              <TableRow className="h-14">
                <TableCell className="text-sm font-medium">
                  <span className="capitalize">{platform}</span>
                </TableCell>
                <TableCell>
                  {Number(amount_naira).toLocaleString("en-NG", {
                    currency: "NGN",
                    style: "currency",
                  })}
                </TableCell>
                <TableCell>
                  {Number(amount_spent).toLocaleString("en-NG", {
                    currency: "NGN",
                    style: "currency",
                  })}
                </TableCell>
                <TableCell>
                  {Number(charges).toLocaleString("en-NG", {
                    currency: "NGN",
                    style: "currency",
                  })}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="text-white bg-green-500 dark:bg-green-600"
                  >
                    <span className="capitalize">{status}</span>
                  </Badge>
                </TableCell>
              </TableRow>
            </Fragment>
          ),
        )}
      </TableBody>
    </Table>
  );
}
