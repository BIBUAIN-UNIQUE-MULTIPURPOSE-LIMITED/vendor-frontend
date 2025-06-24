"use client";

import { Fragment, useMemo } from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CollapsibleContent } from "@/components/ui/collapsible";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";

import { Datum } from "@/examples/team-lead/kpi-tabination-rate";
import { cn } from "@/lib/utils";

export function RateBreakDown({ title, total, currency, breakdown }: Datum) {
  const grandTotal =
    total ??
    breakdown?.reduce((sum, { transactions }) => {
      return (
        sum +
        transactions?.reduce((sum, { amount }) => {
          return sum + Number(amount);
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
          {useMemo(
            function () {
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
            },
            [currency, grandTotal],
          )}
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
              {transactions.map(({ desc, color, amount }, index) => (
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
                    {typeof amount === "number" ? (
                      <p className="text-sm font-bold">
                        <span className={cn("sentence", color || "")}>
                          {Number(amount).toLocaleString("en-NG", {
                            currency,
                            style: "currency",
                          })}
                        </span>
                      </p>
                    ) : (
                      amount
                    )}
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
