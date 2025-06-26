"use client";

export function KPI() {
  return (
    <section className="space-y-5">
      <KPISummary />
      <KPITabination />
    </section>
  );
}

// KPI Summary

import { Fragment } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { metrics } from "@/examples/team-lead/kpi/kpi-summary";

export function KPISummary() {
  return (
    <div className="@container/grid mt-5">
      <div className="grid gap-5 grid-cols-12">
        {metrics.map((props, index) => (
          <Fragment key={index}>
            <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4 @5xl/grid:col-span-3">
              <Card className="py-3">
                <CardHeader className="px-3 block">
                  <div className="flex gap-3 items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-semibold">
                        <span className="one-line capitalize">
                          {props.title}
                        </span>
                      </p>
                    </div>
                    <div className="flex-none">
                      <DynamicIcon size={18} name={props.iconName} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-3 block">
                  <h3 className="text-xl font-semibold">
                    <span className="capitalize">{props.amount}</span>
                  </h3>
                  <p className="text-sm font-semibold">
                    <span className="sentence text-muted-foreground">
                      {props.subtitle}
                    </span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

// KPI Tabination

import { Button } from "@/components/ui/button";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent, TabsList } from "@/components/ui/tabs";

import { tabs } from "@/examples/team-lead/kpi/kpi-tabination";

export function KPITabination() {
  return (
    <Tabs defaultValue={tabs[0].name}>
      <TabsList className="p-0 h-auto w-full border rounded-lg overflow-hidden">
        {tabs.map(({ name }, index) => (
          <Fragment key={index}>
            <TabsTrigger
              asChild
              value={name}
              className="py-2 flex-1 border-none rounded-none"
            >
              <Button size="lg" variant="secondary">
                <p className="text-sm font-semibold">
                  <span className="one-line capitalize">{name}</span>
                </p>
              </Button>
            </TabsTrigger>
          </Fragment>
        ))}
      </TabsList>
      {tabs.map(({ name, Component }, index) => (
        <Fragment key={index}>
          <TabsContent value={name}>
            <Component />
          </TabsContent>
        </Fragment>
      ))}
    </Tabs>
  );
}

// KPI Tabination Audit

import { Badge } from "@/components/ui/badge";

import { data, profits } from "@/examples/team-lead/kpi/kpi-tabination-audit";
// import {
//   KPITabinationAuditComponentsProfitTable,
//   KPITabinationAuditComponentsRateBreakDown,
// } from "@/components/teamlead-profile/kpi/KPITabinationAuditComponents";

// KIP Tabination Audit

export function KPITabinationAudit() {
  return (
    <section className="space-y-5">
      <Card>
        <CardHeader className="gap-0">
          <CardTitle className="text-xl font-semibold">
            <span className="capitalize">internal audit</span>
          </CardTitle>
          <CardDescription className="text-base">
            <span className="sentence">
              formula: Amount spent (Naira) - Amount spent (Trade) = Charges -
              Balance Status
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="@container/card">
          <Card className="p-0 border-none shadow-none">
            <CardContent className="px-0 space-y-5">
              {data.map((props, index) => (
                <Fragment key={index}>
                  <KPITabinationAuditComponentsRateBreakDown {...props} />
                </Fragment>
              ))}
              <KPITabinationAuditComponentsRateBreakDown
                title="balance status"
                color="!bg-green-100"
                total={
                  <Badge
                    variant="secondary"
                    className="text-white bg-green-500 dark:bg-green-600"
                  >
                    <span className="capitalize">balanced</span>
                  </Badge>
                }
              />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <KPITabinationAuditComponentsProfitTable data={profits} />
    </section>
  );
}

import { useMemo } from "react";

import { Table, TableRow, TableHeader } from "@/components/ui/table";
import { TableBody, TableCell, TableHead } from "@/components/ui/table";

import { Datum, Profit } from "@/examples/team-lead/kpi/kpi-tabination-audit";

interface ProfitTableProps {
  data: Profit[];
}

export function KPITabinationAuditComponentsRateBreakDown({
  title,
  total,
  color,
  currency,
  breakdown,
}: Datum) {
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
    <div className="space-y-3">
      <Button
        disabled
        variant="outline"
        className={`py-3 h-auto w-full text-left ${color} disabled:opacity-100`}
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
          <details>
            <summary>
              <p className="text-sm font-bold inline-block cursor-pointer">
                <span className="capitalize">{name}</span>
              </p>
            </summary>
            <div className="mt-3 space-y-2 border-l-3 border-chart-4">
              {transactions.map(({ desc, amount }, index) => (
                <Fragment key={index}>
                  <Button
                    disabled
                    size="lg"
                    variant="secondary"
                    className="w-full justify-between rounded-l-none disabled:opacity-100"
                  >
                    <h5 className="text-sm font-semibold">
                      <span className="sentence text-muted-foreground">
                        {desc}
                      </span>
                    </h5>
                    {typeof amount === "number" ? (
                      <p className="text-sm font-bold">
                        <span className="sentence">
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
            </div>
          </details>
        </Fragment>
      ))}
    </div>
  );
}

export function KPITabinationAuditComponentsProfitTable({
  data,
}: ProfitTableProps) {
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

// KPI Tabination Coin

import { coinData } from "@/examples/team-lead/kpi/kpi-tabination-coin";

export function KPITabinationCoin() {
  return (
    <Card>
      <CardHeader className="flex gap-0 items-center justify-between">
        <div className="flex-none">
          <CardTitle className="text-xl font-semibold">
            <span className="capitalize">coin exchange</span>
          </CardTitle>
          <CardDescription className="text-base">
            <span className="sentence">
              comprehensive rate analysis and financial metrics
            </span>
          </CardDescription>
        </div>
        <div className="flex-none">
          <Badge
            variant="secondary"
            className="text-sm font-semibold text-green-600 bg-green-600/20"
          >
            <span className="capitalize">cap coin - 3.2 BTC</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="@container/card">
        <Card className="p-0 border-none shadow-none">
          <CardContent className="px-0 space-y-5">
            {coinData.map((props, index) => (
              <Fragment key={index}>
                <KPITabinationCoinComponentsRateBreakDown {...props} />
              </Fragment>
            ))}
            <KPITabinationCoinComponentsRateBreakDown
              currency="NGN"
              color="!bg-green-100"
              title="closing excess coin"
              total={
                <p className="text-base font-bold">
                  <span className="capitalize text-green-600">400K USDT</span>
                </p>
              }
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

// KPI Tabination Coin Components

import { cn } from "@/lib/utils";

import { CoinDatum } from "@/examples/team-lead/kpi/kpi-tabination-coin";

export function KPITabinationCoinComponentsRateBreakDown({
  title,
  total,
  color,
  currency,
  breakdown,
}: CoinDatum) {
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
    <div className="space-y-3">
      <Button
        disabled
        variant="outline"
        className={`py-3 h-auto w-full text-left ${color} disabled:opacity-100`}
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
          <details>
            <summary>
              <p className="text-sm font-bold inline-block cursor-pointer">
                <span className="capitalize">{name}</span>
              </p>
            </summary>
            <div className="mt-3 space-y-2 border-l-3 border-chart-4">
              {transactions.map(({ desc, color, amount }, index) => (
                <Fragment key={index}>
                  <Button
                    disabled
                    size="lg"
                    variant="secondary"
                    className="w-full justify-between rounded-l-none disabled:opacity-100"
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
            </div>
          </details>
        </Fragment>
      ))}
    </div>
  );
}

// KPI Tabination Profit

// import { KPITabinationProfitRateBreakDown } from "@/components/teamlead-profile/kpi/KPITabinationProfitComponents";

export function KPITabinationProfit() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">profit declaration report</span>
        </CardTitle>
        <CardDescription className="text-base">
          <span className="sentence">
            detailed profit analysis and margin calculations
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/card">
        <Card className="p-0 border-none shadow-none">
          <CardContent className="px-0 space-y-5">
            {profitData.map((props, index) => (
              <Fragment key={index}>
                <KPITabinationProfitRateBreakDown {...props} />
              </Fragment>
            ))}
            <KPITabinationProfitRateBreakDown
              title="total average margin"
              total={
                <p className="text-base font-bold">
                  <span className="capitalize text-green-600">
                    {Number(277_500).toLocaleString("en-NG", {
                      currency: "NGN",
                      style: "currency",
                    })}
                  </span>
                </p>
              }
            />
            <KPITabinationProfitRateBreakDown
              title="realized profit"
              total={
                <p className="text-base font-bold">
                  <span className="capitalize text-green-600">
                    {Number(249_100).toLocaleString("en-NG", {
                      currency: "NGN",
                      style: "currency",
                    })}
                  </span>
                </p>
              }
            />
            <KPITabinationProfitRateBreakDown
              title="balance status"
              color="!bg-green-100"
              total={
                <Badge
                  variant="secondary"
                  className="text-white bg-green-500 dark:bg-green-600"
                >
                  <span className="capitalize">balanced</span>
                </Badge>
              }
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

// KPI Tabination Profit Component

import {
  profitData,
  ProfitDatum,
} from "@/examples/team-lead/kpi/kpi-tabination-profit";

export function KPITabinationProfitRateBreakDown({
  title,
  total,
  color,
  currency,
  breakdown,
}: ProfitDatum) {
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
    <div className="space-y-3">
      <Button
        disabled
        variant="outline"
        className={`py-3 h-auto w-full text-left ${color} disabled:opacity-100`}
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
          <details>
            <summary>
              <p className="text-sm font-bold inline-block cursor-pointer">
                <span className="capitalize">{name}</span>
              </p>
            </summary>
            <div className="mt-3 space-y-2 border-l-3 border-chart-4">
              {transactions.map(({ desc, amount }, index) => (
                <Fragment key={index}>
                  <Button
                    disabled
                    size="lg"
                    variant="secondary"
                    className="w-full justify-between rounded-l-none disabled:opacity-100"
                  >
                    <h5 className="text-sm font-semibold">
                      <span className="sentence text-muted-foreground">
                        {desc}
                      </span>
                    </h5>
                    {typeof amount === "number" ? (
                      <p className="text-sm font-bold">
                        <span className="sentence">
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
            </div>
          </details>
        </Fragment>
      ))}
    </div>
  );
}

import { rateData } from "@/examples/team-lead/kpi/kpi-tabination-rate";

export function KPITabinationRate() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">rate report</span>
        </CardTitle>
        <CardDescription className="text-base">
          <span className="sentence">
            comprehensive rate analysis and financial metrics
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/card">
        <Card className="p-0 border-none shadow-none">
          <CardContent className="px-0 space-y-5">
            {rateData.map((props, index) => (
              <Fragment key={index}>
                <KPITabinationRateRateBreakDown {...props} />
              </Fragment>
            ))}
            <KPITabinationRateRateBreakDown
              currency="NGN"
              color="!bg-blue-100"
              title="closing balance"
              total={
                <p className="text-base font-bold">
                  <span className="capitalize text-blue-600">
                    {Number("2930100").toLocaleString("en-NG", {
                      currency: "NGN",
                      style: "currency",
                    })}
                  </span>
                </p>
              }
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

// KPI Tabination Rate Components

import { RateDatum } from "@/examples/team-lead/kpi/kpi-tabination-rate";

export function KPITabinationRateRateBreakDown({
  title,
  total,
  color,
  currency,
  breakdown,
}: RateDatum) {
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
    <div className="space-y-3">
      <Button
        disabled
        variant="outline"
        className={`py-3 h-auto w-full text-left ${color} disabled:opacity-100`}
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
          <details>
            <summary>
              <p className="text-sm font-bold inline-block cursor-pointer">
                <span className="capitalize">{name}</span>
              </p>
            </summary>
            <div className="mt-3 space-y-2 border-l-3 border-chart-4">
              {transactions.map(({ desc, color, amount }, index) => (
                <Fragment key={index}>
                  <Button
                    disabled
                    size="lg"
                    variant="secondary"
                    className="w-full justify-between rounded-l-none disabled:opacity-100"
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
            </div>
          </details>
        </Fragment>
      ))}
    </div>
  );
}
