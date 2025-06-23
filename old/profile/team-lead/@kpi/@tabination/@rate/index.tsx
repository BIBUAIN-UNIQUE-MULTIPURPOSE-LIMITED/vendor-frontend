import { Fragment } from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { data } from "./props";
import { RateBreakDown } from "./components";

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
        <Card className="@5xl/card:w-2xl">
          <CardContent className="space-y-5">
            {data.map((props, index) => (
              <Fragment key={index}>
                <RateBreakDown {...props} />
              </Fragment>
            ))}
            <RateBreakDown
              total={2_930_100}
              currency="NGN"
              title="closing balance"
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
