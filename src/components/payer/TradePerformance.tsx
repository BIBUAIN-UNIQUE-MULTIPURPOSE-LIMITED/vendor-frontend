import { Fragment } from "react";
import { TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import { Card, CardContent } from "@/components/ui/card";

import { trades } from "@/examples/payer/trades";

export function TradePerformance() {
  return (
    <Card className="py-3 gap-4 shadow-none rounded-md">
      <CardHeader className="px-4">
        <Button
          disabled
          variant="ghost"
          className="h-auto justify-start !p-0 disabled:opacity-100"
        >
          <TrendingUp className="text-yellow-500" />
          <p className="text-base font-semibold">
            <span className="capitalize">trade performance</span>
          </p>
        </Button>
      </CardHeader>
      <CardContent className="px-4">
        <table className="w-full table-auto">
          <tbody>
            {trades.map((trade, index) => (
              <Fragment key={index}>
                <tr className="h-9">
                  <th className="w-7/12">
                    <p className="text-left font-normal">
                      <span className="capitalize text-muted-foreground">
                        {trade.name}
                      </span>
                    </p>
                  </th>
                  <td className="w-5/12">
                    <p className="text-right font-semibold">
                      <span className={`${trade.amount.color}`}>
                        {trade.amount.value}
                      </span>
                    </p>
                  </td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
