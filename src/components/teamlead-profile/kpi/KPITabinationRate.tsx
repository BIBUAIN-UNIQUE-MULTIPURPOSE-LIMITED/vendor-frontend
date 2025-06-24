import { Fragment } from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { data } from "@/examples/team-lead/kpi-tabination-rate";
import { RateBreakDown } from "@/components/teamlead-profile/kpi/KPITabinationRateComponents";

export function Rate() {
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
        <Card>
          <CardContent className="space-y-5">
            {data.map((props, index) => (
              <Fragment key={index}>
                <RateBreakDown {...props} />
              </Fragment>
            ))}
            <RateBreakDown
              currency="NGN"
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
