import {
  icons,
  internalAudit,
  kpiCards,
  nairaMetrics,
  tradeMetrics,
} from "@/examples/payer/kpi/kpi-metrics";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { formatCurrency } from "@/lib/utilities/formatCurrency";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import React from "react";
import { cn } from "@/lib/utils";

export const PayerKPIMetrics = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {kpiCards.map((card, idx) => {
          const Icon = icons[card.icon];
          return (
            <Card key={idx} className="shadow-none h-full">
              <CardHeader className="flex-row items-center justify-between">
                <CardDescription className="text-base text-black">
                  {card.title}
                </CardDescription>
                <Icon className="size-3 md:size-4" />
              </CardHeader>
              <CardContent className="text-2xl font-medium">
                {typeof card.value === "string" ||
                typeof card.value === "number"
                  ? card.value
                  : formatCurrency(card.value.value, "NGN")}
              </CardContent>
              <CardFooter>
                <p className="text-gray-600">{card.caption}</p>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="p-2">
        <Tabs defaultValue="naira-metrics">
          <TabsList className="w-full flex ">
            <TabsTrigger
              value="naira-metrics"
              className="data-[state=active]:bg-primary capitalize data-[state=active]:text-white flex-1"
            >
              Naira Metrics
            </TabsTrigger>
            <TabsTrigger
              value="trade-metrics"
              className="data-[state=active]:bg-primary capitalize data-[state=active]:text-white flex-1"
            >
              Trade Metrics
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="naira-metrics"
            className="pt-4  md:pt-6 flex flex-col gap-6"
          >
            <NairaMetircsTable />
          </TabsContent>
          <TabsContent value="trade-metrics">
            <TradeMetrics />
          </TabsContent>
        </Tabs>
      </div>
      <InternalAuditTable />
    </div>
  );
};

const NairaMetircsTable = () => {
  return (
    <div>
      <div className="hidden md:block rounded-t-xl border  !text-xs  overflow-hidden">
        <Table className="min-w-full">
          <TableHeader className="h-4 bg-gray-100">
            <TableRow>
              <TableHead>Bank Used</TableHead>
              <TableHead>Opening Balance</TableHead>
              <TableHead>Inflow</TableHead>
              <TableHead>Reversal Paid</TableHead>
              <TableHead>Remove</TableHead>
              <TableHead>Discrepancies</TableHead>
              <TableHead>Closing Amount</TableHead>
              <TableHead>Amount Spent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {nairaMetrics.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell> {row.bank}</TableCell>
                <TableCell>
                  {formatCurrency(
                    row.openingBalance.value,
                    row.openingBalance.currency,
                  )}
                </TableCell>
                <TableCell>
                  {formatCurrency(row.inflow.value, row.inflow.currency)}
                </TableCell>
                <TableCell>
                  {formatCurrency(
                    row.reversalPaid.value,
                    row.reversalPaid.currency,
                  )}
                </TableCell>
                <TableCell>
                  {formatCurrency(
                    row.remove.amount.value,
                    row.remove.amount.currency,
                  )}
                  {` ${row.remove.note}`}
                </TableCell>
                <TableCell>{row.discrepancies}</TableCell>
                <TableCell>
                  {formatCurrency(
                    row.closingAmount.value,
                    row.closingAmount.currency,
                  )}
                </TableCell>
                <TableCell>
                  {formatCurrency(
                    row.amountSpent.value,
                    row.amountSpent.currency,
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <MobileTable>
        {nairaMetrics.map((metric, idx) => (
          <MobileTableRow key={idx}>
            <MobileTableCell label="Bank" value={metric.bank} />
            <MobileTableCell
              label="Opening Balance"
              value={formatCurrency(
                metric.openingBalance.value,
                metric.openingBalance.currency,
              )}
            />
            <MobileTableCell
              label="Inflow"
              value={formatCurrency(
                metric.inflow.value,
                metric.inflow.currency,
              )}
            />
            <MobileTableCell
              label="Reversal Paid"
              value={formatCurrency(
                metric.reversalPaid.value,
                metric.reversalPaid.currency,
              )}
            />
            <MobileTableCell
              label="Remove"
              value={`${formatCurrency(metric.remove.amount.value, metric.remove.amount.currency)} ${metric.remove.note}`}
            />
            <MobileTableCell
              label="Discrepancies"
              value={metric.discrepancies}
            />
            <MobileTableCell
              label="Closing Amount"
              value={formatCurrency(
                metric.closingAmount.value,
                metric.closingAmount.currency,
              )}
            />
            <MobileTableCell
              label="Amount Spent"
              value={formatCurrency(
                metric.amountSpent.value,
                metric.amountSpent.currency,
              )}
            />
          </MobileTableRow>
        ))}
      </MobileTable>
    </div>
  );
};

const TradeMetrics = () => {
  return (
    <div>
      <div className="hidden md:block rounded-t-xl border  !text-xs  overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Total Coin Purchased</TableHead>
              <TableHead>Trade Counts </TableHead>
              <TableHead>Escalated</TableHead>
              <TableHead>Returned Trade</TableHead>
              <TableHead>Total Trade Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tradeMetrics.map((trade, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  {formatCurrency(
                    trade.totalCoinPurchased.value,
                    trade.totalCoinPurchased.currency,
                  )}
                </TableCell>
                <TableCell>{trade.tradeCounts}</TableCell>
                <TableCell>{trade.escalated}</TableCell>
                <TableCell>{trade.returnedTrade}</TableCell>
                <TableCell>
                  {formatCurrency(
                    trade.totalTradeAmount.value,
                    trade.totalTradeAmount.currency,
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <MobileTable>
        {tradeMetrics.map((trade, idx) => (
          <MobileTableRow key={idx}>
            <MobileTableCell
              label="Total Coin Purchased"
              value={formatCurrency(
                trade.totalCoinPurchased.value,
                trade.totalCoinPurchased.currency,
              )}
            />
            <MobileTableCell label="Trade Counts" value={trade.tradeCounts} />
            <MobileTableCell label="Escalated" value={trade.escalated} />
            <MobileTableCell
              label="Returned Trade"
              value={trade.returnedTrade}
            />
            <MobileTableCell
              label="Total Trade Amount"
              value={formatCurrency(
                trade.totalTradeAmount.value,
                trade.totalTradeAmount.currency,
              )}
            />
          </MobileTableRow>
        ))}
      </MobileTable>
    </div>
  );
};

const InternalAuditTable = () => {
  return (
    <div className="flex flex-col text-sm gap-3 md:gap-4 ">
      <CardTitle className="font-medium">Internal Audit</CardTitle>
      <div className="hidden md:block rounded-t-xl border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Amount Spent</TableHead>
              <TableHead>Trade Total</TableHead>
              <TableHead>Charges</TableHead>
              <TableHead>Accuracy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {internalAudit.map((audit, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  {formatCurrency(
                    audit.amountSpent.value,
                    audit.amountSpent.currency,
                  )}
                </TableCell>
                <TableCell>{audit.tradeTotal}</TableCell>
                <TableCell>
                  {formatCurrency(audit.charges.value, audit.charges.currency)}
                </TableCell>
                <TableCell>{audit.accuracy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* mobile table */}
      <MobileTable>
        {internalAudit.map((audit, idx) => (
          <MobileTableRow key={idx}>
            <MobileTableCell
              label="Amount Spent"
              value={formatCurrency(
                audit.amountSpent.value,
                audit.amountSpent.currency,
              )}
            />
            <MobileTableCell label="Trade Total" value={audit.tradeTotal} />
            <MobileTableCell
              label="Charges"
              value={formatCurrency(
                audit.charges.value,
                audit.charges.currency,
              )}
            />
            <MobileTableCell label="Accuracy" value={audit.accuracy} />
          </MobileTableRow>
        ))}
      </MobileTable>
    </div>
  );
};

// --------------------------------------------------
// -------------- REUSABLE COMPONENNTS --------------

const MobileTable = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full gap-2 flex-col md:hidden", className)}>
      {children}
    </div>
  );
};

const MobileTableRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("border flex-1 w-full rounded-xl p-3 space-y-2", className)}
    >
      {children}
    </div>
  );
};

const MobileTableCell = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-gray-600 text-xs">{label}:</p>
      <p className="text-sm font-normal"> {value}</p>
    </div>
  );
};
