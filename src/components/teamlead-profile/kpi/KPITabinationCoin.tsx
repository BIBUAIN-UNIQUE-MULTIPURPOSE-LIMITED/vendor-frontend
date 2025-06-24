import { Fragment } from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { data } from "@/examples/team-lead/kpi/kpi-tabination-coin";
import { RateBreakDown } from "@/components/teamlead-profile/kpi/KPITabinationCoinComponents";

export function Coin() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">coin exchange</span>
        </CardTitle>
        <CardDescription className="text-base">
          <span className="sentence">
            comprehensive rate analysis and financial metrics
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/card">
        <Card>
          <CardContent className="space-y-5">
            {data.map((props, index) => (
              <Fragment key={index}>
                <RateBreakDown {...props} />
              </Fragment>
            ))}
            <RateBreakDown
              currency="NGN"
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
