import { Fragment } from "react";

import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import { data } from "./props";
import { RateBreakDown } from "./components";

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
        <Card className="@5xl/card:w-2xl">
          <CardContent className="space-y-5">
            {data.map((props, index) => (
              <Fragment key={index}>
                <RateBreakDown {...props} />
              </Fragment>
            ))}
            <RateBreakDown
              total={400_000}
              currency="NGN"
              title="closing excess coin"
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
